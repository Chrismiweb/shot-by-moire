// HeroIntro.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaBehance } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa6";

export default function AboutMe() {
  return (
    <section className="relative overflow-hidden bg-white pt-[90px]">
      {/* decorative corner blobs */}
      <div className="pointer-events-none absolute -top-20 -left-24 h-64 w-64 rounded-[60px] bg-[#B87333]" />
      <div className="hidden md:flex pointer-events-none absolute -bottom-28 -right-20 h-72 w-80 rounded-[70px] bg-[#B87333]" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 lg:grid-cols-2 md:items-center md:py-20">
        {/* LEFT: photo + shapes */}
        <div className="relative mx-auto w-full max-w-md">
          {/* pink circle behind person */}
          <div className="absolute left-6 top-8 h-56 w-56 rounded-full bg-[#B87333]" />
          {/* dark blocks behind */}
          <div className="absolute right-8 top-20 h-40 w-24 rounded-md bg-[#0D1A2D]" />
          <div className="absolute -left-8 bottom-6 h-28 w-36 rounded-md bg-[#0D1A2D]" />

          <div className="relative z-10 overflow-hidden rounded-2xl">
            {/* replace with your own image path */}
            <img
              src="/image/unnamed.jpg"
              alt="Portrait"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT: content */}
        <div className="text-[#0E1325]">
          <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
            Hello, I’m{" "}
            <span className="text-[#B87333] bg-clip-text">
              Mo Abdalla
            </span>
          </h1>

          <p className="mt-2 text-xl font-medium text-[#B87333] md:text-2xl">
              PHOTOGRAPHER
          </p>

          <p className="mt-5 max-w-xl md:max-w-3xl lg:max-w-xl text-[19px] md:text-[24px] lg:text-[18px] leading-7 text-slate-600 md:text-base text-justify">
            A passionate photographer, videographer, and editor turning visions into unforgettable visuals. My journey began with a deep admiration for photography and digital marketing, and through dedication and self-teaching, I transformed that passion into a thriving creative career. From capturing timeless portraits to producing cinematic videos, I bring a blend of artistry and precision to every project. My work isn’t just about taking pictures, it’s about telling stories, evoking emotion, and creating lasting impressions. Outside the lens, I’m an athlete and dedicated footballer, carrying the same discipline, focus, and drive from the field into my creative work. Every click, frame, and edit is a step toward making my clients’ ideas come to life. Welcome to my world, where creativity meets commitment.
          </p>

          <div className="mt-7 flex flex-col items-start gap-6 ">
            <a
              href="/contact"
              className="inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              GET IN TOUCH!
            </a>
            <div className="text-sm text-slate-600 z-99">
              <div className="font-medium text-[19px] md:text-[24px] lg:text-[18px]">studio@shotbymoire.com</div>
              <div className="mt-2 flex items-center text-[20px] gap-3 text-white">
                <a
                  href="https://www.instagram.com/shotbymoire?igsh=c2g1c3U1dGwxaGRr&utm_source=qr"
                  className="grid h-9 w-9 place-items-center rounded-full bg-black hover:opacity-90 transition"
                >
                  <AiFillInstagram />
                </a>
                <a
                  href="https://www.tiktok.com/@shotbymoire?_r=1&_t=ZT-91Cvwxne4ud"
                  className="grid h-9 w-9 place-items-center rounded-full bg-black hover:opacity-90 transition"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
