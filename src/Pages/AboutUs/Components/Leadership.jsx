import img1 from "../../../assets/leader1.jpeg";
import img2 from "../../../assets/leader2.jpg";
import img3 from "../../../assets/leader3.jpg";
import HoverCard from "./HoverCard";

const Leadership = () => {
  const leaders = [
    { img: img1, name: " Philip G. Ryken, President" },
    { img: img2, name: " John Adam, Provost" },
    { img: img3, name: " Governing Body" },
  ];

  return (
    <div className="py-16">
      <h3 className="text-accent font-bold text-4xl text-center mb-16">
        Leaderships & Governing Body
      </h3>

      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {leaders.map((leader, index) => (
            <HoverCard key={index} leader={leader} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
