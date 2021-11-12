import React from "react";
import "./sectio.css";
import Footer from "./footer";
import { NavLink } from "react-router-dom";
import Headertop from "./headertop";
import Head from "./header";

function Cvm() {
  return (
    <div>
      <Headertop />
      <Head />
      <Body1 />
      <Body2 />
      <Footer />
    </div>
  );
}

function Body1() {
  return (
    <section>
      <div className="head"></div>
      <div className="md:(h-full) menu">
        <nav className=" ">
          <ul className="geeks flex flex-col  text-white text-center md:(grid grid-cols-4 gap-x-3  text-white  text-center ) ">
            <li>
              <NavLink to="/mcyber">
                Managed
                <br /> Cybersecurity
              </NavLink>
            </li>
            <li>
              <NavLink to="/mdetection">
                Managed Detection <br />
                and Response
              </NavLink>
            </li>
            <li>
              <NavLink to="/cyberpro">
                Cyber Program
                <br /> Management
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cvm"
                exact
                activeClassname="active"
                className=" geeks a"
              >
                Continue Vulnerabilities
                <br /> Management
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

function Body2() {
  return (
    <div className="grid grid-cols-1 text-justify md:(grid grid-cols-1 place-items-center px-30 gap-4)">
      <div className=" bg-gray-100  mt-6 py-4 px-4 shadow-2xl rounded-b-2xl md:(h-full)">
        <h1 className=" font-bold text-center md:(text-2xl  ) text-amber-400">
          Continuous vulnerability assessment: how secure are you?
        </h1>
        <p className="mt-2 text-sm md:(text-xl)">
          Advances in telecommunications for teleworking highlight the need to
          connect, communicate and maintain networks, endpoints and users. As
          loads increase, so do the intrusions that threaten network and system
          infrastructure. EXUNOV provides the necessary information about your
          network security and offers increased transparency both internally and
          externally, resulting in customized recommendations, continuous threat
          assessment and remediation.{" "}
        </p>
      </div>
      <div className=" bg-gray-100  mt-6 py-4 px-4 shadow-2xl rounded-b-2xl md:(h-full)">
        <h1 className=" font-bold text-center md:(text-2xl )  text-amber-400">
          Looking for vulnerabilities seems obvious, until you realize that
          there are new ones every day
        </h1>
        <p className=" mt-2 text-sm md:(text-xl)">
          Cybercriminals use known solutions and phishing attacks to compromise
          the security of organizations. For this reason, implementing a
          proactive scanning and testing regime is one of the most effective
          ways to reduce the risk of a successful cyberattack. However,
          implementing and developing continuous vulnerability management can be
          very difficult.{" "}
        </p>
      </div>
      <div className=" bg-gray-100  mt-6 py-4 px-4 shadow-2xl rounded-b-2xl md:(h-full)">
        <h1 className="text-center font-bold text-amber-400 md:(text-2xl )">
          Maintain constant vigilance and stay one step ahead of cyber
          attackers.{" "}
        </h1>
        <p className="mt-2   text-sm md:(text-xl)">
          EXUNOV's Vulnerability Management Program allows you to detect, remove
          and control existing risks using specialized software and appropriate
          workflows to eliminate risks, provide patches to your systems and
          alert you to existing threats.{" "}
        </p>
      </div>
    </div>
  );
}
export default Cvm;
