import React, { useState } from "react";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useProduct } from "../context/ProductContext";
import Toast from "../components/shared/Toast";

const Favorites = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useProduct();

  const handleRemoveFavorite = (productId) => {
    const product = favorites.find((item) => item._id === productId);
    if (product) {
      toggleFavorite(product);
    }
  };

  const handleAddToCart = (product) => {
    const cartItem = {
      _id: product._id,
      name: product.name,
      price: product.price.toString(),
      mrp: product.mrp,
      discount: product.discount,
      image_url: product.image_url,
      sub_category: {
        _id: "",
        name: product.sub_category,
        image_url: "",
      },
      center: {
        _id: "",
        name: "",
      },
    };

    const productDetails = `
Product Details:
---------------
Name: ${cartItem.name}
Price: ₹${cartItem.price}
MRP: ₹${cartItem.mrp}
Discount: ${cartItem.discount}%
Category: ${cartItem.sub_category.name}
    `;

    const shouldAdd = window.confirm(
      productDetails + "\n\nDo you want to add this item to cart?"
    );

    if (shouldAdd) {
      addToCart(cartItem);
      setToastMessage("Product added successfully!");
      setShowToast(true);
    }
  };

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Your Favorites
            </h1>
            <p className="text-gray-600 mb-8">
              You haven't added any items to your favorites yet.
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {showToast && (
        <Toast message={toastMessage} onClose={() => setShowToast(false)} />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl mt-10 font-semibold text-gray-900 mb-8">
          Your Favorites
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-sm overflow-hidden group flex flex-col"
            >
              <div className="relative h-48">
                <img
                  src={product.image_url || "https://via.placeholder.com/300"}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  onClick={() => handleRemoveFavorite(product._id)}
                  className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors duration-200"
                >
                  <Heart className="h-5 w-5 text-red-500 fill-red-500 cursor-pointer transition-colors duration-200" />
                </button>
                {product.discount > 0 && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                    {product.discount}% OFF
                  </div>
                )}
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-2 mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-base text-gray-600 mb-2">
                  {product.sub_category}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-gray-900">
                      ₹{product.price}
                    </span>
                    {product.mrp > product.price && (
                      <span className="text-sm text-gray-500 line-through">
                        ₹{product.mrp}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-blue-600 cursor-pointer text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
