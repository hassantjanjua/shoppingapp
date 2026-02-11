"use client";

import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email sent: ${email}\nMessage: ${message}`);
    setEmail("");
    setMessage("");
  };

  return (
    <footer className="bg-black text-white pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

          {/* Logo & Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              {/* Unique H Logo */}
              <svg
                width="48"
                height="48"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rounded-full bg-white p-2"
              >
                <rect width="100" height="100" rx="20" fill="black" />
                <text
                  x="50%"
                  y="55%"
                  textAnchor="middle"
                  fill="white"
                  fontSize="50"
                  fontFamily="Arial, sans-serif"
                  fontWeight="bold"
                  dominantBaseline="middle"
                >
                  H
                </text>
              </svg>

              <span className="text-2xl font-bold">hassantjanjua</span>
            </div>

            <p className="text-gray-300 max-w-md">
              Bringing you the best tech reviews, gadgets, and trending products. Stay updated with latest offers!
            </p>

            {/* Social Media Icons using SVG */}
            <div className="flex gap-4 mt-4 text-lg">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>

              {/* Gmail / Email */}
              <a href="mailto:example@gmail.com" className="hover:text-red-500 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 13.065L0 6.75V18c0 1.105.895 2 2 2h20c1.105 0 2-.895 2-2V6.75l-12 6.315zM12 11L0 4V4c0-1.105.895-2 2-2h20c1.105 0 2 .895 2 2v.001L12 11z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.335 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.335 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.335-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.335-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.773.127 4.593.387 3.6 1.38 2.607 2.373 2.347 3.553 2.29 4.832.232 8.332.22 8.741.22 12s.012 3.668.07 4.948c.058 1.279.318 2.459 1.31 3.452.993.993 2.173 1.253 3.452 1.31 1.28.058 1.689.07 4.948.07s3.668-.012 4.948-.07c1.279-.058 2.459-.318 3.452-1.31.993-.993 1.253-2.173 1.31-3.452.058-1.28.07-1.689.07-4.948s-.012-3.668-.07-4.948c-.058-1.279-.318-2.459-1.31-3.452-.993-.993-2.173-1.253-3.452-1.31C15.668.012 15.259 0 12 0z"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.828 9.828 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.868 9.868 0 0 1-3.127 1.195 4.924 4.924 0 0 0-8.39 4.482A13.978 13.978 0 0 1 1.671 3.149a4.922 4.922 0 0 0 1.523 6.573 4.902 4.902 0 0 1-2.229-.616v.06a4.924 4.924 0 0 0 3.946 4.827 4.935 4.935 0 0 1-2.224.084 4.926 4.926 0 0 0 4.6 3.417A9.868 9.868 0 0 1 0 19.54a13.945 13.945 0 0 0 7.548 2.212c9.056 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.014-.634A10.012 10.012 0 0 0 24 4.557z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 text-white placeholder-white bg-gray-800"
              />
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 text-white placeholder-white bg-gray-800"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} hassantjanjua. All rights reserved.
        </div>
      </div>
    </footer>
  );
}









