import React, { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import workerUrl from "pdfjs-dist/build/pdf.worker.min.js?url";

export default function CompanyProfile() {
  const [open, setOpen] = useState(false);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-4">Our Rabacare Company’s Profile</h1>

      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="bg-amber-500 text-white px-6 py-3 rounded-lg shadow hover:bg-amber-600 transition"
        >
          View Profile
        </button>
      ) : (
        <div className="w-full h-[800px] border rounded-xl">
          <Worker workerUrl={workerUrl}>
            <Viewer
              fileUrl="/rabacare-profile.pdf"
              plugins={[defaultLayoutPluginInstance]}
              renderLoader={() => (
                <div className="flex justify-center items-center h-full">
                  <p className="text-amber-600 font-semibold">Loading profile...</p>
                </div>
              )}
            />
          </Worker>
        </div>
      )}
    </div>
  );
}
