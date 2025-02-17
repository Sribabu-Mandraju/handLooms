import React from 'react';
import sarees from '../assets/sarees.jpg';

const Discover = () => {
  return (
    <div className='mx-30 my-20'>
      <div className='w-full flex flex-row gap-8'>
        {/* Store Locations Section */}
        <div className='w-1/2 h-80 relative overflow-hidden'>
          <div className='w-full h-full relative group'>
            <img
              src={sarees}
              alt='Store Locations'
              className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
            />
            <div className='absolute bottom-10 left-10 opacity-100'>
              <h2 className='text-white text-2xl font-bold mb-1'>Store Location</h2>
              <span className=' text-white text-[17px] '>View more</span>
              <span className="absolute left-0 bottom-0 w-10 h-[2px] bg-white transition-all duration-300 group-hover:w-20"></span>
            </div>
          </div>
        </div>

        {/* Our Team Section */}
        <div className='w-1/2 h-80 relative overflow-hidden'>
          <div className='w-full h-full relative group'>
            <img
              src={sarees}
              alt='Our Team'
              className='w-full h-full object-cover  transition-transform duration-300 group-hover:scale-105'
            />
            <div className='absolute bottom-10 left-10 opacity-100'>
              <h2 className='text-white text-2xl font-bold mb-1'>Our Team</h2>
              <span className='text-white text-[17px] '>View more</span>
              <span className="absolute left-0 bottom-0 w-10 h-[2px] bg-white transition-all duration-300 group-hover:w-20"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
