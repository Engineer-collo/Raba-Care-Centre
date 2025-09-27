/*
ThankYouPopup.jsx with Framer Motion animations + interactive button bounce
*/

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThankYouPopup({ targetId = "rabacare-target", storageKey = "rabacare_thanks_dismissed", expireHours = 24 }) {
  const [visible, setVisible] = useState(false);
  const observerRef = useRef(null);
  const popupRef = useRef(null);

  const setDismissed = (hours) => {
    try {
      if (hours == null) {
        localStorage.setItem(storageKey, JSON.stringify({ dismissed: true, expiresAt: null }));
      } else {
        const expiresAt = Date.now() + hours * 60 * 60 * 1000;
        localStorage.setItem(storageKey, JSON.stringify({ dismissed: true, expiresAt }));
      }
    } catch (err) {}
  };

  const getDismissed = () => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return false;
      const obj = JSON.parse(raw);
      if (!obj.dismissed) return false;
      if (!obj.expiresAt) return true;
      return Date.now() < obj.expiresAt;
    } catch (err) {
      return false;
    }
  };

  const close = (persist = true) => {
    setVisible(false);
    if (persist) setDismissed(expireHours);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") close(true);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (getDismissed()) return;
    const target = document.getElementById(targetId);
    if (!target) return;

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    }, { threshold: 0.5 });

    observerRef.current.observe(target);
    return () => {
      if (observerRef.current && target) observerRef.current.unobserve(target);
    };
  }, [targetId, storageKey]);

  useEffect(() => {
    if (visible && popupRef.current) popupRef.current.focus();
  }, [visible]);

  return (
    <>
      <section id={targetId} className="min-h-[60vh] flex items-center justify-center bg-gray-50 border-t border-b py-20">
        <div className="max-w-3xl text-center px-6">
          <h2 className="text-2xl font-semibold">Rabacare Center</h2>
          <p className="mt-3 text-gray-600">This is the section that triggers the thank-you popup when it enters the viewport.</p>
        </div>
      </section>

      <AnimatePresence>
        {visible && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Thanks for visiting"
            tabIndex={-1}
            ref={popupRef}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
            onClick={() => close(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 25 } }}
              exit={{ scale: 0.8, y: 50, opacity: 0, transition: { duration: 0.2 } }}
            >
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Thank you for visiting Rabacare Center official website</h3>
                    <p className="mt-2 text-sm text-gray-600">We appreciate you stopping by — feel free to explore our services or contact us for support.</p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => close(true)}
                    aria-label="Close thank you message"
                    className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  >
                    <span className="sr-only">Close</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                <div className="mt-4 flex justify-end gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => close(true)}
                    className="px-4 py-2 rounded-md text-sm font-medium bg-amber-500 text-white hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  >
                    Got it
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => close(false)}
                    className="px-4 py-2 rounded-md text-sm font-medium border bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-200"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
