import contactUsBanner from "../../../assets/contact-us-banner.png";

const Banner = () => {
  return (
    <div
      className="py-24"
      style={{
        backgroundImage: `url(${contactUsBanner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default Banner;
