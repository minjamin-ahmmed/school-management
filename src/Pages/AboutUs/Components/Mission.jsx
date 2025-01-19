import React from "react";
import grid1 from "../../../assets/program1.png";
const Mission = () => {
  return (
    <div className="w-11/12 mx-auto py-16">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-accent mb-4">
            Mission & Vision
          </h2>

          <h6 className="text-main font-bold text-lg mb-2">Mission</h6>
          <p className="mb-4">
            Our mission is to change the way education meets the future; to
            foster interdisciplinary, integrated thinking and innovative
            leadership; to engage fully in the global community; and to
            facilitate lifelong learning.
          </p>

          <h6 className="text-main font-bold text-lg mb-2">Vission</h6>
          <p className="mb-4">
            Our Vission is to change the way education meets the future; to
            foster interdisciplinary, integrated thinking and innovative
            leadership; to engage fully in the global community; and to
            facilitate lifelong learning.
          </p>
        </div>

        <div className="lg:w-1/2">
          <div className="w-full h-72">
            <img
              className="w-full h-full object-cover rounded-md"
              src={grid1}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
