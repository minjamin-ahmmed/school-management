import React from "react";
import img1 from "../../../assets/history.png";
import pattern from "../../../assets/about-us-banner.png";
const History = () => {
  return (
    <div>
      <div
        className="h-[400px] lg:h-[600px] mb-20"
        style={{
          backgroundImage: `url(${pattern})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="w-11/12 mx-auto py-16">
          <div className="flex flex-col lg:flex-row items-end gap-16">
            <div className="">
              <img src={img1} alt="" />
            </div>

            <div>
              <p className="mb-8 text-primary">
                Birkutsho Abinash High School & College
              </p>
              <div className="w-24 h-1 bg-accent mb-4"></div>
              <h1 className="text-3xl lg:text-6xl font-bold text-accent mt-8">
                About Our History
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
