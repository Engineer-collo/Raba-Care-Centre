import React from 'react';

const serviceImages = [
  '/teens.png',
  '/author-support.png',
  '/coaching-session.png',
  '/group-coaching.png',
  '/corporate-training.png',
  '/couples-coaching.png',
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 dark:bg-gray-900 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        What we Offer
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {serviceImages.map((src, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 overflow-hidden transition hover:shadow-xl"
          >
            <img
              className="w-full max-h-[500px] object-cover rounded-md transform transition-transform duration-300 hover:scale-105"
              src={src}
              alt={`Service ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
