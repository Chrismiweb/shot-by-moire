// import React, { useContext, useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FiX } from 'react-icons/fi'; // icons for toggle
// import { HiOutlineMenuAlt3 } from "react-icons/hi";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);


//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className='w-full  bg-black text-white fixed top-0 left-0 z-50'>
//       {/* Top Bar */}
//       <div className='flex justify-between px-[15px] md:px-[35px] lg:px-[50px] items-center py-[30px]'>
        
//         {/* Logo */}
//         <div className='flex justify-center items-center gap-[5px]'>
//           <p className='lg:text-[1.1vw] text-[5vw] md:text-[2.5vw] font-black'>SHOTBYMOIRE</p>
//         </div>

//         {/* Desktop Menu */}
//         <div className='hidden lg:flex gap-[32px] items-center text-white'>
//           <a href='/'><p className='text-[0.8vw] '>HOME</p></a>
//           <a href='/gallery'><p className='text-[0.8vw]'>GALLERY</p></a>
//           <a href='/pricing'><p className='text-[0.8vw]'>PRICING</p></a>
//           {/* <a href='#about'><p className='text-[0.8vw]'>ABOUT</p></a> */}
//           <a href='/booking'><p className='text-[0.8vw]'>BOOKING</p></a>
//           <a href='/about'><p className='text-[0.8vw]'>ABOUT</p></a>
//           {/* <a href='#about'><p className='text-[0.8vw]'>BOOKING</p></a> */}
//           <a href='/contact'><p className='text-[0.8vw]'>CONTACT</p></a>    

//         </div>

//         {/* Mobile Menu Toggle Button */}
//         <div className='lg:hidden'>
//           <button onClick={toggleMenu} className='text-[9vw] md:text-[6vw]'>
//             {menuOpen ? <FiX/> : <HiOutlineMenuAlt3 />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {menuOpen && (
//         <div className='flex flex-col lg:hidden gap-[25px] md:gap-[25px] bg-black text-white px-[20px] py-[20px] pb-[50px] shadow-md z-50 absolute top-[100%] w-full left-0'>
//           <a href='/' onClick={toggleMenu}><p className='text-[5vw] md:text-[3.5vw] font-bold'>HOME</p></a>
//           <a href='/gallery' onClick={toggleMenu}><p className='text-[5vw] md:text-[3.5vw] font-bold'>GALLERY</p></a>
//           <a href='/pricing' onClick={toggleMenu}><p className='text-[5vw] md:text-[3.5vw] font-bold'>PRICING</p></a>
//           <a href='/booking' onClick={toggleMenu}><p className='text-[5vw] md:text-[3.5vw] font-bold'>BOOKING</p></a>
//           <a href='/about' onClick={toggleMenu}><p className='text-[5vw] md:text-[3.5vw] font-bold'>ABOUT</p></a>
//           <a href='/contact' onClick={toggleMenu}><p className='text-[5vw] md:text-[3.5vw] font-bold'>CONTACT</p></a>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const menuVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.35,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.08,        // enter one-by-one
      staggerDirection: 1,          // left → right feel
    },
  },
  exit: {
    x: '100%',
    transition: {
      type: 'tween',
      duration: 0.32,
      ease: 'easeIn',
      when: 'afterChildren',
      staggerChildren: 0.06,        // exit one-by-one
      staggerDirection: -1,         // right → left on close
    },
  },
};

const itemVariants = {
  hidden: { x: -30, opacity: 0 },   // come in from left
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'tween', duration: 0.35, ease: 'easeOut' },
  },
  exit: {
    x: 30,                          // go out to right
    opacity: 0,
    transition: { type: 'tween', duration: 0.25, ease: 'easeIn' },
  },
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((v) => !v);

  const links = [
    { to: '/', label: 'HOME' },
    { to: '/gallery', label: 'GALLERY' },
    { to: '/pricing', label: 'PRICING' },
    { to: '/booking', label: 'BOOKING' },
    { to: '/about', label: 'ABOUT' },
    { to: '/contact', label: 'CONTACT' },
  ];

  return (
    <div className="w-full bg-black text-white fixed top-0 left-0 z-50">
      {/* Top Bar */}
      <div className="flex justify-between px-[15px] md:px-[35px] lg:px-[50px] items-center py-[30px]">
        {/* Logo */}
        <div className="flex items-center gap-[5px]">
          <p className="lg:text-[1.1vw] text-[5vw] md:text-[2.5vw] font-black">
            SHOTBYMOIRE
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-[32px] items-center text-white">
          {links.map(({ to, label }) => (
            <a key={to} href={to} className="text-[0.8vw]">
              {label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-[9vw] md:text-[6vw]">
            {menuOpen ? <FiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden bg-black text-white px-[20px] py-[20px] pb-[50px] shadow-md z-50 absolute top-[100%] w-full left-0"
          >
            <div className="flex flex-col gap-[25px] md:gap-[25px]">
              {links.map(({ to, label }) => (
                <motion.div key={to} variants={itemVariants}>
                  <a href={to} onClick={closeMenu} className="block">
                    <p className="text-[5vw] md:text-[3.5vw] font-bold">
                      {label}
                    </p>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;

