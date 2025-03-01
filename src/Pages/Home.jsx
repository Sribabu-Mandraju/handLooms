import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Hero";
import About from "./About/About";
import Aboutone from "../Pages/About/Aboutone";
import TrendyProducts from "./TrendyProducts/TrendyProducts";
import LimitedEdition from "./LimitedEdition/LimitedEdition";
import Footer from "../components/Footer";

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
        <div className="text-center font-bold text-2xl md:text-4xl py-3">Trending Products</div>
        <div className=" px-[10px] lg:px-[80px]">
          <NewArrivals />
        </div>
      </div>
      <Footer />
    </main>
  );
};
export default Home;
// .
