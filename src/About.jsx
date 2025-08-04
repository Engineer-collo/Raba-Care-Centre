import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faRocket } from '@fortawesome/free-solid-svg-icons';

const defaultAbout = {
  about_text:
    'RK Global is a purpose-driven coaching and training consultancy that empowers individuals and organizations to awaken boldness, defy limitations, and lead lives of impact...',
  vision_text:
    'To awaken a fearless generation of individuals and teams who break limitations, confront mediocrity...',
  mission_text:
    'We challenge individuals and teams to break free from internal and external limitations...',
};

const defaultCoreValues = [
  'God First',
  'Hard work',
  'Discipline',
  'Execution',
  'Legacy',
];

const About = () => {
  const [aboutData, setAboutData] = useState(defaultAbout);
  const [coreValues, setCoreValues] = useState(defaultCoreValues);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/abouts');
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setAboutData({ ...defaultAbout, ...data[0] });
        } else {
          console.warn('About data is empty:', data);
        }
      } catch (err) {
        console.error('Failed to fetch about data:', err);
      }
    };

    const fetchCoreValues = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/core-values');
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const values = data.map((item) => item.core_value);
          setCoreValues(values);
        } else {
          console.warn('Core values are empty:', data);
        }
      } catch (err) {
        console.error('Failed to fetch core values:', err);
      }
    };

    fetchAbout();
    fetchCoreValues();
  }, []);

  return (
    <section id="about" className="scroll-mt-20 pt-12 py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
        About RK Global
      </h2>

      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto">
        {aboutData.about_text}
      </p>

      <div className="pt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Vision Card */}
        <div className="border border-indigo-200 dark:border-indigo-600 rounded-xl p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition">
          <h3 className="text-center font-semibold text-xl mb-3 text-gray-900 dark:text-white">
            <FontAwesomeIcon icon={faGlobe} className="px-2 text-indigo-500" />
            Our Vision
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{aboutData.vision_text}</p>
        </div>

        {/* Mission Card */}
        <div className="border border-indigo-200 dark:border-indigo-600 rounded-xl p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition">
          <h3 className="text-center font-semibold text-xl mb-3 text-gray-900 dark:text-white">
            <FontAwesomeIcon icon={faRocket} className="px-2 text-indigo-500" />
            Our Mission
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{aboutData.mission_text}</p>
        </div>

        {/* Core Values Card */}
        <div className="flex justify-center">
          <div className="border border-indigo-200 dark:border-indigo-600 rounded-xl p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition w-full max-w-md text-center">
            <h3 className="font-semibold text-xl mb-6 text-gray-900 dark:text-white">Our Core Values</h3>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300 flex flex-col items-center">
              {coreValues.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
