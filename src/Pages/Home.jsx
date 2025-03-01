import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Home/Home";
import Category from "../components/Home/Category";

const Home = () => {
  return (
    <main className="w-full">
      <Hero />
      <div className="flex flex-col max-w-[1440px] mx-auto mb-10 min-h-screen">
        <Category />
      </div>
      <Footer />
    </main>
  );
};
export default Home;
