"use client";
import { useCart } from "../../context/CartContext";
import Image from "next/image";

export default function ProductPage({ params }) {
  const { addToCart } = useCart();

  // Fake product data (later this will come from a DB / API)
  const products = [
    { id: 1, name: "Oversized Shirt", price: "₹2499", image: "/shirt1.jpg", description: "Relaxed fit, premium cotton shirt." },
    { id: 2, name: "Graphic T-shirt", price: "₹1499", image: "/tshirt1.jpg", description: "Trendy graphic tee, soft and comfy." },
    { id: 3, name: "Hoodie", price: "₹3499", image: "/hoodie1.jpg", description: "Cozy hoodie for all-day comfort." },
    { id: 4, name: "Cargo Trousers", price: "₹2999", image: "/trousers1.jpg", description: "Utility cargo trousers with pockets." },
    { id: 5, name: "Cap", price: "₹999", image: "/cap1.jpg", description: "Stylish cap to complete the look." },
    { id: 6, name: "Bracelet", price: "₹799", image: "/bracelet1.jpg", description: "Minimal bracelet with a clean finish." },
  ];

  const productId = parseInt(params.id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <h2 className="text-center mt-20 text-2xl">Product not found 😢</h2>;
  }

  return (
    <main className="px-10 py-16 min-h-screen">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Product Image */}
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="rounded-xl shadow-lg w-full h-[500px] object-cover"
        />

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-600 mb-6">{product.price}</p>
          <p className="text-gray-700 mb-8">{product.description}</p>

          <button
            onClick={() => addToCart(product)}
            className="px-6 py-3 bg-black text-white rounded-lg hover:opacity-80 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
