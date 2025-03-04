"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  ShoppingBag,
  Heart,
  User,
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
  const cart = useCart();
  const items = cart ? cart.items : [];
  const navigate = useNavigate();
  const { favorites } = useProduct();
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className="sticky top-0 z-100 left-0 right-0">
      <div className="bg-red-800 py-0.5">
        <div className="max-w-[1440px] px-4 sm:px-6 lg:px-8 mx-auto font-bold text-lg text-white font-sans">
          <h1>Contact Centre: 086 111 8888</h1>
        </div>
      </div>

      <nav className="bg-white shadow-sm relative z-50 pt-1.5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link className="flex-shrink-0 cursor-pointer" to="/">
              <img src={Logo} alt="Logo" className="h-16 mx-auto md:mx-0" />
            </Link>

            {/* Navigation Icons */}
            <div className="flex items-center space-x-6">
              <div className="flex-1 max-w-2xl min-w-sm mx-8 max-lg:hidden">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full bg-white rounded-full pl-11 pr-4 py-2.5 focus:outline-none border border-gray-400"
                    placeholder="Search for products..."
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <Link to="/favorites" className="relative">
                <Heart className="h-6 w-6 text-gray-600 hover:text-red-500 transition-colors" />
              </Link>
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

          {/* Categories Menu with Dropdowns - Using API Data */}
        </div>

        <div className="w-full bg-gray-100">
          <div className="max-w-[1440px] mx-auto hidden sm:flex items-center mt-1 space-x-8 py-7 px-4 sm:px-6 lg:px-8">
            {isLoading ? (
              <div className="text-gray-500">Loading categories...</div>
            ) : (
              categories.map((category) => (
                <div key={category._id} className="relative group">
                  <div
                    className="flex items-center font-semibold uppercase text-black hover:text-gray-900 cursor-pointer"
                    onClick={() => handleCategoryClick(category._id)}
                  >
                    {category.name}
                    {category.sub_categories &&
                      category.sub_categories.length > 0 && (
                        <ChevronDown className="ml-1 h-4 w-4" />
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
