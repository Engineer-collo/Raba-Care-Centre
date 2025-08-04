import React from 'react';

const VisitorsAdmin = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white dark:bg-gray-900 shadow-md rounded-2xl mt-6">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        📍 Visitors & Their Location
      </h1>
      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
        Click{" "}
        <a
          href="https://analytics.google.com/analytics/web/?utm_source=marketingplatform.google.com&utm_medium=et&utm_campaign=marketingplatform.google.com%2Fabout%2Fanalytics%2F#/p497874043/reports/intelligenthome"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 dark:text-blue-400 font-medium hover:underline hover:text-blue-800 dark:hover:text-blue-300 transition"
        >
          here
        </a>{" "}
        to view your website's visitors and their current location in real time.
      </p>
    </div>
  );
};

export default VisitorsAdmin;
