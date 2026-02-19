"use client";

import Link from "next/link";

interface Category {
  id: number;
  name: string;
  image: string;
  value:
    | "smartphone"
    | "laptop"
    | "headphone"
    | "smartwatch"
    | "camera"
    | "gaming"
    | "accessory";
}

const categories: Category[] = [
  { id: 1, name: "Smartphones", image: "/images.jpg", value: "smartphone" },
  { id: 2, name: "Laptops & Computers", image: "/macbook-pro__bmu4mp5lxjiq_og.png", value: "laptop" },
  { id: 3, name: "Headphones & Earbuds", image: "/airpods-max-select-202409-midnight_FV1_976x.webp", value: "headphone" },
  { id: 4, name: "Smart Watches", image: "/images (3).jpg", value: "smartwatch" },
  { id: 5, name: "Cameras", image: "/OPG-Blog-Best-Professional-Canon-Cameras-That-Should-Be-On-Every-Photographers-List-10-12-2023-scaled.jpg", value: "camera" },
  { id: 6, name: "Gaming", image: "/MSI-Gaming-PC_2024-09-30.png", value: "gaming" },
];

export default function Categories() {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-gray-200 via-white to-gray-400 bg-clip-text text-transparent">
          Shop by Categories
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-20">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category?cat=${category.value}`}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 text-center transition duration-500 hover:scale-105 hover:border-white/30 hover:shadow-2xl"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-gray-800/40 to-gray-700/20"></div>

              {/* Image */}
              <div className="relative w-28 h-28 mx-auto mb-6 overflow-hidden rounded-2xl bg-gray-800">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <p className="relative font-semibold text-gray-200 group-hover:text-white transition">
                {category.name}
              </p>
            </Link>
          ))}
        </div>

        {/* Shop Now Button */}
        <div className="text-center">
          <Link
            href="/category?cat=all"
            className="inline-block px-14 py-4 rounded-full bg-white text-black font-semibold transition duration-300 hover:bg-gray-300 hover:scale-105 shadow-lg"
          >
            Shop Now
          </Link>
        </div>

      </div>
    </section>
  );
}
