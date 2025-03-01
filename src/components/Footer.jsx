import React from "react";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import Logo from "../assets/logo1.png";
import playStore from "../assets/play_store.png";
import appStore from "../assets/app_store.png";

const Footer = () => {
  return (
    <div className="px-6 md:px-20 py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <hr className="border-gray-300 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & App Section */}
          <div className="text-center md:text-left">
            <a href="#">
              <img src={Logo} alt="Logo" className="h-16 mx-auto md:mx-0" />
            </a>
            <p className="text-gray-600 mt-4">
              Download MyGov Mobile App And Continue to Contribute Towards
              Building a New India on the Move.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <a href="#">
                <img src={appStore} alt="App Store" className="h-10" />
              </a>
              <a href="#">
                <img src={playStore} alt="Play Store" className="h-10" />
              </a>
            </div>
          </div>
          {/* Address Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-gray-900">Address</h3>
            <p className="text-gray-600 text-sm mt-2">
              The Andhra Pradesh State Handloom Weavers’ Cooperative Society
              Limited. APCO Bhavan, 29-11-9/1, Venkateswara Rao Road, Near
              Rahman Park, Governorpet, VIJAYAWADA-520002
            </p>
            <p className="text-gray-600 text-sm mt-3">
              Mon to Sat – 9 am till 6 pm
              <br />
              9502774125
            </p>
            <div className="flex justify-center md:justify-start space-x-4 text-gray-600 text-xl mt-4">
              <a href="#" className="hover:text-blue-600 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-black transition">
                <FaXTwitter />
              </a>
              <a href="#" className="hover:text-pink-500 transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-red-600 transition">
                <FaYoutube />
              </a>
            </div>
          </div>
          {/* Help Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-gray-900">HELP</h3>
            <ul className="text-gray-800 text-sm mt-4 space-y-3">
              {[
                "About Us",
                "Order Tracking",
                "Store Locator",
                "Blogs",
                "Contact Us",
              ].map((item, index) => (
                <li key={index} className="relative group">
                  <a
                    href="#"
                    className="relative inline-block transition duration-300 text-gray-700 group-hover:text-gray-900"
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="border-gray-300 mt-10 mb-6" />
        <p className="text-center text-gray-600 text-sm">
          © HandLoom. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
