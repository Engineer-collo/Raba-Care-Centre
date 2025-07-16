import React from 'react';

const teamMembers = [
  {
    name: 'Redempta Kanja',
    role: 'Purpose Coach & Speaker | Growth Strategist | Founder, Redempta Kanja Global',
    image: '/redempta-kanja.png',
    email: 'redempta@rkglobal.com',
    phone: '+254 712 345 678',
  },
  {
    name: 'Mercy Simone Mumo',
    role: 'Finance Consultant | Specializing in Strategy, Compliance & Operational Excellence',
    image: '/mercy-mumo.png',
    email: 'mercy@rkglobal.com',
    phone: '+254 733 222 111',
  },
  {
    name: 'Doreen Wachira Mbae',
    role: 'Licensed Mental Health Expert | Founder, Raba Care Centre',
    image: '/doreen-wachira.png',
    email: 'doreen@rkglobal.com',
    phone: '+254 701 654 321',
  },
  {
    name: 'Velma Adhiambo',
    role: 'Strategic Consultant | Founder, Greater Works Book Club',
    image: '/velma_adhiambo.png',
    email: 'velma@rkglobal.com',
    phone: '+254 789 456 123',
  },
];

const Team = () => {
  // Ensure Redempta appears first
  const sortedMembers = [
    ...teamMembers.filter((m) => m.name === 'Redempta Kanja'),
    ...teamMembers.filter((m) => m.name !== 'Redempta Kanja'),
  ];

  return (
    <section id="team" className="py-16 px-6 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
        Meet Our Team
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-lg text-center max-w-3xl mx-auto mb-10">
        Behind every transformational experience at RK Global is a powerhouse team committed to excellence, authenticity, and impact.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {sortedMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 text-center hover:shadow-xl transition group relative"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-56 mx-auto rounded-xl object-cover mb-4 border-4 border-amber-400"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {member.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{member.role}</p>

            {/* Hover Contact Info */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 bg-white dark:bg-gray-700 text-gray-800 dark:text-white text-xs px-4 py-2 rounded shadow">
              <p>{member.email}</p>
              <p>{member.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
