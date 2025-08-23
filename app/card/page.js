"use client";
import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  if (cart.length === 0) {
    return <h2 className="text-center mt-20 text-2xl">Your cart is empty 🛒</h2>;
  }

  return (
    <main className="px-10 py-16 min-h-screen">
      <h1 className="text-4xl font-bold mb-10">Your Cart</h1>
      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-4"
          >
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p>{item.price}</p>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value))
                }
                className="w-16 border rounded text-center"
              />
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
