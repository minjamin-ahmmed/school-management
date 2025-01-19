import img1 from "../../../assets/homecoming.png";
import img2 from "../../../assets/sports.png";

const GridLayout = () => {
  return (
    <div className="w-11/12 lg:w-full mx-auto py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center">
        <div className="lg:col-span-1 p-4 lg:p-20">
          <h1 className="text-4xl font-bold text-accent mb-6">
            Homecoming Week
          </h1>
          <p className="text-justify">
            Join us for our Annual Science Fair, an inspiring event where
            students from all grades present their innovative projects and
            experiments. This exciting day celebrates scientific exploration and
            creativity, featuring project presentations, demonstrations, and
            interactive exhibits. Guest lecturers from the scientific community
            will share their insights, and awards will be given for the best
            projects in various categories. The Science Fair not only highlights
            student achievements but also encourages a love for science and
            critical thinking among all participants.
          </p>
        </div>

        <div className="lg:col-span-1">
          <div className="w-full h-[500px]">
            <img className="w-full h-full object-cover" src={img1} alt="" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center">
        <div className="lg:col-span-1">
          <div className="w-full h-[500px]">
            <img className="w-full h-full object-cover" src={img2} alt="" />
          </div>
        </div>

        <div className="lg:col-span-1 p-4 lg:p-20">
          <h1 className="text-4xl font-bold text-accent mb-6">
            Annual Sports Day
          </h1>
          <p className="text-justify">
            Our Annual Sports Day is a vibrant celebration of athleticism,
            teamwork, and school spirit. Students participate in a variety of
            athletic events, including track and field competitions, team
            sports, and fun challenges like the sack race and tug-of-war. The
            day kicks off with a grand opening ceremony featuring a parade of
            athletes, followed by a series of competitive and recreational
            activities. It’s a day filled with excitement and camaraderie, as
            students, teachers, and parents come together to cheer on the
            participants. The event culminates in an awards ceremony recognizing
            the outstanding performances of the day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
