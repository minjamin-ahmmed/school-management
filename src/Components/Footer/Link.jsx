import { NavLink } from "react-router-dom";
import bannerImg from "../../assets/link-pattern.png";

const Link = () => {
  return (
    <div
      className="py-6 bg-accent relative"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0"></div>

      <div className="relative z-10 w-11/12 lg:w-full 2xl:w-11/12 mx-auto">
        <div>
          <ul className="flex flex-wrap lg:flex-nowrap items-center gap-8">
            <li className="text-white underline">Alumni</li>
            <li className="text-white underline">Tour</li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "text-white"
              }
            >
              <li className="underline">Contact Us</li>
            </NavLink>
            <a className="text-white underline">Faculty</a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Link;
