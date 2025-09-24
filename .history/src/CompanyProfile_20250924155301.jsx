import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// Import the worker from the exact version installed
import workerUrl from "pdfjs-dist/build/pdf.worker.min.js?url";

export default function CompanyProfile() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-4">Our Company’s Profile</h1>
      <div className="w-full h-[800px] border rounded-xl">
        <Worker workerUrl={workerUrl}>
          <Viewer fileUrl="/profile.pdf" plugins={[defaultLayoutPluginInstance]} />
        </Worker>
      </div>
    </div>
  );
}
