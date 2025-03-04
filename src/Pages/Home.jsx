import React, { useRef } from "react";
import Footer from "../components/Footer";
import Category from "../components/Home/Category";
import SubCategory from "../components/Home/SubCategory";
import Hero from "../components/Home/Hero";

const Home = () => {
  const categoryRef = useRef(null);

  const scrollToCategory = () => {
    const element = categoryRef.current;
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - 150,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <main className="w-full min-h-screen">
        <Hero onExploreClick={scrollToCategory} />
        <div className="w-full max-w-[1440px] mx-auto pb-10 px-8 max-md:px-4 max-sm:px-2">
          <Category ref={categoryRef} />
          <SubCategory />
        </div>
      </main>
    </>
  );
};
export default Home;
