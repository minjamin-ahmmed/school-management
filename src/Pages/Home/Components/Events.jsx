import { ArrowUpRight, MapPinSimpleArea } from "@phosphor-icons/react";
import bannerImg from "../../../assets/pattern-red.png";
import eventImage from "../../../assets/events.png";

const Events = () => {
  const events = [
    {
      img: eventImage,
      title: "100 Year's Reunion ",
      day: "Friday",
      date: "July 26, 2024",
      time: "7:30 PM",
      location: "Baghmara, Rajshahi",
    },
    {
      img: eventImage,
      title: "Alumni Meet 2024",
      day: "Saturday",
      date: "August 12, 2024",
      time: "5:00 PM",
      location: "Baghmara, Rajshahi",
    },
    {
      img: eventImage,
      title: "Cultural Night 2024",
      day: "Sunday",
      date: "September 1, 2024",
      time: "6:00 PM",
      location: "Baghmara, Rajshahi",
    },
  ];

  return (
    <div
      className="py-12 bg-accent relative"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>

      <div className="relative z-10 w-11/12 lg:w-full 2xl:w-11/12 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-white text-4xl mb-4 font-bold animate-fadeIn">
              Events
            </h1>
            <button className="btn border-none text-accent bg-white hover:bg-secondary font-bold px-6 py-2 rounded-full transition-transform transform hover:scale-105">
              View All Events
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <div className="w-32 h-32">
                    <img
                      className="w-full h-full rounded-full object-cover hover:scale-105 transition-transform"
                      src={event.img}
                      alt="Event"
                    />
                  </div>

                  <div>
                    <h3 className="text-white text-2xl font-semibold mb-2 hover:text-secondary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-white text-sm mb-2">
                      {event.day}, {event.date} | {event.time}
                    </p>
                    <p className="text-white flex items-center gap-2 text-sm">
                      <MapPinSimpleArea size={24} />
                      {event.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
