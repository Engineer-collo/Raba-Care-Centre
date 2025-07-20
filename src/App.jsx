import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import FeedbackForm from './FeedbackForm';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/feedback" element={<FeedbackForm />} />
    </Routes>
  );
};

export default App;
