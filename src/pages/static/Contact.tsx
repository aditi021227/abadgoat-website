import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }

    console.log("Contact form submitted:", form);
    setStatus("✅ Thank you for contacting us! We’ll get back soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white p-8 shadow-md">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
          Contact Us
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-700">
              Send us a Message
            </h2>
            {status && (
              <p className="mb-4 text-sm text-center text-green-600">{status}</p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full rounded-lg border px-3 py-2 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full rounded-lg border px-3 py-2 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Your Message"
                className="w-full rounded-lg border px-3 py-2 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-black py-2 font-semibold text-white hover:bg-gray-800"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-700">
              Get in Touch
            </h2>
            <p className="mb-2 text-gray-600">
              📍 123 Fashion Street, New Delhi, India
            </p>
            <p className="mb-2 text-gray-600">📞 +91 98765 43210</p>
            <p className="mb-6 text-gray-600">✉️ support@abadgoat.com</p>

            <h2 className="mb-4 text-lg font-semibold text-gray-700">
              Find Us on Map
            </h2>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.799997!2d77.2100!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1c1b!2sConnaught%20Place!5e0!3m2!1sen!2sin!4v1632767887654!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
