import React from 'react'
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'
import Pricing from './Pricing'

function PricingPage() {
  return (
    <div className='pt-[120px]'>
        <Navbar/>
        <Pricing/>
        <Footer/>
    </div>
  )
}

export default PricingPage