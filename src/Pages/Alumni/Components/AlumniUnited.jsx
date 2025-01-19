import React from "react";
import alumni5 from "../../../assets/alumni-5.jpg";
import facebook from "../../../assets/fb.svg";
import linkedin from "../../../assets/ln.svg";
import youtube from "../../../assets/yt.svg";
import twitter from "../../../assets/twitter.svg";
import whatsapp from "../../../assets/wp.svg";
const AlumniUnited = () => {
  return (
    <div
      className="relative h-[400px] lg:h-[700px] group"
      style={{
        backgroundImage: `url(${alumni5})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-70"></div>

      {/* Content */}
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {/* Heading with animation */}
          <h1 className="text-white font-extrabold text-2xl lg:text-6xl mb-4 animate-fadeInUp">
            Alumni United Campaign
          </h1>

          {/* Paragraph with animation */}
          <p className="text-gray-200 animate-fadeInUp delay-200 lg:w-2/4 mb-6">
            Calling all alumni! We're launching the most ambitious campaign
            effort in our school's history. Join us in making a lasting impact
            and strengthening our alumni community.
          </p>

          <button className="btn bg-accent px-4 py-2 rounded-md text-white border-none hover:bg-red-700 transform transition duration-300 hover:scale-105 hover:shadow-lg">
            Join The Campaign
          </button>
          <div className="flex items-center justify-center gap-8 mt-8">
            <img className="w-8 h-8" src={facebook} alt="" />
            <img className="w-8 h-8" src={linkedin} alt="" />
            <img className="w-8 h-8" src={youtube} alt="" />
            <img className="w-8 h-8" src={twitter} alt="" />
            <img className="w-8 h-8" src={whatsapp} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniUnited;
