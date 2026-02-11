"use client";

import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";

export default function CheckoutPage() {
  const { cart, total, clearCart } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async () => {
    if (!form.name || !form.email || !form.address || !form.phone) {
      alert("Please fill all fields!");
      return;
    }
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/sendOrderEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customer: form, items: cart, total }),
      });

      if (res.ok) {
        setSuccess(true);
        clearCart();
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send order. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section className="min-h-screen bg-gray-50 pt-20 px-6 flex justify-center items-center">
        <div className="bg-white p-8 rounded-xl shadow text-center max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-black">Thank you for your order!</h2>
          <p className="text-gray-700 mb-4">
            A confirmation email has been sent to <span className="font-semibold">{form.email}</span>.
          </p>
          <p className="text-gray-500">We will contact you soon regarding delivery.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 pt-20 px-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow space-y-6">
        <h1 className="text-3xl font-bold text-black">Checkout</h1>

        {cart.length === 0 && <p className="text-gray-700">Your cart is empty.</p>}

        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <Image src={item.image} alt={item.name} width={60} height={60} className="rounded" />
            <div className="flex-1">
              <p className="font-medium text-black">{item.name}</p>
              <p className="text-gray-500">{item.quantity} × ${item.price}</p>
            </div>
          </div>
        ))}

        {cart.length > 0 && (
          <>
            {/* Total */}
            <div className="flex justify-between font-semibold text-lg mt-4 text-black">
              <span>Total:</span>
              <span>${total}</span>
            </div>

            {/* Customer Form */}
            <div className="space-y-4 mt-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 text-black"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 text-black"
              />
              <textarea
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 text-black"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 text-black"
              />
            </div>

            {/* Place Order Button below form */}
            <button
              onClick={handlePlaceOrder}
              disabled={loading}
              className="w-full mt-4 bg-black text-white py-3 rounded-lg border border-black hover:bg-white hover:text-black transition disabled:opacity-50"
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </>
        )}
      </div>
    </section>
  );
}
