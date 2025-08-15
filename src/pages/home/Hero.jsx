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
    image: "/images/groom-putting-ring-bride-s-finger.jpg",
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
      <div className="absolute w-[85%] top-[50%] left-[10px] lg:top-2/3 lg:left-[20%] px-4 py-2 rounded-md lg:max-w-[60%] md:text-left">
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
