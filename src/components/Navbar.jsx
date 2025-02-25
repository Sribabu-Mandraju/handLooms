import React, { useState } from "react";
import {FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaSortDown } from "react-icons/fa";
import logo from "../assets/logo1.png"; // Ensure correct path
import cottonsaree from "../assets/cotton-saree-1.jpg"
import silksaree from "../assets/Silk-Saree1.jpg"
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiMiniUserCircle } from "react-icons/hi2";
import Blouse from "../assets/Blouse-1.jpg"
import sicosaree from "../assets/SICO-SAREES.jpg"
import dressmaterial from "../assets/dress-material-1.jpg"
import kalamkari from "../assets/kalamkari.png"
import WEDDING from "../assets/wedding-collection-1.jpg"
const apparelsdrop = [
  {
       image:Blouse,
       type:"Blouses"
},
{
  image:dressmaterial,
  type:"Dress Material"
},
{
  image:kalamkari,
  type:"Kalamkari Designer Dupatta's"
}
]

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
  const [isSareesOpen, setIsSareesOpen] = useState(false);
  const [isApparelsOpen, setIsApparelsOpen] = useState(false);
  const [sideNavOpen, setSideNavOpen] = useState(false);
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
      <div className="bg-red-900 h-[25px] w-full hidden md:block">
            <h3 className="text-white font-semibold md:mx-[70px]">Contact Centre: 086 111 8888</h3>
      </div>
    <div className="max-w-7xl mx-auto px-4 h-[70px]">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-[70px]" />
        </div>
        <div className="w-2/4 flex md:gap-[30px]">
        <div className="hidden search rounded-full w-full border-[2px] border-[#cccccc] md:flex p-1 items-center gap-3">
        <IoSearchOutline className="text-[25px] text-[#ccc]"/>

          <input type="text" className=" w-2/3 outline-none" placeholder="Search products, stores or brands"/>
        </div>
      
        <div className="flex items-center mx-[10px] gap-2 lg:space-x-4 text-gray-500 text-[25px]">
          <button className="hover:text-red-600 transition-colors">
          <IoIosHeartEmpty/>         
           </button>
          <button className="hover:text-red-600 transition-colors">
          <HiMiniUserCircle/>
          </button>
          <button className="hover:text-red-600 transition-colors">
          <MdOutlineShoppingBag/>
          </button>
          <button
    className="text-gray-500 text-2xl md:hidden" // Hidden on medium and larger screens
    onClick={() => setSideNavOpen(true)}
  >
    <FaBars />
  </button>

        </div>
        </div>
      </div>   
    </div>
    <div>
       {/* Navigation Items */}
       <div className="bg-gray-100">
      <ul className="hidden md:flex space-x-8 h-[50px]  md:items-center md:mx-[70px]">
          <li className="hover:text-red-600 transition-colors cursor-pointer">
            Home
          </li>
          
          <li
  className="relative cursor-pointer group"
  onMouseEnter={() => setIsSareesOpen(true)}
  onMouseLeave={() => setIsSareesOpen(false)}
>
  {/* Main Dropdown Button */}
  <div className="flex items-center gap-1 hover:text-red-600 transition-colors">
    <span>Sarees</span>
    <FaSortDown className="px-1" />
  </div>

  {/* Dropdown Content */}
  {isSareesOpen && (
    <>
      {/* Invisible hover bridge */}
      <div className="absolute w-full h-[20px] -bottom-[20px]" />
      
      <div className="absolute left-1/2 transform -translate-x-[80px] top-full bg-white border shadow-lg lg:w-[800px] rounded-lg p-4 z-50 flex transition-all duration-300 ease-in-out mt-[12px]">
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
 
<li
  className="relative cursor-pointer group"
  onMouseEnter={() => setIsApparelsOpen(true)}
  onMouseLeave={() => setIsApparelsOpen(false)}
>
  <div className="flex items-center gap-1 hover:text-red-600 transition-colors">
    <span>Apparels</span>
    <FaSortDown className="px-1" />
  </div>

  {isApparelsOpen && (
    <>
      <div className="absolute w-full h-[20px] -bottom-[20px]" />
      
      <div className="absolute left-1/2 transform -translate-x-[80px] top-full bg-white border shadow-lg lg:w-[700px] rounded-lg p-4 z-50 flex transition-all justify-center gap-[30px] duration-300 ease-in-out mt-[12px]">
        {apparelsdrop.map((item, index) => (
          <div key={index} className="w-1/4 p-2 hover:bg-gray-50 transition-colors flex items-around flex-col justify-center">
            <img 
              src={item.image} 
              alt={item.type} 
              className="w-full h-28 object-cover rounded-lg mb-2"
            />
            <h3 className="font-bold text-gray-800">{item.type}</h3>
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
        </div>
    </div>
    {/* Side Navbar */}
    <div
        className={`fixed top-0 left-0 w-[250px] h-full overflow-y-auto bg-white shadow-lg lg:hidden transform ${
          sideNavOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 p-4 z-50`}
      >
        <div className="flex justify-between">
        <FaTimes className="text-2xl cursor-pointer mb-4 text-red-600" onClick={() => setSideNavOpen(false)} />
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
  </nav>
  );
};

export default Navbar;
