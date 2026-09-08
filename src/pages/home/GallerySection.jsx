import React from "react"; 
import { Link, useParams } from "react-router-dom"; 
import { works, slugify, getCategories, getWorksByCategorySlug } from "../gallery/works-data"; 
 
 
export default function GallerySection() { 
  const { categorySlug } = useParams(); 
  const categories = getCategories(); 
  const activeCategory = categories.find((c) => slugify(c) === categorySlug); 
  const items = getWorksByCategorySlug(categorySlug); 
 
  return ( 
    <section className="min-h-screen bg-[#ededf0] px-6 py-16 md:px-10"> 
      <div className="mx-auto max-w-6xl"> 
        {/* Back to all works */} 
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-neutral-600 transition-colors hover:text-[#B87333]" 
        > 
          <span aria-hidden="true">&larr;</span> Back to Works 
        </Link> 
 
        {/* Category title + count */} 
        <h1 className="mt-6 text-5xl font-black uppercase leading-none tracking-tight text-neutral-900 md:text-7xl"> 
          {activeCategory || "Not found"} 
        </h1> 
        <p className="mt-2 text-neutral-500"> 
          {items.length} {items.length === 1 ? "piece" : "pieces"} 
        </p> 
 
        {/* Jump to another category */} 
        <div className="mt-8 flex flex-wrap gap-2"> 
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
 
        {/* Gallery grid for this category */} 
        {items.length > 0 ? ( 
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"> 
            {items.map((item) => ( 
              <div key={item.id} className="group overflow-hidden bg-neutral-200"> 
                <div className="aspect-[4/5] overflow-hidden"> 
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  /> 
                </div> 
                <div className="p-4"> 
                  <h3 className="text-lg font-bold text-neutral-900">{item.title}</h3> 
                  <p className="mt-1 text-sm text-neutral-500">{item.description}</p> 
                </div> 
              </div> 
            ))} 
          </div> 
        ) : ( 
          <p className="mt-10 text-neutral-500"> 
            No works found in this category yet. 
          </p> 
        )} 
      </div> 
    </section> 
  ); 
} 
