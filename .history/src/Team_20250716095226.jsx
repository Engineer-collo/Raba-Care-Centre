import React from 'react';

const teamMembers = [
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
    name: 'Redempta Kanja',
    role: 'Purpose Coach & Speaker | Growth Strategist | Founder, Redempta Kanja Global',
    image: '/redempta-kanja.png',
  },
  {
    name: 'V',
    role: 'Purpose Coach & Speaker | Growth Strategist | Founder, Redempta Kanja Global',
    image: '/velma_adhiambo.png',
  },

];

const Team = () => {
  return (
    <section id="team" className="py-16 px-6 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Meet Our Team</h2>
      <p className="text-gray-600 dark:text-gray-300 text-lg text-center max-w-3xl mx-auto mb-10">
        Behind every transformational experience at RK Global is a powerhouse team committed to excellence, authenticity, and impact.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
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
