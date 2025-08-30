import { Link } from "react-router-dom";

export default function AccountDashboard() {
  // Mock user data (replace with real user context later)
  const user = {
    name: "Aditi Malik",
    email: "aditi@example.com",
    joined: "March 2024",
  };

  const recentOrders = [
    { id: "#1001", date: "12 Aug 2025", status: "Delivered", total: 2499 },
    { id: "#1002", date: "20 Aug 2025", status: "Shipped", total: 1499 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow-md">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">
          My Account
        </h1>

        {/* User Info */}
        <div className="mb-8 rounded-lg border p-6 bg-gray-50 shadow-sm">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">Profile</h2>
          <p className="text-gray-600">👤 {user.name}</p>
          <p className="text-gray-600">✉️ {user.email}</p>
          <p className="text-gray-600">📅 Joined: {user.joined}</p>
        </div>

        {/* Recent Orders */}
        <div className="mb-8 rounded-lg border p-6 bg-gray-50 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Recent Orders
          </h2>
          {recentOrders.length === 0 ? (
            <p className="text-gray-600">No recent orders.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm text-gray-600">
                <thead>
                  <tr className="border-b bg-gray-100 text-gray-700">
                    <th className="px-4 py-2">Order ID</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-b">
                      <td className="px-4 py-2">{order.id}</td>
                      <td className="px-4 py-2">{order.date}</td>
                      <td className="px-4 py-2">{order.status}</td>
                      <td className="px-4 py-2">₹{order.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Quick Links */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            to="/wishlist"
            className="rounded-lg border bg-white px-4 py-6 text-center shadow-sm hover:shadow-md"
          >
            ❤️ My Wishlist
          </Link>
          <Link
            to="/cart"
            className="rounded-lg border bg-white px-4 py-6 text-center shadow-sm hover:shadow-md"
          >
            🛒 View Cart
          </Link>
          <Link
            to="/account/settings"
            className="rounded-lg border bg-white px-4 py-6 text-center shadow-sm hover:shadow-md"
          >
            ⚙️ Account Settings
          </Link>
        </div>
      </div>
    </div>
  );
}
