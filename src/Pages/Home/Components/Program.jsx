import React from "react";
import program1 from "../../../assets/program1.png";
import program2 from "../../../assets/program2.png";
import program3 from "../../../assets/program3.png";

import tiffin from "../../../assets/butter.png";
import school from "../../../assets/english.png";
import book from "../../../assets/book.png";

const Program = () => {
  return (
    <div className="py-12 lg:py-24 w-11/12 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="lg:col-span-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:mb-20">
            <div className="lg:col-span-2 group relative overflow-hidden">
              <div className="w-full h-72">
                <img
                  className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                  src={program1}
                  alt=""
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
            </div>

            <div className="lg:col-span-1 group relative overflow-hidden">
              <div className="w-full h-72">
                <img
                  className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                  src={program2}
                  alt=""
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
            </div>

            <div className="lg:col-span-1 group relative overflow-hidden">
              <div className="w-full h-72">
                <img
                  className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                  src={program3}
                  alt=""
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
            </div>

            <div className="lg:col-span-2 group relative overflow-hidden">
              <div className="w-full h-72">
                <img
                  className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                  src={program1}
                  alt=""
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          <div className="text-justify">
            <h1 className="text-accent font-bold text-2xl lg:text-4xl mb-6 mt-6 text-start">
              Life at Birkutsho Abinash High School & College
            </h1>

            <p className="text-main mb-6">
              Join in the traditions and other fun activities that bring our
              close-knit community together and balance the serious work of
              study!
            </p>

            <p className="font-bold text-main mb-2">
              Campus Life and Athletics
            </p>
            <p className="text-main mb-6">
              With over 100 student clubs and organizations, and sports and
              recreational activities, there is always something to do at
              Juniata.
            </p>

            <p className="font-bold text-main mb-2">Traditions</p>
            <p className="text-main mb-6">
              From our legendary Mountain Day celebration to our intellectual
              Liberal Arts Symposium, our traditions and unique customs set
              Juniata apart.
            </p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="lg:mb-96 text-justify">
            <h2 className="font-bold text-accent text-2xl lg:text-4xl mb-6 text-start">
              At Birkutsho Abinash High School & College the Emphasis is On You
            </h2>
            <p className="text-main mb-6 ">
              96% of our students who graduate do so in four years, and 90% are
              employed or in grad school six months after graduation.
            </p>

            <p className="font-bold text-main mb-2">Program of Emphasis</p>
            <p className="text-main mb-6">
              Our programs of emphasis (POEs) allow students to design an
              education that aligns with their future goals and career
              interests.
            </p>

            <p className="font-bold text-main mb-2">
              Accelerated 3+1 Dual Degrees
            </p>
            <p className="text-main mb-6">
              In select programs, you can complete a bachelor’s and a master’s
              degree in just four years!
            </p>

            <p className="font-bold text-main mb-2">Master's Programs</p>
            <p className="text-main mb-6">
              Graduate programs are offered with accessibility in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="lg:col-span-1 group relative overflow-hidden">
              <div className="w-full h-72">
                <img
                  className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                  src={tiffin}
                  alt=""
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
            </div>
            <div className="lg:col-span-1 group relative overflow-hidden">
              <div className="w-full h-72">
                <img
                  className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                  src={school}
                  alt=""
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
            </div>

            <div className="lg:col-span-2 group relative overflow-hidden">
              <div className="w-full h-72">
                <img
                  className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                  src={book}
                  alt=""
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
