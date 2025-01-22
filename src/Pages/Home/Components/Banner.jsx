import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerBg from "../../../assets/patterns.png";
import slider1 from "../../../assets/slider1.png";
import slider2 from "../../../assets/slider2.png";
import slider3 from "../../../assets/slider3.png";
import slider4 from "../../../assets/slider4.png";
import slider5 from "../../../assets/slider5.png";

const Banner = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const verticalSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    arrows: false,
    dots: false,
    vertical: true,
    verticalSwiping: false,
  };

  const horizontalSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    arrows: false,
    dots: false,
  };

  const settingsUpToDown = isMobile ? horizontalSettings : verticalSettings;
  const settingsDownToUp = isMobile
    ? { ...horizontalSettings, rtl: true }
    : { ...verticalSettings, rtl: true };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:px-10">
      {/* Banner Section */}
      <div
        className="lg:col-span-1 pt-12 lg:pt-96"
        style={{
          backgroundImage: `url(${bannerBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <p className="mb-8 text-primary">
          Birkutsho Abinash High School & College
        </p>
        <div className="w-24 h-1 bg-accent mb-4"></div>
        <h1 className="text-3xl lg:text-6xl font-bold text-accent mt-8">
          Old Kingdom’s School and College
        </h1>
      </div>

      {/* Slider 1 */}
      <div className="slider-container lg:col-span-1">
        <Slider {...settingsUpToDown}>
          {[slider1, slider2, slider3, slider4, slider5].map((image, index) => (
            <div
              key={index}
              className="h-[300px] lg:h-full w-full flex items-center justify-center bg-gray-200"
            >
              <img
                className="w-full h-full object-cover"
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Slider 2 */}
      <div className="slider-container lg:col-span-1">
        <Slider {...settingsDownToUp}>
          {[slider1, slider2, slider3, slider4, slider5].map((image, index) => (
            <div
              key={index}
              className="h-[300px] lg:h-full w-full flex items-center justify-center bg-gray-200"
            >
              <img
                className="w-full h-full object-cover"
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
