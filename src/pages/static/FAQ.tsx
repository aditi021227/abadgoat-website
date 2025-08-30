import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "How do I track my order?",
    answer:
      "Once your order is shipped, we’ll send you a tracking link via email. You can also track your order from the 'My Account' section.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 7 days of delivery, provided the items are unused and in original condition. Refunds are processed within 5-7 business days.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship worldwide! Shipping fees and delivery times vary by location. International orders may be subject to customs duties.",
  },
  {
    question: "Can I cancel my order?",
    answer:
      "Orders can be cancelled within 24 hours of placing them. After this window, we may not be able to cancel as the order is already in processing.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept Cash on Delivery (COD), Credit/Debit cards, UPI, Netbanking, and PayPal for international customers.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-md">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-gray-50 shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-4 py-3 text-left text-lg font-medium text-gray-800 focus:outline-none"
              >
                {item.question}
                <span className="ml-2 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
