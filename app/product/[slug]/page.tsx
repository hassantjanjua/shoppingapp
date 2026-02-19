"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { products } from "@/app/data/productListing";
import { useCart } from "@/app/context/CartContext";
import Footer from "@/app/components/footer";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const product = products.find((p) => p.slug === slug);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white pt-20">
        Product not found
      </div>
    );

  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* IMAGE */}
          <div className="relative w-full h-[450px] rounded-3xl overflow-hidden group shadow-2xl">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* INFO */}
          <div className="text-white flex flex-col gap-6">

            <span className="text-sm uppercase tracking-widest text-gray-400">
              {product.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold">
              {product.name}
            </h1>

            <p className="text-3xl font-bold">${product.price}</p>

            <p className="text-gray-300 leading-relaxed">
              {product.description}
            </p>

            {/* BADGES SECTION */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <p className="text-sm text-gray-400">Best For</p>
                <p className="font-semibold">Daily Use & Premium Feel</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <p className="text-sm text-gray-400">Quality</p>
                <p className="font-semibold">Top Tier Materials</p>
              </div>
            </div>

            {/* QUANTITY */}
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20"
              >
                -
              </button>

              <span className="text-lg font-semibold">{quantity}</span>

              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20"
              >
                +
              </button>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-6">
              <button
                onClick={() =>
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: quantity,
                  })
                }
                className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-300 transition hover:scale-105"
              >
                Add to Cart ({quantity})
              </button>

              <button
                onClick={() => router.back()}
                className="px-8 py-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition"
              >
                Go Back
              </button>
            </div>

            {/* TRUST INFO */}
            <div className="grid grid-cols-3 gap-4 mt-10 text-center">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-sm text-gray-400">Delivery</p>
                <p className="font-semibold">2–4 Days</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-sm text-gray-400">Warranty</p>
                <p className="font-semibold">7 Day Check</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-sm text-gray-400">Support</p>
                <p className="font-semibold">24/7 Chat</p>
              </div>
            </div>

            {/* VERIFIED STRIP */}
            <div className="flex flex-wrap gap-4 mt-8 text-sm text-gray-400">
              <span>✔ Verified Product</span>
              <span>🚚 Fast Delivery</span>
              <span>🔒 Secure Checkout</span>
            </div>

          </div>
        </div>

        {/* CUSTOMER REVIEWS SECTION */}
        <div className="max-w-6xl mx-auto mt-28">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            What Customers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["Absolutely love it!", "Premium quality feel.", "Worth every penny."].map(
              (review, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-6 backdrop-blur-md hover:scale-105 transition"
                >
                  <p className="text-yellow-400 mb-2">★★★★★</p>
                  <p className="text-gray-300">{review}</p>
                  <p className="mt-4 text-sm text-gray-500">– Verified Buyer</p>
                </div>
              )
            )}
          </div>
        </div>

      </section>

      <Footer />
    </>
  );
}
