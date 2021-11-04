import React from "react";
import "./sectio.css";
import imge from "./images/supportuser.png";
import { NavLink } from "react-router-dom";
import Headertop from "./headertop";
import Head from "./header";
import Footer from "./footer";

function Enduser() {
  return (
    <div>
      <Headertop />
      <Head />
      <Body1 />
      <Body2 />
      <Body3 />
      <Body4 />
      <Footer />
    </div>
  );
}

function Body1() {
  return (
    <section>
      <div className="user">
        <h1 className="text-2xl px-15 text-white pt-35 md:(text-3xl )">
          End User Support
        </h1>
      </div>
      <div className="md:(h-full) menu ">
        <nav className=" ">
          <ul className="geeks flex flex-col  text-white text-center md:(grid grid-cols-4 gap-x-3 text-white) ">
            <li>
              <NavLink to="/muser">
                Managed
                <br /> User
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassname="active"
                to="/enduser"
                className=" geeks a"
              >
                End-User <br />
                Support
              </NavLink>
            </li>
            <li>
              <NavLink to="/helpdesk">
                Help & Service
                <br /> Desk
              </NavLink>
            </li>
            <li>
              <NavLink to="/businessApp">
                Line of Business
                <br /> Application Support
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
    <section>
      <div>
        <h1 className="font-bold text-xl text-center text-amber-400 pt-8 md:(text-3xl)">
          Full support for your workforce{" "}
        </h1>
        <p className="px-4 text-sm text-justify md:(text-xl px-50) mt-4 text-center">
          Employees trust that the technology they use is effective and
          available. If the technology stops working, they stop, and if you
          support them internally, your IT resources stop what they are doing to
          get started.
          <br /> <br />
          Let EXUNOV provide daily support while you focus on growing the
          business. As part of a comprehensive managed services package,
          per-user offerings give businesses the support they need. We provide a
          complete solution that gives the end user the best service experience.
          This makes it easier for you to support your employees.
        </p>
      </div>
    </section>
  );
}

function Body3() {
  return (
    <div className="bg-gray-200 mt-10">
      <div className="flex flex-col px-5 md:(grid grid-cols-2 place-items-center py-10)">
        <div className="">
          <img src={imge} alt="" className="ml-15 mt-5 md:(px-0) " />
        </div>

        <div className="">
          <h1 className="text-xl font-bold  mt-6 p-4 md:( text-3xl)">
            End-user support benefits include:
          </h1>
          <ul className="list-disc list-inside text-sm md:(text-xl) ">
            <li>
              Easily scalable and predictable pricing based on managed services
              per user
            </li>
            <li>Multi-channel user support</li>
            <li>Benin-based and 24/7 support options </li>
            <li>Financially supported service level agreements (SLAs)</li>
            <li>Field service escalations as needed</li>
            <li>White labeling capabilities</li>
            <li>Reporting and information </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Body4() {
  return (
    <div className="mt-4">
      <h1 className="text-xl font-bold text-amber-400 text-center mt-8 p-4 md:(text-3xl)">
        Support for your end users and beyond
      </h1>
      <p className="px-4 text-sm text-justify md:(px-50 text-xl) mt-2 text-center ">
        Our managed user solutions come with all kinds of managed services,
        including managed infrastructure and managed cybersecurity. By using
        managed users and a suite of managed services, organizations benefit
        from a dedicated team of engineers who can understand the environment
        and resolve issues more effectively. In addition, it helps identify
        incident trends that can be resolved or optimized in an IT environment
        to mitigate or eliminate problems.
      </p>
      <div className="text-center">
        <button
          type="submit"
          className="mt-8 px-4 bg-amber-400 p-2 text-white border-2 border-white-600 rounded-lg md:(text-xl rounded-xm)"
        >
          CONTACT US
        </button>
      </div>
    </div>
  );
}
export default Enduser;
