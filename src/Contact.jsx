import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [contact, setContact] = useState({
    intro_text1: "We'd love to hear from you! Reach out with any questions or feedback.",

    intro_text2:
    "Whether you're reaching out for collaboration, questions, feedback, or just to say hi — I’m always happy to hear from you!",
    phone: "+254 757855508",
    email: "info@redemptakanjaglobal.com",
    location: "Nairobi, Kenya",
  });

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/contacts");
        if (!res.ok) throw new Error("Failed to fetch contact data");

        const data = await res.json();
        const contactData = Array.isArray(data) ? data[0] : data;

        if (contactData && typeof contactData === "object") {
          setContact({
            intro_text1: contactData.intro_text1,
            intro_text2: contactData.intro_text2,
            phone: contactData.phone,
            email: contactData.email,
            location: contactData.location,
          });
        }
      } catch (err) {
        console.error("Error fetching contact info, using defaults:", err.message);
      }
    };

    fetchContact();
  }, []);

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="py-12 bg-blue-50 dark:bg-gray-900 px-4 transition-colors">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Get in touch
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
            {contact.intro_text1}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 transition-colors">
              <h3 className="text-2xl font-semibold text-amber-400 mb-4">Let's Connect!</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
              {contact.intro_text2}
              </p>

              <div className="space-y-4 text-gray-800 dark:text-gray-200">
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-amber-400" />
                  <a href={`tel:${contact.phone}`} className="hover:underline">
                    {contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-amber-400" />
                  <a
                    href={`mailto:${contact.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-amber-400" />
                  <span>{contact.location}</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 space-y-5 transition-colors">
              <div>
                <label className="block text-gray-700 dark:text-gray-200 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-200 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-200 mb-1">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
