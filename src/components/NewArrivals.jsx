import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Heart } from "lucide-react";

const NewArrivals = () => {
  const { addToCart, items } = useCart();
  const [loading, setLoading] = useState({});
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://api.meebuddy.com/app/v4/common/shop_categories",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        }
      );
      const result = await response.json();
      if (result.status === "success") {
        setCategories(result.data);
        generateSampleProducts(result.data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const generateSampleProducts = (categories) => {
    const sampleProducts = categories.flatMap((category) =>
      category.sub_categories.map((subCategory, index) => {
        const price = Math.floor(Math.random() * 5000) + 1000;
        const mrp = Math.floor(Math.random() * 7000) + 2000;
        return {
          _id: `${subCategory._id}-${index}`,
          name: `${subCategory.name} Item ${index + 1}`,
          image_url:
            subCategory.image_url ||
            "https://images.meebuddy.com/products/no_image.jpg",
          price: `₹${price}`,
          mrp: mrp,
          discount: 20,
          sub_category: subCategory,
          center: category.center,
          rating: (Math.random() * 2 + 3).toFixed(1),
        };
      })
    );
    setProducts(sampleProducts.slice(0, 8));
  };

  const handleAddToCart = async (product) => {
    try {
      setLoading((prev) => ({ ...prev, [product._id]: true }));

      // Check if item already exists in cart
      const existingItem = items.find((item) => item._id === product._id);

      addToCart(product);

      if (existingItem) {
        alert(`Increased ${product.name} quantity in cart!`);
      } else {
        alert(`${product.name} added to cart!`);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add item to cart. Please try again.");
    } finally {
      setLoading((prev) => ({ ...prev, [product._id]: false }));
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-white rounded-lg shadow-sm overflow-hidden group flex flex-col items-center md:w-[300px] hover:shadow-lg transition-shadow duration-300"
        >
          <div className="relative h-64">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 pt-[20px]"
            />
            <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white">
              <Heart className="h-5 w-5 text-gray-600" />
            </button>
            {product.discount > 0 && (
              <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                {product.discount}% OFF
              </div>
            )}
          </div>
          <div className="p-4 w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              {product.sub_category.name}
            </p>
            <div className="flex items-center justify-between mb-2">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">
                  {product.price}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ₹{product.mrp}
                </span>
              </div>
              <div className="flex items-center bg-green-50 px-2 py-1 rounded">
                <span className="text-yellow-400">★</span>
                <span className="ml-1 text-sm text-gray-600">
                  {product.rating}
                </span>
              </div>
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              disabled={loading[product._id]}
              className={`mt-4 w-full py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2
                ${
                  loading[product._id]
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 hover:scale-[1.02]"
                } 
                text-white`}
            >
              {loading[product._id] ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to Cart
                </>
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewArrivals;
