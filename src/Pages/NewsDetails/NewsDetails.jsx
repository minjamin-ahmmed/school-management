import React from "react";
import { useParams } from "react-router-dom";
import news1 from "../../assets/news-image1.png";
import news2 from "../../assets/news-image2.png";

const NewsDetails = () => {
  const { id } = useParams();
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

  const article = articles.find((a) => a.id === parseInt(id));
  return (
    <div className="w-11/12 lg:w-9/12 mx-auto py-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
        <div className="lg:col-span-3">
          <div className="w-full h-[500px] mb-10">
            <img
              className="w-full h-full object-cover"
              src={article.imageUrl}
              alt=""
            />
          </div>
          <h3 className="text-main mb-4">News</h3>
          <h3 className="text-3xl font-bold text-main mb-4">{article.title}</h3>
          <div className="flex items-center justify-start gap-8 text-gray-500 mb-4">
            <p>{article.date}</p>
            <p>{article.readTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
