import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is Rabacare?",
    answer: "Rabacare is a healthcare service platform providing quality and confidential care to clients."
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book an appointment online through our website or by calling our number +254787530331 or email us on ."
  },
  {
    question: "Is my information kept confidential?",
    answer: "Yes, we uphold strict confidentiality and ensure your records are secure and private."
  },
  {
    question: "Do you accept insurance?",
    answer: "Yes, we accept a wide range of insurance providers. Please confirm with our office before your visit."
  },
  {
    question: "How can I contact support?",
    answer: "You can reach our support team via email, live chat, or phone for any inquiries or help."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-red-900">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-2xl shadow-md p-4 bg-white"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="font-semibold text-lg text-gray-800">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-red-900" />
              ) : (
                <ChevronDown className="w-5 h-5 text-red-900" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
