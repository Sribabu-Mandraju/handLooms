import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaSortDown } from "react-icons/fa";
import logo from "../assets/apco-logo.jpg"; // Ensure correct path

const sareesdrop = [
  {
    type: "COTTON SAREES",
    image: "../assets/cotton-saree1.jpg", // Ensure correct path
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
      "Venkatagiri Crochet Lace Sarees",
      "Vemavaram Light Weight Sarees",
      "Kalamkari Sarees",
    ],
  },
];

const Navbar = () => {
  return (
    <div>
      <div className="lg:flex h-[100px] shadow-lg items-center justify-between px-3 hidden">
        <div className="logo">
          <img src={logo} alt="Apco Logo" className="h-[80px]" />
        </div>
        <div className="menu">
          <div className="menu-items">
            <ul className="flex gap-[30px] font-semibold">
              <li className="cursor-pointer">Home</li>
              <li className="relative cursor-pointer group">
                <div className="flex items-center">
                  <span>Sarees</span>
                  <FaSortDown className="px-1" />
                </div>
                {/* Dropdown */}
                <div className="absolute left-0 bg-white border shadow-lg w-[600px] rounded-lg hidden group-hover:flex translate-y-[10px] p-4 z-50">
                  {sareesdrop.map((category, index) => (
                    <div key={index} className="w-1/3 px-2">
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
              </li>
              <li className="flex items-center cursor-pointer">
                <span>Apparels</span> <FaSortDown className="px-1" />
              </li>
              <li className="flex items-center cursor-pointer">
                <span>Men's Wear</span> <FaSortDown className="px-1" />
              </li>
              <li className="flex items-center cursor-pointer">
                <span>Home & Decor</span> <FaSortDown className="px-1" />
              </li>
              <li className="flex cursor-pointer">Stores</li>
            </ul>
          </div>
        </div>
        <div className="cart-container flex gap-3 items-center px-[100px]">
          <div className="wishlist text-xl">
            <FaRegHeart className="cursor-pointer" />
          </div>
          <div className="cart text-2xl cursor-pointer">
            <MdOutlineShoppingBag />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
