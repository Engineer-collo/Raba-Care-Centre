import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TypewriterAnimations = () => {
  const words = [
    "Welcome to Rabacare Center",
    "Touching Lives, Transforming Societies.",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000); // slower change (every 4s)
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="relative w-full h-20 flex justify-center items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index]}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute text-3xl font-bold text-amber-600 text-center"
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default TypewriterAnimations;
