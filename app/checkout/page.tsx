"use client";

import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import Footer from "@/app/components/footer";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
      alert("Failed to send order.");
    } finally {
      setLoading(false);
    }
  };

  /* SUCCESS SCREEN */
  if (success) {
    return (
      <>
        <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center px-6">
          <div className="bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-3xl text-center max-w-md text-white shadow-2xl">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold mb-4">
              Order Confirmed!
            </h2>
            <p className="text-gray-300 mb-4">
              Confirmation sent to{" "}
              <span className="font-semibold">{form.email}</span>
            </p>
            <p className="text-gray-400 text-sm">
              Our team will contact you shortly.
            </p>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-28 px-6 md:px-12 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

          {/* ORDER SUMMARY */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-xl">
            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            {cart.length === 0 ? (
              <p className="text-gray-400">
                Your cart is empty.
              </p>
            ) : (
              <div className="space-y-5">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={70}
                      height={70}
                      className="rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-semibold">
                        {item.name}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {item.quantity} × ${item.price}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="border-t border-white/10 pt-4 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${total}</span>
                </div>

                <div className="text-sm text-gray-400 mt-4">
                  🔒 Secure Checkout • 🚚 Fast Delivery • ✔ Verified Store
                </div>
              </div>
            )}
          </div>

          {/* CUSTOMER FORM */}
          {cart.length > 0 && (
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-xl">
              <h2 className="text-2xl font-bold mb-6">
                Shipping Details
              </h2>

              <div className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
                />

                <textarea
                  name="address"
                  placeholder="Full Address"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
                />
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={loading}
                className="w-full mt-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-300 transition hover:scale-105 disabled:opacity-50"
              >
                {loading ? "Processing..." : "Place Order"}
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
