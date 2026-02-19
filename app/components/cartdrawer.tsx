"use client";

import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, total } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    onClose();
    router.push("/checkout");
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 backdrop-blur-sm bg-black/70 z-40 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-gradient-to-b from-black via-gray-900 to-black text-white z-50 shadow-2xl p-6 transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold tracking-wide">
            Your Cart
          </h2>

          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white hover:text-black transition"
          >
            ✕
          </button>
        </div>

        {/* Empty State */}
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <div className="text-6xl mb-4 opacity-60">🛍</div>
            <p className="text-lg font-semibold mb-2">
              Your cart feels lonely
            </p>
            <p className="text-sm text-gray-400 mb-6">
              Add something amazing to make it happy.
            </p>

            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-300 transition"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <ul className="space-y-5 overflow-y-auto max-h-[55vh] pr-2">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-4 items-center bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-md"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="font-semibold text-sm">
                      {item.name}
                    </p>
                    <p className="text-gray-400 text-xs">
                      ${item.price} × {item.quantity}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-500 transition text-sm"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>

            {/* Footer Section */}
            <div className="mt-6 border-t border-white/10 pt-4">
              <div className="flex justify-between mb-4 text-lg font-semibold">
                <span>Total</span>
                <span>${total}</span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-300 transition hover:scale-105"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
