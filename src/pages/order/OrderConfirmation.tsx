import { Link } from "react-router-dom";

export default function OrderConfirmation() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 text-center shadow-md">
        <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
          <svg
            className="h-10 w-10 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="mb-4 text-3xl font-bold text-gray-800">Order Confirmed!</h1>
        <p className="mb-6 text-gray-600">
          Thank you for your purchase 🎉 Your order has been successfully placed.
          <br /> You will receive a confirmation email shortly with your order details.
        </p>

        <div className="mb-6 rounded-lg bg-gray-50 p-6 text-left shadow-sm">
          <h2 className="mb-2 text-lg font-semibold text-gray-700">Order Summary</h2>
          <p className="text-gray-600">Order Number: <span className="font-medium">#123456</span></p>
          <p className="text-gray-600">Estimated Delivery: <span className="font-medium">3-5 business days</span></p>
        </div>

        <div className="flex flex-col space-y-3 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
          <Link
            to="/"
            className="rounded-lg bg-black px-6 py-2 font-semibold text-white hover:bg-gray-800"
          >
            Continue Shopping
          </Link>
          <Link
            to="/account"
            className="rounded-lg border border-gray-300 px-6 py-2 font-semibold text-gray-700 hover:bg-gray-100"
          >
            View My Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
