import React from "react";

// Testimonials component
// Colors: maroo-50 approximated with #fff5f6 (used as bg-[#fff5f6]) and Tailwind's amber-400 for accents

export default function Testimonials({ testimonials }) {
  const defaultTestimonials = [
    {
      name: "Redempta Kanja",
      image: "/redempta.png",
      message:
        "Working with this team transformed our product. Their attention to detail and consistent delivery was exceptional.",
    },
    {
      name: "Simon Njenga",
      image: "/simon.png",
      message:
        "Professional, responsive and creative — exactly what we needed. Highly recommended!",
    },
    {
      name: "Annah Nzau",
      image: "/annah.png",
      message:
        "A top-notch experience from start to finish. Communication was clear and results were outstanding.",
    },
  ];

  const list = testimonials && testimonials.length ? testimonials : defaultTestimonials;

  return (
    <section className="bg-[#fff5f6] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">What people say</h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          {list.map((t, i) => (
            <article
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-l-4 border-red-900 flex flex-col items-start"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={`${t.name} avatar`}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-amber-400"
                />
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">Verified client</p>
                </div>
              </div>

              <blockquote className="text-gray-700 italic text-sm">“{t.message}”</blockquote>

              <footer className="mt-6">
                <div className="inline-flex items-center gap-2 text-sm text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.291a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.291c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.291a1 1 0 00-.364-1.118L2.98 8.718c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.291z" />
                  </svg>
                  <span>Rated 5.0</span>
                </div>
              </footer>
            </article>
          ))}
        </div>

        <p className="text-center mt-8 text-sm text-gray-500">Want to add your testimonial? <a
            href="#contact"
            className=" text-font-semibold px-4 py-2 rounded-lg hover:bg-amber-500 transition"
          >
            {" "}Reach out{" "}
          </a> — we'd love to feature you.</p>
      </div>
    </section>
  );
}

