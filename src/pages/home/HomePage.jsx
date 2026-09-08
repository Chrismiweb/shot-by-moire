import React from 'react'
import Navbar from '../../component/Navbar'
import Hero from './Hero'
import About from './About'
import LatestWork from './LatestWork'
import Footer from '../../component/Footer'
import PricingCarousel from './PricingCarousel'
import MyWork from './MyWork'


function HomePage() {
  return (
    <div>
        {/* <Navbar/> */}
        <Hero/>
        <About/>
        <MyWork/>
        {/* <LatestWork/> */}
        <PricingCarousel/>
        {/* <Footer/> */}
    </div>
  )
}

export default HomePage