import React from "react";
import img1 from "../../../assets/connect1.png";
import img2 from "../../../assets/connect2.png";
import img3 from "../../../assets/connect3.png";
import img4 from "../../../assets/connect4.png";

const Connect = () => {
  const members = [
    {
      img: img1,
      title: "Business Leaders Alumni Network",
      description:
        "The Business Leaders Alumni Network connects graduates who are leaders in the corporate and entrepreneurial sectors. This group provides a platform for networking, mentorship, and sharing industry insights. Members have the opportunity to attend exclusive events and collaborate on business ventures.",
    },
    {
      img: img2,
      title: "Arts and Humanities Alumni Society",
      description:
        "The Arts and Humanities Alumni Society brings together alumni with a passion for literature, history, philosophy, and the arts. Through cultural events, workshops, and exhibitions, members can stay engaged with their fields of interest and contribute to the cultural community. This group also supports current students through mentorship programs.",
    },
    {
      img: img3,
      title: "Global Alumni Engineers Alliance",
      description:
        "The Global Alumni Engineers Alliance unites graduates working in various engineering disciplines worldwide. This group fosters professional development through webinars, conferences, and collaborative projects. Members can share their technical expertise, stay updated on industry advancements, and expand their global network.",
    },
    {
      img: img4,
      title: "Healthcare Professionals Alumni Association",
      description:
        "The Healthcare Professionals Alumni Association is dedicated to alumni working in medicine, nursing, public health, and related fields. The group organizes continuing education seminars, health outreach programs, and networking events. Members support each other in advancing healthcare practices and improving community health.",
    },
  ];

  return (
    <div className="w-11/12 mx-auto py-16">
      <h1 className="text-4xl font-semibold text-accent text-center mb-16">
        Connect with Alumni Associations
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {members.map((member, index) => (
          <div key={index}>
            <div className="w-full h-72 mb-4">
              <img
                className="w-full h-full rounded-md object-cover"
                src={member.img}
                alt=""
              />
            </div>
            <h4 className="text-xl font-bold text-main mb-4">{member.title}</h4>
            <p className="text-gray-700">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connect;
