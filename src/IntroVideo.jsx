import React from "react";
import { PlayCircle } from "lucide-react"; 

const IntroVideo = () => {
  return (
    <div className="flex justify-center">
      <a
        href="https://youtu.be/QzxrRV9OxGs?si=D5NpbAEKUpkfMbF6"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 border border-amber-400 text-amber-400 px-4 py-2 rounded-xl shadow-md hover:bg-amber-400 hover:text-white transition"
        >
        <PlayCircle size={20} /> {/* icon */}
        Watch our story
      </a>
    </div>
  );
};

export default IntroVideo;
