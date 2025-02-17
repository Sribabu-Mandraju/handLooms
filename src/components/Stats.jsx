import React from 'react';
import Quality from "../assets/quality.png";
import shipping from "../assets/shipping.png";
import since from "../assets/since.png";

const Stats = () => {
  return (
    <div className='mx-10 md:mx-20 my-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center'>
        <div className='flex flex-col items-center space-y-3'>
          <img src={since} alt='Legacy' className='w-20' />
          <h3 className='text-lg font-semibold'>48 Years of Legacy</h3>
          <p className='text-[#767676] text-sm'>Re-defining Comfort, Luxury & Elegance</p>
        </div>

        <div className='flex flex-col items-center space-y-3'>
          <img src={Quality} alt='Quality' className='w-20' />
          <h3 className='text-lg font-semibold'>Authentic Quality</h3>
          <p className='text-[#767676] text-sm'>100% pure</p>
        </div>

        <div className='flex flex-col items-center space-y-3'>
          <img src={shipping} alt='Shipping' className='w-20' />
          <h3 className='text-lg font-semibold'>Shipping World Wide</h3>
          <p className='text-[#767676] text-sm'>Express shipping available</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
