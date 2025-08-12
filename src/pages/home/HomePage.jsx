import React from 'react'
import Navbar from '../../component/Navbar'
import Hero from './Hero'
import About from './About'
import LatestWork from './LatestWork'


function HomePage() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <LatestWork/>
    </div>
  )
}

export default HomePage