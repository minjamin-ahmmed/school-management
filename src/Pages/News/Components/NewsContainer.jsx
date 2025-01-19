import React from "react";
import news1 from "../../../assets/news-image1.png";
import news2 from "../../../assets/news-image2.png";

const NewsContainer = () => {
  const articles = [
    {
      id: 1,
      title:
        "School's Annual Science Fair Showcases Innovative Student Projects",
      date: "20 Aug 2023",
      readTime: "10 Min Read",
      imageUrl: news1,
    },
    {
      id: 2,
      title:
        "College Announces New Scholarship Program for Underrepresented Students",
      date: "20 Aug 2023",
      readTime: "10 Min Read",
      imageUrl: news1,
    },
    {
      id: 3,
      title:
        "University Launches Cutting-Edge Research Center for Renewable Energy",
      date: "20 Aug 2023",
      readTime: "10 Min Read",
      imageUrl: news2,
      description:
        "In the rapidly evolving world of technology and business, staying ahead of the competition requires strategic decisions and innovative approaches. Offshore software development has emerged as a transformative strategy, allowing companies to harness global talent and expertise while optimizing costs and accelerating project timelines.",
    },
    {
      id: 4,
      title: "High School Debate Team Wins National Championship",
      date: "20 Aug 2023",
      readTime: "10 Min Read",
      imageUrl: news1,
    },
    {
      id: 5,
      title:
        "Local School District Implements Advanced Technology in Classrooms",
      date: "20 Aug 2023",
      readTime: "10 Min Read",
      imageUrl: news2,
    },
  ];

  return (
    <div className="w-11/12 lg:w-9/12 mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 p-4">
        {/* First column (left cards) */}
        <div className="lg:col-span-1 space-y-6">
          {articles.slice(0, 2).map((article, index) => (
            <div key={index} className="w-full">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-48 object-cover rounded-sm mb-2"
              />
              <div>
                <h3 className="text-lg font-semibold mb-4">{article.title}</h3>
                <div className="flex items-center justify-between">
                  {" "}
                  <p className="text-sm text-gray-500">{article.date}</p>
                  <p className="text-sm text-gray-500">{article.readTime}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second column (featured article) */}
        <div className="lg:col-span-2 md:col-span-2">
          <div>
            <img
              src={articles[2].imageUrl}
              alt={articles[2].title}
              className="w-full h-96 object-cover rounded-sm mb-2"
            />

            <div>
              <h3 className="text-2xl font-bold text-main mb-4">
                {articles[2].title}
              </h3>

              <p className="text-gray-500 text-justify mb-4">
                {articles[2].description}
              </p>
              <div className="flex items-center justify-between">
                {" "}
                <p className="text-sm text-gray-500">{articles[2].date}</p>
                <p className="text-sm text-gray-500">{articles[2].readTime}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Third column (right cards) */}
        <div className="space-y-6">
          {articles.slice(3).map((article, index) => (
            <div key={index} className="w-full">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-48 object-cover rounded-sm mb-2"
              />
              <div>
                <h3 className="text-lg font-semibold mb-4">{article.title}</h3>
                <div className="flex items-center justify-between">
                  {" "}
                  <p className="text-sm text-gray-500">{article.date}</p>
                  <p className="text-sm text-gray-500">{article.readTime}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsContainer;
