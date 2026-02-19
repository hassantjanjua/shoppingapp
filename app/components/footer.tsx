"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email sent: ${email}\nMessage: ${message}`);
    setEmail("");
    setMessage("");
  };

  const categories = [
    { name: "Smartphones", link: "/category?cat=smartphone" },
    { name: "Laptops", link: "/category?cat=laptop" },
    { name: "Headphones", link: "/category?cat=headphone" },
    { name: "Smart Watches", link: "/category?cat=smartwatch" },
    { name: "Cameras", link: "/category?cat=camera" },
    { name: "Gaming", link: "/category?cat=gaming" },
  ];

  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-white pt-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/10">

          {/* BRAND */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center bg-white text-black font-bold text-xl rounded-full">
                H
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-200 via-white to-gray-400 bg-clip-text text-transparent">
                hassantjanjua
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering premium tech gadgets with global standards,
              innovation, and reliability. Your trusted tech partner.
            </p>

            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-white transition">Facebook</a>
              <a href="#" className="hover:text-white transition">Instagram</a>
              <a href="#" className="hover:text-white transition">Twitter</a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <button onClick={() => router.push("/")} className="hover:text-white transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => router.push("/category")} className="hover:text-white transition">
                  Shop
                </button>
              </li>
              <li>
                <button onClick={() => router.push("/category?cat=all")} className="hover:text-white transition">
                  All Products
                </button>
              </li>
            </ul>
          </div>

          {/* CATEGORIES */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Categories
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <button
                    onClick={() => router.push(cat.link)}
                    className="hover:text-white transition"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT FORM */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Contact Us
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-white transition"
              />

              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-white transition"
              />

              <button
                type="submit"
                className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-300 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <span>
            © {new Date().getFullYear()} hassantjanjua. All rights reserved.
          </span>

          <div className="flex gap-6 mt-4 md:mt-0">
            <button className="hover:text-white transition">Privacy Policy</button>
            <button className="hover:text-white transition">Terms of Service</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
