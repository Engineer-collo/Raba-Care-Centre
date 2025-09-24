import React, { useEffect, useState } from 'react';

export default function Testimonials() {
  const defaultTestimonials = [
    {
      name: "Simon Waweru",
      content:
        "Redempta Kanja Global truly helped me find clarity and purpose. Their coaching is life-changing.",
      profile_pic:
        "https://images.pexels.com/photos/13672912/pexels-photo-13672912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=100",
    },
    {
      name: "Irine Cherop",
      content:
        "I’ve grown so much personally and professionally thanks to Redempta Kanja Global's powerful coaching sessions.",
      profile_pic:
        "https://images.pexels.com/photos/4668513/pexels-photo-4668513.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=100",
    },
    {
      name: "Mish Njeri",
      content:
        "What sets Redempta Kanja Global apart is their commitment to real transformation. I highly recommend them!",
      profile_pic:
        "https://images.pexels.com/photos/5065240/pexels-photo-5065240.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=100",
    },
    {
      name: "Brian Ochieng",
      content:
        "From feeling stuck to finding direction—Redempta Kanja Global helped me take charge of my journey.",
      profile_pic:
        "https://images.pexels.com/photos/936117/pexels-photo-936117.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=100",
    },
  ];

  const [testimonials, setTestimonials] = useState(defaultTestimonials);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/review')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          const formatted = data.map((item) => ({
            name: item.name,
            content: item.review,
            profile_pic: item.picture_url,
          }));
          setTestimonials(formatted);
        }
      })
      .catch((error) => {
        console.error('Failed to fetch reviews:', error);
        // Using defaultTestimonials automatically
      });
  }, []);

  return (
    <section className="scroll-mt-20 bg-white dark:bg-black py-20 px-6 max-w-6xl mx-auto">
      {/* Welcome Section */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Hear From Our Happy Clients
        </h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Nothing inspires us more than the voices of those who’ve experienced
          transformation with us. Here’s what our clients have to say about
          their journey with Redempta Kanja Global.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border border-yellow-200 dark:border-yellow-400 rounded-xl p-6 shadow-md hover:shadow-xl dark:hover:shadow-2xl transition hover:-translate-y-1 transform duration-300 text-center bg-white dark:bg-gray-800"
          >
            <img
              src={testimonial.profile_pic}
              alt={testimonial.name}
              className="w-24 h-32 mx-auto mb-4 rounded-xl object-cover object-center border-2 border-amber-400"
            />
            <h4 className="text-lg font-semibold text-gray-800 dark:text-amber-300 mb-2">
              {testimonial.name}
            </h4>
            <p className="text-gray-700 dark:text-gray-300 italic text-base leading-relaxed">
              "{testimonial.content}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
