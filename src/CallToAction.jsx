import React from 'react';

const CallToAction = () => {
  return (
    <section id="book" className="text-center py-20 bg-amber-400 text-white px-6 dark:bg-amber-500">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to live with purpose?</h2>
      <p className="mb-6 text-lg">
        Let’s work together to unlock your calling and build a life you love.
      </p>
      <a
        href="#contact"
        className="bg-white text-yellow-400 px-6 py-3 rounded-full font-medium hover:text-white hover:bg-amber-600 transition-colors duration-300"
      >
        Book a Clarity Call
      </a>
    </section>
  );
};

export default CallToAction;
