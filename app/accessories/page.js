"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function AccessoriesPage() {
  const { addToCart } = useCart();

  const accessories = [
    { id: 9, name: "Cap", price: "₹999", image: "/cap1.jpg" },
    { id: 10, name: "Belt", price: "₹799", image: "/belt1.jpg" },
    { id: 11, name: "Beanie", price: "₹699", image: "/beanie1.jpg" },
    { id: 12, name: "Bracelet", price: "₹799", image: "/bracelet1.jpg" },
    { id: 13, name: "Socks", price: "₹399", image: "/socks1.jpg" },
  ];

  return (
    <main className="px-10 pt-28 py-16 min-h-screen">
      <h1 className="text-4xl font-bold mb-10">Accessories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {accessories.map((product) => (
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
