import img1 from "../../../assets/grid1.png";
import img2 from "../../../assets/grid2.png";
import img3 from "../../../assets/grid3.png";
import bannerImg from "../../../assets/patterns.png";

const Grid = () => {
  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="w-full h-[400px] overflow-hidden group">
          <img
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            src={img1}
            alt=""
          />
        </div>

        <div
          className="w-full h-[400px] bg-cover bg-center relative overflow-hidden group"
          style={{
            backgroundImage: `url(${bannerImg})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 group-hover:bg-opacity-70"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h1 className="text-white text-[96px] font-extrabold group-hover:text-secondary transition-colors duration-300">
              #01
            </h1>
            <div className="w-[200px] h-2 bg-secondary"></div>
            <p className="mt-4 text-white text-2xl font-semibold opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              Best School & College in Rajshahi
            </p>
          </div>
        </div>

        <div className="w-full h-[400px] overflow-hidden group">
          <img
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            src={img2}
            alt=""
          />
        </div>

        <div
          className="w-full h-[400px] bg-cover bg-center relative overflow-hidden group"
          style={{
            backgroundImage: `url(${bannerImg})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 group-hover:bg-opacity-70"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h1 className="text-white text-[96px] font-extrabold group-hover:text-secondary transition-colors duration-300">
              50:1
            </h1>
            <div className="w-[200px] h-2 bg-secondary"></div>
            <p className="mt-4 text-white text-2xl font-semibold opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              Best School & College in Rajshahi
            </p>
          </div>
        </div>

        <div className="w-full h-[400px] overflow-hidden group">
          <img
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            src={img3}
            alt=""
          />
        </div>

        <div
          className="w-full h-[400px] bg-cover bg-center relative overflow-hidden group"
          style={{
            backgroundImage: `url(${bannerImg})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 group-hover:bg-opacity-70"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h1 className="text-white text-[96px] font-extrabold group-hover:text-secondary transition-colors duration-300">
              100%
            </h1>
            <div className="w-[200px] h-2 bg-secondary"></div>
            <p className="mt-4 text-white text-2xl font-semibold opacity-90 group-hover:opacity-100 transition-opacity duration-300 w-10/12">
              Pass Rate of Students in every classes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
