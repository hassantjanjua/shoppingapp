"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { useRouter } from "next/navigation";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    image: "/apple-macbook-pro-13-inch-retina-display-2015_6ebc.jpg",
    tag: "NEW ARRIVAL",
    title: "MacBook Pro",
    subtitle: "Power. Performance. Perfection.",
    off: "30% OFF",
    link: "/product/macbook-pro",
  },
  {
    id: 2,
    image: "/Apple-iPhone-15-release-date-price-and-features.jpg",
    tag: "LIMITED EDITION",
    title: "iPhone 15 PTA Approved",
    subtitle: "Experience the future today.",
    off: "50% OFF",
    link: "/product/iphone-15",
  },
  {
    id: 3,
    image: "/iPhone-17-Plus-Feature.jpg",
    tag: "EXCLUSIVE",
    title: "iPhone 17 Plus Non PTA",
    subtitle: "Innovation meets elegance.",
    off: "40% OFF",
    link: "/product/iphone-17-plus",
  },
];

const Hero = () => {
  const router = useRouter();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section className="w-full h-[75vh] mt-24 px-6 md:px-12">
      <div className="rounded-3xl overflow-hidden shadow-2xl h-full">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          effect="fade"
          slidesPerView={1}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="relative w-full h-[75vh] overflow-hidden group"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
              >
                {/* Background */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out"
                  style={{
                    transform: `scale(1.05) translateX(${mousePos.x}px) translateY(${mousePos.y}px)`,
                  }}
                />

                {/* Deep Premium Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-3xl px-10 md:px-20 text-white">

                    {/* Tag */}
                    <span className="uppercase tracking-[0.3em] text-xs text-gray-300">
                      {slide.tag}
                    </span>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-extrabold mt-4 leading-tight">
                      {slide.title}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-xl">
                      {slide.subtitle}
                    </p>

                    {/* Offer */}
                    <div className="flex items-center gap-6 mt-6">
                      <span className="text-3xl font-bold text-red-500">
                        {slide.off}
                      </span>
                      <span className="text-gray-400 text-sm">
                        Limited Time Offer
                      </span>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-8">
                      <button
                        onClick={() => router.push(slide.link)}
                        className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 hover:bg-gray-200 transition duration-300"
                      >
                        Shop Now
                      </button>

                      <button className="px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300">
                        Learn More
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
