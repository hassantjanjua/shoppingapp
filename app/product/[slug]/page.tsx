"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { products } from "@/app/data/productListing";
import { useCart } from "@/app/context/CartContext";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const product = products.find((p) => p.slug === slug);
  const { addToCart } = useCart();

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 text-black">
        Product not found
      </div>
    );

  return (
    <section className="min-h-screen bg-gray-50 pt-20 px-6 flex flex-col md:flex-row max-w-6xl mx-auto gap-12">
      {/* Image with hover zoom */}
      <div className="w-full md:w-1/2 h-96 relative rounded-lg overflow-hidden group">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-4 md:w-1/2 text-black">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="text-xl font-semibold">${product.price}</p>
        <p>{product.description}</p>

        <div className="flex gap-4 mt-4">
          {/* Add to Cart Button */}
          <button
            onClick={() =>
              addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1,
              })
            }
            className="bg-black text-white border border-black px-6 py-2 rounded-lg hover:bg-white hover:text-black transition"
          >
            Add to Cart
          </button>

          {/* Go Back Button */}
          <button
            onClick={() => router.back()}
            className="border border-black px-6 py-2 rounded-lg hover:bg-black hover:text-white transition text-black"
          >
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
}
