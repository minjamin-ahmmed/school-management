import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerBg from "../../../assets/patterns.png";
import slider1 from "../../../assets/slider1.png";

const Banner = () => {
  const settingsUpToDown = {
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

  const settingsDownToUp = {
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
    rtl: true, // Reverse the direction
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div
        className="lg:col-span-1 pt-12 lg:pt-96
        "
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

      <div className="slider-container lg:col-span-1">
        <Slider {...settingsUpToDown}>
          <div className="h-full w-full flex items-center justify-center bg-gray-200">
            <img className="w-full h-full object-cover" src={slider1} alt="" />
          </div>
          <div className="h-full w-full flex items-center justify-center bg-gray-200">
            <img className="w-full h-full object-cover" src={slider1} alt="" />
          </div>
          <div className="h-full w-full flex items-center justify-center bg-gray-200">
            <img className="w-full h-full object-cover" src={slider1} alt="" />
          </div>
          <div className="h-full w-full flex items-center justify-center bg-gray-200">
            <img className="w-full h-full object-cover" src={slider1} alt="" />
          </div>

          <div className="h-full w-full flex items-center justify-center bg-gray-200">
            <img className="w-full h-full object-cover" src={slider1} alt="" />
          </div>
        </Slider>
      </div>

      <div className="slider-container lg:col-span-1">
        <Slider {...settingsDownToUp}>
          <div className="h-full w-full flex items-center justify-center bg-gray-200">
            <img className="w-full h-full object-cover" src={slider1} alt="" />
          </div>
          <div className="h-full w-full flex items-center justify-center bg-gray-200">
            <img className="w-full h-full object-cover" src={slider1} alt="" />
          </div>
          <div className="h-full w-full flex items-center justify-center bg-gray-200">
            <img className="w-full h-full object-cover" src={slider1} alt="" />
          </div>
          <div className="h-full w-full flex items-center justify-center bg-gray-200">
            <img className="w-full h-full object-cover" src={slider1} alt="" />
          </div>

          <div className="h-full w-full flex items-center justify-center bg-gray-200">
            <img className="w-full h-full object-cover" src={slider1} alt="" />
          </div>
        </Slider>
      </div>

      <div></div>
    </div>
  );
};

export default Banner;