import React from "react";

export default function Sustainability() {
  return (
    <section className="ml-6 mr-6 bg-white rounded-2xl shadow-md border-l-4 border-t-4 border-red-900 p-8 my-10">
      <h2 className="text-2xl font-bold text-red-900 mb-4">Our Sustainability Commitment</h2>
      <p className="text-gray-700 mb-6">
        At <span className="text-amber-500 font-semibold">Rabacare</span>, we believe technology should care
        not only for people but also for the planet. Our website is built with
        <span className="font-medium"> sustainability</span> in mind.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Environmental */}
        <div className="p-4 rounded-xl bg-red-50 shadow-sm flex flex-col items-center text-center">
          <img
            src="/eco-friendly.png"
            alt="Eco friendly"
            className="h-32 w-auto mb-2 rounded-xl"
          />
          <h3 className="text-lg font-semibold text-red-900">Eco-Friendly</h3>
          <p className="text-sm text-gray-600">
            Optimized code and green hosting reduce our carbon footprint.
          </p>
        </div>

        {/* Social */}
        <div className="p-4 rounded-xl bg-red-50 shadow-sm flex flex-col items-center text-center">
          <img
            src="/inclusive.png"
            alt="Inclusive design"
            className="h-32 w-auto mb-2 rounded-xl"
          />
          <h3 className="text-lg font-semibold text-red-900">Inclusive</h3>
          <p className="text-sm text-gray-600">
            Accessible design ensures everyone can use our services.
          </p>
        </div>

        {/* Economic */}
        <div className="p-4 rounded-xl bg-red-50 shadow-sm flex flex-col items-center text-center">
          <img
            src="/sustainable-growth.png"
            alt="Sustainable growth"
            className="h-32 w-auto mb-2 rounded-xl"
          />
          <h3 className="text-lg font-semibold text-red-900">Sustainable Growth</h3>
          <p className="text-sm text-gray-600">
            Scalable, maintainable systems that serve clients long-term.
          </p>
        </div>
      </div>
    </section>
  );
}
