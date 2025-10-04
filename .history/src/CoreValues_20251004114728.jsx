import React, { useState } from "react";

const values = [
  {
    label: "Empathy",
    color: "bg-red-900",
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
    color: "bg-red-900",
    description:
      "We respect privacy and safeguard sensitive information entrusted to us.",
  },
  {
    label: "Impartiality",
    color: "bg-amber-500",
    description:
      "We treat everyone fairly and equally, without bias or favoritism.",
  },
];

const CoreValues = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <divm className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center cursor-pointer transition-transform transform hover:scale-105"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`${value.color} w-24 h-24 rounded-full flex items-center justify-center text-white text-lg font-semibold`}
            >
              {value.label[0]}
            </div>
            <h3 className="mt-4 font-semibold text-lg">{value.label}</h3>
            {hoveredIndex === index && (
              <p className="mt-2 text-gray-700">{value.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
