import React from "react";
import primary from "../../../assets/primary.png";
import highschool from "../../../assets/high-school.png";
import college from "../../../assets/college.png";

const Teach = () => {
  return (
    <div className="w-11/12 mx-auto py-24">
      <h3 className="font-bold text-4xl text-center mb-16 text-accent">
        Classes We Teach
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Primary School Card */}
        <div className="hover:bg-red-100 hover:border hover:border-accent transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
          <div className="w-full h-64 mb-4 overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
              src={primary}
              alt=""
            />
          </div>

          <div className="p-4">
            <h2 className="text-main font-semibold text-2xl mb-4">
              Primary School
            </h2>
            <p className="text-justify mb-6">
              BA High School Students learn, grow, play, and explore in a safe,
              bucolic environment in Baghmara, Rajshahi.{" "}
            </p>
            <button className="text-red font-bold underline text-accent">
              Learn More
            </button>
          </div>
        </div>

        {/* High School Card */}
        <div className="hover:bg-red-100 hover:border hover:border-accent transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
          <div className="w-full h-64 mb-4 overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
              src={highschool}
              alt=""
            />
          </div>

          <div className="p-4">
            <h2 className="text-main font-semibold text-2xl mb-4">
              High School
            </h2>
            <p className="text-justify mb-6">
              BA High School Students learn, grow, play, and explore in a safe,
              bucolic environment in Baghmara, Rajshahi.{" "}
            </p>
            <button className="text-red font-bold underline text-accent">
              Learn More
            </button>
          </div>
        </div>

        {/* College Card */}
        <div className="hover:bg-red-100 hover:border hover:border-accent transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
          <div className="w-full h-64 mb-4 overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
              src={college}
              alt=""
            />
          </div>

          <div className="p-4">
            <h2 className="text-main font-semibold text-2xl mb-4">College</h2>
            <p className="text-justify mb-6">
              BA High School Students learn, grow, play, and explore in a safe,
              bucolic environment in Baghmara, Rajshahi.{" "}
            </p>
            <button className="text-red font-bold underline text-accent">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teach;
