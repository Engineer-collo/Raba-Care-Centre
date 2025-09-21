import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { PaperPlaneTilt } from "phosphor-react"; // lightweight send icon

const Contact = () => {
  const [contact, setContact] = useState({
    address: "123 Healthcare Drive, Medical District, City, State 12345",
    phone_main: "(555) 123-4567",
    phone_emergency: "(555) 911-CARE",
    email_main: "info@rabacareCenter.com",
    email_appointments: "appointments@rabacareCenter.com",
    hours_weekdays: "Mon - Fri: 8:00 AM - 8:00 PM",
    hours_weekend: "Sat - Sun: 9:00 AM - 5:00 PM",
    hours_emergency: "Emergency: 24/7",
  });

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/contacts");
        if (!res.ok) throw new Error("Failed to fetch contact data");

        const data = await res.json();
        if (Array.isArray(data) && data[0]) {
          setContact({ ...contact, ...data[0] });
        }
      } catch (err) {
        console.error("Error fetching contact info, using defaults:", err.message);
      }
    };

    fetchContact();
  }, []);

  return (
    <section id="contact" className="scroll-mt-20 py-12 px-6 md:px-16">
              {/* Header */}
              <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-maroon-900 section-title">
            Contact Us
          </h2>
          <p className="section-subtitle">
          We're here to help! Reach out to us for appointments, questions, <br/> or any healthcare needs. Our team is ready to assist you.

</p>
        </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left - Contact Info */}
        <div>

          <h2 className="text-2xl font-bold text-maroon-800 mb-6 border-b-2 border-maroon-900 pb-2">
            Get in Touch
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="bg-amber-100 p-3 rounded-md">
                <FaMapMarkerAlt className="text-maroon-800" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">{contact.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-amber-100 p-3 rounded-md">
                <FaPhoneAlt className="text-maroon-800" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <p>Main: {contact.phone_main}</p>
                <p>Emergency: {contact.phone_emergency}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-amber-100 p-3 rounded-md">
                <FaEnvelope className="text-maroon-800" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p>{contact.email_main}</p>
                <p>{contact.email_appointments}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-amber-100 p-3 rounded-md">
                <FaClock className="text-maroon-800" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Hours</h3>
                <p>{contact.hours_weekdays}</p>
                <p>{contact.hours_weekend}</p>
                <p>{contact.hours_emergency}</p>
              </div>
            </div>
          </div>

        {/* Map */}
        <div>
          <h3 className="pt-6 text-lg font-semibold mb-4">Our Location</h3>
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.731409511709!2d36.76350071224031!3d-1.207134130501369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f22b36e1fe5f9%3A0xea7d820876f42a71!2sRuaka!5e0!3m2!1sen!2ske!4v1751703103025!5m2!1sen!2ske"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map - Ruaka"
            />
          </div>
        </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-gradient-to-b from-amber-50 to-rose-50 shadow-lg rounded-2xl p-6">
          <h3 className="text-xl font-bold text-maroon-800 mb-4">Send us a Message</h3>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-amber-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-amber-400 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-amber-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Subject *</label>
                <select
                  required
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-amber-400 outline-none"
                >
                  <option>Select a subject</option>
                  <option>General Inquiry</option>
                  <option>Appointments</option>
                  <option>Support</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message *</label>
              <textarea
                rows="4"
                required
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-amber-400 outline-none"
                placeholder="Please describe how we can help you..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-400 hover:bg-amber-500 text-black font-semibold py-3 rounded-lg shadow-md flex items-center justify-center gap-2"
            >
              <PaperPlaneTilt size={20} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
