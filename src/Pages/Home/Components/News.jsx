import { ArrowUpRight, LinuxLogo } from "@phosphor-icons/react";
import img1 from "../../../assets/news.png";
import img2 from "../../../assets/boy.png";
import { Link } from "react-router-dom";

const News = () => {
  const newses = [
    {
      img: img1,
      title: "Celebrating BA High Schools’s spring 2024 grads",
      description:
        "This spring, more than 5,300 undergraduate, graduate, and professional students will earn degrees. These Students have engaged, excelled, and stretched to reach their goals.",
    },
    {
      img: img2,
      title: "Celebrating BA High Schools’s spring 2024 grads",
      description:
        "This spring, more than 5,300 undergraduate, graduate, and professional students will earn degrees. These Students have engaged, excelled, and stretched to reach their goals.",
    },
    {
      img: img1,
      title: "Celebrating BA High Schools’s spring 2024 grads",
      description:
        "This spring, more than 5,300 undergraduate, graduate, and professional students will earn degrees. These Students have engaged, excelled, and stretched to reach their goals.",
    },
    {
      img: img1,
      title: "Celebrating BA High Schools’s spring 2024 grads",
      description:
        "This spring, more than 5,300 undergraduate, graduate, and professional students will earn degrees. These Students have engaged, excelled, and stretched to reach their goals.",
    },
  ];

  return (
    <div className="py-16">
      <h3 className="text-4xl font-bold text-center text-accent mb-6">
        News and Articles
      </h3>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
        <Link to="/news">
          <button className="btn border border-gray-700 px-4 py-2 text-gray-700 transition duration-300 hover:bg-gray-700 hover:text-white flex items-center gap-2">
            Read Featured News <ArrowUpRight size={24} />
          </button>
        </Link>

        <Link to="/news">
          {" "}
          <button className="btn border border-gray-700 px-4 py-2 text-gray-700 transition duration-300 hover:bg-gray-700 hover:text-white flex items-center gap-2">
            Read Featured Articles <ArrowUpRight size={24} />
          </button>
        </Link>
      </div>

      <div className="w-11/12 mx-auto mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {newses.map((news, index) => (
            <div
              key={index}
              className="border border-gray-300 overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-t-lg group-hover:scale-110 transition duration-300"
                  src={news.img}
                  alt=""
                />
              </div>

              <div className="p-4">
                <p className="text-xl font-semibold text-main mb-2 hover:text-accent transition duration-300">
                  {news.title}
                </p>
                <p className="text-justify mb-4 text-gray-600 group-hover:text-gray-800 transition duration-300">
                  {news.description}
                </p>

                <button className="text-accent font-bold underline transition duration-300 hover:text-main">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
