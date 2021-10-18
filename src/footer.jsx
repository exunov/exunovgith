import React from "react";
import Exu from "./images/Exu.png";
import linked from "./images/linked.png";
import facebook from "./images/facebook.png";
import tel from "./images/tel.png";
import env from "./images/env.png";
import pin from "./images/pin.png";
import { Link } from "react-router-dom";
import "./sectio.css";

function Footer() {
  return (
    <div className="foot1 pt-10 border-3 mt-5 ">
      <div class="md:(grid grid-cols-4 divide-x-3 divide-yellow-400 px-30) grid grid-cols-2 divide-x-3 divide-yellow-500 gap-18">
        <div className="flex space-y-3 flex-col p-2 md:()">
          <img src={Exu} alt="" className="h-30 w-30" />
          <div className="flex flex-row space-x-3 pl-2 ">
            <img src={linked} alt="" className=" w-6 " />

            <Link to="/contact_us">
              <img src={facebook} alt="" className=" w-10 " />
            </Link>
            <img src={tel} alt="" className=" w-6 " />
          </div>

          <div className="flex flex-row  md:(flex flex-row space-x-3)">
            <img src={env} alt="" className=" w-8 h-10" />
            <p className=" font-semibold mt-2 text-sm md:(mt-2 text-xl) ">
              contact@exunov.com
            </p>
          </div>
          <div className="flex space-x-2 flex-row ">
            <img
              src={pin}
              alt=""
              className=" w-8 h-10 animate-pulse hover:animate-none"
            />
            <p className=" italic text-sm md:(px-1) ">
              Ilot 3714 Akogbato
              <br />
              Cotonou
            </p>
          </div>

          <button
            type="submit"
            className=" bg-black py-2 bg-opacity-70   text-light-900 border-2 border-white-600 rounded-lg text-xl w-35  md:(hidden)"
          >
            CONTACT US
          </button>
        </div>
        <div className="">
          <h1 className="text-center font-bold text-3xl ">Services</h1>
          <ul className="mt-4 px-2 font-italic text-sm  md:(text-xl) ">
            <li className=" ">
              <Link to="/mcloud">Managed cloud</Link>
            </li>
            <li className=" ">
              <Link to="/mcyber">Managed Cybersecurity</Link>
            </li>
            <li className=" ">
              <Link to="/muser">Managed User</Link>
            </li>
            <li className=" ">
              <Link to="/mcom">Managed Communication & collaboration</Link>
            </li>
            <li className=" ">
              <Link to="/audit">Audit</Link>
            </li>
            <li className=" ">
              <Link to="/onsite">Onsite IT infracstructure</Link>
            </li>
            <li className=" ">
              <Link to="/support">Support</Link>
            </li>
            <li className=" ">
              <Link to="/virt">Virtual CISCO</Link>
            </li>
            <li className=" ">
              <Link to="/risk">Risks management</Link>
            </li>
            <li className=" ">
              <Link to="/bcp">Business Continuity Plan</Link>
            </li>
          </ul>
        </div>

        <div className="mt-2 md:(mt-1)">
          <h1 className="text-center font-bold md:(text-3xl)">
            Software Development
          </h1>
          <ul className="mt-4 px-2 font-none  font-italic text-xm md:(text-xl) ">
            <li className="">
              {" "}
              <Link to="/dev_web"> Web Development</Link>
            </li>
            <li className="">
              {" "}
              <Link to="/mobile">Mobile App Development</Link>
            </li>
          </ul>
        </div>

        <div className="mt-2 md:(mt-0)">
          <h1 className="text-center font-bold md:(text-3xl)">Ressources</h1>
          <ul className=" px-2 pt-10 font-italic md:(px-2 pt-6 text-xl)  ">
            <li className="">Blog</li>
            <li className="">Webinars & Events</li>
            <li className="">Videos</li>
            <li className="">Case studies</li>
            <li className="">Data sheets</li>
            <li className="">Certification and credentials</li>
          </ul>
        </div>
      </div>

      <div className="foot2 bg-yellow-400 border-2">
        <h2 className="px-2 text-white text-xl pt-3">
          Copyright &copy; Exunov.ALL rights reserved
        </h2>
      </div>
    </div>
  );
}
export default Footer;
