import React from "react";

const FounderMessage = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Founder Image */}
        <div className="flex justify-center">
          <img
            src="/founder.png"
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
            At Raba Care Centre, our mission is to nurture, support, and
            transform lives with compassion and excellence. We believe every
            individual deserves care that not only meets their needs but uplifts
            their spirit. Together, we are building a community of hope,
            strength, and dignity.
          </p>
          <p className="font-semibold text-amber-500">
            – Doreen Wachira, Founder
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
