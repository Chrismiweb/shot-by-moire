import React, { useState, useEffect } from "react";

const slides = [
    {
      image: "/images/stunning-african-model-with-voluminous-curly-hairstyle-elegant-costume-posing-beige-wall.jpg",
      text: "Your Comfort is Our Priority",
    },
  {
    image: "/images/decorated-banquet-hall-with-flowers.jpg",
    text: "Welcome to Our Website",
  },
  {
    image: "/images/cascade-boat-clean-china-natural-rural.jpg",
    text: "Luxury You Deserve",
  },
  {
    image: "/images/close-up-fitness-woman-tying-her-shoelaces.jpg",
    text: "Experience the Difference",
  },
  {
    image: "/images/groom-putting-ring-bride-s-finger.jpg",
    text: "Book Your Stay Today",
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
        alt={slides[currentIndex].title}
        className=" w-full h-full object-cover transition-opacity duration-1000"
      />

      {/* Overlay Blur + Dark */}
      {/* <div className="absolute inset-0 bg-black opacity-60 z-0"></div> */}


      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
          {slides[currentIndex].title}
        </h1>
        <p className="text-white text-lg md:text-2xl max-w-3xl drop-shadow-md">
          {slides[currentIndex].description}
        </p>
      </div>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-110" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
