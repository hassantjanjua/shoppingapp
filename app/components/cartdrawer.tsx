"use client";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, total } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    onClose(); // drawer close
    router.push("/checkout"); // navigate to checkout page
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-lg p-4 transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-black">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-white bg-black px-3 py-1 rounded border border-black hover:bg-white hover:text-black transition"
          >
            ×
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <p className="text-gray-500">Cart is empty</p>
        ) : (
          <ul className="space-y-3 overflow-y-auto max-h-[55vh]">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex flex-col text-black">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm">${item.price} x {item.quantity}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-2 bg-gray-500 text-black rounded hover:bg-gray-600 transition"
                  >
                    ×
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Total & Buttons */}
        <div className="mt-4 flex flex-col gap-2">
          <p className="font-bold mb-2 text-black">Total: ${total}</p>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full py-2 rounded border border-black bg-black text-white hover:bg-white hover:text-black transition"
          >
            Close
          </button>

          {/* Checkout Button */}
          <button
            onClick={handleCheckout}
            className="w-full py-2 rounded border border-black bg-black text-white hover:bg-white hover:text-black transition"
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
