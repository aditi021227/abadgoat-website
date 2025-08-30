import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }

    // 🔗 Replace this with actual login logic / API call
    console.log("Logging in with:", form);
    setError("");
    alert("Login successful (placeholder) ✅");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Login to Your Account
        </h2>

        {error && (
          <p className="mb-4 text-center text-sm text-red-600">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-700 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-700 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20"
              required
            />
          </div>

          {/* Remember + Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-black hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-black py-2 font-semibold text-white transition hover:bg-gray-800"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="h-px flex-1 bg-gray-300"></div>
        </div>

        {/* Google Login (Optional) */}
        <button className="w-full rounded-lg border border-gray-300 py-2 font-medium text-gray-700 transition hover:bg-gray-100">
          Continue with Google
        </button>

        {/* Register Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/auth/register" className="text-black hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
