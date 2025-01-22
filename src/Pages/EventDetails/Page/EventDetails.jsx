import { useParams } from "react-router-dom";

import {
  CalendarDots,
  Clock,
  MapPinLine,
  ShareNetwork,
  User,
  Users,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import axios from "axios";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;
  const Image_API_URL = import.meta.env.VITE_IMAGE_API_URL;

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const url = `${API_URL}event/details/${id}`;
        console.log("Requesting data from:", url);
        const response = await axios.get(url);
        console.log("API Response:", response.data);
        setEvent(response.data.data || []);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Failed to fetch events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center mt-12">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-11/12 lg:w-9/12 mx-auto py-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-3">
          <div className="w-full h-[600px] mb-16">
            <img
              className="w-full h-full object-cover"
              src={`${Image_API_URL}${event.image}`}
              alt={event?.name || "Event Image"}
            />
          </div>

          <div className="flex items-center justify-between">
            <p>Event</p>
            <p className="flex items-center gap-2">
              Share <ShareNetwork size={24} />{" "}
            </p>
          </div>

          <h3 className="text-4xl font-bold text-main mt-4 mb-10">
            {event?.name}
          </h3>
          <p className="text-justify">{event?.details}</p>
        </div>

        <div className="lg:col-span-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="p-2 border border-gray-300 rounded-xl">
              <div className="py-2 w-full bg-gray-900 rounded-lg flex items-center justify-center">
                <CalendarDots color="#FACC15" size={28} />
              </div>
              <h4 className="text-center my-2 font-bold text-main">Date</h4>
              <p className="text-center">{event?.start_date}</p>
            </div>

            <div className="p-2 border border-gray-300 rounded-xl">
              <div className="py-2 w-full bg-gray-900 rounded-lg flex items-center justify-center">
                <Clock color="#FACC15" size={28} />
              </div>
              <h4 className="text-center my-2 font-bold text-main">Time</h4>
              <p className="text-center">{event?.start_date}</p>
            </div>

            <div className="p-2 border border-gray-300 rounded-xl">
              <div className="py-2 w-full bg-gray-900 rounded-lg flex items-center justify-center">
                <User color="#FACC15" size={28} />
              </div>
              <h4 className="text-center my-2 font-bold text-main">
                Event Open to
              </h4>
              <p className="text-center text-sm">Student, Teachers, Guests</p>
            </div>
            <div className="p-2 border border-gray-300 rounded-xl">
              <div className="py-2 w-full bg-gray-900 rounded-lg flex items-center justify-center">
                <Users color="#FACC15" size={28} />
              </div>
              <h4 className="text-center my-2 font-bold text-main">
                Registered
              </h4>
              <p className="text-center text-sm">Student, Teachers, Guests</p>
            </div>

            <div className="col-span-2">
              <div className="p-2 border border-gray-300 rounded-xl">
                <div className="py-2 w-full bg-gray-900 rounded-lg flex items-center justify-center">
                  <MapPinLine color="#FACC15" size={28} />
                </div>
                <h4 className="text-center my-2 font-bold text-main">
                  Location
                </h4>
                <p className="text-center text-sm">{event.company}</p>

                <div className="w-full h-64">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8972750919564!2d90.39025301532091!3d23.8103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a1a5e8c313%3A0x7c25cb81273b77f9!2sBangladesh%20National%20Museum!5e0!3m2!1sen!2sbd!4v1674045302980!5m2!1sen!2sbd"
                    allowFullScreen
                    loading="lazy"
                    title="Location Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
