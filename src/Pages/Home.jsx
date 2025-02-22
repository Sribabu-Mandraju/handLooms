import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Hero'
import About from './About/About'
import TrendyProducts from './TrendyProducts/TrendyProducts'
import LimitedEdition from './LimitedEdition/LimitedEdition'
import Footer from '../components/Footer'

import Stats from '../components/Stats'
import Discover from '../components/Discover'
const Home = () => {
  return (
    <div className='flex flex-col'>
        <Navbar/>
        <div>
        <p className="text-[brown] text-center mt-3 text-lg">20% Discount on all Products.</p>
        <p className='text-red-900 animate-pulse text-center text-xl font-bold'>Shop Exclusive Offline Products online now! </p>
        </div>
        <div className=' px-[10px] lg:px-[80px]'>
        <Carousel/>
        </div>
        <About/>
            <TrendyProducts/>
            <LimitedEdition/>
            <Discover />
      <Stats />
      <Footer />
    </div>
  )
}
export default Home