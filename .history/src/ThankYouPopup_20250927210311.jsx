// ThankYouPopup.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ThankYouPopup = ({ trigger = "load" }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Show on page load
  useEffect(() => {
    if (trigger === "load") {
      const timer = setTimeout(() => setIsVisible(true), 1000); // delay for effect
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  // Show on scroll
  useEffect(() => {
    if (trigger === "scroll") {
      const handleScroll = () => {
        const scrollY = window.scrollY + window.innerHeight;
        const triggerPoint = document.body.scrollHeight / 2; // half the page
        if (scrollY >= triggerPoint) {
          setIsVisible(true);
          window.removeEventListener("scroll", handleScroll);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [trigger]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-[90%] relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Popup Content */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl font-bold text-gray-900 mb-3"
            >
              Thank You!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600"
            >
              Thank you for visiting <span className="font-semibold">Rabacare Center</span> official website.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="mt-6 flex justify-end space-x-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVisible(false)}
                className="px-4 py-2 bg-amber-600 text-white rounded-lg shadow hover:bg-amber-700"
              >
                Got it
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ThankYouPopup;
