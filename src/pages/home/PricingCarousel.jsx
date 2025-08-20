import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PricingCarousel = () => {
    
  const sessions = [
    {
      title: "BOOKING DEPOSIT",
      price: "$30",
      description: "(non-refundable to guarantee your spot)",
      image: "/images/8d276812-95f5-40cb-90c7-5b924f426960.JPG", // replace with your actual image URL
    },
      {
      title: "MINI SESSION",
      price: "$80",
      description: "(20-30 min, 8-12 edited photos)",
      image: "/images/selective-focus-dslr-camera-body.jpg", // replace with your actual image URL
    },
    {
      title: "SMALL EVENT",
      price: "$75/hr",
      description: "(birthdays, showers, etc.)",
      image: "/images/medium-shot-woman-bridal-party.jpg",
    },
    {
      title: "GRADUATIONS",
      price: "$100-$140",
      description: "(Cap & Gown/session)",
      image: "/images/front-view-graduation-straws-fancy-glass.jpg",
    },
    {
      title: "PORTRAITS",
      price: "$110/hr",
      description: "(individual/couples)",
      image: "/images/young-beautiful-woman-posing-wrapping-up-grey-cloth.jpg",
    },

    {
      title: "SPORTS/ACTIVITIES",
      price: "$110",
      description: "(1 hr, 20-25 edited photos)",
      image: "/images/a95b9a6f-e5ef-4cb8-afcf-efb2e1c80c2a.JPG",
    },
    {
      title: "FAMILY SESSION",
      price: "$150/hr",
      description: "(Family Photography Session)",
      image: "/images/family-three-spending-time-together-outdoors-father-s-day.jpg",
    },
    {
      title: "EXTENDED SESSION",
      price: "$200",
      description: "(1-2 hrs, 35-50 edited photos)",
      image: "/images/192d168a-2996-460c-a3d2-bda73d63051a.JPG",
    },
    {
      title: "HALF DAY EVENT ",
      price: "$300",
      description: "(3-4 hrs, 75-100 edited photos)",
      image: "/images/10624.jpg",
    },
    {
      title: "FULL DAY EVENT ",
      price: "$550",
      description: "(6-8 hrs, 150-200 edited photos)",
      image: "/images/decorated-banquet-hall-with-flowers.jpg",
    },
  ];

  const desktopsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

    const tabletsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const mobilesettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <div className="w-full">
      {/* desktop view only */}

      <Slider {...desktopsettings}>
        {sessions.map((session, index) => (
          <div key={index}>
            {/* desktop view only */}
            <div
              className="hidden lg:flex  relative h-[60vh] lg:h-[80vh]  flex-col justify-start pt-[70px] items-center text-center text-black bg-cover bg-center"
              style={{
                backgroundImage: `url(${session.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
              <div className="relative z-10">
                <h3 className="md:text-[20px] lg:text-lg text-[22px] font-semibold text-white tracking-widest uppercase">
                    {session.title}
                </h3>
                <h1 className="md:text-[35px] lg:text-6xl text-[30px] font-bold mt-2 text-white">{session.price}</h1>
                <h3 className=" md:text-[20px] text-[20px] lg:text-lg text-white tracking-widest uppercase mt-[10px] font-bold">
                    {session.description}
                </h3>
                <a href="/booking">
                <button className="bg-[#b8894d] font-bold text-white px-6 py-2 mt-4 rounded cursor-pointer hover:bg-[#a67c3d] transition">
                    BOOK NOW
                </button>
                </a>
                
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* tablet view only */}
      <Slider {...tabletsettings}>
        {sessions.map((session, index) => (
          <div key={index}>
            {/* tablet view only */}
            <div
              className="hidden md:flex lg:hidden  relative h-[60vh] lg:h-[80vh]  flex-col justify-start pt-[70px] items-center text-center text-black bg-cover bg-center"
              style={{
                backgroundImage: `url(${session.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
              <div className="relative z-10">
                <h3 className="md:text-[20px] lg:text-lg text-[22px] font-semibold text-white tracking-widest uppercase">
                    {session.title}
                </h3>
                <h1 className="md:text-[35px] lg:text-6xl text-[30px] font-bold mt-2 text-white">{session.price}</h1>
                <h3 className=" md:text-[20px] text-[20px] lg:text-lg text-white tracking-widest uppercase mt-[10px] font-bold">
                    {session.description}
                </h3>
                <a href="/booking">
                <button className="bg-[#b8894d] font-bold text-white px-6 py-2 mt-4 rounded cursor-pointer hover:bg-[#a67c3d] transition">
                    BOOK NOW
                </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>


    {/* mobile view only */}
      <Slider {...mobilesettings}>
        {sessions.map((session, index) => (
          <div key={index}>
            {/* tablet view only */}
            <div
              className="flex md:hidden lg:hidden  relative h-[60vh] lg:h-[80vh]  flex-col justify-start pt-[70px] items-center text-center text-black bg-cover bg-center"
              style={{
                backgroundImage: `url(${session.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
              <div className="relative z-10">
                <h3 className="md:text-[20px] lg:text-lg text-[22px] font-semibold text-white tracking-widest uppercase">
                    {session.title}
                </h3>
                <h1 className="md:text-[35px] lg:text-6xl text-[30px] font-bold mt-2 text-white">{session.price}</h1>
                <h3 className=" md:text-[20px] text-[20px] lg:text-lg text-white tracking-widest uppercase mt-[10px] font-bold">
                    {session.description}
                </h3>
                <a href="/booking">
                <button className="bg-[#b8894d] font-bold text-white px-6 py-2 mt-4 rounded cursor-pointer hover:bg-[#a67c3d] transition">
                    BOOK NOW
                </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PricingCarousel;
