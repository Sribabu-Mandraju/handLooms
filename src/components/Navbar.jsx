"use client"

import { useState, useEffect } from "react"
import { Search, ShoppingBag, Heart, User, ChevronDown } from "lucide-react"
import { useCart } from "../context/CartContext"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const cart = useCart() // Call useCart unconditionally
  const items = cart ? cart.items : [] // Safely access items
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true)
        const response = await fetch("https://api.meebuddy.com/app/v4/common/shop_categories", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Add any other required headers
          },
          body: JSON.stringify({
            // Add any required body parameters here
          })
        });
        const result = await response.json();

        if (result.status === "success" && Array.isArray(result.data)) {
          setCategories(result.data)
        } else {
          console.error("Invalid data format:", result)
        }
      } catch (error) {
        console.error("Error fetching categories:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCategories()
  }, [])

  // Mock cart functionality since we're using the context
  const cartItemsCount = items.reduce((sum, item) => sum + (item.quantity || 0), 0)

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <div>
      <nav className="bg-white shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate("/")}>
              <h1 className="text-2xl font-bold text-gray-900">ShopHub</h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  className="w-full bg-gray-100 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search for products..."
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Navigation Icons */}
            <div className="flex items-center space-x-6">
              <Heart className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-900" />
              <User className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-900" />
              <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
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
          <div className="hidden sm:flex items-center space-x-8 py-4">
            {isLoading ? (
              <div className="text-gray-500">Loading categories...</div>
            ) : (
              categories.map((category) => (
                <div key={category._id} className="relative group">
                  <div 
                    className="flex items-center text-gray-600 hover:text-gray-900 cursor-pointer"
                    onClick={() => handleCategoryClick(category._id)}
                  >
                    {category.name}
                    {category.sub_categories && category.sub_categories.length > 0 && (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </div>

                  {/* Dropdown Menu - Only show if there are subcategories */}
                  {category.sub_categories && category.sub_categories.length > 0 && (
                    <div className="absolute left-0 top-full w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="p-6">
                      

                        {/* Subcategories */}
                        <div>
                          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                            Subcategories
                          </h3>
                          <div className="space-y-2">
                            {category.sub_categories.map((subCategory) => (
                              <a
                                key={subCategory._id}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleCategoryClick(category._id);
                                }}
                                className="block text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded px-2 py-1 transition-colors cursor-pointer"
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
  )
}

export default Navbar

