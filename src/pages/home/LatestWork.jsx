import React, { useState } from 'react'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


function LatestWork() {
  const images = [
  "/images/0a65d3ea-23df-4f5d-8438-bcd95ba4e6ef.JPG",
  "/images/1f3a3d47-9158-404b-8f72-b4e50c7852ed.JPG",
  "/images/02ca54c6-8057-45f7-8b7d-8daf0dba6b2d.JPG",
  "/images/2b1b71b5-7f30-4d2e-a652-d22de6de3679.JPG",
  "/images/7ceff2f4-d87f-4578-9dd8-e6ccf0088acb.JPG",
  "/images/8d276812-95f5-40cb-90c7-5b924f426960.JPG",
  "/images/09e4acb3-4486-41d8-8bcc-c903020280c8.JPG",
  "/images/9af74baf-f76c-446d-bc70-86552dc4acc5.JPG",
  "/images/9eac0f1b-7dfe-4d48-8a0e-a886b2dda70c.JPG",
  "/images/18b27010-98f6-4746-8e0c-9d00c6d4c729.JPG",
  "/images/20a03917-5f06-45ac-98b4-4cc16337f0a5.JPG",
  "/images/133caba2-31ae-4281-aedc-bdada5ff1cf8.JPG",
  "/images/192d168a-2996-460c-a3d2-bda73d63051a.JPG",
  "/images/665c9fb6-2f36-46ec-8601-90cb04aa621a.JPG",
  "/images/673aa667-c83f-43db-a340-66002fab4894.JPG",
  // "/images/880e6835-24d5-499e-ad8a-d8cc213896dc.JPG",
  // "/images/37906afe-b457-4851-a59c-25bc9dc9eee3.JPG",
  // "/images/6312fd22-aa89-4cd2-8f70-f273b6efc235.JPG",
  // "/images/a4cbabd5-100c-4e3e-83b6-c51eba83510e.JPG",
  // "/images/a95b9a6f-e5ef-4cb8-afcf-efb2e1c80c2a.JPG",
  // "/images/b3200fcf-e714-4004-990b-d888630ab730.JPG",
  // "/images/c0188a35-169f-4dee-8e4f-26d743005ced.JPG",
  // "/images/d62c642c-8a0a-4398-9948-f74bdd07481b.JPG",
  // "/images/ea966a05-dc3b-433c-a56c-c483446b4d1a.JPG",
  // "/images/f1b9e973-25b1-4421-b536-73190c8110f1.JPG",
  // "/images/f65f94db-0115-4088-a380-a9f51ba4f2be.JPG",
  // "/images/f8261545-d999-414e-a9f1-b3ff972851ef.JPG",
  // "/images/fad89210-491c-4450-b914-a0fa059f43d3.JPG",
  // "/images/fd6efe33-bd99-430f-b34d-50b2d37b2013.JPG",
];


  const [index, setIndex] = useState(-1);
  return (
    <div className="px-8 py-12 flex flex-col items-center justify-center gap-[50px]">
     <div className='flex flex-col items-center justify-center gap-[10px] '>
        <p className='text-[40px] font-bold text-black'>Latest <span className='text-[#B87333]'>Works</span></p>
        <div className='w-[10%] h-[1px] bg-black'></div>
     </div>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-6 gap-4">
        {images.map((src, i) => (
          <div key={i} className="mb-4 break-inside-avoid">
             <img
            key={i}
            src={src}
            alt=""
            className="cursor-pointer"
            onClick={() => setIndex(i)}
          />
          </div>
        ))}
      </div>
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map(src => ({ src }))}
      />
      {/* <p className='text-[#B87333] text-[20px] cursor-pointer underline'>VIEW MORE </p> */}
      <a href='/gallery' className='text-[#B87333] text-[18px] cursor-pointer underline'>VIEW MORE </a>


    </div>
  )
}

export default LatestWork