import React from "react";

export default function DoreenMbaeProfile() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Professional Profile: Doreen Wachira Mbae
      </h1>
              {/* Doreen Image */}
              <div className="mb-6 flex justify-center">
          <img
            src="/doreen-photo2.png"
            alt="Founder Doreen Wachira"
            className="rounded-2xl shadow-lg w-80 h-auto object-cover"
          />
        </div>

      <p className="text-gray-700 mb-6">
        <strong>Doreen Wachira Mbae</strong> is a seasoned <strong>psychologist, mental health advocate, and founder of Raba Care Center</strong>, a Nairobi-based organization dedicated to counselling, trauma healing, and emotional wellbeing. With a strong academic and professional background, she has established herself as a leading voice in mental health and gender-based violence (GBV) response.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Education & Training</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Master’s Degree in Medical Sociology</strong> – University of Nairobi</li>
          <li><strong>Bachelor of Arts (B.A.)</strong> – University of Nairobi</li>
          <li><strong>Higher Diploma in Psychological Counselling</strong> – Kenya Institute of Professional Counselling</li>
          <li>Additional professional training with <strong>LVCT Health, NASCOP, and Nairobi Technical Training Institute</strong></li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Career Journey</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Founder & Psychologist, Raba Care Center (2021 – Present)</strong><br />
            Established a safe space for individuals and communities to access counselling, mental wellness services, and trauma healing programs.
          </li>
          <li>
            <strong>Consulting Psychologist, CONNECT Project – Kenyatta National Hospital (2021 – 2024)</strong><br />
            Served as a First Point of Contact for survivors of gender-based violence, offering critical counselling and psychosocial support.
          </li>
          <li>
            <strong>Focal Point for GBV, University of Nairobi (2019 – 2021)</strong><br />
            Worked to strengthen GBV prevention and response initiatives within higher education settings.
          </li>
          <li>
            <strong>Operations Manager, Flexo Concepts Ltd (2016 – 2019)</strong><br />
            Gained managerial and organizational leadership experience outside the health sector.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Advocacy & Impact</h2>
        <p className="text-gray-700">
          Beyond her clinical work, Doreen is a <strong>trauma-healing facilitator, author, and public speaker</strong>. She authored <em>“Inner Rise: Journey Beyond Trauma”</em>, a work that reflects her commitment to helping individuals rebuild their lives after adversity. Her leadership at Raba Care has been instrumental in promoting mental health awareness, building resilience, and empowering communities across Kenya.
        </p>
      </section>
    </div>
  );
}