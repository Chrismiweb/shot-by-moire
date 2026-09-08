import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/home/HomePage";
import GalleryPage from "./pages/gallery/GalleryPage";
import ContactPage from "./pages/contact/ContactPage";
import BookingPage from "./pages/booking/BookingPage";
import Aboutpage from "./pages/about/Aboutpage";
import PricingPage from "./pages/pricing/PricingPage";
import GallerySection from "./pages/home/GallerySection";
import Layout from "./component/Layout";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Shared layout */}
        <Route element={<Layout />}>

          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* Gallery */}
          <Route path="/gallery" element={<GalleryPage />} />
          <Route
            path="/gallery/:categorySlug"
            element={<GalleryPage />}
          />

          {/* Other pages */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<Aboutpage />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;