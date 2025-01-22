import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MagnifyingGlass } from "@phosphor-icons/react";

import { Link } from "react-router-dom";
import axios from "axios";

const AllEvents = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showAll, setShowAll] = useState(false);
  const [eventList, setEventList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;
  const Image_API_URL = import.meta.env.VITE_IMAGE_API_URL;
  

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        console.log("Fetching events from:", API_URL);
        const response = await axios.get(API_URL + "event");
        console.log("API Response:", response.data);
        setEventList(response.data.data || []);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Failed to fetch events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const displayedEvents = showAll ? eventList : (eventList || []).slice(0, 6);

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
      <h1 className="text-4xl text-accent font-bold mb-6">AllEvents</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Events"
              className="input input-bordered w-full pl-10"
            />
            <div className="absolute top-3 left-2">
              <p>
                <MagnifyingGlass color="#909090" size={24} />
              </p>
            </div>
          </div>

          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="text-main font-medium">Event Topic</span>
              </div>
              <select
                className="select select-bordered"
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
              >
                <option disabled value="">
                  Pick one
                </option>
                <option value="Star Wars">Star Wars</option>
                <option value="Harry Potter">Harry Potter</option>
                <option value="Lord of the Rings">Lord of the Rings</option>
                <option value="Planet of the Apes">Planet of the Apes</option>
                <option value="Star Trek">Star Trek</option>
              </select>
            </label>
          </div>

          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="text-main font-medium">Location</span>
              </div>
              <select className="select select-bordered">
                <option disabled selected>
                  Pick one
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </label>
          </div>

          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="text-main font-medium">Select Date</span>
              </div>
              <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                className="border rounded-md"
              />
              <p className="mt-4 text-sm text-gray-600">
                Selected Date: {selectedDate.toDateString()}
              </p>
            </label>
          </div>

          <div>
            <button className="btn bg-accent w-full rounded-md text-white font-bold border-none hover:text-accent hover:bg-secondary">
              Apply Filter
            </button>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {displayedEvents.map((event) => (
              <div key={event.id}>
                <Link to={`/events/${event.id}`}>
                  <div className="w-full h-48 mb-2">
                    <img
                      className="w-full h-full object-cover"
                      src={`${Image_API_URL}${event.image}`}
                      alt=""
                    />
                  </div>

                  <h3 className="text-main font-bold text-xl mb-4">
                    {event.name}
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm mb-2">
                    {event.start_date}
                  </p>
                  <p className="text-gray-700 font-semibold text-sm mb-2">
                    {event.company}
                  </p>
                </Link>
              </div>
            ))}
          </div>

          {eventList?.length > 6 && (
            <div className="flex items-center justify-center mt-16">
              <button
                onClick={() => setShowAll(!showAll)}
                className="mt-4 px-4 py-2 bg-accent text-white rounded"
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
