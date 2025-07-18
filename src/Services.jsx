import React from 'react';

const serviceImages = [
  { src: '/teens.png', label: 'Teen Mentorship' },
  { src: '/author-support.png', label: 'Author Support' },
  { src: '/coaching-session.png', label: 'Coaching Session' },
  { src: '/group-coaching.png', label: 'Group Coaching' },
  { src: '/corporate-training.png', label: 'Corporate Training' },
  { src: '/couples-coaching.png', label: 'Couples Coaching' },
];

const Services = () => {
  return (
    <section id="services" className="scroll-mt-20 bg-gray-100 dark:bg-gray-900 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        What We Offer
      </h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {serviceImages.map((service, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 transition hover:shadow-xl"
          >
            <img
              src={service.src}
              alt={service.label}
              className="w-full h-64 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-105"
            />

            <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white text-center">
              {service.label}
            </h3>

            {/* Hidden button, shows on hover */}
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
              <a
                href="#contact"
                className="bg-amber-400 text-white px-6 py-2 rounded-md font-semibold hover:bg-amber-500 transition"
              >
                Book Appointment
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
