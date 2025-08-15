// import React from 'react'
// import CountUp from 'react-countup';
// import { useInView } from 'react-intersection-observer';

// function About() {
//         const { ref, inView } = useInView({
//             triggerOnce: true, // only trigger once
//             threshold: 0.3,    // start animation when 30% visible
//         });
//   return (
//     <div className='bg-[#ECEFF1] w-full flex justify-center items-center py-[80px] gap-[60px]'>
//         <div className='w-[500px] h-[500px] rounded-full bg-amber-300 overflow-hidden'>
//             <img src="/images/6875224f-f9d7-4295-b1f5-0639b1c59a44.JPG" className='w-full h-full object-fill' alt="" />
//         </div>
//         <div className='w-[35%] flex gap-[25px] flex-col'>
//             <p className='text-[18px] font-semibold text-[#B87333]'>ABOUT ME</p>
//             <p className='text-[40px] font-bold'>My name is Mo Abdalla, <br/> I’m a <span className='text-[#B87333]'>Photographer.</span></p>
//             <div className='w-[5%] h-[1px] bg-black'></div>
//             <p className='text-[20px]'>A passionate photographer, videographer, and editor dedicated to turning visions into unforgettable visuals. Self-taught and driven, I blend artistry and precision to tell stories through timeless portraits and cinematic videos. As an athlete and footballer, I bring discipline, focus, and creativity to every project, creating lasting impressions for my clients.</p>
//             <div className='flex  w-full gap-[70px] text-center  '>
//                 <div className='flex flex-col justify-start items-start'>
//                     <p className='text-[#B87333] text-[50px]'>
//                         {inView && <CountUp start={0} end={140} duration={2} suffix="+" />}
//                     </p>
//                     <p className='font-semibold text-[18px] text-left'>Finished<br/> Photosessions</p>
//                 </div>
//                 <div className='flex flex-col justify-start items-start'>
//                    <p className='text-[#B87333] text-[50px]'>
//                      {inView && <CountUp start={0} end={100} duration={2} suffix="+" />}
//                    </p>
//                     <p className='font-semibold text-[18px] text-left'>Studio<br/> Sessions</p>
//                 </div>
//                 <div className='flex flex-col justify-start items-start'>
//                     <p className='text-[#B87333] text-[50px]'>
//                         {inView && <CountUp start={0} end={340} duration={2.5} suffix="+" />}
//                     </p>
//                     <p className='font-semibold text-[18px] text-left'>Happy<br/> Clients</p>
//                 </div>
//             </div>
//             <p className='text-[#B87333] text-[15px] cursor-pointer underline'>READ MORE </p>

//         </div>
//     </div>
//   )
// }

// export default About


import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className='bg-[#ECEFF1] w-full flex flex-col lg:flex-row justify-center items-center py-[80px] gap-[60px]'
    >
      <div className='w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden'>
        <img
          src="/image/unnamed.jpg"
          className='w-full h-full object-cover'
          alt=""
        />
      </div>

      <div className='w-[90%] lg:w-[35%] flex gap-[25px] flex-col items-center justify-center text-center lg:text-left lg:items-start lg:justify-start'>
        <p className=' lg:text-[1.125rem] font-semibold text-[#B87333]'>ABOUT ME</p>
        <p className='text-[35px] font-bold'>
          My name is Mo Abdalla, <br/> I’m a <span className='text-[#B87333]'>Photographer.</span>
        </p>
        <div className='w-[5%] h-[1px] bg-black'></div>
        <p className='text-[19px] md:text-[24px] lg:text-[18px]'>
          A passionate photographer, videographer, and editor dedicated to turning visions into unforgettable visuals. Self-taught and driven, I blend artistry and precision to tell stories through timeless portraits and cinematic videos. As an athlete and footballer, I bring discipline, focus, and creativity to every project, creating lasting impressions for my clients.
        </p>

        <div className='flex flex-col md:flex-row w-full gap-[30px] md:gap-[70px] text-center justify-center items-center lg:justify-start lg:items-start '>
          <div className='flex flex-col md:justify-start md:items-start justify-center items-center'>
            <p className='text-[#B87333] text-[45px] md:text-[50px] lg:text-[30px]'>
              {inView && (
                <CountUp key="c1" start={0} end={140} duration={2} suffix="+" />
              )}
            </p>
            <p className='font-semibold text-[20px] lg:text-[16px] md:text-[20px] text-center md:text-left'>Finished<br/> Photosessions</p>
          </div>

          <div className='flex flex-col md:justify-start md:items-start justify-center items-center'>
            <p className='text-[#B87333] text-[45px] md:text-[50px] lg:text-[30px]'>
              {inView && (
                <CountUp key="c2" start={0} end={100} duration={2} suffix="+" />
              )}
            </p>
            <p className='font-semibold text-[20px] lg:text-[16px] md:text-[20px] text-center md:text-left'>Studio<br/> Sessions</p>
          </div>

          <div className='flex flex-col md:justify-start md:items-start justify-center items-center '>
            <p className='text-[#B87333] text-[45px] md:text-[50px] lg:text-[30px]'>
              {inView && (
                <CountUp key="c3" start={0} end={340} duration={2.5} suffix="+" />
              )}
            </p>
            <p className='font-semibold text-[20px] lg:text-[16px] md:text-[20px] text-center md:text-left'>Happy<br/> Clients</p>
          </div>
        </div>

        <p className='text-[#B87333] text-[18px] md:text-[20px] lg::text-[16px] cursor-pointer underline'>READ MORE</p>
      </div>
    </div>
  );
}

export default About;
