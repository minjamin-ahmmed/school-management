import React from "react";
import img1 from "../../../assets/cultural-festival.png";
import img2 from "../../../assets/book-fair.png";
import img3 from "../../../assets/environment-awareness.png";
import img4 from "../../../assets/spring-art-festival.png";

const Events = () => {
  const events = [
    { img: img1, title: "Cultural Festival 2024" },
    { img: img2, title: "Book Fair and Literacy Week’24" },
    { img: img3, title: "Environmental Awareness Week" },
    { img: img4, title: "Spring Arts Festival" },
  ];

  return (
    <div className="w-11/12 mx-auto my-20">
      <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
          >
            {/* Image */}
            <div className="w-full h-72 overflow-hidden">
              <img
                className="w-full h-full object-cover transition duration-300 group-hover:opacity-90"
                src={event.img}
                alt={event.title}
              />
            </div>

            {/* Title */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-main group-hover:text-accent transition duration-300">
                {event.title}
              </h3>
            </div>

        
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <button className="px-4 py-2 bg-accent text-white font-medium rounded-lg opacity-0 group-hover:opacity-100 transition duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
