import React from "react";

const CoreValues = () => {
  const values = [
    { label: "Empathy", color: "bg-red-500" },
    { label: "Careful Service Delivery", color: "bg-amber-500" },
    { label: "Confidentiality", color: "bg-blue-500" },
    { label: "Impartiality", color: "bg-green-500" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="relative w-80 h-80">
        {/* Center Circle */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-32 h-32 rounded-full bg-white shadow-lg flex justify-center items-center text-center font-bold text-lg text-gray-700 border">
            Core <br /> Values
          </div>
        </div>

        {/* Outer Sections */}
        {values.map((value, index) => {
          const angle = (index * 360) / values.length;
          return (
            <div
              key={index}
              className={`absolute w-32 h-32 rounded-t-full ${value.color} flex justify-center items-center text-white font-semibold text-sm text-center shadow-md`}
              style={{
                transform: `rotate(${angle}deg) translate(7rem) rotate(-${angle}deg)`,
              }}
            >
              {value.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoreValues;
