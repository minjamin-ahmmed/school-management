import journeyBg from "../../../assets/journey.png";

const Journey = () => {
  return (
    <div
      className="h-[700px] relative"
      style={{
        backgroundImage: `url(${journeyBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>

      <div className="relative z-10 w-11/12 lg:w-11/12 mx-auto">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl lg:text-5xl font-bold text-white mb-6 mt-40 animate-fadeIn">
            A Journey to Unity
          </h2>
          <p className="text-white mb-6 lg:w-2/4 opacity-90 text-lg animate-slideUp">
            Rising to the principles of diversity, equity, and inclusion isn't 
            the work of one person or initiative. It’s on all Hawkeyes to grow
            and act together, empowering meaningful change.
          </p>
          <div>
            <button className="btn bg-accent text-white font-bold border-none px-8 py-3 transition-transform transform hover:scale-105 hover:bg-opacity-90 animate-bounce hover:bg-white hover:text-accent">
              Watch the Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
