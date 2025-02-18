import React from 'react';
import { useState } from 'react';
const Card = (props) => {
  const [currentImage, setCurrentImage] = useState(props.image1);

  return (
    <div className=" h-[400px] w-[250px] rounded-lg shadow-lg bg-white overflow-hidden border-1 border-gray-400 p-[15px]">
      <div>
        
      <img 
        className="w-full h-[290px] animate-fade"  onMouseEnter={() => {setTimeout(()=>setCurrentImage(props.image2 || props.image1),150)}}
        onMouseLeave={() => {setTimeout(()=>setCurrentImage(props.image1),150)}}
        src={currentImage} 
        alt={props.title1} 
      />
      <div className="py-2 ">
        <div className=" text-[13px] mb-1">{props.title1}</div>
        <p className="text-gray-600 text-[15px] font-bold whitespace-nowrap">{props.title2}</p>
      </div>
      <div className=" pb-4 flex space-x-2">
        <span className="text-sm text-gray-500 line-through">${props.actualprice}</span>
        <span className="text-sm text-red-600 font-semibold">${props.saleprice}</span>
      </div>
    </div>
    </div>
  );
};

export default Card;
