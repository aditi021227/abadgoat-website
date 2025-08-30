import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // 🔗 Replace this with real API call
    console.log("Registering with:", form);
    setError("");
    alert("Registration successful (placeholder) ✅");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Create an Account
        </h2>

        {error && (
          <p className="mb-4 text-center text-sm text-red-600">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-700 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20"
              required
            />
          </div>

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
              placeholder="Enter password"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-700 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-700 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-black py-2 font-semibold text-white transition hover:bg-gray-800"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="h-px flex-1 bg-gray-300"></div>
        </div>

        {/* Google Register (Optional) */}
        <button className="w-full rounded-lg border border-gray-300 py-2 font-medium text-gray-700 transition hover:bg-gray-100">
          Sign up with Google
        </button>

        {/* Already have account */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-black hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
