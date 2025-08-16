import React, { useEffect, useState } from 'react';

const Services = () => {
  const defaultServices = [
    {
      service_name: 'Teen Mentorship',
      description: 'Empowering teens with guidance and confidence.',
      icon_url: '/teens.png',
    },
    {
      service_name: 'Author Support',
      description:
        'Helping authors publish, market, and grow their presence with strategic support and expert guidance.',
      icon_url: '/author-support.png',
    },
    {
      service_name: 'Coaching Sessions',
      description:
        'Coaching Sessions are personalized conversations designed to help individuals gain clarity, overcome obstacles, and take purposeful action toward their goals—guided by a skilled coach in a supportive and confidential space.',
      icon_url: '/coaching-session.png',
    },
    {
      service_name: 'Group Coaching',
      description:
        'Group Coaching offers a collaborative environment where individuals work together toward personal or professional goals. Through shared insights, accountability, and guided facilitation, participants grow in confidence, clarity, and community.',
      icon_url: '/group-coaching.png',
    },
    {
      service_name: 'Corporate Training',
      description:
        'Empowering teams with practical skills, leadership growth, and peak performance strategies to drive organizational success.',
      icon_url: '/corporate-training.png',
    },
    {
      service_name: 'Couples Coaching',
      description:
        'We are a passionate coaching couple dedicated to helping individuals, couples, and teams unlock their full potential. With a blend of empathy, experience, and strategic insight, we guide our clients through personal and professional transformation. Our approach combines the power of partnership with proven coaching methodologies to inspire clarity, confidence, and courageous action.',
      icon_url: '/couples-coaching.png',
    },
  ];

  const [services, setServices] = useState(defaultServices);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/services')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch services');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setServices(data);
        }
      })
      .catch((err) => {
        console.warn('Using default services due to error:', err.message);
      });
  }, []);

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
      {/* Welcome Text */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Welcome to Our Services
        </h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          At our core, we are dedicated to empowering individuals, couples,
          teens, and organizations to unlock their full potential. Explore our
          tailored services designed to inspire growth, clarity, and lasting
          transformation.
        </p>
      </div>

      {/* Services Section */}
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        What We Offer
      </h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const isExpanded = expanded[index];
          const shortText = service.description.slice(0, 60);
          return (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 transition hover:shadow-xl"
            >
              <img
                src={service.icon_url}
                alt={service.service_name}
                className="w-full h-64 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-105"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white text-center">
                {service.service_name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center mt-2">
                {isExpanded
                  ? service.description
                  : shortText + (service.description.length > 60 ? '...' : '')}
              </p>
              {service.description.length > 60 && (
                <div className="text-center mt-1">
                  <button
                    onClick={() => toggleReadMore(index)}
                    className="text-amber-500 hover:underline text-sm"
                  >
                    {isExpanded ? 'Read less' : 'Read more'}
                  </button>
                </div>
              )}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
                <a
                  href="#contact"
                  className="bg-amber-400 text-white px-6 py-2 rounded-md font-semibold hover:bg-amber-500 transition"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
