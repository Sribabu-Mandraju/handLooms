"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  ShoppingBag,
  Heart,
  Package,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { useProduct } from "../context/ProductContext";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo1.png";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const cart = useCart();
  const items = cart ? cart.items : [];
  const navigate = useNavigate();
  const { favorites } = useProduct();
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar if at top or scrolling up
      if (currentScrollY < 10 || currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
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

        if (result.status === "success" && Array.isArray(result.data)) {
          setCategories(result.data);
        } else {
          console.error("Invalid data format:", result);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const cartItemsCount = items.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0
  );

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
    setIsMobileMenuOpen(false); // Close the mobile menu after navigation
  };

  const handleSubCategoryClick = (categoryId, name) => {
    const encodedName = encodeURIComponent(name);
    navigate(`/category/${categoryId}?sub=${encodedName}`);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[100] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="bg-white shadow-md">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar */}
          <div className="flex items-center justify-between h-16">
            <Link className="flex-shrink-0 cursor-pointer" to="/">
              <img src={Logo} alt="Logo" className="h-12" />
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8 hidden lg:block">
              <div className="relative">
                <input
                  type="text"
                  className="w-full bg-gray-50 rounded-full pl-11 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200"
                  placeholder="Search for products..."
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Action Icons */}
            <div className="flex items-center space-x-6">
              <Link to="/favorites" className="relative group">
                <Heart className="h-6 w-6 text-gray-600 group-hover:text-red-500 transition-colors" />
                {favorites.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </Link>
              <div
                className="relative cursor-pointer group"
                onClick={() => navigate("/track-order")}
              >
                <Package className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </div>
              <div
                className="relative cursor-pointer group"
                onClick={() => navigate("/cart")}
              >
                <ShoppingBag className="h-6 w-6 text-gray-600 group-hover:text-gray-900" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Categories Bar */}
          <div className="hidden md:block border-t mt-1.5 border-gray-300">
            <div className="flex items-center space-x-8 py-3.5">
              {isLoading ? (
                <div className="text-gray-500">Loading categories...</div>
              ) : (
                categories.map((category) => (
                  <div key={category._id} className="relative group">
                    <button
                      className="flex cursor-pointer items-center font-medium text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={() => handleCategoryClick(category._id)}
                    >
                      {category.name}
                      {category.sub_categories?.length > 0 && (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    {category.sub_categories?.length > 0 && (
                      <div className="absolute left-0 top-full w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                        <div className="p-4">
                          {category.sub_categories.map((subCategory) => (
                            <button
                              key={subCategory._id}
                              onClick={() =>
                                handleSubCategoryClick(
                                  category._id,
                                  subCategory.name
                                )
                              }
                              className="w-full cursor-pointer text-left px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              {subCategory.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-[120]">
            <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl">
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Categories</h2>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                {isLoading ? (
                  <div className="text-gray-500">Loading categories...</div>
                ) : (
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category._id}>
                        <button
                          className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-md"
                          onClick={() =>
                            setActiveCategory(
                              activeCategory === category._id
                                ? null
                                : category._id
                            )
                          }
                        >
                          <span className="font-medium">{category.name}</span>
                          {category.sub_categories?.length > 0 && (
                            <ChevronDown
                              className={`h-4 w-4 transform transition-transform ${
                                activeCategory === category._id
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          )}
                        </button>
                        {activeCategory === category._id &&
                          category.sub_categories && (
                            <div className="ml-4 mt-1 space-y-1">
                              {category.sub_categories.map((subCategory) => (
                                <button
                                  key={subCategory._id}
                                  onClick={() =>
                                    handleSubCategoryClick(
                                      category._id,
                                      subCategory.name
                                    )
                                  }
                                  className="w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                                >
                                  {subCategory.name}
                                </button>
                              ))}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
