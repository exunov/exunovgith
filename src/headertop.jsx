import React from "react";
import { Link } from "react-router-dom";
import face from "./images/facebook1.png";
import insta from "./images/instagram.png";
import twiter from "./images/twitter.png";
import linke from "./images/linkedin1.png";
import envelop from "./images/enveloppe.png";
import phone from "./images/telephone.png";

function Headertop() {
  return (
    <div>
      <Haut />
    </div>
  );
}

function Haut() {
  return (
    <div className="">
      <div className=" hidden  md:(flex h-15 p-4 space-x-5 justify-between  w-full bg-amber-400 text-light-50)">
        <div className="hidden md:(flex) space-x-10">
          <div className="flex space-x-3">
            <img src={face} alt="" className="w-6 h-6 md:(w-6 h-6) " />
            <img src={twiter} alt="" className="w-6 h-6 " />
            <img src={insta} alt="" className="w-6 h-6" />
            <img src={linke} alt="" className="w-6 h-6" />
          </div>
          <img src={envelop} alt="" className="w-6 h-6" />
          <div className="flex flex-row space-x-3">
            <Phone />
            <p className="text-xl font-bold">+229 99 54 59 59</p>
          </div>
        </div>
        <div className="">
          <div className="text-xm flex space-x-2 mr-10 font-thin md:(h-10 mr-20 text-xl font-thin)  items-start">
            <div>
              <ul className="flex  space-x-3 font-semibold">
                <li>
                  {" "}
                  <Link to="/exunov">Exunov</Link>{" "}
                </li>

                <li>You</li>

                <li>Ressource</li>

                <li>
                  {" "}
                  <Link to="/exunov">Why Exunov?</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/contact">Contact Us</Link>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Phone() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

export default Headertop;
