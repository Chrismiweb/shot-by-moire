import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function About() {
        const { ref, inView } = useInView({
            triggerOnce: true, // only trigger once
            threshold: 0.3,    // start animation when 30% visible
        });
  return (
    <div className='bg-[#ECEFF1] w-full flex justify-center items-center py-[80px] gap-[60px]'>
        <div className='w-[500px] h-[500px] rounded-full bg-amber-300 overflow-hidden'>
            <img src="/images/6875224f-f9d7-4295-b1f5-0639b1c59a44.JPG" className='w-full h-full object-fill' alt="" />
        </div>
        <div className='w-[35%] flex gap-[25px] flex-col'>
            <p className='text-[18px] font-semibold text-[#B87333]'>ABOUT ME</p>
            <p className='text-[40px] font-bold'>My name is Mo Abdalla, <br/> I’m a <span className='text-[#B87333]'>Photographer.</span></p>
            <div className='w-[5%] h-[1px] bg-black'></div>
            <p className='text-[20px]'>A passionate photographer, videographer, and editor dedicated to turning visions into unforgettable visuals. Self-taught and driven, I blend artistry and precision to tell stories through timeless portraits and cinematic videos. As an athlete and footballer, I bring discipline, focus, and creativity to every project, creating lasting impressions for my clients.</p>
            <div className='flex  w-full gap-[70px] text-center  '>
                <div className='flex flex-col justify-start items-start'>
                    <p className='text-[#B87333] text-[50px]'>
                        {inView && <CountUp start={0} end={140} duration={2} suffix="+" />}
                    </p>
                    <p className='font-semibold text-[18px] text-left'>Finished<br/> Photosessions</p>
                </div>
                <div className='flex flex-col justify-start items-start'>
                   <p className='text-[#B87333] text-[50px]'>
                     {inView && <CountUp start={0} end={100} duration={2} suffix="+" />}
                   </p>
                    <p className='font-semibold text-[18px] text-left'>Studio<br/> Sessions</p>
                </div>
                <div className='flex flex-col justify-start items-start'>
                    <p className='text-[#B87333] text-[50px]'>
                        {inView && <CountUp start={0} end={340} duration={2.5} suffix="+" />}
                    </p>
                    <p className='font-semibold text-[18px] text-left'>Happy<br/> Clients</p>
                </div>
            </div>
            <p className='text-[#B87333] text-[15px] cursor-pointer underline'>READ MORE </p>

        </div>
    </div>
  )
}

export default About