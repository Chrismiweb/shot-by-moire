import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiX } from 'react-icons/fi'; // icons for toggle
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='w-full  bg-black text-white fixed top-0 left-0 z-50'>
      {/* Top Bar */}
      <div className='flex justify-between px-[15px] md:px-[35px] lg:px-[50px] items-center py-[30px]'>
        
        {/* Logo */}
        <div className='flex justify-center items-center gap-[5px]'>
          <p className='lg:text-[1.1vw] text-[5vw] md:text-[2.5vw] font-black'>LOGO</p>
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:flex gap-[32px] items-center text-white'>
          <a href='#how-it-works'><p className='text-[0.8vw] '>HOME</p></a>
          <a href='#why-choose-us'><p className='text-[0.8vw]'>GALLERY</p></a>
          <a href='#about'><p className='text-[0.8vw]'>ABOUT</p></a>
          <a href='#about'><p className='text-[0.8vw]'>ABOUT</p></a>
          <a href='#about'><p className='text-[0.8vw]'>BOOKING</p></a>
          <a href='#about'><p className='text-[0.8vw]'>BOOKING</p></a>
          <a href='#about'><p className='text-[0.8vw]'>CONTACT</p></a>    

        </div>

        {/* Mobile Menu Toggle Button */}
        <div className='lg:hidden'>
          <button onClick={toggleMenu} className='text-[9vw] md:text-[6vw]'>
            {menuOpen ? <FiX/> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className='flex flex-col lg:hidden gap-[20px] md:gap-[25px] bg-white px-[20px] py-[20px] shadow-md z-50 absolute top-[100%] w-full left-0'>
          <a href='#how-it-works' onClick={toggleMenu}><p className='text-[5vw] md:text-[3.5vw]'>How it works</p></a>
          <a href='#why-choose-us' onClick={toggleMenu}><p className='text-[5vw] md:text-[3.5vw]'>Why Us</p></a>
          <a href='#about' onClick={toggleMenu}><p className='text-[5vw] md:text-[3.5vw]'>About</p></a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
