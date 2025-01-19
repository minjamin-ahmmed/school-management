import React from "react";
import eventImg from "../../../assets/event-banner.png";

const Banner = () => {
  return (
    <div
      className="py-24"
      style={{
        backgroundImage: `url(${eventImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default Banner;
