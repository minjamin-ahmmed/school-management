import React, { useState } from "react";
import featuredNews from "../../../assets/featured-news.png";

import { GreaterThan } from "@phosphor-icons/react";

const newsData = [
  {
    title:
      "Alumni Donation Funds State-of-the-Art Library Renovation and Reunion",
    location: "Baghmara Upazila Parishad Auditorium",
    date: "March 20, 2025",
    time: "10 min read",
  },
  {
    title: "High School Achieves Record-Breaking Graduation Rate and Graduate",
    location: "City Convention Hall",
    date: "April 15, 2025",
    time: "10 min read",
  },
  {
    title: "College Secures Major Grant for Groundbreaking Cancer Research",
    location: "Downtown Tech Hub",
    date: "May 5, 2025",
    time: "10 min read",
  },
  {
    title:
      "Students Lead Successful Community Outreach Program for Local Schools",
    location: "National Sports Complex",
    date: "June 10, 2025",
    time: "10 min read",
  },
];

const FeaturedNews = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <div>
      {/* Upcoming Events Section */}
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Intro Section */}
        <div
          className="bg-gray-900 relative h-96 text-center flex flex-col items-center justify-center"
          style={{
            backgroundImage: `url(${featuredNews})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/* <div className="text-white px-6 lg:px-12">
            <h3 className="text-4xl font-extrabold mb-4 leading-tight">
              Featured News
            </h3>
            <p className="mb-6 text-gray-300">
              Stay connected with fellow alumni through these upcoming events.
            </p>
          </div> */}
        </div>

        {/* Events List */}
        {newsData.map((news, index) => (
          <div
            key={index}
            className={`bg-red-50 p-6 ${
              index !== 0 ? "border-l-2 border-accent" : ""
            }`}
          >
            <p className="text-xl text-main">News</p>
            <div className="w-32 h-1 bg-accent my-4"></div>
            <h3 className="text-xl text-accent font-bold mb-4">{news.title}</h3>
            <p className="mb-4">{news.date}</p>
            <p className="mb-16">{news.time}</p>
            <button
              onClick={() => setSelectedNews(news)}
              className="flex items-center gap-2 text-accent rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105"
            >
              Details <GreaterThan size={24} />
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Event Details */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">{selectedNews.title}</h3>
            <p className="mb-2 text-gray-600">{selectedNews.date}</p>
            <p className="mb-6">{selectedNews.location}</p>
            <button
              onClick={() => setSelectedNews(null)}
              className="bg-accent text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedNews;
