import React from 'react';
import AboutCarousel1 from './AboutCarousel_1';
import AboutCarousel2 from './AboutCarousel_2';
import AboutImage1 from '../../assets/handloomsaree.jpg';
import AboutImage2 from '../../assets/AboutApco.jpeg';

const About = () => {
  return (
    <div className="md:py-12 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-3">
        <div className="shadow-lg self-start">
          <AboutCarousel1 />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:col-span-2 shadow-lg h-72">
            <AboutCarousel2 />
          </div>
          <div className="relative shadow-lg w-full overflow-hidden group">
  <img
    src={AboutImage1}
    alt="Handloom Saree"
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
  />

  <div className="hidden absolute inset-0 group-hover:flex flex-col px-[30px] justify-center text-white  bg-black/40">
    <span className='text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>Making</span>
    <span className='text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>Handloom</span>
    <span className='text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>Saree</span>
    <span className='underline py-[20px]'>Know More</span>
  </div>
</div>
<div className="relative shadow-lg w-full overflow-hidden group">
  <img
    src={AboutImage2}
    alt="About Apco"
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
  />

  <div className="hidden absolute inset-0 group-hover:flex flex-col px-[30px] justify-end pb-[40px] text-white  bg-black/40">
    <span className='text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>About Apco</span>
    <span className='underline '>Read More</span>
  </div>
</div>

         
        </div>
      </div>
    </div>
  );
};

export default About;
