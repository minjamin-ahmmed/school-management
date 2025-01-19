import newsBanner from "../../../assets/news-banner.png";

const Banner = () => {
  return (
    <div
      className="py-24"
      style={{
        backgroundImage: `url(${newsBanner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default Banner;
