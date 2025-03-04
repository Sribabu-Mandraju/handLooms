import React, { useEffect, useState, forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";
const CategorySkeleton = () => (
  <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
    {[1, 2, 3, 4].map((index) => (
      <div
        key={index}
        className="relative rounded-lg overflow-hidden animate-pulse h-[280px] shadow-md"
      >
        <div className="w-full h-full bg-gray-200"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    ))}
  </div>
);

const Category = forwardRef((props, ref) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://api.meebuddy.com/app/v4/common/shop_categories",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
          }
        );
        const result = await response.json();

        if (result.status === "success" && Array.isArray(result.data)) {
          setCategories(result.data);
        } else {
          console.error("Invalid data format:", result);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <div
      ref={ref}
      className="py-10 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto"
    >
      <h2 className="text-xl sm:text-[1.5rem] font-semibold text-gray-900 mb-8">
        Shop by Category
      </h2>
      {isLoading ? (
        <CategorySkeleton />
      ) : (
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          spaceBetween={20}
          // navigation
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          className="w-full"
        >
          <div className="grid grid-cols-1 xs:grid-cols-4 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <SwiperSlide key={category.name}>
                <div
                  key={category.name}
                  className="relative rounded-lg overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300"
                  onClick={() => handleCategoryClick(category._id)}
                >
                  <div className="aspect-[4/3] h-[280px]">
                    <img
                      src={
                        category.image_url ||
                        "https://via.placeholder.com/400x300"
                      }
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 group-hover:from-black/90 transition-all duration-300">
                      <h3 className="text-xl font-semibold text-white mb-1 group-hover:translate-y-0 transform transition-transform duration-300">
                        {category.name}
                      </h3>
                      <p className="text-gray-200 text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                        {category.items || "Explore Collection"}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {categories.map((category) => (
              <SwiperSlide key={category.name}>
                <div
                  key={category.name}
                  className="relative rounded-lg overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300"
                  onClick={() => handleCategoryClick(category._id)}
                >
                  <div className="aspect-[4/3] h-[280px]">
                    <img
                      src={
                        category.image_url ||
                        "https://via.placeholder.com/400x300"
                      }
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 group-hover:from-black/90 transition-all duration-300">
                      <h3 className="text-xl font-semibold text-white mb-1 group-hover:translate-y-0 transform transition-transform duration-300">
                        {category.name}
                      </h3>
                      <p className="text-gray-200 text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                        {category.items || "Explore Collection"}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {categories.map((category) => (
              <SwiperSlide key={category.name}>
                <div
                  key={category.name}
                  className="relative rounded-lg overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300"
                  onClick={() => handleCategoryClick(category._id)}
                >
                  <div className="aspect-[4/3] h-[280px]">
                    <img
                      src={
                        category.image_url ||
                        "https://via.placeholder.com/400x300"
                      }
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 group-hover:from-black/90 transition-all duration-300">
                      <h3 className="text-xl font-semibold text-white mb-1 group-hover:translate-y-0 transform transition-transform duration-300">
                        {category.name}
                      </h3>
                      <p className="text-gray-200 text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                        {category.items || "Explore Collection"}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      )}
    </div>
  );
});

export default Category;
