import React, { useState } from "react";
import alumni1 from "../../../assets/alumni1.png";
import alumni2 from "../../../assets/alumni2.png";
import alumni3 from "../../../assets/alumni3.png";
import alumni4 from "../../../assets/alumni4.png";

import pattern from "../../../assets/pattern-red.png";
import { GreaterThan } from "@phosphor-icons/react";

const eventsData = [
  {
    title: "Annual Alumni Homecoming",
    location: "Baghmara Upazila Parishad Auditorium",
    date: "March 20, 2025",
  },
  {
    title: "Networking Brunch",
    location: "City Convention Hall",
    date: "April 15, 2025",
  },
  {
    title: "Tech Talk: Future of AI",
    location: "Downtown Tech Hub",
    date: "May 5, 2025",
  },
  {
    title: "Alumni Sports Day",
    location: "National Sports Complex",
    date: "June 10, 2025",
  },
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        {[alumni1, alumni2, alumni3, alumni4].map((image, index) => (
          <div
            key={index}
            className="group relative w-full h-96 overflow-hidden"
          >
            <img
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              src={image}
              alt={`Alumni Event ${index + 1}`}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
              <p className="text-white font-bold text-lg">View Details</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div
          className="bg-accent relative h-96 text-center flex flex-col items-center justify-center"
          style={{
            backgroundImage: `url(${pattern})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="text-white px-6 lg:px-12">
            <h3 className="text-4xl font-extrabold mb-4 leading-tight">
              Upcoming Alumni Events
            </h3>
            <p className="mb-6 text-gray-200">
              Stay connected with fellow alumni through these upcoming events.
              Discover ways to network, learn, and grow together.
            </p>
            <button className="flex items-center gap-2 text-white rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105">
              See All Events <GreaterThan size={24} />
            </button>
          </div>
        </div>

        {eventsData.map((event, index) => (
          <div
            key={index}
            className={`bg-red-50 p-6 ${
              index !== 0 ? "border-l-2 border-accent" : ""
            }`}
          >
            <p className="text-xl text-main">Event</p>
            <div className="w-32 h-1 bg-accent my-4"></div>
            <h3 className="text-4xl text-accent font-bold mb-4">
              {event.title}
            </h3>
            <p className="mb-4">{event.date}</p>
            <p className="mb-8">{event.location}</p>
            <button
              onClick={() => setSelectedEvent(event)}
              className="flex items-center gap-2 text-accent text-sm font-medium transition-all duration-300 transform hover:scale-105"
            >
              Details <GreaterThan size={24} />
            </button>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">{selectedEvent.title}</h3>
            <p className="mb-2 text-gray-600">{selectedEvent.date}</p>
            <p className="mb-6">{selectedEvent.location}</p>
            <button
              onClick={() => setSelectedEvent(null)}
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

export default Events;
