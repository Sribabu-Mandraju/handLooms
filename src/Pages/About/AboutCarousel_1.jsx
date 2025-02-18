import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../css/Carousel.css";
import { Navigation, Autoplay } from "swiper/modules";
import About_1 from "../../assets/About-1.jpeg";
import About_2 from "../../assets/About-2.jpeg";

const AboutCarousel_1 = () => {
  const swiperImg = [
    {
      image: About_1,
    },
    {
      image: About_2,
    },
  ];

  return (
    <Swiper
      navigation={true}
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Navigation, Autoplay]}
      className="mySwiper w-full h-full"
      breakpoints={{
        // When window width is >= 640px (small devices)
        640: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        // When window width is >= 768px (tablets)
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        // When window width is >= 1024px (desktops)
        1024: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
      }}
    >
      {swiperImg.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item.image} className="w-full h-auto object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AboutCarousel_1;
