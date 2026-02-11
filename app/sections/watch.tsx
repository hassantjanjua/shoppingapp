"use client";

import React, { useState } from "react";

export default function Watch() {
  const originalPrice = 499; // Original price
  const discountPercent = 40;
  const discountedPrice = (originalPrice * (100 - discountPercent)) / 100;

  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  // Simulate Add to Cart
  const handleAddToCart = () => {
    console.log(`Added to cart: Apple Series 9 x${quantity}`);
    alert(`Added Apple Series 9 x${quantity} to cart!`);
  };

  // Simulate Buy Now
  const handleBuyNow = () => {
    console.log(`Buy Now clicked: Apple Series 9 x${quantity} for $${(discountedPrice * quantity).toFixed(2)}`);
    alert(`Proceeding to buy Apple Series 9 x${quantity} for $${(discountedPrice * quantity).toFixed(2)}`);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Side - Watch Image */}
          <div className="w-full md:w-1/2 overflow-hidden rounded-2xl relative group">
            <img
              src="/Apple-Watch-S9-double-tap-gesture-230912.jpg.large_2x.jpg"
              alt="Apple Series 9"
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* Right Side - Watch Details */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Apple Series 9
            </h1>

            <p className="text-gray-700 text-lg">
              Experience cutting-edge technology on your wrist with style and elegance.
            </p>

            {/* Price Section */}
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-red-600">
                ${discountedPrice.toFixed(2)}
              </span>
              <span className="line-through text-gray-500">
                ${originalPrice.toFixed(2)}
              </span>
              <span className="bg-yellow-400 text-black px-2 py-1 rounded-lg font-semibold">
                {discountPercent}% OFF
              </span>
            </div>

            {/* Add to Cart + Quantity */}
            <div className="flex items-center gap-4 mt-4">
              {/* Quantity Selector */}
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={decrement}
                  className="px-3 py-2 bg-black text-white font-semibold rounded-l-lg border border-black hover:bg-white hover:text-black transition"
                >
                  -
                </button>
                <span className="px-4 py-2 bg-white text-gray-800 font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={increment}
                  className="px-3 py-2 bg-black text-white font-semibold rounded-r-lg border border-black hover:bg-white hover:text-black transition"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="px-6 py-3 bg-black text-white font-semibold rounded-lg border border-black hover:bg-white hover:text-black transition"
              >
                Add to Cart
              </button>
            </div>

            {/* Buy Now Button */}
            <div className="mt-6">
              <button
                onClick={handleBuyNow}
                className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-white hover:text-black border border-black transition w-full md:w-auto"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
