import blogsBanner from "../../../assets/blog-banner.png";

const Banner = () => {
  return (
    <div
      className="py-24"
      style={{
        backgroundImage: `url(${blogsBanner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default Banner;
