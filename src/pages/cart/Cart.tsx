import { Link } from "react-router-dom";
import { useCart } from "../../state/useCart";   // ✅ now from useCart.ts
import type { CartItem } from "../../state/cartTypes"; // ✅ type-only import

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const subtotal = cart.reduce(
    (acc: number, item: CartItem) => acc + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 100 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="py-10 text-center">
            <p className="text-gray-600">Your cart is empty 🛒</p>
            <Link
              to="/"
              className="mt-4 inline-block rounded-lg bg-black px-6 py-2 text-white hover:bg-gray-800"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="space-y-6 lg:col-span-2">
              {cart.map((item: CartItem) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-lg border p-4 shadow-sm"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded-lg object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h2>
                      <p className="text-sm text-gray-500">₹{item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center rounded-lg border">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    {/* Item Total */}
                    <p className="w-20 text-right font-semibold">
                      ₹{item.price * item.quantity}
                    </p>

                    {/* Remove */}
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

            {/* Summary */}
            <div className="rounded-lg border p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-bold text-gray-800">Order Summary</h2>
              <div className="flex justify-between text-gray-600">
                <p>Subtotal</p>
                <p>₹{subtotal}</p>
              </div>
              <div className="flex justify-between text-gray-600">
                <p>Shipping</p>
                <p>₹{shipping}</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between font-bold text-gray-800">
                <p>Total</p>
                <p>₹{total}</p>
              </div>
              <Link
                to="/checkout"
                className="mt-6 block w-full rounded-lg bg-black py-2 text-center font-semibold text-white hover:bg-gray-800"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
