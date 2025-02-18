import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaSortDown } from "react-icons/fa";
import logo from '../assets/apco-logo.jpg';
const Navbar = () => {
   const sareesdrop = [
    {
        type:"COTTON SAREES",
        image:"../assest/cotton-saree1.jpg",
        sarees : [
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
            "Kalamkari Sarees"
          ],
    },
    {
        type:""
    }
   ];
  return (
    <div>
    <div className='lg:flex h-[100px] shadow-lg items-center justify-between px-3 hidden'>
          <div className="logo"><img src={logo} /></div>
          <div className="menu">
            <div className="menu-items">
                <ul className='flex gap-[30px] font-semibold'>
                    <li className='cursor-pointer'>
                        Home
                    </li>
                    <li className=' cursor-pointer group'>
                       <div className='flex items-center relative'><span>Sarees</span> <FaSortDown className='px-1'/></div> 
                        <div className='border-[1px] rounded-lg w-[500px] absolute hidden group-hover:flex translate-y-[15px]'>
                            <div>
                                
                             </div> 
                        </div>

                    </li>
                    <li className='flex items-center cursor-pointer'>
                    <span> Apparels </span><FaSortDown  className='px-1'/>

                    </li>
                    <li className='flex items-center cursor-pointer'>
                    <span> Men's Wear</span><FaSortDown className='px-1'/>

                    </li>
                    <li className='flex items-center cursor-pointer'>
                    <span> Home & Decor </span> <FaSortDown className='px-1'/>

                    </li>
                    <li className='flex cursor-pointer'>
                        Stores
                    </li>
                </ul>
            </div>
          </div>
          <div className="cart-container flex gap-3 items-center  px-[100px]">
            <div className="wishlist text-xl">
            <FaRegHeart className='cursor-pointer'/>

            </div>
            <div className="cart text-2xl cursor-pointer">
            <MdOutlineShoppingBag />

            </div>
          </div>
    </div>
    </div>
  )
}

export default Navbar