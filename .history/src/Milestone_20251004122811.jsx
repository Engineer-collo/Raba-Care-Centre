import React from "react";
import { motion } from "framer-motion";
import { Users, Laptop, Handshake, Rocket, Building } from "lucide-react";

const milestones = [
  {
    year: "2021",
    title: "Rabacare Founded",
    description: "Rabacare Centre was established with a mission to provide quality and compassionate care.",
    icon: <Building className="w-6 h-6" />,
  },
  {
    year: "2022",
    title: "Community Programs",
    description: "Launched outreach programs impacting over 500 families in the community.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    year: "2023",
    title: "Digital Transformation",
    description: "Introduced an online platform to improve accessibility of services.",
    icon: <Laptop className="w-6 h-6" />,
  },
  {
    year: "2024",
    title: "Partnerships & Growth",
    description: "Expanded services through key partnerships and increased reach.",
    icon: <Handshake className="w-6 h-6" />,
  },
  {
    year: "2025",
    title: "Today",
    description: "Continuing to innovate and serve with care, compassion, and integrity.",
    icon: <Rocket className="w-6 h-6" />,
  },
];

export default function Milestones() {
  return (
    <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg border-l-4 border-t-4 border-red-900 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-red-900 mb-10 text-center">
        Rabacare Journey
      </h2>

      <div className="relative flex flex-col md:flex-row items-start justify-between border-t-4 border-amber-500 pt-10 space-y-8 md:space-y-0">
        {milestones.map((m, i) => (
          <motion.div
            key={i}
            className="relative flex flex-col items-center text-center md:w-1/5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <span className="flex items-center justify-center w-12 h-12 bg-red-900 text-white rounded-full shadow -mt-6">
              {m.icon}
            </span>
            <div className="border-t-4 bordr-l-4 border-amberbg-gray-50 p-4 rounded-xl shadow mt-4">
              <h3 className="text-lg font-semibold text-amber-600">
                {m.year} — {m.title}
              </h3>
              <p className="text-gray-700 mt-2">{m.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
