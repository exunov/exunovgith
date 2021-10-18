import React from "react";
import { Link } from "react-router-dom";
import face from "./images/facebook1.png";
import insta from "./images/instagram.png";
import twiter from "./images/twitter.png";
import linke from "./images/linkedin1.png";
import envelop from "./images/enveloppe.png";

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
        </div>
        <div className="">
          <div className="text-xm flex space-x-2 mr-10 font-thin md:(h-10 mr-20 text-xl font-thin)  items-start">
            <div>
              <ul className="flex  space-x-3 font-semibold">
                <li>
                  {" "}
                  <Link to="/contact">Contact_Us</Link>{" "}
                </li>

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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headertop;
