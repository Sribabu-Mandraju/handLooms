import React, { useState } from "react";
import { FaRegHeart, FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaSortDown } from "react-icons/fa";
import logo from "../assets/apco-logo.jpg"; // Ensure correct path
import cottonsaree from "../assets/cotton-saree-1.jpg"
import silksaree from "../assets/Silk-Saree1.jpg"

import sicosaree from "../assets/SICO-SAREES.jpg"

import WEDDING from "../assets/wedding-collection-1.jpg"


const sareesdrop = [
  {
    type: "COTTON SAREES",
    sarees: [
      "Rajahmundry Sarees",
      "Madhavaram Sarees",
      "Venkatagiri Sarees",
      "Uppada Sarees",
      "Bandar Sarees",
      "Mangalagiri Sarees",
    ],
  },
];

const Navbar = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const sareesCategories = [
    {
      type: "COTTON SAREES",
      sarees: [
        "Rajahmundry Sarees",
        "Madhavaram Sarees",
        "Venkatagiri Sarees",
        "Uppada Sarees",
        "Bandar Sarees",
        "Mangalagiri Sarees",
        "Ponduru Sarees",
        "Bobbili Sarees",
        "Bobbili Printed Sarees",
        "Angara Sarees",
        "Dulla Sarees",
        "Bandaru Lanka Sarees",
        "Pasalapudi Sarees",
        "Rajahmundry Crochet Lace Sarees",
      ],
      image:cottonsaree,
    },
    {
      type: "SILK SAREES",
      sarees: [
        "Madhavaram Silk Sarees",
        "Uppada Jamdhani Silk Sarees",
        "Gadwal Silk Sarees",
        "Madhanapalli Silk Sarees",
        "Venkatagiri Silk Sarees",
        "Digital Printed Silk Sarees",
        "Dharmavaram Silk",
      ],
      image: silksaree,
    },
    {
      type: "SICO SAREES (COTTON/SILK)",
      sarees: [
        "Chirala Sico Sarees",
        "Mangalagiri Sico Sarees",
        "Madhavaram Sico Sarees",
        "Venkatagiri Sico Sarees",
      ],
      image: sicosaree,
    },
    {
      type: "WEDDING COLLECTION",
      sarees: ["Bridal Wear", "Gifting Sarees", "Pooja Collection"],
      image: WEDDING,
    },
  ];
  return (
  
    <nav className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Navigation Items */}
        <ul className="hidden md:flex space-x-8">
          <li className="hover:text-red-600 transition-colors cursor-pointer">
            Home
          </li>
          
          <li
  className="relative cursor-pointer group"
  onMouseEnter={() => setIsOpen(true)}
  onMouseLeave={() => setIsOpen(false)}
>
  {/* Main Dropdown Button */}
  <div className="flex items-center gap-1 hover:text-red-600 transition-colors">
    <span>Sarees</span>
    <FaSortDown className="px-1" />
  </div>

  {/* Dropdown Content */}
  {isOpen && (
    <>
      {/* Invisible hover bridge */}
      <div className="absolute w-full h-[20px] -bottom-[20px] left-0" />
      
      <div className="absolute left-1/2 transform -translate-x-1/2 top-full bg-white border shadow-lg lg:w-[700px] rounded-lg p-4 z-50 flex transition-all duration-300 ease-in-out mt-[20px]">
        {sareesCategories.map((category, index) => (
          <div key={index} className="w-1/4 p-2 hover:bg-gray-50 transition-colors">
            <img 
              src={category.image} 
              alt={category.type} 
              className="w-full h-28 object-cover rounded-lg mb-2"
            />
            <h3 className="font-bold text-gray-800">{category.type}</h3>
            <ul className="text-sm space-y-1 mt-2">
              {category.sarees.map((saree, idx) => (
                <li 
                  key={idx} 
                  className="hover:text-red-600 cursor-pointer transition-colors"
                >
                  {saree}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )}
</li>

          <li className="hover:text-red-600 transition-colors cursor-pointer">
            Collections
          </li>
          <li className="hover:text-red-600 transition-colors cursor-pointer">
            New Arrivals
          </li>
          <li className="hover:text-red-600 transition-colors cursor-pointer">
            Contact
          </li>
        </ul>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          <button className="hover:text-red-600 transition-colors">
            Search
          </button>
          <button className="hover:text-red-600 transition-colors">
            Cart
          </button>
          <button className="hover:text-red-600 transition-colors">
            Account
          </button>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
