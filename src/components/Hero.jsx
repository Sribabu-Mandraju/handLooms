import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../css/Carousel.css";
import { Navigation, Autoplay } from "swiper/modules";
import Hero_1 from "../assets/Hero-1.jpg";
import Hero_2 from "../assets/Hero-2.jpg";


const Hero = () => {
  const swiperImg = [
    {
      image: Hero_1,
    },
    {
      image: Hero_2,
    },
  
  ];

  return (
    <Swiper
      navigation={true}
      slidesPerView={1}
      spaceBetween={60}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Navigation, Autoplay]}
      className="mySwiper h-[100%] w-[100%]"
    >
      {swiperImg.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item.image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
