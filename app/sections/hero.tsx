"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRouter } from "next/navigation";

import "swiper/css";

const slides = [
  {
    id: 1,
    image: "/apple-macbook-pro-13-inch-retina-display-2015_6ebc.jpg",
    tag: "🔥 New Arrival",
    title: "MacBook Pro",
    subtitle: "Smart devices for your daily life",
    off: "30% OFF",
    link: "/product/macbook-pro",
  },
  {
    id: 2,
    image: "/Apple-iPhone-15-release-date-price-and-features.jpg",
    tag: "⚡ Limited Offer",
    title: "Iphone 15 PTA Approved",
    subtitle: "Best deals on trending products",
    off: "50% OFF",
    link: "/product/iphone-15",
  },
  {
    id: 3,
    image: "/iPhone-17-Plus-Feature.jpg",
    tag: "⭐ Exclusive",
    title: "Iphone 17 Plus Non PTA",
    subtitle: "Quality you can trust",
    off: "40% OFF",
    link: "/product/iphone-17-plus",
  },
];

const Hero = () => {
  const router = useRouter();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // max 10px left/right
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20; // max 10px up/down
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section className="w-full h-screen">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        slidesPerView={1}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-screen overflow-hidden"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Fullscreen Image with mouse parallax */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out"
                style={{
                  transform: `scale(1.05) translateX(${mousePos.x}px) translateY(${mousePos.y}px)`,
                }}
              />

              {/* Dark overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center px-6 md:px-20">
                <div className="max-w-xl text-white">
                  <span className="inline-block mb-3 px-4 py-1 text-sm bg-black/70 rounded-full">
                    {slide.tag}
                  </span>

                  <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3 drop-shadow-lg">
                    {slide.title}
                  </h1>

                  <p className="text-lg opacity-90 mb-4 drop-shadow-sm">
                    {slide.subtitle}
                  </p>

                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-2xl font-bold text-red-400 drop-shadow-md">
                      {slide.off}
                    </span>
                    <span className="text-sm line-through opacity-70">
                      Original Price
                    </span>
                  </div>

                  {/* Functional Shop Now Button */}
                  <button
                    onClick={() => router.push(slide.link)}
                    className="px-7 py-3 bg-black hover:bg-gray-700 transition rounded-lg font-semibold"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
