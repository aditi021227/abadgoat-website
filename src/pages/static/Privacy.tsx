export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-md">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">Privacy Policy</h1>
        <p className="mb-4 text-gray-600">
          At AbadGoat, your privacy is very important to us. We are committed to protecting your
          personal information and ensuring that your shopping experience is safe and secure.
        </p>
        <h2 className="mt-6 mb-2 text-xl font-semibold text-gray-700">Information We Collect</h2>
        <p className="mb-4 text-gray-600">
          We may collect your name, email, phone number, shipping/billing address, and payment
          details when you place an order or create an account.
        </p>
        <h2 className="mt-6 mb-2 text-xl font-semibold text-gray-700">How We Use Information</h2>
        <p className="mb-4 text-gray-600">
          Your data is used only to process orders, improve our services, and communicate relevant
          updates. We never sell your information to third parties.
        </p>
        <h2 className="mt-6 mb-2 text-xl font-semibold text-gray-700">Contact Us</h2>
        <p className="text-gray-600">
          For questions regarding privacy, email us at{" "}
          <span className="font-medium">privacy@abadgoat.com</span>.
        </p>
      </div>
    </div>
  );
}
