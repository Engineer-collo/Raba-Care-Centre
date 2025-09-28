import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ThankYouPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("seenThankYouPopup");
    if (hasSeenPopup) return;

    const aboutSection = document.getElementById("about-section");
    if (!aboutSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          sessionStorage.setItem("seenThankYouPopup", "true");
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(aboutSection);

    return () => observer.disconnect();
  }, []);

  // Auto-close after 5s
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setIsVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md"
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center relative">
            {/* Close button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Message */}
            <h2 className="text-lg font-semibold text-amber-600">
              Thank you for visiting!
            </h2>
            <p className="text-gray-700 mt-2">
              Welcome to the official Rabacare Center website.
            </p>

            {/* Smooth Progress Bar */}
            <div className="mt-4 w-full bg-gray-200 h-2 rounded-full overflow-hidden">
              <motion.div
                className="h-2 bg-amber-600"
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ThankYouPopup;
