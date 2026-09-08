import React, { useState, useEffect } from "react";

const slides = [
    {
    image: "/images/stunning-african-model-with-voluminous-curly-hairstyle-elegant-costume-posing-beige-wall.jpg",
    text: "Your Comfort is Our Priority",
    description: "Relax and enjoy premium services tailored to meet your needs.",
  },
  {
    image: "/images/decorated-banquet-hall-with-flowers.jpg",
    text: "Welcome to Our Website",
    description: "Discover a world of elegance, style, and unforgettable experiences.",
  },
  {
    image: "/images/cascade-boat-clean-china-natural-rural.jpg",
    text: "Luxury You Deserve",
    description: "Experience the perfect blend of comfort, class, and scenic beauty.",
  },
  {
    image: "/images/close-up-fitness-woman-tying-her-shoelaces.jpg",
    text: "Experience the Difference",
    description: "From fitness to leisure, every moment is crafted for your satisfaction.",
  },
  {
    image: "/marriage/groom-putting-ring-bride-s-finger.jpg",
    text: "Book Your Stay Today",
    description: "Secure your perfect getaway or event venue with just one click.",
  },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden flex justify-center items-center bg-black">
      {/* Background Image */}
      <img
        src={slides[currentIndex].image}
        alt={slides[currentIndex].text}
        className="w-full h-full object-cover transition-opacity duration-1000"
      />
      {/* Overlay text on top of each image */}
      <div className="absolute w-[85%] top-[50%] left-[10px] lg:top-[60%] lg:left-[20%] px-4 py-2 rounded-md lg:max-w-[60%] md:text-left">
        <a href='/booking' className="text-[20px] cursor-pointer hover:bg-black/85 bg-black text-white px-[35px] rounded-[15px] py-[15px]">Book Now</a>
        <p className="text-white text-[22px] md:text-[50px] font-semibold">
          {slides[currentIndex].text}
        </p>
        <p className="text-white text-[17px] md:text-[30px] lg:text-lg mt-2">
          {slides[currentIndex].description}
        </p>
      </div>

      {/* Number Indicators */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`px-3 py-1 rounded-full text-white font-bold cursor-pointer transition-all duration-300 border-[#B87333] border-2 ${
              index === currentIndex ? "bg-black text-black" : "bg-white/40"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Hero;



// import React, { useEffect, useState } from "react";

// /**
//  * Hero
//  * Full-bleed hero section — React + Tailwind CSS.
//  *
//  * - Huge bold uppercase word filling the width
//  * - A cutout photo (hands holding a camera) layered on top, centered,
//  *   overlapping the middle of the word
//  * - Viewfinder-style corner brackets in the four corners
//  * - A small focus-ring dot decoration
//  * - On mount / page refresh: the image slides up from below into place
//  *   while the headline pops in (fade + scale)
//  *
//  * SETUP:
//  * 1. Save the cutout hands+camera PNG (transparent background) to
//  *    `public/image/image-1.png` in your project (path used below).
//  * 2. Adjust HERO_TEXT below to change the headline.
//  *
//  * ---- ANIMATION TUNING ----
//  * Adjust these to change speed/feel of the entrance animation.
//  */
// const TEXT_DURATION = "duration-700";
// const IMAGE_DURATION = "duration-700";
// const IMAGE_DELAY = "delay-150"; // image starts slightly after the text pops in
// const IMAGE_SLIDE_DISTANCE = "translate-y-24"; // how far below it starts from

// const HERO_TEXT = "SHOTBYMOIRE";
// const CAMERA_IMAGE = "/image/image-1.png";

// function CornerMark({ position }) {
//   const base = "absolute h-6 w-6 border-neutral-400 md:h-7 md:w-7";
//   const positions = {
//     "top-left": "left-6 top-6 border-l-2 border-t-2 md:left-10 md:top-10",
//     "top-right": "right-6 top-6 border-r-2 border-t-2 md:right-10 md:top-10",
//     "bottom-left":
//       "bottom-6 left-6 border-b-2 border-l-2 md:bottom-10 md:left-10",
//     "bottom-right":
//       "bottom-6 right-6 border-b-2 border-r-2 md:bottom-10 md:right-10",
//   };
//   return <div className={`${base} ${positions[position]}`} />;
// }

// export default function Hero() {
//   // Starts false on every mount (so it re-plays on refresh), flips to true
//   // one frame after mount so the transition actually animates.
//   const [revealed, setRevealed] = useState(false);

//   useEffect(() => {
//     const frame = requestAnimationFrame(() => setRevealed(true));
//     return () => cancelAnimationFrame(frame);
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-neutral-50 px-4 py-20 md:h-[95vh] md:py-28">
//       {/* Viewfinder corner brackets */}
//       <CornerMark position="top-left" />
//       <CornerMark position="top-right" />
//       <CornerMark position="bottom-left" />
//       <CornerMark position="bottom-right" />

//       {/* Focus-ring decoration */}
//       <div className="absolute right-[16%] top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-300 md:flex">
//         <span className="h-2 w-2 rounded-full bg-neutral-400" />
//       </div>

//       {/* Headline + overlapping image */}
//       <div className="relative mx-auto grid max-w-7xl place-items-center">
//         {/* Headline: fades + scales up ("pops") into place */}
//         <h1
//           className={`col-start-1 row-start-1 select-none text-center font-black uppercase leading-none tracking-tight text-neutral-800 transition-all ${TEXT_DURATION} ease-out ${
//             revealed
//               ? "translate-y-0 scale-100 opacity-100"
//               : "translate-y-3 scale-90 opacity-0"
//           }`}
//           style={{ fontSize: "clamp(2.5rem, 9vw, 8.5rem)" }}
//         >
//           {HERO_TEXT}
//         </h1>

//         {/* Camera image: slides up from below into place */}
//         <img
//           src={CAMERA_IMAGE}
//           alt="Hands holding a vintage camera"
//           className={`pointer-events-none col-start-1 row-start-1 w-[42vw] select-none transition-all ${IMAGE_DURATION} ${IMAGE_DELAY} ease-out md:w-[500px] md:max-w-[500px] ${
//             revealed
//               ? "translate-y-0 opacity-100"
//               : `${IMAGE_SLIDE_DISTANCE} opacity-0`
//           }`}
//         />
//       </div>
//     </section>
//   );
// }
