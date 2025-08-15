import React from 'react'
import Navbar from '../../component/Navbar'
import Gallery from './Gallery'
import Footer from '../../component/Footer'

function GalleryPage() {
  return (
    <div className='pt-[120px]'>
        <Navbar/>
        <Gallery/>
        <Footer/>
    </div>
  )
}

export default GalleryPage