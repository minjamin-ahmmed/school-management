import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MagnifyingGlass } from "@phosphor-icons/react";
import img1 from "../../../assets/EventImg1.png";
import img2 from "../../../assets/EventImg2.png";
import img3 from "../../../assets/EventImg3.png";
import img4 from "../../../assets/EventImg4.png";
import { Link } from "react-router-dom";

const AllEvents = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showAll, setShowAll] = useState(false);

  const eventList = [
    {
      id: 1,
      title: "Birkutsho Abinash HS & College: Annual Alumni Homecoming",
      description:
        "Birkutsho Abinash HS & College is thrilled to announce its Annual Alumni Homecoming event, scheduled for October 15, 2024. This special occasion invites former students to reconnect with old friends, share memories, and celebrate their shared history at the school. The event will feature a welcome ceremony, campus tours, and a gala dinner, offering alumni the chance to see how the school has evolved and to engage with current students and faculty. It’s a day of nostalgia, networking, and renewed connections, marking another memorable chapter in the school’s vibrant community.",
      date: "2024-10-15",
      place: "Birkutsho Abinash Campus, Dhaka, Bangladesh",
      img1: img1,
      img2: img1,
      img3: img1,
      img4: img1,
      img5: img1,
    },
    {
      id: 2,
      title: "Birkutsho Abinash HS & College: Annual Alumni Homecoming",
      description:
        "Birkutsho Abinash HS & College is thrilled to announce its Annual Alumni Homecoming event, scheduled for October 15, 2024. This special occasion invites former students to reconnect with old friends, share memories, and celebrate their shared history at the school. The event will feature a welcome ceremony, campus tours, and a gala dinner, offering alumni the chance to see how the school has evolved and to engage with current students and faculty. It’s a day of nostalgia, networking, and renewed connections, marking another memorable chapter in the school’s vibrant community.",
      date: "2024-10-15",
      place: "Birkutsho Abinash Campus, Dhaka, Bangladesh",
      img1: img2,
      img2: img2,
      img3: img2,
      img4: img2,
      img5: img2,
    },
    {
      id: 3,
      title: "Birkutsho Abinash HS & College: Annual Alumni Homecoming",
      description:
        "Birkutsho Abinash HS & College is thrilled to announce its Annual Alumni Homecoming event, scheduled for October 15, 2024. This special occasion invites former students to reconnect with old friends, share memories, and celebrate their shared history at the school. The event will feature a welcome ceremony, campus tours, and a gala dinner, offering alumni the chance to see how the school has evolved and to engage with current students and faculty. It’s a day of nostalgia, networking, and renewed connections, marking another memorable chapter in the school’s vibrant community.",
      date: "2024-10-15",
      place: "Birkutsho Abinash Campus, Dhaka, Bangladesh",
      img1: img3,
      img2: img3,
      img3: img3,
      img4: img3,
      img5: img3,
    },
    {
      id: 4,
      title: "Birkutsho Abinash HS & College: Annual Alumni Homecoming",
      description:
        "Birkutsho Abinash HS & College is thrilled to announce its Annual Alumni Homecoming event, scheduled for October 15, 2024. This special occasion invites former students to reconnect with old friends, share memories, and celebrate their shared history at the school. The event will feature a welcome ceremony, campus tours, and a gala dinner, offering alumni the chance to see how the school has evolved and to engage with current students and faculty. It’s a day of nostalgia, networking, and renewed connections, marking another memorable chapter in the school’s vibrant community.",
      date: "2024-10-15",
      place: "Birkutsho Abinash Campus, Dhaka, Bangladesh",
      img1: img4,
      img2: img4,
      img3: img4,
      img4: img4,
      img5: img4,
    },

    {
      id: 5,
      title: "Birkutsho Abinash HS & College: Annual Alumni Homecoming",
      description:
        "Birkutsho Abinash HS & College is thrilled to announce its Annual Alumni Homecoming event, scheduled for October 15, 2024. This special occasion invites former students to reconnect with old friends, share memories, and celebrate their shared history at the school. The event will feature a welcome ceremony, campus tours, and a gala dinner, offering alumni the chance to see how the school has evolved and to engage with current students and faculty. It’s a day of nostalgia, networking, and renewed connections, marking another memorable chapter in the school’s vibrant community.",
      date: "2024-10-15",
      place: "Birkutsho Abinash Campus, Dhaka, Bangladesh",
      img1: img1,
      img2: img1,
      img3: img1,
      img4: img1,
      img5: img1,
    },
    {
      id: 6,
      title: "Birkutsho Abinash HS & College: Annual Alumni Homecoming",
      description:
        "Birkutsho Abinash HS & College is thrilled to announce its Annual Alumni Homecoming event, scheduled for October 15, 2024. This special occasion invites former students to reconnect with old friends, share memories, and celebrate their shared history at the school. The event will feature a welcome ceremony, campus tours, and a gala dinner, offering alumni the chance to see how the school has evolved and to engage with current students and faculty. It’s a day of nostalgia, networking, and renewed connections, marking another memorable chapter in the school’s vibrant community.",
      date: "2024-10-15",
      place: "Birkutsho Abinash Campus, Dhaka, Bangladesh",
      img1: img2,
      img2: img2,
      img3: img2,
      img4: img2,
      img5: img2,
    },
    {
      id: 7,
      title: "Birkutsho Abinash HS & College: Annual Alumni Homecoming",
      description:
        "Birkutsho Abinash HS & College is thrilled to announce its Annual Alumni Homecoming event, scheduled for October 15, 2024. This special occasion invites former students to reconnect with old friends, share memories, and celebrate their shared history at the school. The event will feature a welcome ceremony, campus tours, and a gala dinner, offering alumni the chance to see how the school has evolved and to engage with current students and faculty. It’s a day of nostalgia, networking, and renewed connections, marking another memorable chapter in the school’s vibrant community.",
      date: "2024-10-15",
      place: "Birkutsho Abinash Campus, Dhaka, Bangladesh",
      img1: img3,
      img2: img3,
      img3: img3,
      img4: img3,
      img5: img3,
    },
    {
      id: 8,
      title: "Birkutsho Abinash HS & College: Annual Alumni Homecoming",
      description:
        "Birkutsho Abinash HS & College is thrilled to announce its Annual Alumni Homecoming event, scheduled for October 15, 2024. This special occasion invites former students to reconnect with old friends, share memories, and celebrate their shared history at the school. The event will feature a welcome ceremony, campus tours, and a gala dinner, offering alumni the chance to see how the school has evolved and to engage with current students and faculty. It’s a day of nostalgia, networking, and renewed connections, marking another memorable chapter in the school’s vibrant community.",
      date: "2024-10-15",
      place: "Birkutsho Abinash Campus, Dhaka, Bangladesh",
      img1: img4,
      img2: img4,
      img3: img4,
      img4: img4,
      img5: img4,
    },

    {
      id: 9,
      title: "Birkutsho Abinash HS & College: Annual Alumni Homecoming",
      description:
        "Birkutsho Abinash HS & College is thrilled to announce its Annual Alumni Homecoming event, scheduled for October 15, 2024. This special occasion invites former students to reconnect with old friends, share memories, and celebrate their shared history at the school. The event will feature a welcome ceremony, campus tours, and a gala dinner, offering alumni the chance to see how the school has evolved and to engage with current students and faculty. It’s a day of nostalgia, networking, and renewed connections, marking another memorable chapter in the school’s vibrant community.",
      date: "2024-10-15",
      place: "Birkutsho Abinash Campus, Dhaka, Bangladesh",
      img1: img1,
      img2: img1,
      img3: img1,
      img4: img1,
      img5: img1,
    },
    {
      id: 10,
      title: "Birkutsho Abinash HS & College: Annual Alumni Homecoming",
      description:
        "Birkutsho Abinash HS & College is thrilled to announce its Annual Alumni Homecoming event, scheduled for October 15, 2024. This special occasion invites former students to reconnect with old friends, share memories, and celebrate their shared history at the school. The event will feature a welcome ceremony, campus tours, and a gala dinner, offering alumni the chance to see how the school has evolved and to engage with current students and faculty. It’s a day of nostalgia, networking, and renewed connections, marking another memorable chapter in the school’s vibrant community.",
      date: "2024-10-15",
      place: "Birkutsho Abinash Campus, Dhaka, Bangladesh",
      img1: img3,
      img2: img3,
      img3: img3,
      img4: img3,
      img5: img3,
    },
    {
      id: 11,
      title: "Birkutsho Abinash HS & College: Annual Alumni Homecoming",
      description:
        "Birkutsho Abinash HS & College is thrilled to announce its Annual Alumni Homecoming event, scheduled for October 15, 2024. This special occasion invites former students to reconnect with old friends, share memories, and celebrate their shared history at the school. The event will feature a welcome ceremony, campus tours, and a gala dinner, offering alumni the chance to see how the school has evolved and to engage with current students and faculty. It’s a day of nostalgia, networking, and renewed connections, marking another memorable chapter in the school’s vibrant community.",
      date: "2024-10-15",
      place: "Birkutsho Abinash Campus, Dhaka, Bangladesh",
      img1: img3,
      img2: img3,
      img3: img3,
      img4: img3,
      img5: img3,
    },
    {
      id: 12,
      title: "Birkutsho Abinash HS & College: Annual Alumni Homecoming",
      description:
        "Birkutsho Abinash HS & College is thrilled to announce its Annual Alumni Homecoming event, scheduled for October 15, 2024. This special occasion invites former students to reconnect with old friends, share memories, and celebrate their shared history at the school. The event will feature a welcome ceremony, campus tours, and a gala dinner, offering alumni the chance to see how the school has evolved and to engage with current students and faculty. It’s a day of nostalgia, networking, and renewed connections, marking another memorable chapter in the school’s vibrant community.",
      date: "2024-10-15",
      place: "Birkutsho Abinash Campus, Dhaka, Bangladesh",
      img1: img4,
      img2: img4,
      img3: img4,
      img4: img4,
      img5: img4,
    },
  ];

  const displayedEvents = showAll ? eventList : eventList.slice(0, 6);

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
            {" "}
            {displayedEvents.map((event) => (
              <div key={event.id}>
                <Link to={`/events/${event.id}`}>
                  <div>
                    <img src={event.img1} alt="" />
                  </div>

                  <h3 className="text-main font-bold text-xl mb-4">
                    {event.title}
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm mb-2">
                    {event.date}
                  </p>
                  <p className="text-gray-700 font-semibold text-sm mb-2">
                    {event.place}
                  </p>
                </Link>
              </div>
            ))}
          </div>

          {eventList.length > 6 && (
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
