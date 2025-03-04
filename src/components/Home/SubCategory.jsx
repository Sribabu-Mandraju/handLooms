import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useProduct } from "../../context/ProductContext";
import { toast } from "react-toastify";

const SubCategorySkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6  px-4 sm:px-6 lg:px-8">
    {[1, 2, 3, 4].map((index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-sm overflow-hidden animate-pulse"
      >
        <div className="h-48 bg-gray-200"></div>
        <div className="p-4 flex flex-col h-[180px]">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-auto"></div>
          <div className="h-8 bg-gray-200 rounded w-24 mt-4"></div>
        </div>
      </div>
    ))}
  </div>
);

const ProductCard = ({ product, onAddToCart }) => {
  const price = product.quantities[0]?.product_cost || 0;
  const mrp = product.quantities[0]?.mrp_cost || 0;
  const discount = product.quantities[0]?.discount || 0;
  const imageUrl = product.images[0]?.image_url;
  const { isFavorite, toggleFavorite } = useProduct();

  const handleLikeClick = (e) => {
    e.stopPropagation();
    toggleFavorite(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden group flex flex-col">
      <div className="relative h-48">
        <img
          src={imageUrl || "https://via.placeholder.com/300"}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={handleLikeClick}
          className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors duration-200"
        >
          <Heart
            className={`h-5 w-5 cursor-pointer transition-colors duration-200 ${
              isFavorite(product._id)
                ? "text-red-500 fill-red-500"
                : "text-gray-600"
            }`}
          />
        </button>
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
            {discount}% OFF
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-2 mb-1 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-base text-gray-600 mb-2">{product.sub_category}</p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900">₹{price}</span>
            {mrp > price && (
              <span className="text-sm text-gray-500 line-through">₹{mrp}</span>
            )}
          </div>
          <button
            onClick={() => onAddToCart({ ...product, price, mrp })}
            className="bg-blue-600 cursor-pointer text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const SubCategory = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { products, isLoading, fetchAllCategories } = useProduct();

  useEffect(() => {
    if (Object.keys(products).length === 0) {
      fetchAllCategories();
    }
  }, [products, fetchAllCategories]);

  const handleAddToCart = (product) => {
    const cartItem = {
      _id: product._id,
      name: product.name,
      price: product.quantities[0].product_cost.toString(),
      mrp: product.quantities[0].mrp_cost,
      discount: product.quantities[0].discount,
      image_url: product.images[0]?.image_url,
      sub_category: {
        _id: product.sub_category_id || "",
        name: product.sub_category,
        image_url: "",
      },
      center: {
        _id: product.center_id || "",
        name: product.center_name || "",
      },
    };

    addToCart(cartItem);
    toast.success("Product added successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  if (isLoading) {
    return (
      <div className="space-y-16">
        {[1, 2].map((index) => (
          <div key={index} className="mb-12">
            <div className="h-8 bg-gray-200 rounded w-48 mb-6 animate-pulse"></div>
            <SubCategorySkeleton />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      {Object.entries(products).map(([categoryId, category]) => (
        <div key={categoryId} className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[1.5rem] mb-6 font-semibold text-gray-900">
              {category.name}
            </h2>
            <button
              onClick={() => navigate(`/category/${categoryId}`)}
              className="text-blue-600 cursor-pointer hover:text-blue-800 font-medium"
            >
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {category.items.slice(0, 4).map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubCategory;
