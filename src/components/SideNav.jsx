import { useState } from "react";
import { FaSortUp, FaTimes } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaSortDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
const SideNav = ({ sideNavOpen, setSideNavOpen, logo }) => {
  const [dropdownOpen, setDropdownOpen] = useState({
    sarees: false,
    apparels: false,
    menswear: false,
    homeDecor: false,
  });

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div
      className={`fixed top-0 left-0 w-[250px] h-full overflow-y-auto bg-white shadow-lg lg:hidden transform ${
        sideNavOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 p-4 z-50`}
    >
      <div className="flex justify-between items-center">
        <FaTimes
          className="text-2xl cursor-pointer text-red-600"
          onClick={() => setSideNavOpen(false)}
        />
        <img src={logo} alt="Apco Logo" className="h-[50px]" />
        <MdOutlineShoppingBag className="text-2xl cursor-pointer" />
      </div>

      <ul className="space-y-4 font-semibold py-[20px]">
        <li className="cursor-pointer">Home</li>

        {/* Sarees Dropdown */}
        <li
          className="cursor-pointer"
          onClick={() => toggleDropdown("sarees")}
        >
        <div className="flex justify-between">
          Sarees {dropdownOpen.sarees ? <FaSortUp/> : <FaSortDown/>}
          </div>
          {dropdownOpen.sarees && (
             <motion.ul
             initial={{ opacity: 0, height: 0 }}
             animate={{ opacity: 1, height: "auto" }}
             exit={{ opacity: 0, height: 0 }}
             transition={{ duration: 0.3, ease: "easeInOut" }}
             className="pl-4 mt-2 space-y-2 text-sm overflow-hidden"
           >
             <li className="cursor-pointer">Silk Sarees</li>
             <li className="cursor-pointer">Cotton Sarees</li>
             <li className="cursor-pointer">Handloom Sarees</li>
           </motion.ul>
          )}
        </li>

        {/* Apparels Dropdown */}
        <li
          className="cursor-pointer"
          onClick={() => toggleDropdown("apparels")}
        >
             <div className="flex justify-between">
          Apparels {dropdownOpen.apparels ? <FaSortUp/> : <FaSortDown/>}
          </div>
          {dropdownOpen.apparels && (
            <ul className="pl-4 mt-2 space-y-2 text-sm">
              <li className="cursor-pointer">Kurtas</li>
              <li className="cursor-pointer">Dresses</li>
              <li className="cursor-pointer">Skirts</li>
            </ul>
          )}
        </li>

        {/* Men's Wear Dropdown */}
        <li
          className="cursor-pointer"
          onClick={() => toggleDropdown("menswear")}
        >
             <div className="flex justify-between">
          Men's Wear {dropdownOpen.menswear ? <FaSortUp/> : <FaSortDown/>}
          </div>
          {dropdownOpen.menswear && (
            <ul className="pl-4 mt-2 space-y-2 text-sm">
              <li className="cursor-pointer">Shirts</li>
              <li className="cursor-pointer">Kurta Pajamas</li>
              <li className="cursor-pointer">Ethnic Wear</li>
            </ul>
          )}
        </li>

        {/* Home & Decor Dropdown */}
        <li
          className="cursor-pointer"
          onClick={() => toggleDropdown("homeDecor")}
        >
             <div className="flex justify-between">
          Home & Decor {dropdownOpen.homeDecor ? <FaSortUp/> : <FaSortDown/>}
          </div>
          {dropdownOpen.homeDecor && (
            <ul className="pl-4 mt-2 space-y-2 text-sm">
              <li className="cursor-pointer">Cushions</li>
              <li className="cursor-pointer">Handcrafted Decor</li>
              <li className="cursor-pointer">Wall Art</li>
            </ul>
          )}
        </li>

        <li className="cursor-pointer">Stores</li>
      </ul>

      {/* Additional Links */}
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
  );
};

export default SideNav;
