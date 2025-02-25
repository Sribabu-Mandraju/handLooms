import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../css/Carousel.css";
import { Navigation, Autoplay } from "swiper/modules";
import Hero_1 from "../assets/Hero-1.jpg";
import Hero_2 from "../assets/Hero-2.jpg";

const swiperImg = [
  { image: Hero_2 },
  {image:Hero_1},
 
];

const categories = [
  { image: Hero_1, name: "Groceries" },
  { image: Hero_1, name: "Retail" },
  { image: Hero_2, name: "Health & Wellness" },
  { image: Hero_2, name: "Online Services" },
];

const Hero = () => {
  return (
    <div className="w-screen md:ml-[-80px]  mb-[100px] px-0"> {/* Removed margin that might affect width */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 ">

        {/* Swiper taking full width */}
        <div className="md:col-span-4 md:h-[500px] w-screen mb-[20px] md:mb-[0px]">
          <Swiper
            navigation={true}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Navigation, Autoplay]}
            className=" h-full  rounded-lg "
          >
            {swiperImg.map((item, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center w-screen">
                <img src={item.image} className="w-screen h-full " alt={`Slide ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Categories below the swiper */}
        {categories.map((category, index) => (
          <div key={index} className=" w-full h-[200px] md:h-auto overflow-hidden rounded-lg shadow-lg">
            <img src={category.image} className="w-full h-full object-cover" alt={category.name} />
            <div className=" bottom-2 left-2 text-white font-bold">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
