import React from 'react'
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
function Footer() {
    const year = new Date().getFullYear();
  return (
    <div className='w-full'>
        <div className='w-full bg-[#ECEFF1] text-black flex items-center justify-center py-[10px] gap-[10px] lg:gap-[25px]'>
            <a href='https://www.tiktok.com/@shotbymoire?_r=1&_t=ZT-91Cvwxne4ud' className='flex items-center justify-center gap-[4px] lg:gap-[7px] hover:text-[#B87333] transition-all duration-300 cursor-pointer'>
                <FaTiktok className='text-[16px] md::text-[18px]' />
                <p className='text-[16px] md:text-[18px]'>tiktok</p>
            </a>
            <div className='w-[5px] h-[5px] rounded-full bg-[#B87333]'></div>
            <a href = 'https://www.instagram.com/shotbymoire?igsh=c2g1c3U1dGwxaGRr&utm_source=qr' className='flex items-center justify-center gap-[4px] lg:gap-[7px] hover:text-[#B87333] transition-all duration-300 cursor-pointer'>
                <FaInstagram className='text-[16px] md::text-[18px]' />
                <p className='text-[16px] md:text-[18px]'>instagram</p>
            </a>
            {/* <div className='w-[5px] h-[5px] rounded-full bg-[#B87333]'></div>
            <div className='flex items-center justify-center gap-[4px] lg:gap-[7px] hover:text-[#B87333] transition-all duration-300 cursor-pointer'>
                <FaFacebookF className='text-[16px] md::text-[18px]' />
                <p className='text-[16px] md:text-[18px]'>facebook</p>
            </div> */}
        </div>
        <div className='flex flex-col lg:flex-row w-full justify-evenly py-[30px] px-[20px] lg:px-0 lg:py-[50px] gap-[30px] lg:gap-0'>
            <div className='w-[90%] lg:w-[20%] flex flex-col gap-[25px]'>
                <p className='font-bold text-[30px] md:text-[40px]'>SHOTBYMOIRE</p>
                <p className='text-[18px] md:text-[22px] lg:text-[15px] text-[#252525]'>Without photography, a world without light and color would feel meaningless. these elements awaken our minds and convey our deepest passions.</p>
            </div>
            <div className='w-[90%] lg:w-[20%] gap-[20px] flex flex-col'>
                <p className='font-bold text-[25px]'>Latest Photos</p>
                <div className='w-[8%] h-[1px] bg-[#B87333]'></div>
                <div className='flex gap-[10px]'>
                    <div className='w-[90px] h-[90px] bg-red-400 cursor-pointer'>
                        <img className='w-full h-full object-fill' src="/images/665c9fb6-2f36-46ec-8601-90cb04aa621a.JPG" alt="" />
                    </div>
                    <div className='w-[90px] h-[90px] bg-red-400 cursor-pointer'>
                        <img className='w-full h-full object-fill' src="/images/lv.jpg" alt="" />
                    </div>                    
                    <div className='w-[90px] h-[90px] bg-red-400 cursor-pointer'>
                        <img className='w-full h-full object-fill' src="/images/fad89210-491c-4450-b914-a0fa059f43d3.JPG" alt="" />
                    </div>
                    <div className='w-[90px] h-[90px] bg-red-400 cursor-pointer'>
                        <img className='w-full h-full object-fill' src="/images/ea966a05-dc3b-433c-a56c-c483446b4d1a.JPG" alt="" />
                    </div>
                </div>
            </div>
            <div className='w-[90%] lg:w-[20%] gap-[20px] flex flex-col'>
                <p className='font-bold text-[25px]'>Contacts</p>
                <div className='w-[8%] h-[1px] bg-[#B87333]'></div>
                <div className=''>
                    <p className='text-[18px] md:text-[22px] lg:text-[15px] text-[#252525]'><span className='font-bold'>Phone:</span> +1 (206) 476-3228</p>
                    <p className='text-[18px] md:text-[22px] lg:text-[15px] text-[#252525]'><span className='font-bold'>Email:</span> shotbymoire@gmail.com</p>
                </div>
                <p className='text-[16px] md:text-[20px] lg:text-[15px] text-[#252525]'>Copyright © {year} Shot By Moire. All Rights Reserved.</p>

            </div>
        </div>

    </div>
  )
}

export default Footer