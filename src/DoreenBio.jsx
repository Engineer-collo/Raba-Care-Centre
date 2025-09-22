import React from "react";

export default function DoreenMbaeProfile() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12 bg-amber-50">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 text-center">
          Professional Profile
        </h1>
        <p className="text-center text-lg text-amber-600 font-semibold mb-8">
          Doreen Wachira Mbae
        </p>

        {/* Image */}
        <div className="mb-10 flex justify-center">
          <img
            src="/doreen-photo2.png"
            alt="Founder Doreen Wachira"
            className="rounded-2xl shadow-lg w-72 md:w-80 h-auto object-cover"
          />
        </div>

        {/* Bio */}
        <p className="text-gray-700 leading-relaxed mb-10 text-lg">
          <strong>Doreen Wachira Mbae</strong> is a seasoned{" "}
          <strong>
            psychologist, mental health advocate, and founder of Raba Care Center
          </strong>
          , a Nairobi-based organization dedicated to counselling, trauma
          healing, and emotional wellbeing. With a strong academic and
          professional background, she has established herself as a leading voice
          in mental health and gender-based violence (GBV) response.
        </p>

        {/* Education */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-amber-400 pb-2">
            Education & Training
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Master’s Degree in Medical Sociology</strong> – University of Nairobi
            </li>
            <li>
              <strong>Bachelor of Arts (B.A.)</strong> – University of Nairobi
            </li>
            <li>
              <strong>Higher Diploma in Psychological Counselling</strong> – Kenya Institute of Professional Counselling
            </li>
            <li>
              Additional professional training with{" "}
              <strong>LVCT Health, NASCOP, and Nairobi Technical Training Institute</strong>
            </li>
          </ul>
        </section>

        {/* Career */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-amber-400 pb-2">
            Career Journey
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>
              <strong>Founder & Psychologist, Raba Care Center (2021 – Present)</strong>
              <br />
              Established a safe space for individuals and communities to access
              counselling, mental wellness services, and trauma healing programs.
            </li>
            <li>
              <strong>
                Consulting Psychologist, CONNECT Project – Kenyatta National Hospital
                (2021 – 2024)
              </strong>
              <br />
              Served as a First Point of Contact for survivors of gender-based
              violence, offering critical counselling and psychosocial support.
            </li>
            <li>
              <strong>Focal Point for GBV, University of Nairobi (2019 – 2021)</strong>
              <br />
              Strengthened GBV prevention and response initiatives within higher
              education settings.
            </li>
            <li>
              <strong>Operations Manager, Flexo Concepts Ltd (2016 – 2019)</strong>
              <br />
              Gained managerial and organizational leadership experience outside
              the health sector.
            </li>
          </ul>
        </section>

        {/* Advocacy */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-amber-400 pb-2">
            Advocacy & Impact
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Beyond her clinical work, Doreen is a{" "}
            <strong>trauma-healing facilitator, author, and public speaker</strong>. 
            She authored <em>“Inner Rise: Journey Beyond Trauma”</em>, a work that
            reflects her commitment to helping individuals rebuild their lives after
            adversity. Her leadership at Raba Care has been instrumental in
            promoting mental health awareness, building resilience, and empowering
            communities across Kenya.
          </p>
        </section>
      </div>
    </div>
  );
}
