import React from "react";
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

  return (
    <div className="w-11/12 mx-auto py-16">
      <h1 className="text-4xl font-bold text-accent text-center">
        All Campus Memories
      </h1>

      <div className="divider"></div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {memories.map((memory, index) => (
          <div key={index}>
            <div className="w-full h-72">
              <img
                className="w-full h-full object-cover"
                src={memory.img}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memories;
