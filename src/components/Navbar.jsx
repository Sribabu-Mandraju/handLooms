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
    <div>
      <div className="lg:flex h-[100px] shadow-lg items-center justify-between px-3 hidden">
        <div className="logo">
          <img src={logo} alt="Apco Logo" className="h-[80px]" />
        </div>
        <div className="menu">
          <ul className="flex gap-[30px] font-semibold">
            <li className="cursor-pointer">Home</li>
            <li
      className="relative cursor-pointer"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Main Dropdown Button */}
      <div className="flex items-center">
        <span>Sarees</span>
        <FaSortDown className="px-1" />
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute left-[-100px] top-full bg-white border shadow-lg lg:w-[700px] rounded-lg p-4 z-50 flex ">
          {sareesCategories.map((category, index) => (
            <div key={index} className="w-1/4 p-2">
              <img src={category.image} alt={category.type} className="w-full h-28 object-cover rounded-lg mb-2" />
              <h3 className="font-bold">{category.type}</h3>
              <ul className="text-sm">
                {category.sarees.map((saree, idx) => (
                  <li key={idx} className="hover:text-red-600 cursor-pointer">
                    {saree}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </li>
            <li className="cursor-pointer">Apparels</li>
            <li className="cursor-pointer">Men's Wear</li>
            <li className="cursor-pointer">Home & Decor</li>
            <li className="cursor-pointer">Stores</li>
          </ul>
        </div>
        <div className="cart-container flex gap-3 items-center px-[100px]">
          <FaRegHeart className="text-xl cursor-pointer" />
          <MdOutlineShoppingBag className="text-2xl cursor-pointer" />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex justify-between items-center p-4 shadow-lg">
        <FaBars className="text-2xl cursor-pointer" onClick={() => setSideNavOpen(true)} />
        <img src={logo} alt="Apco Logo" className="h-[50px]" />
        <MdOutlineShoppingBag className="text-2xl cursor-pointer" />
      </div>

      {/* Side Navbar */}
      <div
        className={`fixed top-0 left-0 w-[250px] h-full overflow-y-auto bg-white shadow-lg lg:hidden transform ${
          sideNavOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 p-4 z-50`}
      >
        <div className="flex justify-between">
        <FaTimes className="text-2xl cursor-pointer mb-4" onClick={() => setSideNavOpen(false)} />
        <img src={logo} alt="Apco Logo" className="h-[50px]" />
        <MdOutlineShoppingBag className="text-2xl cursor-pointer" />
        </div>
        <ul className="space-y-4 font-semibold py-[20px]">
          <li className="cursor-pointer ">Home</li>
          <li className="cursor-pointer">Sarees</li>
          <li className="cursor-pointer">Apparels</li>
          <li className="cursor-pointer">Men's Wear</li>
          <li className="cursor-pointer">Home & Decor</li>
          <li className="cursor-pointer">Stores</li>
        
        </ul>
        <ul className="space-y-4 font-semibold border-t-[1px] border-gray-400 py-[20px]">
        <li className="cursor-pointer">My Account</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Careers & Notifications</li>
          <li className="cursor-pointer">Order Tracking</li>
          <li className="cursor-pointer">Return Policy</li>
          <li className="cursor-pointer">Store Locator</li>
          <li className="cursor-pointer">Blogs</li>
          </ul>
      </div>
    </div>
  );
};

export default Navbar;
