import React, { useState, useEffect } from 'react';

const API_SEND_EMAIL = 'http://127.0.0.1:8000/api/send-email';
const API_GET_EMAILS = 'http://127.0.0.1:8000/api/subscribes';

const AdminEmailSender = () => {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('');
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const res = await fetch(API_GET_EMAILS);
        const data = await res.json();
        setEmails(data.map(entry => entry.email));
      } catch (err) {
        console.error('Failed to fetch emails:', err);
        setStatus('❌ Failed to fetch subscriber emails');
      }
    };

    fetchEmails();
  }, []);

  const handleSend = async () => {
    if (!subject || !body) {
      setStatus('⚠️ Subject and body are required');
      return;
    }

    if (emails.length === 0) {
      setStatus('⚠️ No subscriber emails available');
      return;
    }

    try {
      const res = await fetch(API_SEND_EMAIL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, body, recipients: emails })
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('✅ Emails sent successfully');
        setSubject('');
        setBody('');
      } else {
        setStatus(`❌ ${data.error}`);
      }
    } catch (error) {
      console.error('Email send failed:', error);
      setStatus('❌ Failed to send emails');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 border shadow rounded-lg bg-white dark:bg-gray-900 dark:text-white mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">📤 Send Email to Subscribers</h2>

      <input
        type="text"
        placeholder="Subject"
        className="w-full p-2 border mb-4 rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        value={subject}
        onChange={e => setSubject(e.target.value)}
      />

      <textarea
        placeholder="Email Body"
        className="w-full p-2 border mb-4 rounded h-40 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        value={body}
        onChange={e => setBody(e.target.value)}
      ></textarea>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-500"
        onClick={handleSend}
      >
        Send Email
      </button>

      {status && <p className="mt-4 text-sm text-center">{status}</p>}
    </div>
  );
};

export default AdminEmailSender;
