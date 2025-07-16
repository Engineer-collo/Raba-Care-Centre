import React from 'react';

const teamMembers = [
  {
    name: 'Redempta Kanja',
    role: 'Purpose Coach & Speaker | Growth Strategist | Founder, Redempta Kanja Global',
    image: '/redempta-kanja.png',
  },
  {
    name: 'Mercy Simone Mumo',
    role: 'Finance Consultant | Specializing in Strategy, Compliance & Operational Excellence',
    image: '/mercy-mumo.png',
  },
  {
    name: 'Doreen Wachira Mbae',
    role: 'Licensed Mental Health Expert | 20+ Years in Emotional & Psychological Well-being | Founder, Raba Care Centre',
    image: '/doreen-wachira.png',
  },
  {
    name: 'Velma adhiambo',
    role: 'Strategic Consultant, RK Global | International Development & Trade Expert | Founder, Greater Works Book Club',
    image: '/velma_adhiambo.png',
  },
];

const Team = () => {
  const redempta = teamMembers[0];
  const others = teamMembers.slice(1);

  return (
    <section id="team" className="py-16 px-6 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Meet Our Team</h2>
      <p className="text-gray-600 dark:text-gray-300 text-lg text-center max-w-3xl mx-auto mb-10">
        Behind every transformational experience at RK Global is a powerhouse team committed to excellence, authenticity, and impact.
      </p>

      {/* Redempta Highlighted on Top */}
      <div className="max-w-xl mx-auto mb-12">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 text-center hover:shadow-xl transition">
          <img
            src={redempta.image}
            alt={redempta.name}
            className="w-40 h-56 mx-auto rounded-xl object-cover mb-4 border-4 border-amber-400"
          />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{redempta.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{redempta.role}</p>
        </div>
      </div>

      {/* Other Team Members Below */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {others.map((member, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 text-center hover:shadow-xl transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-56 mx-auto rounded-xl object-cover mb-4 border-4 border-amber-400"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{member.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
