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
          <div className="shadow-lg">
            <img
              src={AboutImage1}
              alt="Handloom Saree"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="shadow-lg">
            <img
              src={AboutImage2}
              alt="Apco Handlooms"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
