import React from "react";
import bannerBg from "../../../assets/pattern-red.png";
import { BookOpen, UserPlus } from "@phosphor-icons/react"; // Icons for buttons

const Association = () => {
  return (
    <div
      className="py-12 bg-secondary"
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="w-11/12 lg:w-6/12 mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-6">
          <div className="transform transition-transform duration-300 hover:scale-105">
            <p className="font-bold text-2xl mb-4 text-center text-main drop-shadow-lg">
              Join The Alumni Association
            </p>
            <div className="flex items-center justify-center">
              <button className="btn bg-accent text-white border-none font-bold hover:bg-red-700 hover:shadow-xl transition-shadow duration-300 flex items-center gap-2 px-6 py-3">
                <UserPlus size={24} />
                Register As Alumni
              </button>
            </div>
          </div>

          <div className="transform transition-transform duration-300 hover:scale-105">
            <p className="font-bold text-2xl mb-4 text-center text-main drop-shadow-lg">
              Read Principal's Message
            </p>
            <div className="flex items-center justify-center">
              <button className="btn bg-accent text-white border-none font-bold hover:bg-red-700 hover:shadow-xl transition-shadow duration-300 flex items-center gap-2 px-6 py-3">
                <BookOpen size={24} />
                Read Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Association;
