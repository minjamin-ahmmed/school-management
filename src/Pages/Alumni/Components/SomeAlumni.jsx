import img1 from "../../../assets/teacher1.png";
import img2 from "../../../assets/teacher2.png";
import img3 from "../../../assets/teacher3.png";
import img4 from "../../../assets/teacher4.png";
import img5 from "../../../assets/teacher5.png";
import img6 from "../../../assets/teacher6.png";
import img7 from "../../../assets/teacher7.png";
import img8 from "../../../assets/teacher8.png";
import img9 from "../../../assets/teacher9.png";
import img10 from "../../../assets/teacher10.png";
import { useState } from "react";

const SomeAlumni = () => {
  const members = [
    { img: img1, name: "Guy Hawkings", designation: "Principal" },
    { img: img2, name: "Jenny Wilson", designation: "Vice Principal" },
    { img: img3, name: "Eleanor Pena", designation: "Senior Science Teacher" },
    { img: img4, name: "Robert Fox", designation: "Senior Science Teacher" },
    { img: img5, name: "Annette Black", designation: "Senior Science Teacher" },
    { img: img6, name: "Guy Hawkings", designation: "Principal" },
    { img: img7, name: "Jenny Wilson", designation: "Vice Principal" },
    { img: img8, name: "Eleanor Pena", designation: "Senior Science Teacher" },
    { img: img9, name: "Robert Fox", designation: "Senior Science Teacher" },
    {
      img: img10,
      name: "Annette Black",
      designation: "Senior Science Teacher",
    },
    { img: img1, name: "Guy Hawkings", designation: "Principal" },
    { img: img2, name: "Jenny Wilson", designation: "Vice Principal" },
    { img: img3, name: "Eleanor Pena", designation: "Senior Science Teacher" },
    { img: img4, name: "Robert Fox", designation: "Senior Science Teacher" },
    { img: img5, name: "Annette Black", designation: "Senior Science Teacher" },
    { img: img6, name: "Guy Hawkings", designation: "Principal" },
    { img: img7, name: "Jenny Wilson", designation: "Vice Principal" },
    { img: img8, name: "Eleanor Pena", designation: "Senior Science Teacher" },
    { img: img9, name: "Robert Fox", designation: "Senior Science Teacher" },
    {
      img: img10,
      name: "Annette Black",
      designation: "Senior Science Teacher",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll((prevState) => !prevState); // Toggle between true and false
  };

  return (
    <div className="py-16 w-9/12 mx-auto">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-16">
        <h1 className="text-4xl font-semibold text-accent">
          Some of our Alumni
        </h1>

        <button
          onClick={handleShowAll}
          className="btn bg-white text-accent border border-accent px-4 py-2 rounded-md "
        >
          {showAll ? "Show Less" : "Show All Members"}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {members
          .slice(0, showAll ? members.length : 10)
          .map((member, index) => (
            <div key={index}>
              <div className="w-full">
                <img
                  className="w-full h-full object-cover"
                  src={member.img}
                  alt={member.name}
                />
                {/* <div className="text-center mt-2">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.designation}</p>
                </div> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SomeAlumni;
