import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const defaultTeam = [
  {
    name: 'Redempta Kanja',
    description: 'Purpose Coach & Speaker | Growth Strategist | Founder, Redempta Kanja Global',
    picture_url: '/redempta-kanja.png',
    email: 'info@redemptakanjaglobal.com',
    phone: '+254 757855508',
  },
  {
    name: 'Mercy Simone Mumo',
    description: 'Finance Consultant | Strategy, Compliance & Operational Excellence',
    picture_url: '/mercy-mumo.png',
  },
  {
    name: 'Doreen Wachira Mbae',
    description: 'Licensed Mental Health Expert | Founder, Raba Care Centre',
    picture_url: '/doreen-wachira.png',
  },
  {
    name: 'Velma Adhiambo',
    description: 'Strategic Consultant, RK Global | International Development & Trade Expert | Founder, Greater Works Book Club',
    picture_url: '/velma_adhiambo.png',
  },
];

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/team')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((data) => {
        if (data.length === 0) {
          setTeamMembers(defaultTeam); // fallback
        } else {
          setTeamMembers(data);
        }
      })
      .catch(() => {
        setTeamMembers(defaultTeam); // fallback
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center py-10">Loading team...</div>;

  // Try to find Redempta as the lead
  const redempta = teamMembers.find((m) => m.name.includes('Redempta'));
  const others = teamMembers.filter((m) => m.name !== redempta?.name);

  return (
    <section id="team" className="scroll-mt-20 py-16 px-6 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Meet Our Team</h2>
      <p className="text-gray-600 dark:text-gray-300 text-lg text-center max-w-3xl mx-auto mb-10">
        Behind every transformational experience at RK Global is a powerhouse team committed to excellence, authenticity, and impact.
      </p>

      {/* Redempta */}
      {redempta && (
        <div className="group bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 text-center hover:shadow-xl transition max-w-3xl mx-auto mb-12">
          <img
            src={redempta.picture_url}
            alt={redempta.name}
            className="w-40 h-56 mx-auto rounded-xl object-cover mb-4 border-4 border-amber-400"
          />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{redempta.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{redempta.description}</p>
          {(redempta.email || redempta.phone) && (
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-amber-400 p-3 rounded-lg text-white text-sm text-center space-y-2">
                {redempta.email && (
                  <a
                    href={`mailto:${redempta.email}`}
                    className="hover:underline flex items-center justify-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaEnvelope /> {redempta.email}
                  </a>
                )}
                {redempta.phone && (
                  <a
                    href={`tel:${redempta.phone}`}
                    className="hover:underline flex items-center justify-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaPhone /> {redempta.phone}
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Other Team Members */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {others.map((member, index) => (
          <div
            key={index}
            className="group bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 text-center hover:shadow-xl transition"
          >
            <img
              src={member.picture_url}
              alt={member.name}
              className="w-40 h-56 mx-auto rounded-xl object-cover mb-4 border-4 border-amber-400"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{member.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
