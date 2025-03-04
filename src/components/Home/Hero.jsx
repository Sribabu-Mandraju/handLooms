import React from "react";

const Hero = ({ onExploreClick }) => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gray-900 h-[70vh]">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600"
          alt="Hero"
          className="w-full h-full object-cover opacity-[40%]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Summer Collection 2024
            </h2>
            <p className="text-xl font-semibold text-gray-200 mb-8">
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
    </>
  );
};

export default Hero;
