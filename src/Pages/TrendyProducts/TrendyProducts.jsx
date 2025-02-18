import React from 'react'
import NewArrivals from './NewArrivals'
import BestSellers from './BestSellers'
import Onsale from './Onsale'
import { useState } from 'react'
const TrendyProducts = () => {
    const [activeTab,setActiveTab]=useState("NewArrivals")
  return (
    <div className='flex flex-col items-center lg:px-[100px]'>
        <h2 className='text-3xl py-[10px]'>Our Trendy <span className='font-bold'>Products</span></h2>
        <div className="tabs flex gap-[10px] lg:gap-[20px]  bg-white/90 backdrop-blur-lg border-[2px] border-gray-200 rounded-lg">
            <div onClick={()=>setActiveTab("NewArrivals")} className={`cursor-pointer p-2  border-b-0 border-gray-300 ${activeTab === "NewArrivals" ? "bg-gray-500 text-white":""}`
            }>New Arrivals</div>
            <div onClick={()=>setActiveTab("BestSellers")} className={`cursor-pointer p-2  border-b-0 border-gray-300 ${activeTab === "BestSellers" ? "bg-gray-500 text-white":""}`}>BestSellers</div>
            <div onClick={()=>setActiveTab("Onsale")} className={`cursor-pointer p-2  border-b-0 border-gray-300 ${activeTab === "Onsale" ? "bg-gray-500 text-white":""}`}>Onsale</div>
        </div>
        <div className=' border-gray-300 py-[20px] '>
            {
                activeTab === "NewArrivals" ?  <NewArrivals/> : ""
            }
            {
                activeTab === "BestSellers" ?  <BestSellers /> : ""
            }
            {
                activeTab === "Onsale" ?  <Onsale /> : ""
            }
        </div>
       
        
    </div>
  )
}

export default TrendyProducts