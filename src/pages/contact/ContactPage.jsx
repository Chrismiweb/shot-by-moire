import React from 'react'
import Navbar from '../../component/Navbar'
// import Contact from './Contact'
import Footer from '../../component/Footer'
import ContactSection from './ContactSection'

function ContactPage() {
  return (
    <div className='pt-[120px]'>
        <Navbar/>
        {/* <Contact/> */}
        <ContactSection/>
        <Footer/>
    </div>
  )
}

export default ContactPage