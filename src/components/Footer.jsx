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
                    <div className='text-[#767676] text-[14px] pr-4'>
                        The Andhra Pradesh State Handloom Weavers’ Cooperative Society Limited. APCO Bhavan, 29-11-9/1, Venkateswara Rao Road, Near Rahman Park, Governorpet, VIJAYAWADA-520002
                    </div>
                    <div className='mt-5 text-[#767676] text-[14px]'>
                        <div >
                            Mon to Sat – 9 am till 6 pm
                        </div>
                        <div >
                            9502774125
                        </div>
                    </div>
                    <div className='flex flex-row space-x-4 mt-5'>
                        <FaFacebookF />
                        <FaXTwitter />
                        <FaInstagram />
                        <FaYoutube />
                    </div>
                </div>
                <div className='w-1/3'>
                    <div className='text-[#222222] text-lg font-bold mb-2'>HELP</div>
                    <div className='flex flex-col text-[#222222] text-[14px] mt-2' >
                        <ul>
                            <li className='mb-3'>
                                <a href='#'>About Us</a>
                            </li>
                            <li className='mb-3'>
                                <a href="">Order Tracking</a>
                            </li>
                            <li className='mb-3'>
                                <a href="">Store Locator</a>
                            </li>
                            <li className='mb-3'>
                                <a href="">Blogs</a>
                            </li>
                            <li className='mb-3'>
                                <a href="">Contact Us</a>
                            </li>
                        </ul>
                    </div>
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
