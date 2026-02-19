"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import type { Product } from "../data/productListing";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4 shadow-md hover:shadow-2xl transition duration-300 overflow-hidden">
      
      {/* Glow Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl" />

      {/* Image */}
      <Link href={`/product/${product.slug}`}>
        <div className="w-full h-48 relative rounded-xl overflow-hidden mb-4 cursor-pointer">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Content */}
      <h3 className="font-semibold text-white group-hover:text-gray-200 transition">
        {product.name}
      </h3>

      <p className="text-gray-400 text-sm line-clamp-2">
        {product.description}
      </p>

      {/* Price + Button */}
      <div className="mt-4 flex justify-between items-center">
        <span className="font-bold text-white">${product.price}</span>

        <button
          onClick={() =>
            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
              quantity: 1,
            })
          }
          className="relative px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md overflow-hidden group-hover:bg-white/20 transition"
        >
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-white/20 to-transparent rounded-full" />
          <span className="relative z-10">Add</span>
        </button>
      </div>
    </div>
  );
}
