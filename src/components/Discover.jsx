import React from "react";
import sarees from "../assets/sarees.jpg";

const Discover = () => {
  return (
    <div className="mx-auto my-20 px-4 max-w-[1440px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Store Locations Section */}
        <div className="relative h-80 w-full overflow-hidden group">
          <img
            src={sarees}
            alt="Store Locations"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-10 left-10">
            <h2 className="text-white text-2xl font-bold mb-1">
              Store Location
            </h2>
            <span className="text-white text-[17px] cursor-pointer">
              View more
            </span>
            <span className="absolute left-0 bottom-0 w-10 h-[2px] bg-white transition-all duration-300 group-hover:w-20"></span>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="relative h-80 w-full overflow-hidden group">
          <img
            src={sarees}
            alt="Our Team"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-10 left-10">
            <h2 className="text-white text-2xl font-bold mb-1">Our Team</h2>
            <span className="text-white text-[17px] cursor-pointer">
              View more
            </span>
            <span className="absolute left-0 bottom-0 w-10 h-[2px] bg-white transition-all duration-300 group-hover:w-20"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
