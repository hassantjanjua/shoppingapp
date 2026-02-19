"use client";

import React from "react";

const customerCareTabs = [
  {
    id: 1,
    title: "Free Shipping",
    description:
      "Get your orders delivered quickly and safely to your doorstep at no extra cost.",
    svg: (
      <svg
        width="80"
        height="80"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="25" width="40" height="15" rx="2" />
        <rect x="45" y="30" width="14" height="10" rx="1" />
        <circle cx="15" cy="45" r="5" />
        <circle cx="50" cy="45" r="5" />
        <line x1="60" y1="32" x2="64" y2="32" />
        <line x1="60" y1="37" x2="64" y2="37" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Return & Refund",
    description:
      "Easily return products and get your refund processed hassle-free.",
    svg: (
      <svg
        width="80"
        height="80"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="15" y="20" width="34" height="24" rx="2" />
        <path d="M32 12 v16 h8" />
        <polyline points="40,28 32,36 24,28" />
        <line x1="32" y1="36" x2="32" y2="50" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Customer Support",
    description:
      "Our support team is always ready to help you with any queries or issues.",
    svg: (
      <svg
        width="80"
        height="80"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="32" cy="20" r="8" />
        <path d="M24 20 v10 a8 8 0 0 0 16 0 v-10" />
        <rect x="22" y="30" width="6" height="12" rx="2" />
        <rect x="36" y="30" width="6" height="12" rx="2" />
        <path d="M32 28 v16" />
      </svg>
    ),
  },
];

export default function CustomerCare() {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-gray-200 via-white to-gray-400 bg-clip-text text-transparent">
          Customer Care
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {customerCareTabs.map((tab) => (
            <div
              key={tab.id}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center transition duration-500 hover:scale-105 hover:border-white/30 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="text-gray-300 group-hover:text-white transition duration-500 mb-6">
                {tab.svg}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {tab.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {tab.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
