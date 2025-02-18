import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./About.css";
import { Navigation, Autoplay } from "swiper/modules";
import apco from "../../assets/1-40-1.jpg";
import grid_1 from "../../assets/1-1-1.jpg";
import grid_2 from "../../assets/1-2-1-scaled.jpg";
import grid_3 from "../../assets/1-3-1-scaled.jpg";
import grid_39 from "../../assets/1-39.jpg";
import grid_42 from "../../assets/1-42-scaled.jpg";
import grid_43 from "../../assets/1-43-scaled.jpg";

const AboutCarousel_2 = () => {
  const swiperUrls = Array.from({ length: 37 }, (_, index) => ({
    image: `https://apcohandlooms.com/wp-content/uploads/2024/04/178451a2d3d34313b7ece35b06c6e9948rc8nIj1aKXvH7Iz-${index + 1}.png`,
  }));
  
  const swiperUrlFirst = [
    { image: apco },
    { image: grid_1 },
    { image: grid_2 },
    { image: grid_3 },
  ];
  
  const swiperUrlLast = [
    { image: grid_39 },
    { image: grid_42 },
    { image: grid_43 },
  ];

  return (
    <Swiper
      navigation={true}
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Navigation, Autoplay]}
      className="aboutSwiper h-full w-full"
      breakpoints={{
        // For small screens (mobile)
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // For medium screens (tablets)
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // For larger screens (desktops)
        1024: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
      }}
    >
      {swiperUrlFirst.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item.image} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover" />
        </SwiperSlide>
      ))}
      {swiperUrls.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item.image} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover" />
        </SwiperSlide>
      ))}
      {swiperUrlLast.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item.image} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AboutCarousel_2;
