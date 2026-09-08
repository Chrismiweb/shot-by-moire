import React from "react";
import { Link } from "react-router-dom";
import { works, slugify } from "../gallery/works-data";




function CategoryTag({ children }) {
  return (
    <a
      href={`/gallery/${slugify(children)}`}
      className="absolute left-4 top-4 z-10 bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-neutral-800 transition-colors hover:bg-[#B87333] hover:text-white"
    >
      {children}
    </a>
  );
}


function CompactCard({
  category,
  title,
  description,
  image,
  aspect = "aspect-[4/3]",
}) {
  return (
    <a
      href={`/gallery/${slugify(category)}`}
      className="group block"
    >
      <div className={`relative overflow-hidden ${aspect} bg-neutral-200`}>
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute left-4 top-4 z-10 bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-neutral-800 transition-colors group-hover:bg-[#B87333] group-hover:text-white">
          {category}
        </div>
      </div>

      <div className="pt-5">
        <h3 className="text-xl font-bold text-neutral-900">
          {title}
        </h3>

        <p className="mt-1 text-sm text-neutral-500">
          {description}
        </p>
      </div>
    </a>
  );
}


function OverlayCard({
  category,
  title,
  description,
  image,
  aspect = "aspect-[3/4]",
}) {
  return (
    <a
      href={`/gallery/${slugify(category)}`}
      className={`group relative block overflow-hidden bg-neutral-200 ${aspect}`}
    >
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div className="absolute left-4 top-4 z-10 bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-neutral-800 transition-colors group-hover:bg-[#B87333] group-hover:text-white">
        {category}
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-6 pt-16">
        <h3 className="text-xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm text-neutral-200">
          {description}
        </p>
      </div>
    </a>
  );
}

// Look up helper so the JSX below stays readable (same items/order as before).
const byId = Object.fromEntries(works.map((w) => [w.id, w]));

export default function MyWork() {
  return (
    <section className="border-t border-neutral-200 bg-[#ededf0] pt-[120px] px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="mb-12 flex items-baseline gap-3 md:mb-16">
          <span className="text-4xl font-black uppercase leading-none tracking-tight text-neutral-900 md:text-8xl">
            Works
          </span>
          <span className="text-4xl font-black uppercase leading-none tracking-tight text-[#B87333] md:text-8xl">
            ({works.length})
          </span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <div className="flex flex-col gap-6 md:gap-8">
            <CompactCard {...byId.eternalVows} aspect="aspect-[4/3]" />
            <OverlayCard {...byId.cityLife} aspect="aspect-[3/4] md:aspect-[4/5]" />
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            <OverlayCard {...byId.goldenHour} aspect="aspect-[3/4] md:aspect-[4/5]" />
            {/* <CompactCard {...byId.morningMist} aspect="aspect-[4/3]" /> */}
            <CompactCard {...byId.newBeginnings} aspect="aspect-[4/3]" />
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            <OverlayCard {...byId.sport} aspect="aspect-[3/4] md:aspect-[4/5]" />
            <CompactCard {...byId.carEnthusiast} aspect="aspect-[4/3]" />
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            <OverlayCard {...byId.theFastLane} aspect="aspect-[3/4] md:aspect-[4/5]" />
          </div>
        </div>
      </div>
    </section>
  );
}

