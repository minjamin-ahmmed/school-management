import alumnibg from "../../../assets/history.png";

const Banner = () => {
  return (
    <div
      className="relative h-[400px] lg:h-[700px] group"
      style={{
        backgroundImage: `url(${alumnibg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-70"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        {/* Heading with animation */}
        <h1 className="text-white font-extrabold text-2xl lg:text-6xl mb-4 animate-fadeInUp">
          For Alumni & Alumni Association
        </h1>

        {/* Paragraph with animation */}
        <p className="text-gray-200 mb-4 animate-fadeInUp delay-200">
          No matter where you are, stay connected
        </p>

        {/* Buttons with animation */}
        <div className="flex flex-col lg:flex-row items-center gap-4 animate-fadeInUp delay-400">
          <button className="btn bg-accent px-4 py-2 rounded-md text-white border-none hover:bg-red-700 transform transition duration-300 hover:scale-105 hover:shadow-lg">
            Join Our Email List
          </button>
          <button className="btn bg-accent px-4 py-2 rounded-md text-white border-none hover:bg-red-700 transform transition duration-300 hover:scale-105 hover:shadow-lg">
            Join An Alumni Network
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
