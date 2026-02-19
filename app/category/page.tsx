"use client";

import { useState, useMemo } from "react";
import ProductCard from "@/app/components/productcard";
import { products, type Category } from "@/app/data/productListing";
import Footer from "../components/footer";

const categories: (Category | "all")[] = [
  "all",
  "smartphone",
  "laptop",
  "headphone",
  "smartwatch",
  "camera",
  "gaming",
  "accessory",
];

export default function CategoryPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-28 px-6 md:px-12">

      {/* Heading */}
      <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-14 bg-gradient-to-r from-gray-200 via-white to-gray-400 bg-clip-text text-transparent">
        Explore Products
      </h2>

      {/* Category Tabs (Transparent Premium) */}
      <div className="max-w-7xl mx-auto flex flex-wrap gap-5 justify-center mb-14">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`relative group px-7 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 overflow-hidden border backdrop-blur-md ${
              selectedCategory === cat
                ? "bg-white/10 text-white border-white/20 shadow-md"
                : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white"
            }`}
          >
            {/* subtle glow */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-white/10 to-transparent rounded-full" />

            <span className="relative z-10 tracking-wide">
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </span>
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-3xl"
            >
              {/* soft hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl" />

              <div className="relative z-10 transform transition duration-300 group-hover:scale-[1.03] group-hover:shadow-xl">
                <ProductCard product={product} />
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400 mt-24 text-lg">
            No products found in this category.
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="mt-24">
        <Footer />
      </div>
    </section>
  );
}
