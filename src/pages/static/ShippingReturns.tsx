export default function ShippingReturns() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-md">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">Shipping & Returns</h1>

        <h2 className="mt-6 mb-2 text-xl font-semibold text-gray-700">Shipping Policy</h2>
        <p className="mb-4 text-gray-600">
          Orders are usually shipped within 2–4 business days. Delivery times may vary depending on
          your location. International shipping is available at additional cost.
        </p>

        <h2 className="mt-6 mb-2 text-xl font-semibold text-gray-700">Returns & Refunds</h2>
        <p className="mb-4 text-gray-600">
          We accept returns within 7 days of delivery. Products must be unused, unworn, and in their
          original packaging. Refunds are processed within 5–7 business days after approval.
        </p>

        <h2 className="mt-6 mb-2 text-xl font-semibold text-gray-700">Exchange Policy</h2>
        <p className="text-gray-600">
          Items can be exchanged for size or color within 7 days of purchase, subject to availability.
        </p>
      </div>
    </div>
  );
}
