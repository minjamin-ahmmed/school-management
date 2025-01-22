import React, { useState } from "react";
import img from "../../../assets/homecoming.png";

const Memories = () => {
  const memories = [
    { img: img },
    { img: img },
    { img: img },
    { img: img },
    { img: img },
    { img: img },
    { img: img },
    { img: img },
    { img: img },
    { img: img },
    { img: img },
    { img: img },
    { img: img },
    { img: img },
    { img: img },
    { img: img },
  ];

  const [showAll, setShowAll] = useState(false);

  const handleShowAllButton = () => {
    setShowAll((prevState) => !prevState);
  };

  return (
    <div className="w-11/12 mx-auto py-16">
      <h1 className="text-4xl font-bold text-accent text-center mb-6">
        All Campus Memories
      </h1>

      <div className="divider mb-8"></div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {memories
          .slice(0, showAll ? memories.length : 8)
          .map((memory, index) => (
            <div
              key={index}
              className="group relative w-full h-72 rounded-lg overflow-hidden cursor-pointer"
            >
              <div className="w-full h-full">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
                  src={memory.img}
                  alt="Campus Memory"
                />
              </div>
            </div>
          ))}
      </div>

      <div className="mt-16 flex items-center justify-center">
        <button
          onClick={handleShowAllButton}
          className="btn bg-accent text-white font-bold border-none hover:bg-red-800"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Memories;
