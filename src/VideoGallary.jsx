import React, { useState } from "react";
import YouTubeVideo from "./YouTubeVideo";

export default function VideoGallery({ videos }) {
  const [showAll, setShowAll] = useState(false);

  // Show only first 2 videos if showAll is false
  const visibleVideos = showAll ? videos : videos.slice(0, 2);

  return (
    <section className="scroll-mt-20 pt-12 py-16 px-6 max-w-6xl mx-auto">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
        Our Coaching Videos
      </h1>

      {/* Welcoming Text */}
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-8">
        Welcome to my video gallery! Here, you’ll find inspiring coaching sessions,
        powerful insights, and practical tools to help you awaken your boldness,
        break limitations, and live a life of impact.
      </p>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {visibleVideos.map((video) => (
          <YouTubeVideo key={video.id} videoId={video.id} title={video.title} />
        ))}
      </div>

      {/* View More / View Less Button */}
      {videos.length > 2 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </section>
  );
}
