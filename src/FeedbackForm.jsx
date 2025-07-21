import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    challenges: '',
    suggestions: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Feedback submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div id="feedback" className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 md:p-10 mb-8 max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">
        We Value Your Feedback!
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed text-center mb-2">
        Thank you for visiting our website! Your experience matters to us, and we are always looking for ways to improve.
        Please take a moment to share your thoughts — let us know what you liked, any challenges you faced while navigating the site, and suggestions on how we can make your visit even better.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 italic text-center mb-6">
        Fields marked with <span className="text-red-500">*</span> are mandatory.
      </p>

      {submitted ? (
        <>
          <div className="text-green-600 font-semibold text-center mb-6">
            🎉 Thank you for your feedback!
          </div>
          <div className="text-center">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="bg-amber-400 hover:bg-amber-500 text-gray-800 font-semibold py-2 px-6 rounded-xl transition-all duration-300"
            >
              Back to Home
            </button>
          </div>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border ${
                errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
              } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Your name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border ${
                errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
              } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
              What did you enjoy about the website?
            </label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              rows="3"
              className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your experience"
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
              What challenges did you face?
            </label>
            <textarea
              name="challenges"
              value={formData.challenges}
              onChange={handleChange}
              rows="3"
              className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Any challenges navigating?"
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
              Any suggestions for improvement?
            </label>
            <textarea
              name="suggestions"
              value={formData.suggestions}
              onChange={handleChange}
              rows="3"
              className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="How can we do better?"
            ></textarea>
          </div>

          <div className="text-center space-x-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300"
            >
              Submit Feedback
            </button>

            <button
              type="button"
              onClick={() => navigate('/')}
              className="bg-amber-400 hover:bg-amber-500 text-gray-800 font-semibold py-2 px-4 rounded-xl transition-all duration-300"
            >
              Back to Home
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
