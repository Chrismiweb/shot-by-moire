import React from 'react'
import Navbar from '../../component/Navbar'
import Contact from './Contact'
import Footer from '../../component/Footer'

function ContactPage() {
  return (
    <div className='pt-[120px]'>
        <Navbar/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default ContactPage