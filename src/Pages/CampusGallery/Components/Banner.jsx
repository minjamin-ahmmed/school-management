import React from "react";
import campusGalleryImg from "../../../assets/campus-gallery-banner.png";

const Banner = () => {
  return (
    <div
      className="py-24"
      style={{
        backgroundImage: `url(${campusGalleryImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default Banner;
