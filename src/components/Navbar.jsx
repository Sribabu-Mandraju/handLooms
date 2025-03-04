"use client";

import { useState, useEffect } from "react";
import { Search, ShoppingBag, Heart, User, ChevronDown, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo1.png";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null); // Track active category for dropdown
  const cart = useCart();
  const items = cart ? cart.items : [];
  const navigate = useNavigate();

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

  // Mock cart functionality since we're using the context
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
    setIsMobileMenuOpen(false); // Close the mobile menu after navigation
  };

  return (
    <div className="sticky top-0 z-[100] left-0 right-0">
      <nav className="bg-white/30 backdrop-blur-3xl saturate shadow-sm relative z-50 pt-1.5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                className="text-gray-600 hover:text-gray-900 sm:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              <Link className="flex-shrink-0 cursor-pointer ml-4 sm:ml-0" to="/">
                <img src={Logo} alt="Logo" className="h-16 mx-auto md:mx-0" />
              </Link>
            </div>
            <div className="max-w-[1440px] mx-auto hidden md:flex items-center mt-1 space-x-8 py-7 px-4 sm:px-6 lg:px-8">
            {isLoading ? (
              <div className="text-gray-500">Loading categories...</div>
            ) : (
              categories.map((category) => (
                <div key={category._id} className="relative group">
                  <div
                    className="flex items-center font-semibold uppercase text-white hover:text-gray-900 cursor-pointer"
                    onClick={() => handleCategoryClick(category._id)}
                  >
                    {category.name}
                    {category.sub_categories &&
                      category.sub_categories.length > 0 && (
                        <ChevronDown className="ml-1 h-4 w-4 text-white" />
                      )}
                  </div>
                  {/* Dropdown Menu - Only show if there are subcategories */}
                  {category.sub_categories &&
                    category.sub_categories.length > 0 && (
                      <div className="absolute left-0 top-[130%] w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="p-6">
                          {/* Subcategories */}
                          <div>
                            <div className="space-y-2">
                              {category.sub_categories.map((subCategory) => (
                                <a
                                  key={subCategory._id}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleSubCategoryClick(
                                      category._id,
                                      subCategory.name
                                    );
                                  }}
                                  className="block cursor-pointer text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded px-2 py-1 transition-colors"
                                >
                                  {subCategory.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                </div>
              ))
            )}
          </div>
            {/* Navigation Icons */}
            <div className="flex items-center space-x-2 md:space-x-6">
              <div className="flex-1 max-w-2xl min-w-sm md:mx-8 max-lg:hidden">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full bg-white rounded-full pl-11 pr-4 py-2.5 focus:outline-none border border-gray-400"
                    placeholder="Search for products..."
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <Heart className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-900" />
              <User className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-900" />
              <div
                className="relative cursor-pointer"
                onClick={() => navigate("/cart")}
              >
                <ShoppingBag className="h-6 w-6 text-gray-600 hover:text-gray-900" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </div>
            </div>
          </div>

         {/* Mobile Side Navbar */}
         {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-opacity-75 z-[120] w-full">
              <div className="fixed inset-y-0 left-0 w-64 shadow-2xl z-50 transform transition-transform duration-500 ease-in-out">
                <div className="p-6 h-[100vh] w-full flex flex-col bg-black/80 z-[120]">
                  <div className="flex justify-end">
                    <button
                      className="text-white hover:text-gray-300 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-4">Categories</h2>
                  {isLoading ? (
                    <div className="text-gray-500">Loading categories...</div>
                  ) : (
                    <div className="flex-1 overflow-y-auto">
                      {categories.map((category) => (
                        <div key={category._id} className="mb-2 border-b border-gray-700 text-white">
                          <div
                            className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
                            onClick={() => setActiveCategory(activeCategory === category._id ? null : category._id)}
                          >
                            <span className="font-medium text-white hover:text-gray-300">
                              {category.name}
                            </span>
                            {category.sub_categories && category.sub_categories.length > 0 && (
                              <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${activeCategory === category._id ? 'rotate-180' : ''}`} />
                            )}
                          </div>
                          {activeCategory === category._id && category.sub_categories && (
                            <div className="ml-4 mt-1">
                              {category.sub_categories.map((subCategory) => (
                                <a
                                  key={subCategory._id}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleSubCategoryClick(category._id, subCategory.name);
                                  }}
                                  className="block p-2 text-gray-400 hover:text-blue-400 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                                >
                                  {subCategory.name}
                                </a>
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
        </div>

       
      </nav>
    </div>
  );
};

export default Navbar;