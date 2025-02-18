import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Logo from "../assets/logo1.png";
import playStore from "../assets/play_store.png";
import appStore from "../assets/app_store.png";

const Footer = () => {
    return (
        <div>
            <hr className='border-t-1 border-gray-300 my-8' />
            <div className='flex flex-row w-full mx-20'>
                <div className='w-1/3'>
                    <div className='cursor-pointer'>
                        <a href=""><img src={Logo} alt='Logo' className='h-20 pl-[-10px]' /></a>
                    </div>
                    <div className='text-[#767676] pr-8 mt-5'>
                        Download MyGov Mobile App And Continue to Contribute Towards Building a New India on the Move
                    </div>
                    <div className='flex flex-row space-x-5 mt-5'>
                        <a href=""> <img src={appStore} alt="app_store" /></a>
                        <a href=""> <img src={playStore} alt="play_store" /></a>
                    </div>
                </div>
                <div className='w-1/3 mx-4'>
                    <div className='text-[#222222] text-lg font-bold mb-2'>Address</div>
                    <div className='text-[#767676] text-sm pr-4'>
                        The Andhra Pradesh State Handloom Weavers’ Cooperative Society Limited. APCO Bhavan, 29-11-9/1, Venkateswara Rao Road, Near Rahman Park, Governorpet, VIJAYAWADA-520002
                    </div>
                    <div className='mt-5 text-[#767676] text-sm'>
                        <div >
                            Mon to Sat – 9 am till 6 pm
                        </div>
                        <div >
                            9502774125
                        </div>
                    </div>
                    <div className='flex flex-row space-x-4 mt-5 text-gray-600 text-xl'>
                        <a href="#" className="hover:text-blue-600 transition"><FaFacebookF /></a>
                        <a href="#" className="hover:text-black transition"><FaXTwitter /></a>
                        <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
                        <a href="#" className="hover:text-red-600 transition"><FaYoutube /></a>
                    </div>
                </div>
                <div className='w-1/3'>
                    <div className='text-[#222222] text-lg font-bold mb-2'>HELP</div>
                    <ul className='text-[#222222] text-[14px] mt-2 space-y-3'>
                        {["About Us", "Order Tracking", "Store Locator", "Blogs", "Contact Us"].map((item, index) => (
                            <li key={index} className='relative group'>
                                <a href="#" className='relative inline-block transition duration-300 text-gray-700 group-hover:text-[#222222]'>
                                    {item}
                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#222222] transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <hr className='border-t-1 border-gray-300 mt-10 mb-8' />
            <div className='text-[#767676] text-center mb-4'>
                Copyright © HandLoom. All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer
