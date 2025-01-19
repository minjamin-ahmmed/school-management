import { useParams } from "react-router-dom";
import img1 from "../../../assets/EventImg1.png";
import img2 from "../../../assets/EventImg2.png";
import img3 from "../../../assets/EventImg3.png";
import img4 from "../../../assets/EventImg4.png";
import {
  CalendarDots,
  Clock,
  MapPinLine,
  ShareNetwork,
  User,
  Users,
} from "@phosphor-icons/react";

const EventDetails = () => {
  const { id } = useParams();
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

  const event = eventList.find((event) => event.id === parseInt(id));

  return (
    <div className="w-11/12 lg:w-9/12 mx-auto py-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-3">
          <div className="w-full h-96">
            <img
              className="w-full h-full object-cover"
              src={event.img1}
              alt=""
            />
          </div>

          <div className="flex items-center justify-between">
            <p>Event</p>
            <p className="flex items-center gap-2">
              Share <ShareNetwork size={24} />{" "}
            </p>
          </div>

          <h3 className="text-4xl font-bold text-main mt-4 mb-10">
            {event.title}
          </h3>
          <p className="text-justify">{event.description}</p>
        </div>

        <div className="lg:col-span-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="p-2 border border-gray-300 rounded-xl">
              <div className="py-2 w-full bg-gray-900 rounded-lg flex items-center justify-center">
                <CalendarDots color="#FACC15" size={28} />
              </div>
              <h4 className="text-center my-2 font-bold text-main">Date</h4>
              <p className="text-center">{event.date}</p>
            </div>

            <div className="p-2 border border-gray-300 rounded-xl">
              <div className="py-2 w-full bg-gray-900 rounded-lg flex items-center justify-center">
                <Clock color="#FACC15" size={28} />
              </div>
              <h4 className="text-center my-2 font-bold text-main">Time</h4>
              <p className="text-center">{event.time}</p>
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
                <p className="text-center text-sm">{event.place}</p>

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
