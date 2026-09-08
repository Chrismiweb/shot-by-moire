// // import React, { useState } from 'react'
// // import Lightbox from "yet-another-react-lightbox";
// // import "yet-another-react-lightbox/styles.css";


// // function Gallery() {
// //   const images = [
// //         "/image/latestOne.jpeg",
// //     "/image/latestTwo.jpeg",
// //     "/image/latestThree.jpeg",
// //     "/image/latestFour.jpeg",
// //     "/image/latestFive.jpeg",
// //     "/image/latestSix.jpeg",
// //     "/image/latestSeven.jpeg",
// //     "/image/latestEight.jpeg",
// //     "/image/latestNine.jpeg",
// //     "/newimage/photo_2026-06-15_11-54-22.jpg",
// //     "/newimage/photo_2026-06-15_11-53-36.jpg",
// //     "/newimage/photo_2026-06-15_11-53-41.jpg",
// //     "/newimage/photo_2026-06-15_11-53-50.jpg",
// //     "/newimage/photo_2026-06-15_11-53-57.jpg",
// //     "/newimage/photo_2026-06-15_11-54-06.jpg",
// //     "/images/weddingpics10.jpeg",
// //         "/images/weddingpics1.jpeg",
// //       "/images/weddingpics2.jpeg",
// //       "/images/weddingpics3.jpeg",
// //       "/images/weddingpics4.jpeg",
// //       "/images/weddingpics5.jpeg",
// //       "/images/weddingpics6.jpeg",
// //       "/images/weddingpics7.jpeg",
// //       "/images/weddingpics8.jpeg",
// //       "/images/weddingpics9.jpeg",
// //   "/images/0a65d3ea-23df-4f5d-8438-bcd95ba4e6ef.JPG",
// //   "/images/1f3a3d47-9158-404b-8f72-b4e50c7852ed.JPG",
// //   "/images/02ca54c6-8057-45f7-8b7d-8daf0dba6b2d.JPG",
// //   // "/images/2b1b71b5-7f30-4d2e-a652-d22de6de3679.JPG",
// //   "/images/7ceff2f4-d87f-4578-9dd8-e6ccf0088acb.JPG",
// //   "/images/8d276812-95f5-40cb-90c7-5b924f426960.JPG",
// //   "/images/09e4acb3-4486-41d8-8bcc-c903020280c8.JPG",
// //   "/images/9af74baf-f76c-446d-bc70-86552dc4acc5.JPG",
// //   "/images/9eac0f1b-7dfe-4d48-8a0e-a886b2dda70c.JPG",
// //   "/images/18b27010-98f6-4746-8e0c-9d00c6d4c729.JPG",
// //   "/images/20a03917-5f06-45ac-98b4-4cc16337f0a5.JPG",
// //   "/images/133caba2-31ae-4281-aedc-bdada5ff1cf8.JPG",
// //   "/images/192d168a-2996-460c-a3d2-bda73d63051a.JPG",
// //   "/images/665c9fb6-2f36-46ec-8601-90cb04aa621a.JPG",
// //   "/newimage/photo_2026-06-15_11-55-20.jpg",
// //   "/newimage/photo_2026-06-15_11-54-30.jpg",
// //   "/newimage/photo_2026-06-15_11-54-40.jpg",
// //   "/newimage/photo_2026-06-15_11-54-50.jpg",
// //   "/newimage/photo_2026-06-15_11-55-02.jpg",
// //   "/newimage/photo_2026-06-15_11-55-10.jpg",
// //   "/images/673aa667-c83f-43db-a340-66002fab4894.JPG",
// //   "/images/880e6835-24d5-499e-ad8a-d8cc213896dc.JPG",
// //   "/images/37906afe-b457-4851-a59c-25bc9dc9eee3.JPG",
// //   "/images/6312fd22-aa89-4cd2-8f70-f273b6efc235.JPG",
// //   "/images/a4cbabd5-100c-4e3e-83b6-c51eba83510e.JPG",
// //   "/images/a95b9a6f-e5ef-4cb8-afcf-efb2e1c80c2a.JPG",
// //   "/images/b3200fcf-e714-4004-990b-d888630ab730.JPG",
// //   "/images/c0188a35-169f-4dee-8e4f-26d743005ced.JPG",
// //   "/images/d62c642c-8a0a-4398-9948-f74bdd07481b.JPG",
// //   "/images/ea966a05-dc3b-433c-a56c-c483446b4d1a.JPG",
// //   "/images/f1b9e973-25b1-4421-b536-73190c8110f1.JPG",
// //   "/images/f65f94db-0115-4088-a380-a9f51ba4f2be.JPG",
// //   "/images/f8261545-d999-414e-a9f1-b3ff972851ef.JPG",
// //   "/images/fad89210-491c-4450-b914-a0fa059f43d3.JPG",
// //   "/images/fd6efe33-bd99-430f-b34d-50b2d37b2013.JPG",
// //   "/newimage/photo_2026-06-15_11-55-38.jpg",
// //   "/newimage/photo_2026-06-15_11-55-29.jpg",
// //   "/image/0b0850ec-1d76-44fe-8450-8a631436e35a.JPG",
// //   "/image/2f6327be-5598-47a4-8801-1736d6acc109.JPG",
// //   "/image/3c00f440-96c3-4102-89b6-d69adf2fadfd.JPG",
// //   "/image/3d6a10aa-d312-425f-b57a-5f77641b2ca4.JPG",
// //   "/image/3d12ba15-f877-43f8-8bda-53749ab58e80.JPG",
// //   "/image/5accc466-93f5-4a73-aefe-b1e7ab7a319d.JPG",
// //   "/image/41f19f37-03fc-4762-9abe-c7ae39441162.JPG",
// //   "/image/49c0756d-a2da-4496-a0f4-aeef2869f1bf.JPG",
// //   "/image/817d7871-66ee-4ebe-aaae-9e7162574343.JPG",
// //   "/image/02255793-a5fd-4921-8ec3-5edca1d367e7.JPG",
// //   "/image/37201755-3a0a-471c-8638-650fa798c5d7.JPG",
// //   "/image/88060233-64f5-49c7-86cb-48d23395f6ab.JPG",
// //   "/image/ab21afcf-a37d-45c1-b74b-6548a5f10b19.JPG",
// //   "/image/b61e5ad2-06dc-4849-ba1c-7c31acf8f770.JPG",
// //   "/image/c66d319f-98da-4e0c-bbcc-d22c43aa0125.JPG",
// //   "/image/e50d717c-2f00-494a-bd3c-f44e5966fd4f.JPG",
// //   "/image/e423dc1b-59b1-4b43-96e8-89a650d7a69c.JPG",
// //   "/image/f2cab810-a028-4776-85f7-84978cdbe3d7.JPG",

// // ];


// //   const [index, setIndex] = useState(-1);
// //   return (
// //     <div className="px-8 py-12 flex flex-col items-center justify-center gap-[50px]">
// //      <div className='flex flex-col items-center justify-center gap-[10px] '>
// //         <p className='text-[40px] font-bold text-black'>Gallery</p>
// //         <div className='w-[20%] h-[1px] bg-black'></div>
// //      </div>
// //       <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-6 gap-4">
// //         {images.map((src, i) => (
// //           <div key={i} className="mb-4 break-inside-avoid">
// //              <img
// //             key={i}
// //             src={src}
// //             alt=""
// //             className="cursor-pointer"
// //             onClick={() => setIndex(i)}
// //           />
// //           </div>
// //         ))}
// //       </div>
// //       <Lightbox
// //         open={index >= 0}
// //         index={index}
// //         close={() => setIndex(-1)}
// //         slides={images.map(src => ({ src }))}
// //       />
// //       {/* <a href='/gallery' className='text-[#B87333] text-[20px] cursor-pointer underline'>VIEW MORE </a> */}

// //     </div>
// //   )
// // }

// // export default Gallery




// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import { works, slugify, getCategories, getWorksByCategorySlug } from "./works-data";



// /**
//  * GalleryPage
//  * Shown at /works/:categorySlug — displays every piece in that category.
//  *
//  * - "Back to Works" always returns to the home grid.
//  * - The category pill bar lets the visitor jump straight to any other
//  *   category without going back through the home page first.
//  */
// export default function Gallery() {
//   const { categorySlug } = useParams();
//   const categories = getCategories();
//   const activeCategory = categories.find((c) => slugify(c) === categorySlug);
//   const items = getWorksByCategorySlug(categorySlug);

//   return (
//     <section className="min-h-screen bg-[#ededf0] px-6 py-16 md:px-10">
//       <div className="mx-auto max-w-6xl">
//         {/* Back to all works */}
//         <Link
//           to="/"
//           className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-neutral-600 transition-colors hover:text-[#B87333]"
//         >
//           <span aria-hidden="true">&larr;</span> Back to Works
//         </Link>

//         {/* Category title + count */}
//         <h1 className="mt-6 text-5xl font-black uppercase leading-none tracking-tight text-neutral-900 md:text-7xl">
//           {activeCategory || "Not found"}
//         </h1>
//         <p className="mt-2 text-neutral-500">
//           {items.length} {items.length === 1 ? "piece" : "pieces"}
//         </p>

//         {/* Jump to another category */}
//         <div className="mt-8 flex flex-wrap gap-2">
//           {categories.map((cat) => {
//             const slug = slugify(cat);
//             const isActive = slug === categorySlug;
//             return (
//               <Link
//                 key={cat}
//                 to={`/works/${slug}`}
//                 className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
//                   isActive
//                     ? "bg-neutral-900 text-white"
//                     : "bg-white text-neutral-700 hover:bg-neutral-900 hover:text-white"
//                 }`}
//               >
//                 {cat}
//               </Link>
//             );
//           })}
//         </div>

//         {/* Gallery grid for this category */}
//         {items.length > 0 ? (
//           <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {items.map((item) => (
//               <div key={item.id} className="group overflow-hidden bg-neutral-200">
//                 <div className="aspect-[4/5] overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                   />
//                 </div>
//                 <div className="p-4">
//                   <h3 className="text-lg font-bold text-neutral-900">{item.title}</h3>
//                   <p className="mt-1 text-sm text-neutral-500">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="mt-10 text-neutral-500">
//             No works found in this category yet.
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }



// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import {
//   works,
//   slugify,
//   getCategories,
//   getWorksByCategorySlug,
// } from "../gallery/works-data";

// export default function Gallery() {

//   const [selectedIndex, setSelectedIndex] = React.useState(null);

// const isLightboxOpen = selectedIndex !== null;

//   const items = isAllImages
//   ? works.flatMap((work) =>
//       work.images?.map((image, index) => ({
//         ...work,
//         id: `${work.id}-${index}`,
//         image,
//       })) || []
//     )
//   : getWorksByCategorySlug(categorySlug);

// const selectedItem =
//   isLightboxOpen ? items[selectedIndex] : null;

// const showPrevious = () => {
//   setSelectedIndex((current) =>
//     current === 0 ? items.length - 1 : current - 1
//   );
// };

// const showNext = () => {
//   setSelectedIndex((current) =>
//     current === items.length - 1 ? 0 : current + 1
//   );
// };

//   const { categorySlug } = useParams();

//   const categories = getCategories();

//   // If there is no category slug, show all works
//   const isAllImages = !categorySlug;

//   const activeCategory = categories.find(
//     (c) => slugify(c) === categorySlug
//   );

//   React.useEffect(() => {
//   if (!isLightboxOpen) return;

//   const handleKeyDown = (event) => {
//     if (event.key === "Escape") {
//       setSelectedIndex(null);
//     }

//     if (event.key === "ArrowLeft") {
//       showPrevious();
//     }

//     if (event.key === "ArrowRight") {
//       showNext();
//     }
//   };

//   window.addEventListener("keydown", handleKeyDown);

//   return () => {
//     window.removeEventListener("keydown", handleKeyDown);
//   };
// }, [isLightboxOpen, items.length]);




//   return (
//     <section className="min-h-screen bg-[#ededf0] px-6 pt-[120px] py-16 md:px-10">
//       <div className="mx-auto max-w-6xl">

//         {/* Page title */}
//         <h1 className="text-5xl font-black uppercase leading-none tracking-tight text-neutral-900 md:text-7xl">
//           {isAllImages ? "All Images" : activeCategory || "Not found"}
//         </h1>

//         <p className="mt-2 text-neutral-500">
//           {items.length} {items.length === 1 ? "piece" : "pieces"}
//         </p>

//         {/* Category navigation */}
//       <div className="mt-8 flex flex-wrap gap-2">

//           {/* All Images */}
//           <Link
//             to="/gallery"
//             className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
//               !categorySlug
//                 ? "bg-neutral-900 text-white"
//                 : "bg-white text-neutral-700 hover:bg-neutral-900 hover:text-white"
//             }`}
//           >
//             All Images
//           </Link>

//           {/* Categories */}
//           {categories.map((cat) => {
//             const slug = slugify(cat);
//             const isActive = slug === categorySlug;

//             return (
//               <Link
//                 key={cat}
//                 to={`/gallery/${slug}`}
//                 className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
//                   isActive
//                     ? "bg-neutral-900 text-white"
//                     : "bg-white text-neutral-700 hover:bg-neutral-900 hover:text-white"
//                 }`}
//               >
//                 {cat}
//               </Link>
//             );
//           })}

//         </div>

//         {/* Gallery */}
//         {items.length > 0 ? (
//           <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {items.map((item, index) => (
//           <button
//               key={item.id}
//               type="button"
//               onClick={() => setSelectedIndex(index)}
//               className="group relative block w-full overflow-hidden text-left"
//             >
//                 {/* Image */}
//                 <div className="aspect-[4/5] overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                   />
//                 </div>
//            </button>
//             ))}
//           </div>
//         ) : (
//           <p className="mt-10 text-neutral-500">
//             No works found in this category yet.
//           </p>
//         )}

//       </div>

//       {isLightboxOpen && selectedItem && (
//   <div
//     className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
//     onClick={() => setSelectedIndex(null)}
//   >
//     {/* Close button */}
//     <button
//       type="button"
//       onClick={() => setSelectedIndex(null)}
//       className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center text-3xl text-white transition-opacity hover:opacity-60"
//       aria-label="Close gallery"
//     >
//       ×
//     </button>

//     {/* Previous */}
//     <button
//       type="button"
//       onClick={(e) => {
//         e.stopPropagation();
//         showPrevious();
//       }}
//       className="absolute left-3 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center text-4xl text-white transition-opacity hover:opacity-60 md:left-8"
//       aria-label="Previous image"
//     >
//       ←
//     </button>

//     {/* Image */}
//     <div
//       className="relative flex h-full w-full items-center justify-center"
//       onClick={(e) => e.stopPropagation()}
//     >
//       <img
//         src={selectedItem.image}
//         alt={selectedItem.title}
//         className="max-h-[90vh] max-w-[90vw] object-contain"
//       />
//     </div>

//     {/* Next */}
//     <button
//       type="button"
//       onClick={(e) => {
//         e.stopPropagation();
//         showNext();
//       }}
//       className="absolute right-3 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center text-4xl text-white transition-opacity hover:opacity-60 md:right-8"
//       aria-label="Next image"
//     >
//       →
//     </button>

//     {/* Image counter */}
//     <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs font-medium uppercase tracking-widest text-white/70">
//       {selectedIndex + 1} / {items.length}
//     </div>
//   </div>
// )}
//     </section>
//   );
// }


import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  works,
  slugify,
  getCategories,
  getWorksByCategorySlug,
} from "../gallery/works-data";

export default function Gallery() {
  const { categorySlug } = useParams();

  const categories = getCategories();

  // If there is no category slug, show all images
  const isAllImages = !categorySlug;

  const activeCategory = categories.find(
    (c) => slugify(c) === categorySlug
  );

  // Get gallery items
  const items = isAllImages
    ? works.flatMap(
        (work) =>
          work.images?.map((image, index) => ({
            ...work,
            id: `${work.id}-${index}`,
            image,
          })) || []
      )
    : getWorksByCategorySlug(categorySlug);

  // -------------------------
  // LIGHTBOX
  // -------------------------

  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const isLightboxOpen = selectedIndex !== null;

  const selectedItem = isLightboxOpen
    ? items[selectedIndex]
    : null;

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === 0 ? items.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === items.length - 1 ? 0 : current + 1
    );
  };

  // Keyboard controls
  React.useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, items.length]);

  return (
    <section className="min-h-screen bg-[#ededf0] px-6 pt-[120px] py-16 md:px-10">
      <div className="mx-auto max-w-6xl">

        {/* Page title */}
        <h1 className="text-5xl font-black uppercase leading-none tracking-tight text-neutral-900 md:text-7xl">
          {isAllImages ? "All Images" : activeCategory || "Not found"}
        </h1>

        <p className="mt-2 text-neutral-500">
          {items.length}{" "}
          {items.length === 1 ? "piece" : "pieces"}
        </p>

        {/* Category navigation */}
        <div className="mt-8 flex flex-wrap gap-2">

          {/* All Images */}
          <Link
            to="/gallery"
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
              !categorySlug
                ? "bg-neutral-900 text-white"
                : "bg-white text-neutral-700 hover:bg-neutral-900 hover:text-white"
            }`}
          >
            All Images
          </Link>

          {/* Categories */}
          {categories.map((cat) => {
            const slug = slugify(cat);
            const isActive = slug === categorySlug;

            return (
              <Link
                key={cat}
                to={`/gallery/${slug}`}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
                  isActive
                    ? "bg-neutral-900 text-white"
                    : "bg-white text-neutral-700 hover:bg-neutral-900 hover:text-white"
                }`}
              >
                {cat}
              </Link>
            );
          })}
        </div>

        {/* Gallery */}
        {items.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {items.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group relative block w-full overflow-hidden text-left"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full cursor-pointer object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </button>
            ))}

          </div>
        ) : (
          <p className="mt-10 text-neutral-500">
            No works found in this category yet.
          </p>
        )}

      </div>

      {/* =========================
          LIGHTBOX
      ========================= */}
      {isLightboxOpen && selectedItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
          onClick={() => setSelectedIndex(null)}
        >

          {/* Close */}
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center text-3xl text-white transition-opacity hover:opacity-60"
            aria-label="Close gallery"
          >
            ×
          </button>

          {/* Previous */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrevious();
            }}
            className="absolute left-3 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center text-4xl text-white transition-opacity hover:opacity-60 md:left-8"
            aria-label="Previous image"
          >
            ←
          </button>

          {/* Selected image */}
          <div
            className="relative flex h-full w-full items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="max-h-[90vh] max-w-[85vw] object-contain"
            />
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-3 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center text-4xl text-white transition-opacity hover:opacity-60 md:right-8"
            aria-label="Next image"
          >
            →
          </button>

          {/* Counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs font-medium uppercase tracking-widest text-white/70">
            {selectedIndex + 1} / {items.length}
          </div>

        </div>
      )}
    </section>
  );
}