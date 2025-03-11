import React, { useState } from "react";
import bed1 from "../assets/mallassets/bed-1.avif";
import bed11 from "../assets/mallassets/bed-1.1.webp";
import bed2 from "../assets/mallassets/bed-2.avif";
import bed22 from "../assets/mallassets/bed-2.1.webp";
import bed3 from "../assets/mallassets/bed-3.webp";
import bed33 from "../assets/mallassets/bed-3.1.webp";
import bed4 from "../assets/mallassets/bed-4.jpg";
import bed44 from "../assets/mallassets/bed-4.1.webp";
import bed5 from "../assets/mallassets/bed-5.webp";
import bed55 from "../assets/mallassets/bed-5.1.webp";

const Bed = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const data = [
    {
      description:
        "Orange Checks, handloom cotton single bedsheet (no pillow covers)",
      price: "₹ 3,621.00",
      image: [bed1, bed11],
    },
    {
      description:
        "Burgundy Checks, handloom cotton single bedsheet (no pillow covers)",
      price: "₹ 3,621.00",
      image: [bed2, bed22],
    },
    {
      description:
        "Coffee Checks, handloom cotton single bedsheet (no pillow covers)",
      price: "₹ 3,621.00",
      image: [bed3, bed33],
    },
    {
      description:
        "Maroon Double Checks, handloom cotton single bedsheet (no pillow covers)",
      price: "₹ 3,621.00",
      image: [bed4, bed44],
    },
    {
      description:
        "Christmas Cheer, handloom cotton single bedsheet (no pillow covers)",
      price: "₹ 3,621.00",
      image: [bed5, bed55],
    },
  ];
  
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left py-8 flex flex-col">
        <h2 className="text-2xl font-bold mb-4 w-full py-2">
          Make a Purchase, Make a Difference
        </h2>
        <p className="font-medium leading-5 py-2 w-full">
          Every item you buy from USHA - Smart Village Products supports our
          artisans directly, promoting fair wages, skill training, and community
          development. Discover the beauty of handmade Indian crafts while
          empowering the people behind them.
        </p>
      </div>
      
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-lg font-medium">
        <div className="grid grid-cols-2   lg:grid-cols-5 gap-4">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div 
                className="w-full h-80 overflow-hidden rounded-xl mb-4"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img 
                  src={hoveredIndex === index ? item.image[1] : item.image[0]} 
                  className="w-full h-full object-cover transition-all duration-300 ease-in-out cursor-pointer hover:scale-110" 
                  alt={item.description}
                />
              </div>
              <p className="text-sm text-gray-700 px-2 mb-1">{item.description}</p>
              <p className="text-sm font-medium text-gray-900">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bed;