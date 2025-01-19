import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useState } from "react";
import blogimg from "../../../assets/alumni1.png";

const AllBlogs = () => {
  const [visibleCount, setVisibleCount] = useState(12);
  const blogsList = [
    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
      img: blogimg,
    },
    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
      img: blogimg,
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
      img: blogimg,
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
      img: blogimg,
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
      img: blogimg,
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
      img: blogimg,
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
      img: blogimg,
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
      img: blogimg,
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
      img: blogimg,
    },
    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
      img: blogimg,
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
      img: blogimg,
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
      img: blogimg,
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
      img: blogimg,
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
      img: blogimg,
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
      img: blogimg,
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
      img: blogimg,
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
      img: blogimg,
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
      img: blogimg,
    },
    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
      img: blogimg,
    },
    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
      img: blogimg,
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
      img: blogimg,
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
      img: blogimg,
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
      img: blogimg,
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
      img: blogimg,
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
      img: blogimg,
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
      img: blogimg,
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
      img: blogimg,
    },

    {
      title:
        "Preparing for College: What Every High School Senior Needs to Know",
      date: "20 Aug 2023",
      time: "10 Min Read",
      img: blogimg,
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
        <h2 className="text-accent text-4xl font-bold">All Blogs</h2>

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

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {blogsList.slice(0, visibleCount).map((blog, index) => (
          <div key={index}>
            <div className="w-full h-64 mb-4">
              <img
                className="w-full h-full object-cover"
                src={blog.img}
                alt=""
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg text-main font-semibold mb-8">
                {blog.title}
              </h3>
              <div className="flex items-center justify-between text-gray-500">
                <p>{blog.date}</p>
                <p>{blog.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        {visibleCount < blogsList.length ? (
          <button
            onClick={showMore}
            className="btn bg-accent text-white border-none mx-2"
          >
            Show More
          </button>
        ) : (
          <button
            onClick={showLess}
            className="btn bg-accent text-white border-none mx-2"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default AllBlogs;
