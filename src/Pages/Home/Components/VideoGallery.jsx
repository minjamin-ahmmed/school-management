// Import necessary hooks and components
import React, { useState } from "react";
import img1 from "../../../assets/golden2.png";
import img2 from "../../../assets/golden.png";
import img3 from "../../../assets/golden3.jpg";
import img4 from "../../../assets/golden4.png";

const VideoGallery = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      id: 1,
      thumbnail: img1,
      videoSrc: "https://www.youtube.com/watch?v=qM3qY_kqDHw",
    },
    {
      id: 2,
      thumbnail: img2,
      videoSrc: "https://www.youtube.com/watch?v=qM3qY_kqDHw",
    },
    {
      id: 3,
      thumbnail: img3,
      videoSrc: "https://www.youtube.com/watch?v=qM3qY_kqDHw",
    },
    {
      id: 4,
      thumbnail: img4,
      videoSrc: "https://www.youtube.com/watch?v=qM3qY_kqDHw",
    },
  ];

  const handlePlayVideo = (id) => {
    setActiveVideo(id);
  };

  return (
    <div className="py-16">
      <h2 className="text-4xl font-bold text-center text-accent mb-4">
        Hear From Our Golden Students
      </h2>

      <p className="text-center mb-16 w-3/4 mx-auto">
        Meet and hear from some of our students and why they selected BA High
        School
      </p>
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative w-64 h-96 group transform transition duration-300 hover:scale-105"
            >
              {activeVideo === video.id ? (
                <video
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  controls
                  autoPlay
                  src={video.videoSrc}
                />
              ) : (
                <>
                  <img
                    src={video.thumbnail}
                    alt={`Thumbnail for video ${video.id}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg group-hover:opacity-80 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 group-hover:opacity-90 transition duration-300"></div>
                  <button
                    onClick={() => handlePlayVideo(video.id)}
                    className="w-16 h-16 bg-yellow-500 shadow-lg absolute top-[50%] left-[35%] inset-0 flex items-center justify-center text-secondary rounded-full transform transition duration-300 group-hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
