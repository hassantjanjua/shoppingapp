"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import { CartDrawer } from "@/app/components/cartdrawer";

export default function Navbar() {
  const router = useRouter();
  const { cartCount } = useCart();

  const [mobileMenu, setMobileMenu] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/category" },
  ];

  return (
    <>
      {/* FLOATING NAVBAR WRAPPER */}
      <div className="fixed top-4 left-0 w-full z-50 px-4 md:px-10">
        <nav className="max-w-7xl mx-auto backdrop-blur-xl bg-black/70 border border-white/10 shadow-2xl rounded-2xl">

          <div className="flex justify-between items-center h-16 px-6">

            {/* LOGO */}
            <div
              className="flex items-center cursor-pointer gap-3 group"
              onClick={() => router.push("/")}
            >
              <div className="w-10 h-10 flex items-center justify-center bg-white text-black font-bold text-lg rounded-full transition group-hover:scale-110">
                H
              </div>
              <span className="font-bold text-xl tracking-wide bg-gradient-to-r from-gray-200 via-white to-gray-400 bg-clip-text text-transparent">
                hassantjanjua.
              </span>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => router.push(item.link)}
                  className="relative text-gray-300 hover:text-white transition font-medium group"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}

              {/* CART */}
              <button
                onClick={() => setDrawerOpen(true)}
                className="relative text-xl text-gray-300 hover:text-white transition"
              >
                🛒
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-3 bg-white text-black rounded-full min-w-[20px] h-5 px-1 flex items-center justify-center text-xs font-semibold animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* MOBILE BUTTON */}
            <button
              className="md:hidden text-2xl text-gray-300 hover:text-white transition"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? "✕" : "☰"}
            </button>
          </div>

          {/* MOBILE MENU */}
          <div
            className={`md:hidden transition-all duration-500 overflow-hidden ${
              mobileMenu ? "max-h-96 py-6" : "max-h-0"
            }`}
          >
            <div className="flex flex-col items-center gap-6">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    router.push(item.link);
                    setMobileMenu(false);
                  }}
                  className="text-gray-300 hover:text-white text-lg transition"
                >
                  {item.name}
                </button>
              ))}

              <button
                onClick={() => {
                  setDrawerOpen(true);
                  setMobileMenu(false);
                }}
                className="relative text-gray-300 hover:text-white text-lg transition"
              >
                🛒 Cart
                {cartCount > 0 && (
                  <span className="ml-2 bg-white text-black px-2 py-0.5 rounded-full text-xs">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

        </nav>
      </div>

      {/* CART DRAWER */}
      <CartDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}
