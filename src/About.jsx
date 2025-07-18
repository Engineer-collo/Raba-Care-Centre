import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faRocket } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section id="about" className="scroll-mt-20 pt-12 py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
        About Rk Global
      </h2>

      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto">
        RK Global is a purpose-driven coaching and training consultancy that empowers 
        individuals and organizations to awaken boldness, defy limitations, and lead lives of impact.
        We are the launchpad for dreamers, leaders, and legacy-builders — equipping them to rise above fear, 
        patterns, and resistance and take radical ownership of their journey.
        Through high-impact coaching, transformational training, thought-provoking speaking, 
        team building and creative storytelling, we raise warriors who refuse to settle, shrink, or apologize for their greatness.
      </p>

      <div className="pt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Vision Card */}
        <div className="border border-indigo-200 dark:border-indigo-600 rounded-xl p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition">
          <h3 className="text-center font-semibold text-xl mb-3 text-gray-900 dark:text-white">
            <FontAwesomeIcon icon={faGlobe} className="px-2 text-indigo-500" />
            Our Vision
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            To awaken a fearless generation of individuals and teams who break limitations, confront mediocrity,
            and rise with clarity, courage, and conviction — building purpose-driven lives that leave a mark and disrupt the status quo.
          </p>
        </div>

        {/* Mission Card */}
        <div className="border border-indigo-200 dark:border-indigo-600 rounded-xl p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition">
          <h3 className="text-center font-semibold text-xl mb-3 text-gray-900 dark:text-white">
            <FontAwesomeIcon icon={faRocket} className="px-2 text-indigo-500" />
            Our Mission
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            We challenge individuals and teams to break free from internal and external limitations, 
            take personal leadership, unlock their potential, and build purpose-driven lives.
          </p>
        </div>

        {/* Core Values Card */}
        <div className="flex justify-center">
          <div className="border border-indigo-200 dark:border-indigo-600 rounded-xl p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition w-full max-w-md text-center">
            <h3 className="font-semibold text-xl mb-6 text-gray-900 dark:text-white">Our Core Values</h3>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300 flex flex-col items-center">
              <li className="flex items-center gap-3 justify-center">
                <span>God First</span>
              </li>
              <li className="flex items-center gap-3 justify-center">
                <span>Hard work</span>
              </li>
              <li className="flex items-center gap-3 justify-center">
                <span>Discipline</span>
              </li>
              <li className="flex items-center gap-3 justify-center">
                <span>Execution</span>
              </li>
              <li className="flex items-center gap-3 justify-center">
                <span>Legacy</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
