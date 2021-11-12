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
    <div className=" pt-10 border-3  flex flex-col space-y-10  ">
      <div className="flex flex-row ml-20 md:(justify-center items-center ml-50)">
        {" "}
        <div className="md:(flex flex-row  w-200 ) grid grid-cols-2">
          <input
            placeholder="     Search...."
            type="text"
            className="bg-gray-400 rounded-l-2xl  placeholder-white md:(text-xl w-100 rounded-l-2xl h-12 focus:outline-none  border border-gray-300)   "
          />
          <div className="md:(hidden) bg-amber-400 rounded-r-2xl text-white w-10 h-10 text-2xl">
            {" "}
            <Iconsearch />
          </div>
          <button
            type="submit"
            className="hidden bg-amber-400 md:(flex rounded-r-2xl text-white w-25 h-12 text-2xl) "
          >
            <Iconsearch />
          </button>
        </div>
      </div>

      <div class="md:(grid grid-cols-4 divide-x-3 divide-yellow-400 px-30) grid grid-cols-2 divide-x-3 divide-yellow-500 gap-18">
        <div className="flex space-y-3 flex-col p-2 md:()">
          <img src={Exu} alt="" className="h-30 w-30" />
          <div className="flex flex-row space-x-3 pl-2 ">
            <img src={linked} alt="" className=" w-3 " />

            <Link to="/contact_us">
              <img src={facebook} alt="" className=" w-6 " />
            </Link>
            <img src={tel} alt="" className=" w-3 " />
          </div>

          <div className="flex flex-row  md:(flex flex-row space-x-3)">
            <img src={env} alt="" className=" w-8" />
            <p className=" font-semibold mt-2 text-sm md:( text-xl) ">
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
          <h1 className="text-center font-bold md:(text-xl) ">Services</h1>
          <ul className="mt-4 px-2 font-italic text-sm ">
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

        <div className="">
          <h1 className="text-center font-bold md:(text-xl)">Ressources</h1>
          <ul className=" mt-4 px-2 text-sm   ">
            <li className="">Blog</li>
            <li className="">Webinars & Events</li>
            <li className="">Videos</li>
            <li className="">Case studies</li>
            <li className="">Data sheets</li>
            <li className="">Certification and credentials</li>
          </ul>
        </div>

        <div className="">
          <h1 className="px-2 text-center font-bold md:(text-xl) ">
            Software Development
          </h1>
          <ul className="mt-4 px-2 text-sm ">
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
      </div>

      <div className="foot2 bg-yellow-400 border-2">
        <h2 className="px-2 text-white text-xl pt-3">
          Copyright &copy; Exunov.ALL rights reserved
        </h2>
      </div>
    </div>
  );
}

function Iconsearch() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 mt-2 md:(mt-3 ml-8)"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}
export default Footer;
