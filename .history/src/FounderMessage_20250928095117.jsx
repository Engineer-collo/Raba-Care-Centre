import React from "react";

const FounderMessage = () => {
  return (
    <section id="rabacare-target"  className="bg-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Founder Image */}
        <div className="flex justify-center">
          <img
            src="/doreen-photo1.png"
            alt="Founder Doreen Wachira"
            className="rounded-2xl shadow-lg w-80 h-auto object-cover"
          />
        </div>

        {/* Founder Message */}
        <div className="text-gray-800">
          <h2 className="text-3xl font-bold text-maroon-700 mb-4">
            A Message from Our Founder
          </h2>
          <p className="text-lg leading-relaxed mb-6">
          Dear Community, Welcome to this platform—a space dedicated to fostering growth, healing, and support. We are thrilled to have you embark on this journey with us. Here, you will find a compassionate and understanding community committed to your well-being. Our platform is designed to provide a safe space for self-exploration, offering a range of services to meet your unique needs. Whether you're seeking guidance during challenging times or simply aiming for personal development, our mental health team is here to accompany you on your path to mental and emotional wellness. Thank you for entrusting us with your journey. We look forward to being part of your positive and transformation experience.
          </p>
          <p className="font-semibold text-amber-500">
          – <a 
    href="/bio" 
    className="text-undertext-blue-500 font-semibold text-lg hover:underline"
  >
    Doreen Wachira Mbae
  </a>, Founder
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
