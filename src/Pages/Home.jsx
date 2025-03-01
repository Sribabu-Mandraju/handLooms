import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Home/Home";
import Category from "../components/Home/Category";

import Stats from "../components/Stats";
import Discover from "../components/Discover";
import NewArrivals from "./TrendyProducts/NewArrivals";
const Home = () => {
  return (
    <main className="w-full">
      <div className="flex flex-col container mx-auto my-20">
        <div className=" px-[10px] lg:px-[80px]">
          <Carousel />
        </div>
        <div className="text-center font-bold text-2xl md:text-4xl py-3">
          Trending Products
        </div>
        <div className=" px-[10px] lg:px-[80px]">
          <NewArrivals />
        </div>
      </div>
      <Footer />
    </main>
  );
};
export default Home;
