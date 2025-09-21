import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-gray-800 text-center max-w-3xl">
      <h1 className="text-3xl font-bold text-maroon-900 mb-6">
        Privacy Policy
      </h1>
      <p className="mb-4 text-gray-600">
        At <span className="font-semibold">Raba Care Center</span>, your privacy
        is important to us. This Privacy Policy explains how we collect, use,
        and safeguard your personal information when you use our services.
      </p>

      {/* Information We Collect */}
      <h2 className="text-xl font-semibold text-maroon-800 mt-8 mb-4">
        1. Information We Collect
      </h2>
      <ul className="list-disc list-inside text-gray-600 space-y-2 text-left inline-block text-base">
        <li>Personal details such as name, phone number, and email address.</li>
        <li>Health-related information provided during consultations.</li>
        <li>
          Technical information such as browser type, IP address, and device
          details.
        </li>
      </ul>

      {/* How We Use Your Information */}
      <h2 className="text-xl font-semibold text-maroon-800 mt-8 mb-4">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc list-inside text-gray-600 space-y-2 text-left inline-block text-base">
        <li>To provide healthcare and mentorship services.</li>
        <li>To communicate important updates and service changes.</li>
        <li>To improve user experience on our website and platforms.</li>
      </ul>

      {/* Information Sharing */}
      <h2 className="text-xl font-semibold text-maroon-800 mt-8 mb-4">
        3. Sharing of Information
      </h2>
      <p className="text-gray-600 mb-4">
        We do not sell or rent your personal information. We may share data only
        with trusted partners, and only when necessary to provide services or
        comply with legal obligations.
      </p>

      {/* Security */}
      <h2 className="text-xl font-semibold text-maroon-800 mt-8 mb-4">
        4. Data Security
      </h2>
      <p className="text-gray-600 mb-4">
        We implement appropriate technical and organizational measures to
        safeguard your data from unauthorized access, disclosure, or misuse.
      </p>

      {/* Your Rights */}
      <h2 className="text-xl font-semibold text-maroon-800 mt-8 mb-4">
        5. Your Rights
      </h2>
      <p className="text-gray-600 mb-4">
        You have the right to access, correct, or request deletion of your
        personal information. To exercise these rights, contact us using the
        details below.
      </p>

      {/* Contact Info */}
      <h2 className="text-xl font-semibold text-maroon-800 mt-8 mb-4">
        6. Contact Us
      </h2>
      <p className="text-gray-600">
        If you have any questions regarding this Privacy Policy, please contact
        us at:
      </p>
      <p className="mt-2 text-gray-700 font-medium">
        Email: info@rabacarecenter.com
      </p>
      <p className="text-gray-700 font-medium">Phone: (555) 123-4567</p>
    </section>
  );
};

export default PrivacyPolicy;
