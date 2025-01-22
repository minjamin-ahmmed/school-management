import React, { useState } from "react";
import explore from "../../../assets/explore.png";
import { Play } from "@phosphor-icons/react";

const Explore = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative w-full h-[700px]">
      {/* Background Image */}
      <img
        src={explore}
        alt="Rajshahi City"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl  lg:text-6xl font-bold mb-4 text-center">
          Explore The Beautiful Rajshahi City
        </h1>
        <button
          onClick={openModal}
          className="bg-yellow-500 text-white px-6 py-6 rounded-full font-semibold hover:bg-yellow-600 transition"
        >
          <Play color="black" size={32} />
        </button>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-white w-11/12 md:w-3/4 lg:w-3/4 rounded-lg overflow-hidden">
            <div className="relative">
              <iframe
                className="w-full h-64 md:h-96"
                src="https://www.youtube.com/embed/gzzRFU8CcG8"
                title="Rajshahi City Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-red-500 text-white px-4 py-3 rounded-full hover:bg-red-600"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Explore;
