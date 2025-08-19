import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from './pages/home/HomePage';
import GalleryPage from './pages/gallery/GalleryPage';
import About from './pages/home/About';
import ContactPage from './pages/contact/ContactPage';
import BookingPage from './pages/booking/BookingPage';
import Aboutpage from './pages/about/Aboutpage';
import PricingPage from './pages/pricing/PricingPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/gallery" element={<GalleryPage />}/>
        {/* <Route path="/about" element={<About />}/> */}
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/booking" element={<BookingPage />}/>
        <Route path="/pricing" element={<PricingPage />}/>
        <Route path="/about" element={<Aboutpage />}/>



      </Routes>
    </BrowserRouter>
  )
}

export default App
