import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();

  // Simple form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "cod",
  });
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!form.name || !form.email || !form.phone || !form.address || !form.city || !form.pincode) {
      setError("Please fill in all required fields.");
      return;
    }

    console.log("Order placed:", form);
    setError("");

    // Redirect to order confirmation page
    navigate("/order/confirmation");
  };

  // Example cart summary (replace with real cart state later)
  const cartSummary = [
    { id: 1, name: "Classic White T-Shirt", price: 799, quantity: 2 },
    { id: 2, name: "Blue Denim Jacket", price: 2499, quantity: 1 },
  ];
  const subtotal = cartSummary.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 100 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white p-8 shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-3">
          {/* Billing Form */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Billing Details</h2>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="rounded-lg border p-3 focus:border-black focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="rounded-lg border p-3 focus:border-black focus:outline-none"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="rounded-lg border p-3 focus:border-black focus:outline-none"
              />
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={form.pincode}
                onChange={handleChange}
                className="rounded-lg border p-3 focus:border-black focus:outline-none"
              />
            </div>

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
              className="w-full rounded-lg border p-3 focus:border-black focus:outline-none"
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="w-full rounded-lg border p-3 focus:border-black focus:outline-none"
            />

            {/* Payment */}
            <div>
              <h2 className="mt-6 mb-2 text-lg font-semibold text-gray-800">Payment Method</h2>
              <select
                name="payment"
                value={form.payment}
                onChange={handleChange}
                className="w-full rounded-lg border p-3 focus:border-black focus:outline-none"
              >
                <option value="cod">Cash on Delivery</option>
                <option value="card">Credit / Debit Card</option>
                <option value="upi">UPI</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-4 rounded-lg border p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800">Order Summary</h2>
            {cartSummary.map((item) => (
              <div key={item.id} className="flex justify-between text-sm text-gray-700">
                <p>
                  {item.name} × {item.quantity}
                </p>
                <p>₹{item.price * item.quantity}</p>
              </div>
            ))}
            <hr />
            <div className="flex justify-between text-gray-600">
              <p>Subtotal</p>
              <p>₹{subtotal}</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p>Shipping</p>
              <p>₹{shipping}</p>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-gray-800">
              <p>Total</p>
              <p>₹{total}</p>
            </div>
            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-black py-2 font-semibold text-white hover:bg-gray-800"
            >
              Place Order
            </button>
            <Link
              to="/cart"
              className="mt-2 block text-center text-sm text-gray-600 hover:underline"
            >
              Back to Cart
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
