import React from 'react'

function Pricing() {
  const sessions = [
    {
      title: "BOOKING DEPOSIT",
      price: "$30",
      image: "/images/8d276812-95f5-40cb-90c7-5b924f426960.JPG", // replace with your actual image URL
    },
    {
      title: "MINI SESSION",
      price: "$80",
      image: "/images/selective-focus-dslr-camera-body.jpg", // replace with your actual image URL
    },
    {
      title: "SMALL EVENT",
      price: "$75/hr",
      image: "/images/medium-shot-woman-bridal-party.jpg",
    },
    {
      title: "GRADUATIONS",
      price: "$100-$140",
      image: "/images/front-view-graduation-straws-fancy-glass.jpg",
    },
    {
      title: "PORTRAITS",
      price: "$110/hr",
      image: "/images/young-beautiful-woman-posing-wrapping-up-grey-cloth.jpg",
    },

    {
      title: "SPORTS/ACTIVITIES",
      price: "$110",
      image: "/images/a95b9a6f-e5ef-4cb8-afcf-efb2e1c80c2a.JPG",
    },
    {
      title: "FAMILY SESSION",
      price: "$150/hr",
      image: "/images/family-three-spending-time-together-outdoors-father-s-day.jpg",
    },
    {
      title: "EXTENDED SESSION",
      price: "$200",
      image: "/images/192d168a-2996-460c-a3d2-bda73d63051a.JPG",
    },
    {
      title: "HALF DAY EVENT ",
      price: "$300",
      image: "/images/10624.jpg",
    },
    {
      title: "FULL DAY EVENT ",
      price: "$500",
      image: "/images/decorated-banquet-hall-with-flowers.jpg",
    },
  ];
  return (
  <div className=" py-12 flex flex-col items-center justify-center gap-[50px] w-full">
     <div className='flex flex-col items-center justify-center gap-[10px] '>
        <p className='text-[40px] font-bold text-black'>Pricing</p>
        <div className='w-[20%] h-[1px] bg-black'></div>
     </div>
    <div className='w-full gap-[10px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4'>
        {sessions.map((session, index) => (
          <div key={index}>
            {/* desktop view only */}
            <div
              className="flex relative h-[60vh] lg:h-[80vh]  flex-col justify-start pt-[70px] items-center text-center text-black bg-cover bg-center"
              style={{
                backgroundImage: `url(${session.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
              <div className="relative z-10">
                <h3 className="md:text-[20px] lg:text-lg font-semibold text-white tracking-widest uppercase">
                    {session.title}
                </h3>
                <h1 className="md:text-[35px] lg:text-6xl font-bold mt-2 text-white">{session.price}</h1>
                
                <a href="/booking">
                <button className="bg-[#b8894d] text-white px-6 py-2 mt-4 rounded cursor-pointer hover:bg-[#a67c3d] transition">
                    BOOK NOW
                </button>
                </a>
                
              </div>
            </div>
          </div>
        ))}
    </div>
  </div>
  )
}

export default Pricing