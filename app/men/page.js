"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function MenPage() {
  const { addToCart } = useCart();

  const menProducts = [
    { id: 1, name: "Oversized Shirt", price: "₹2499", image: "/shirt1.jpg" },
    { id: 2, name: "Graphic T-shirt", price: "₹1499", image: "/tshirt1.jpg" },
    { id: 3, name: "Hoodie", price: "₹3499", image: "/hoodie1.jpg" },
    { id: 4, name: "Cargo Trousers", price: "₹2999", image: "/trousers1.jpg" },
  ];

  return (
    <main className="px-10 pt-28 py-16 min-h-screen">
      <h1 className="text-4xl font-bold mb-10">Men&apos;s Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {menProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition p-4"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-80 object-cover rounded-lg"
            />
            <h4 className="font-semibold mt-4">{product.name}</h4>
            <p className="text-gray-600">{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-3 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
