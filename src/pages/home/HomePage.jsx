import React from 'react'
import Navbar from '../../component/Navbar'
import Hero from './Hero'
import About from './About'
import LatestWork from './LatestWork'
import Footer from '../../component/Footer'
import PricingCarousel from './PricingCarousel'


function HomePage() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <LatestWork/>
        <PricingCarousel/>
        <Footer/>
    </div>
  )
}

export default HomePage