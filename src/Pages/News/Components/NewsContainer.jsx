import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

const NewsContainer = () => {
  const [newsList, setNewsList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;
  // const Image_API_URL = import.meta.env.VITE_IMAGE_API_URL;
  console.log(API_URL);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        console.log("Fetching events from:", API_URL);
        const response = await axios.get(API_URL + "news");
        console.log("API Response:", response.data.data);
        setNewsList(
          Array.isArray(response.data.data) ? response.data.data : []
        );
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Failed to fetch events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center mt-12 py-48">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-11/12 lg:w-9/12 mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 p-4">
        <div className="lg:col-span-1 space-y-6">
          {newsList.slice(0, 1).map((article, index) => (
            <Link key={index} to={`/news/${article.id}`}>
              {" "}
              <div className="w-full">
                <img
                  src={article.media}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-sm mb-2"
                />
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    {" "}
                    <p className="text-sm text-gray-500">
                      {article.publish_date}
                    </p>
                    <p className="text-sm text-gray-500">10 min Read</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="lg:col-span-2 md:col-span-2">
          <Link to={`/news/${newsList[2]?.id}`}>
            <div>
              <img
                src={newsList[2].media}
                alt={newsList[2].title}
                className="w-full h-96 object-cover rounded-sm mb-2"
              />

              <div>
                <h3 className="text-2xl font-bold text-main mb-4">
                  {newsList[2].title}
                </h3>

                <p className="text-gray-500 text-justify mb-4">
                  {newsList[2].short_description}
                </p>
                <div className="flex items-center justify-between">
                  {" "}
                  <p className="text-sm text-gray-500">
                    {newsList[2].publish_date}
                  </p>
                  <p className="text-sm text-gray-500">10 min Read</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="space-y-6">
          {newsList.slice(3, 4).map((article, index) => (
            <Link key={index} to={`/news/${article.id}`}>
              <div className="w-full">
                <img
                  src={article.media}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-sm mb-2"
                />
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    {" "}
                    <p className="text-sm text-gray-500">
                      {article.publish_date}
                    </p>
                    <p className="text-sm text-gray-500">10 min Read</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsContainer;
