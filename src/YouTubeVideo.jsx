import React from "react";
import YouTube from "react-youtube";

export default function YouTubeVideo({ videoId, title }) {
  const opts = {
    width: "100%",
    height: "200",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <YouTube videoId={videoId} opts={opts} />
      <div className="p-2 text-center font-semibold">{title}</div>
    </div>
  );
}
