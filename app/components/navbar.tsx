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
    <nav className="fixed top-0 w-full z-50 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4">
        {/* Logo + Name */}
        <div
          className="flex items-center cursor-pointer gap-2"
          onClick={() => router.push("/")}
        >
          {/* Black & White H Logo */}
          <div className="w-10 h-10 flex items-center justify-center bg-white text-black font-bold text-lg rounded-full shadow-md">
            H
          </div>

          {/* Name */}
          <span className="font-bold text-xl tracking-wide hover:text-gray-400 transition">
            hassantjanjua.
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => router.push(item.link)}
              className="hover:text-gray-400 transition font-medium"
            >
              {item.name}
            </button>
          ))}

          {/* Cart Button */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="relative hover:text-gray-400 transition text-lg"
          >
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="absolute top-16 right-0 bg-black w-full flex flex-col items-start p-4 space-y-2 md:hidden border-t border-gray-700">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  router.push(item.link);
                  setMobileMenu(false);
                }}
                className="text-white hover:text-gray-400 transition py-1"
              >
                {item.name}
              </button>
            ))}

            {/* Cart Button in Mobile Menu */}
            <button
              onClick={() => {
                setDrawerOpen(true);
                setMobileMenu(false);
              }}
              className="relative mt-2 text-white hover:text-gray-400 transition py-1"
            >
              🛒 Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Cart Drawer */}
      <CartDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </nav>
  );
}
