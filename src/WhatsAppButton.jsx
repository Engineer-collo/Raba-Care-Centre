// src/WhatsAppButton.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '254787530331'; 
  const message = 'Hello! I visited your site Raba Care Center and would like to talk to you.';

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
