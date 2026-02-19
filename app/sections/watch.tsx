"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";

export default function Watch() {
  const originalPrice = 499;
  const discountPercent = 40;
  const discountedPrice = (originalPrice * (100 - discountPercent)) / 100;

  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const { addToCart } = useCart();

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // ✅ Add to Cart
  const handleAddToCart = () => {
    addToCart({
      id: 9, // 🔥 FIXED (number instead of string)
      name: "Apple Series 9",
      price: discountedPrice,
      quantity,
      image: "/Apple-Watch-S9-double-tap-gesture-230912.jpg.large_2x.jpg",
    });

    alert(`Added Apple Series 9 x${quantity} to cart!`);
  };

  // ✅ Buy Now
  const handleBuyNow = () => {
    addToCart({
      id: 9, // 🔥 FIXED
      name: "Apple Series 9",
      price: discountedPrice,
      quantity,
      image: "/Apple-Watch-S9-double-tap-gesture-230912.jpg.large_2x.jpg",
    });

    router.push("/checkout");
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Image */}
            <div className="w-full md:w-1/2 overflow-hidden rounded-3xl relative group">
              <img
                src="/Apple-Watch-S9-double-tap-gesture-230912.jpg.large_2x.jpg"
                alt="Apple Series 9"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            {/* Details */}
            <div className="w-full md:w-1/2 flex flex-col gap-6 text-gray-200">
              <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-200 via-white to-gray-400 bg-clip-text text-transparent">
                Apple Series 9
              </h1>

              <p className="text-gray-400 text-lg leading-relaxed">
                Experience cutting-edge technology on your wrist with premium
                performance, health tracking, and seamless connectivity.
              </p>

              {/* Price */}
              <div className="flex items-center gap-4 mt-2">
                <span className="text-3xl font-bold text-white">
                  ${discountedPrice.toFixed(2)}
                </span>
                <span className="line-through text-gray-500">
                  ${originalPrice.toFixed(2)}
                </span>
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold border border-gray-600">
                  {discountPercent}% OFF
                </span>
              </div>

              {/* Quantity */}
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <div className="flex items-center bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
                  <button
                    onClick={decrement}
                    className="px-4 py-2 text-white hover:bg-white hover:text-black transition"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 text-white font-semibold">
                    {quantity}
                  </span>
                  <button
                    onClick={increment}
                    className="px-4 py-2 text-white hover:bg-white hover:text-black transition"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={handleAddToCart}
                  className="px-8 py-3 rounded-xl bg-white text-black font-semibold transition duration-300 hover:bg-gray-300 hover:scale-105 shadow-lg"
                >
                  Add to Cart
                </button>
              </div>

              {/* Buy Now */}
              <div className="mt-6">
                <button
                  onClick={handleBuyNow}
                  className="w-full md:w-auto px-10 py-3 rounded-xl border border-white text-white font-semibold transition duration-300 hover:bg-white hover:text-black hover:scale-105"
                >
                  Buy Now
                </button>
              </div>

              {/* Total */}
              <div className="mt-4 text-gray-400 text-sm">
                Total:{" "}
                <span className="text-white font-semibold">
                  ${(discountedPrice * quantity).toFixed(2)}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
