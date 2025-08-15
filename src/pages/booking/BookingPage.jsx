import React from 'react'
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'
import Booking from './Booking'

function BookingPage() {
  return (
    <div className='pt-[120px]'>
        <Navbar/>
        <Booking/>
        <Footer/>
    </div>
  )
}

export default BookingPage