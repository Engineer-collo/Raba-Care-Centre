import React, { useState } from "react";

const CoreValues = () => {
  const values = [
    {
      label: "Empathy",
      color: "bg-red-500",
      description:
        "We strive to understand and share the feelings of others, ensuring compassionate service.",
    },
    {
      label: "Careful Service Delivery",
      color: "bg-amber-500",
      description:
        "We pay attention to detail, ensuring every service is delivered with accuracy and excellence.",
    },
    {
      label: "Confidentiality",
      color: "bg-blue-500",
      description:
        "We respect privacy and safeguard sensitive information entrusted to us.",
    },
    {
      label: "Impartiality",
      color: "bg-green-500",
      description:
        "We treat everyone fairly and equally, without bias or favoritism.",
    },
  ];

  const [activeValue, setActiveValue] = useState(null);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 space-y-8">
      {/* Circle */}
      <div className="relative w-80 h-80">
        {/* Center Circle */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-32 h-32 rounded-full bg-white shadow-lg flex justify-center items-center text-center font-bold text-lg text-gray-700 border">
            Core <br /> Values
          </div>
        </div>

        {/* Outer Segments */}
        {values.map((value, index) => {
          const angle = (index * 360) / values.length;
          return (
            <div
              key={index}
              onMouseEnter={() => setActiveValue(value)}
              onMouseLeave={() => setActiveValue(null)}
              className={`absolute w-32 h-32 rounded-t-full ${value.color} flex justify-center items-center text-white font-semibold text-sm text-center shadow-md cursor-pointer transition-transform`}
              style={{
                transform: `rotate(${angle}deg) translate(7rem) rotate(-${angle}deg)`,
              }}
            >
              {value.label}
            </div>
          );
        })}
      </div>

      {/* Hover Info */}
      {activeValue && (
        <div className="w-96 bg-white shadow-lg rounded-2xl p-4 text-center border border-gray-200 transition">
          <h2 className="text-xl font-bold text-gray-800">
            {activeValue.label}
          </h2>
          <p className="text-gray-600 mt-2">{activeValue.description}</p>
        </div>
      )}
    </div>
  );
};

export default CoreValues;
