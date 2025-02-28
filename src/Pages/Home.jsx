import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Hero'
import About from './About/About'
import Aboutone from '../Pages/About/Aboutone'
import TrendyProducts from './TrendyProducts/TrendyProducts'
import LimitedEdition from './LimitedEdition/LimitedEdition'
import Footer from '../components/Footer'

import Stats from '../components/Stats'
import Discover from '../components/Discover'
const Home = () => {
  return (
    <div className='flex flex-col'>
        {/* <Navbar/> */}
        
        <div className=' px-[10px] lg:px-[80px]'>
        <Carousel/>
        </div>
           
     
            <TrendyProducts/>
            <LimitedEdition/>
            {/* <Discover /> */}
      {/* <Stats /> */}
      <Footer />
    </div>
  )
}
export default Home