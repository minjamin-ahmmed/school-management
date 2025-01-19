import React from "react";
import logo from "../../assets/Logo.svg";
import facebook from "../../assets/facebook.svg";
import linkedim from "../../assets/linkedin.svg";
import youtube from "../../assets/youtube.svg";
import X from "../../assets/X.svg";
import whatsapp from "../../assets/whatsapp.svg";
import mail from "../../assets/mail.svg";
import phone from "../../assets/phone.svg";
import location from "../../assets/location_on.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="py-16 w-11/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-64">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <div className="w-40">
              <img className="w-full" src={logo} alt="" />
            </div>

            <div>
              <h1 className="text-2xl font-semibold text-main">
                Birkutsha Abinash <br /> School And College
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8">
                <img className="w-full h-full" src={facebook} alt="" />
              </div>
              <p className="font-bold text-gray-700 text-xl">Facebook</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8">
                <img className="w-full h-full" src={linkedim} alt="" />
              </div>
              <p className="font-bold text-gray-700 text-xl">Linkedin</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8">
                <img className="w-full h-full" src={youtube} alt="" />
              </div>
              <p className="font-bold text-gray-700 text-xl">Youtube</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8">
                <img className="w-full h-full" src={X} alt="" />
              </div>
              <p className="font-bold text-gray-700 text-xl">X(Twitter)</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8">
                <img className="w-full h-full" src={whatsapp} alt="" />
              </div>
              <p className="font-bold text-gray-700 text-xl">Whatsapp</p>
            </div>
          </div>

          <div className="space-y-2 text-lg">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6">
                <img className="w-full h-full" src={mail} alt="" />
              </div>
              <p className="text-gray-700">schmail@example.com</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-6 w-6">
                <img className="w-full h-full" src={phone} alt="" />
              </div>
              <p className="text-gray-700">(808) 555-0111</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-6 w-6">
                <img className="w-full h-full" src={location} alt="" />
              </div>
              <p className="text-gray-700">
                2118 Thornridge Cir. Syracuse, Connecticut 35624
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-4">
        <div className="w-11/12 mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-4 text-white text-sm">
            <p>©School 2020 - 2024. All Rights Reserved</p>
            <p>
              {" "}
              Designed & Developed By{" "}
              <Link to="https://nexkraft.com/">
                <span className="text-accent underline">Nexkraft</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
