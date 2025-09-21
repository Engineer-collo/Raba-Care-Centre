import React from "react";

const TermsOfService = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-gray-800 text-center">
      <h1 className="text-3xl font-bold text-maroon-900 mb-6">
        Terms of Service
      </h1>
      <p className="mb-4 text-gray-600">
        Welcome to <span className="font-semibold">Raba Care Center</span>. By
        using our services, you agree to the following terms and conditions. We
        encourage you to read them carefully.
      </p>

      {/* Acceptance of Terms */}
      <h2 className="text-xl font-semibold text-maroon-800 mt-8 mb-4">
        1. Acceptance of Terms
      </h2>
      <p className="text-gray-600 mb-4">
        By accessing or using our website, mobile platforms, or healthcare
        services, you confirm that you accept these Terms of Service. If you do
        not agree, please discontinue using our services.
      </p>

      {/* Use of Services */}
      <h2 className="text-xl font-semibold text-maroon-800 mt-8 mb-4">
        2. Use of Services
      </h2>
      <ul className="list-disc list-inside text-gray-600 space-y-2 text-left inline-block">
        <li>Services are provided for personal and healthcare-related use.</li>
        <li>
          You agree not to misuse or disrupt our systems or engage in unlawful
          activities.
        </li>
        <li>
          Minors must have consent from a parent or guardian to access services.
        </li>
      </ul>

      {/* Appointments and Payments */}
      <h2 className="text-xl font-semibold text-maroon-800 mt-8 mb-4">
        3. Appointments & Payments
      </h2>
      <p className="text-gray-600 mb-4">
        Appointment bookings, cancellations, and payments are subject to our
        clinic’s policies. Payments made for services are non-refundable unless
        otherwise stated.
      </p>

      {/* Privacy */}
      <h2 className="text-xl font-semibold text-maroon-800 mt-8 mb-4">
        4. Privacy
      </h2>
      <p className="text-gray-600 mb-4">
        Your use of our services is also governed by our{" "}
        <a
          href="privacy"
          className="text-amber-500 hover:underline font-medium"
        >
          Privacy Policy
        </a>
        , which outlines how we collect and use your information.
      </p>

      {/* Limitation of Liability */}
      <h2 className="text-xl font-semibold text-maroon-800 mt-8 mb-4">
        5. Limitation of Liability
      </h2>
      <p className="text-gray-600 mb-4">
        Raba Care Center will not be held liable for any indirect, incidental,
        or consequential damages arising from the use of our services. All
        healthcare services are provided by qualified professionals, but results
        may vary.
      </p>

      {/* Modifications */}
      <h2 className="text-xl font-semibold text-maroon-800 mt-8 mb-4">
        6. Modifications to Terms
      </h2>
      <p className="text-gray-600 mb-4">
        We may update these Terms of Service from time to time. Continued use of
        our services after changes are posted means you agree to the updated
        terms.
      </p>

      {/* Contact */}
      <h2 className="text-xl font-semibold text-maroon-800 mt-8 mb-4">
        7. Contact Us
      </h2>
      <p className="text-gray-600">
        For any questions regarding these Terms, please reach out:
      </p>
      <p className="mt-2 text-gray-700 font-medium">
        Email: info@rabacarecenter.com
      </p>
      <p className="text-gray-700 font-medium">Phone: (555) 123-4567</p>
    </section>
  );
};

export default TermsOfService;
