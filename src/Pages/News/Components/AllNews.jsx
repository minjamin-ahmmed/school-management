import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AllNews = () => {
  const [visibleCount, setVisibleCount] = useState(12);
  const newsList = [
    {
      id: 1,
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
    },
    {
      id: 2,
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
    },

    {
      id: 3,
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
    },

    {
      id: 4,
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
    },

    {
      id: 5,
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
    },
    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
    },
    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
    },
    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
    },
  ];
  const showMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const showLess = () => {
    setVisibleCount(12);
  };
  return (
    <div className="w-11/12 lg:w-9/12 mx-auto py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <h2 className="text-accent text-4xl font-bold">All News</h2>

        <div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search Events"
              className="input input-bordered w-full max-w-sm pl-10"
            />
            <div className="absolute top-3 left-2">
              <p>
                <MagnifyingGlass color="#909090" size={24} />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {newsList.slice(0, visibleCount).map((news, index) => (
          <div key={index}>
            <div>
              <div className="border border-gray-300 p-4 border-l-8 border-l-red-600">
                <h3 className="text-lg text-main font-semibold mb-8">
                  {news.title}
                </h3>
                <div className="flex items-center justify-between text-gray-500">
                  <p>{news.date}</p>
                  <p>{news.time}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        {visibleCount < newsList.length ? (
          <button
            onClick={showMore}
            className="btn bg-accent text-white border-none hover:bg-red-800 mx-2"
          >
            Show More
          </button>
        ) : (
          <button
            onClick={showLess}
            className="btn bg-accent text-white border-none  hover:bg-red-800 mx-2"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default AllNews;
