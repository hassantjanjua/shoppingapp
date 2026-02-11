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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl text-gray-800 font-extrabold text-center mb-14">
          Shop by Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category?cat=${category.value}`}
              className="group bg-white rounded-2xl p-6 shadow hover:shadow-xl transition text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition"
                />
              </div>

              <p className="font-semibold text-gray-800">
                {category.name}
              </p>
            </Link>
          ))}
        </div>

        {/* Shop Now Button — END */}
        <div className="text-center">
          <Link
            href="/category?cat=all"
            className="inline-block px-12 py-4 rounded-full bg-black text-white font-semibold border border-black transition hover:bg-white hover:text-black"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}
