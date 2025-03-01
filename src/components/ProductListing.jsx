"use client";

import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const ProductListing = () => {
  const { categoryId } = useParams();
  const location = useLocation();
  const [category, setCategory] = useState(null);
  const [subcategories, setSubcategories] = useState([]);
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const subcategoryRefs = useRef({});

  const normalizeString = (str) => {
    if (!str) return "";
    return decodeURIComponent(str)
      .replace(/%20/g, " ")
      .replace(/&/g, "&")
      .replace(/&/g, " & ")
      .replace(/\s+/g, " ")
      .trim();
  };

  useEffect(() => {
    const fetchProductsAndSubcategories = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.meebuddy.com/app/v4/common/shop_categories",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ category_id: categoryId }),
          }
        );

        const result = await response.json();
        if (result.status === "success") {
          const res = result.data.find((r) => r._id === categoryId);
          setCategory(res);
          const subcategoryList = res.sub_categories.map((sub) => sub.name);
          setSubcategories(subcategoryList);

          const sampleProducts = subcategoryList.reduce((acc, subCategory) => {
            acc[subCategory] = Array(3)
              .fill()
              .map((_, index) => ({
                _id: `sample-${subCategory}-${index}`,
                name: `Sample ${subCategory} Product ${index + 1}`,
                images: [{ image_url: subCategory.image_url }],
                quantities: [
                  { product_cost: 999, mrp_cost: 1299, discount: 23 },
                ],
                sub_category: subCategory,
              }));
            return acc;
          }, {});

          setProducts(sampleProducts);

          const searchParams = new URLSearchParams(location.search);
          const subParamRaw = searchParams.get("sub") || "";
          const subParam = normalizeString(subParamRaw);

          let matchedSubcategory = subcategoryList.find(
            (sub) => sub === subParamRaw
          );
          if (!matchedSubcategory) {
            matchedSubcategory = subcategoryList.find(
              (sub) => normalizeString(sub) === subParam
            );
          }

          if (matchedSubcategory) {
            setActiveSubcategory(matchedSubcategory);
            requestAnimationFrame(() => {
              setTimeout(() => {
                const ref = subcategoryRefs.current[matchedSubcategory];
                if (ref) {
                  ref.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }, 500);
            });
          }
        } else {
          throw new Error("Failed to fetch products");
        }
      } catch (err) {
        setError(err.message);
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (categoryId) fetchProductsAndSubcategories();
  }, [categoryId, location.search]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const subCategory = entry.target.getAttribute("data-subcategory");
          setActiveSubcategory(subCategory);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all subcategory sections
    Object.values(subcategoryRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(subcategoryRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [subcategories]);

  const handleScrollToSubcategory = (subCategory) => {
    const ref = subcategoryRefs.current[subCategory];
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSubcategory(subCategory);
      window.history.pushState(
        {},
        "",
        `/category/${categoryId}?sub=${encodeURIComponent(subCategory)}`
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="lg:w-1/4 w-full max-md:hidden">
          <div className="bg-white border-r-1 p-4 lg:sticky lg:top-4 border-gray-300">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
              Subcategories
            </h2>
            <ul className="space-y-2">
              {subcategories.map((subCategory) => (
                <li key={subCategory}>
                  <button
                    onClick={() => handleScrollToSubcategory(subCategory)}
                    className={`w-full text-left px-4 py-2 rounded-md cursor-pointer text-base sm:text-lg transition-all duration-200 ${
                      activeSubcategory === subCategory
                        ? "text-blue-600 bg-gray-100"
                        : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    }`}
                  >
                    {subCategory}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product Listings */}
        <div className="lg:w-3/4 w-full">
          <h1 className="text-2xl font-semibold mb-5">{category?.name}</h1>
          {subcategories.map((subCategory) => (
            <div
              key={subCategory}
              ref={(el) => (subcategoryRefs.current[subCategory] = el)}
              data-subcategory={subCategory}
              className="mb-10 sm:mb-12"
            >
              <h3 className="text-xl font-semibold pt-4 mb-10 text-gray-800">
                {subCategory}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 place-items-center">
                {products[subCategory]?.map((product) => (
                  <div
                    key={product._id}
                    className="bg-white max-w-84 w-full rounded-lg overflow-hidden shadow-t-md shadow-sm  hover:shadow-md transition-all duration-300 relative"
                  >
                    <div className="relative h-48 sm:h-56 lg:h-64">
                      <img
                        src={`https://tse1.mm.bing.net/th?id=OIP.lYiEUEqLjXB3Hi32BLl0ZQHaHC&pid=Api`}
                        alt={product.name}
                        className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                      />
                      {/* Heart Icon for Like/Dislike */}
                      <button
                        className="absolute cursor-pointer top-2 right-2 bg-white rounded-full p-1.5 shadow-md hover:bg-gray-100 transition-colors duration-200 heart-toggle"
                        onClick={(e) => {
                          const heart = e.currentTarget.querySelector("svg");
                          heart.classList.toggle("liked");
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="p-3 sm:p-4">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                        {product.name}
                      </h3>

                      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                        <div>
                          <p className="text-gray-600 text-xs sm:text-sm mb-1">
                            {product.sub_category}
                          </p>
                          <p className="text-base sm:text-lg font-bold text-gray-900">
                            ₹{product.quantities[0]?.product_cost}
                            {product.quantities[0]?.mrp_cost >
                              product.quantities[0]?.product_cost && (
                              <span className="text-xs sm:text-sm text-gray-500 line-through ml-2">
                                ₹{product.quantities[0]?.mrp_cost}
                              </span>
                            )}
                          </p>
                        </div>

                        <button className="bg-blue-600 text-white px-2 py-1.5 sm:px-4 rounded-sm cursor-pointer hover:bg-blue-700 transition-colors duration-200 text-sm">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
