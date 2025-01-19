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
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {events.map((event, index) => (
          <div key={index}>
            <div className="w-full h-72 mb-4">
              <img
                className="w-full h-full object-cover"
                src={event.img}
                alt=""
              />
            </div>
            <h3 className="text-lg font-semibold text-main">{event.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
