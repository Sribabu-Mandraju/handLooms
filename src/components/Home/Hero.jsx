import React from "react";
import grocery from "../../assets/hero/groceries.png";
import retail from "../../assets/hero/retail.png";
import health from "../../assets/hero/health.png";
import online from "../../assets/hero/online.png";
const Hero = ({ onExploreClick }) => {
  const categories = [
    {
      category: "Groceries",
      image: grocery,
    },
    {
      category: "Retail",
      image: retail,
    },
    {
      category: "Health & Wellness",
      image: health,
    },
    {
      category: "Online Services",
      image: online,
    },
  ];
  return (
    <div className="mt-[10px]">
      {/* Hero Section */}
      <div className="relative bg-gray-900 h-[70vh]">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600"
          alt="Hero"
          className="w-full h-full object-cover opacity-[40%]"
        />
        <div className="absolute inset-0 flex items-center justify-start">
          <div className="px-8 max-md:px-4 max-sm:px-2">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 text-left">
              Summer Collection 2024
            </h2>
            <p className="text-xl font-semibold text-gray-200 mb-8 text-left">
              Discover the latest trends and styles
            </p>
            <button
              onClick={onExploreClick}
              className="bg-red-800 text-white cursor-pointer px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-4 gap-1 mt-1">
        {categories.map((category, index) => (
          <div key={index} className="relative h-50 overflow-hidden w-auto">
            <div className="w-full h-full">
              <img
                src={category.image}
                alt={category.category}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 flex bg-black/60 items-end justify-start p-[10px] pointer-events-none">
              <span className="text-white font-bold text-lg z-10">
                {category.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
