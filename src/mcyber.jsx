import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Headertop from "./headertop";
import Head from "./header";
import "./sectio.css";
import "./menunav.css";
import quote1 from "./images/Group6.png";
import Footer from "./footer";
import Cadre from "./cadre";

function Mcyber() {
  return (
    <div>
      <Headertop />
      <Head />
      <div className="head"></div>
      <div className="md:(h-full) menu ">
        <nav className="  ">
          <ul className="geeks text-white text-center md:( grid grid-cols-4 gap-x-1 text-white text-xl ) ">
            <li className="">
              {" "}
              <NavLink
                exact
                activeClassname="active"
                to="/mcyber"
                className=" md:(geeks a)"
              >
                {" "}
                Managed
                <br /> Cybersecurity
              </NavLink>{" "}
            </li>
            <li className="">
              {" "}
              <NavLink exact to="/mdetection" activeClassName="active">
                Managed Detection <br />
                and Response
              </NavLink>
            </li>
            <li className="">
              <NavLink exact to="/cyberpro" activeClassName=" exactactive">
                Cyber Programc
                <br /> Management
              </NavLink>
            </li>
            <li className="">
              <NavLink exact to="/cvm" activeClassName=" exactactive">
                Continue Vulnerabilities Management
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="">
        <div className="md:(px-50) text-justify">
          <h1 className="text-xl text-amber-400 font-bold text-center p-4 md:(text-3xl)">
            If you think mid-sized companies aren't targets,think again
          </h1>
          <p className="px-4 text-sm md:(text-xl) ">
            Cyberattacks on large corporations and international businesses have
            become increasingly common in recent years. Private company and
            employee data and information are regularly the spoils of an attack,
            often making international headlines when a large company is
            attacked. All areas of the business-IT,public relations and
            management-are shaken during an attack,and must manage the
            repercussions of failed security system that have been unexpectedly
            targeted.
          </p>
        </div>
        <div className=" pt-4">
          <h1 className="text-xl text-center font-bold">
            Why manage cybersecurity: by the numbers
          </h1>
          <p className="text-xs text-center">
            All statistics from the IBM/Ponemon Global Cost of Data Breach Study
            2020.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className=" pt-8  divide-y-2 space-y-6 w-50 divide-yellow-400 text-center md:(w-150)">
            <div>
              <h1 className="text-xl font-bold ">
                Average time to identify and contain a breach
              </h1>
              <p className="text-xl text-yellow-400 font-bold pt-4">280 days</p>
            </div>
            <div>
              <h1 className="text-xl font-bold pt-4">
                Customer personnal information is frequently compromised,
                costing
              </h1>
              <p className="text-xl text-yellow-400 font-bold pt-4">
                $150 per record
              </p>
            </div>
            <div>
              <h1 className="text-xl font-bold pt-4">
                Average cost of breaches for mid-sized companies was
              </h1>
              <p className="text-xl text-yellow-400 font-bold pt-4">
                $3.63 millions in 2020
              </p>
            </div>
            <div>
              <h1 className="text-xl font-bold pt-4">
                Experience of most affected companies
              </h1>
              <p className="text-xl text-yellow-400 font-bold pt-4">
                3 to 14 days of downtime
              </p>
            </div>
          </div>
        </div>
        <div className="bas hover: shadow-xl text-black">
          <div className=" space-y-2 px-10 md:(p-8 text-justify)">
            <h1 className="text-black text-xl md:(text-3xl text-white pt-0) pt-2 font-bold text-center">
              Creating a cybersecurity program from scratch is overwhelming
            </h1>
            <p className=" text-white italic md:(text-xl  p-5)  ">
              Cyber threats and attacks are increasing in number and
              complexity.In our information-driven digital world, managing cyber
              threats has become a stratrgic business imperative. Indeed,the
              stakes are higher than ever. Cybercrime is more than fraud or
              theft.CISO know that it's not pratical to put in place an internal
              cyber program they can trust given :
            </p>
            <ul className="text-white text-sm  space-y-2 py-2  list-disc md:(px-20 text-xl)">
              <li className="">The increase in cybersecurity skills</li>
              <li>Alerts to analyze that increase on a daily basis</li>
              <li>
                Low identification of problems in their information systems
              </li>
              <li>The increased evolution of cyber threats</li>
              <li>Strict compliance standards increasingly</li>
              <li>Budjets needed to train and retain key talent</li>
            </ul>
          </div>
        </div>
        <div className="bas1 h-full  md:(px-40 py-5  )">
          <div className="border-yellow-400 border-2 space-y-2  bg-black bg-opacity-75 mt-3 md:( p-5 ) ">
            <h1 className="text-center text-white text-xl px-2 mt-2 md:(text-2xl )">
              Achieve cyber maturity quickly with managed cybersecurity
            </h1>
            <p className=" text-white text-sm  italic px-3 p-1 md:(text-xl pt-2 )">
              EXUNOV's comprehensive Cyber Security Risk Management Strategy
              provides customers with the ability to better manage their
              information systems and ensure data integrity. This includes:
              availability,integrity, confidentiality,authentication and
              non-repudiation of information in the network through a good
              methodology integrating a security strategy.
            </p>
          </div>
        </div>
        <div className="mt-10 space-y-5 p-4">
          <h1 className=" text-center text-2xl font-bold text-amber-400 md:(text-3xl mt-2)">
            Our Approach
          </h1>
          <h1 className="mt-2 text-center text-xl font-semibold  italic md:(text-2xl)">
            We protect your business relentlessly
          </h1>
          <div className="grid grid-cols-2 gap-5 px-4 md:(grid grid-cols-4 gap-10 mr-30 ml-30 place-items-center)">
            <div className="">
              <h1 className="font-bold text-2xl md:(mt-7) ">Detection</h1>
              <p className="pt-2 font-semibold italic text-sm md:(text-xl)">
                Penetration testing: find harmful threats in your infrastruture
              </p>
            </div>
            <div className="">
              <h1 className="font-bold text-2xl ">Validation</h1>
              <p className="pt-2 font-semibold italic text-sm md:(text-xl)">
                Validation: validate intrusions and pathways
              </p>
            </div>
            <div className="">
              <h1 className="font-bold  text-2xl ">Reporting</h1>
              <p className="pt-2 font-semibold italic text-sm md:(text-xl)">
                Reporting: Report details to customers
              </p>
            </div>
            <div className="">
              <h1 className="font-bold  text-2xl   md:(mt-5)">Response</h1>
              <p className="pt-2 font-semibold italic text-sm  md:(text-xl) ">
                Solution: Neutralize and solve the problem for/ with the
                customer
              </p>
            </div>
          </div>
        </div>
        <div className="border-t-4 mt-10 space-y-8  p-4 ">
          <h1 className="font-bold italic text-xl text-center text-amber-400 pt-8 md:(text-3xl)">
            Our Managed Cyber Security Services
          </h1>
          <div className="grid grid-cols-1 gap-5   md:(px-25 grid grid-cols-3  divide-x-3 divide-yellow-400)">
            <div className="md:(space-y-6)">
              <h1 className="font-bold  text-xl text-center md:(text-2xl)  ">
                Cyber Program Management
              </h1>
              <p className=" text-sm p-2 font-semibold italic md:(px-5 font-thin font-semibold text-xl) ">
                In the cybersecurity field, there is a large gap between the
                Security industry and the ability to recruit while identifying a
                cybersecurity expert to develop and maintain a full-time
                security program. Get a head start by partnering with{" "}
                <strong>EXUNOV SARL</strong>
                <h1 className="px-4 text-yellow-500 text-center font-bold text-xl hover:bg-blue-gray-500">
                  <Link to="/read1">Read</Link>
                </h1>
              </p>
            </div>

            <div className="md:(space-y-6) ">
              <h1 className="font-bold  text-xl text-center md:(text-2xl) ">
                Vulnerability management
              </h1>
              <p className=" text-sm p-2 font-semibold italic md:(px-5 text-xl) ">
                Continuous Vulnerability management provides information about
                the security of your infrastructure and offers increased
                transparency within internal and external perimeters, resulting
                in customized recommendations and a plan to remediate
                Vulnerabilities
              </p>

              <h1 className="px-4 text-yellow-500 text-center font-bold italic text-xl hover:bg-blue-gray-500">
                <Link to="/read3"> Read</Link>
              </h1>
            </div>

            <div className="md:(space-y-6)">
              <h1 className="font-bold text-xl text-center md:(text-2xl) ">
                Detection and Management of
                <br /> intrusions
              </h1>
              <p className="text-sm p-2 font-semibold italic md:(px-5 text-xl ) ">
                Protect your entire infrastruture by identifying threats with
                EXUNOV's comprehensive information security risk management.
                <h1 className="px-4 text-yellow-500 text-center font-bold  text-xl hover:bg-blue-gray-500">
                  <Link to="/read2"> Read</Link>
                </h1>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Cadrechild />
      <Footer />
    </div>
  );
}

function MenuButton(props) {
  const { isMenuOpen } = props;

  if (isMenuOpen) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 font-bold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className=" w-8 text-light-100 animate-bounce "
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
      />
    </svg>
  );
}

function Cadrechild() {
  return (
    <div className="bg-Group9-img bg-cover w-full h-full md:(h-100 mt-8  place-items-center transform transition-all hover:(  translate-y-10) ) ">
      <div className="md:()">
        <img src={quote1} alt="" className="w-full p-2 md:(h-100 px-40   )" />
      </div>
    </div>
  );
}
export default Mcyber;
