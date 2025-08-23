"use client";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable"; // ✅ import here
import { motion } from "framer-motion";

// --------------------
// Mobile Products Component (swipeable carousel)
// --------------------
function MobileProductsView({ products, addToCart }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // swipe gestures only (no auto-slide)
  const handlers = useSwipeable({
    onSwipedLeft: () => setActiveIndex((prev) => (prev + 1) % products.length),
    onSwipedRight: () =>
      setActiveIndex((prev) => (prev - 1 + products.length) % products.length),
    trackMouse: true, // drag with mouse on desktop too
  });

  return (
    <div className="md:hidden">
      <div {...handlers} className="relative w-full overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {products.map((product) => (
            <div key={product.id} className="w-full flex-shrink-0 p-4">
              <div className="bg-white rounded-xl shadow-lg p-4 h-full flex flex-col">
                <div className="relative h-56 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="mt-4 flex-grow">
                  <h4 className="font-semibold text-lg">{product.name}</h4>
                  <p className="text-gray-600">{product.price}</p>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-3 px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition w-full"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// --------------------
// Desktop Products Component (grid layout)
// --------------------
function DesktopProductsView({ products, addToCart }) {
  return (
    <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-lg p-4 flex flex-col"
        >
          <div className="relative h-56 w-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="mt-4 flex-grow">
            <h4 className="font-semibold text-lg">{product.name}</h4>
            <p className="text-gray-600">{product.price}</p>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="mt-3 px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition w-full"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

// --------------------
// Home Page
// --------------------
export default function Home() {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "Oversized Shirt", price: "₹2499", image: "/shirt1.jpg" },
    { id: 2, name: "Graphic T-shirt", price: "₹1499", image: "/tshirt1.jpg" },
    { id: 3, name: "Hoodie", price: "₹3499", image: "/hoodie1.jpg" },
    { id: 4, name: "Cargo Trousers", price: "₹2999", image: "/trousers1.jpg" },
    { id: 5, name: "Cap", price: "₹999", image: "/cap1.jpg" },
    { id: 6, name: "Bracelet", price: "₹799", image: "/bracelet1.jpg" },
  ];

  return (
    <main className="bg-white text-black min-h-screen px-4 py-8 md:px-10 md:py-16">
      <section className="h-[50vh] md:h-[70vh] flex items-center justify-center bg-gray-100 text-center rounded-xl mb-12 mt-12">
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-wide px-4">
          &quot;Born in the grind. Raised in the streets. Built for the bold.&quot; 
        </h2>
      </section>

      <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center md:text-left">
        Featured Products
      </h1>

      {/* Mobile View (carousel) */}
      <MobileProductsView products={products} addToCart={addToCart} />

      {/* Desktop View (grid) */}
      <DesktopProductsView products={products} addToCart={addToCart} />
    </main>
  );
}
