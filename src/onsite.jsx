import React from "react";
import "./sectio.css";
import "./menumobil.css";
import { NavLink } from "react-router-dom";
import Footer from "./footer";
import Headertop from "./headertop";
import Head from "./header";

function Onsite() {
  return (
    <div>
      <Headertop />
      <Head />
      <Haut />
      <HautText />
      <HautP />
      <HautListe />
      <Footer />
    </div>
  );
}

function Haut() {
  return (
    <section>
      <div className="head1"></div>
      <div className="md:(h-full) menu">
        <nav className=" ">
          <ul className="geeks flex flex-col mx-2 text-white text-center  md:( grid grid-cols-7   text-white gap-2 justify-center items-center) ">
            <li>
              <NavLink exact activeClassname="active" to="/onsite">
                Infrastructure
              </NavLink>
            </li>
            <li>
              <NavLink activeClassname="active" to="/server">
                Server
              </NavLink>
            </li>
            <li className="">
              <NavLink
                activeClassname="active"
                to="/storage"
                className="md:(geeks a) geek a "
              >
                Storage space
              </NavLink>
            </li>
            <li className="">
              <NavLink activeClassname="active" to="/network">
                Network
              </NavLink>
            </li>
            <li className="">
              <NavLink activeClassname="active" to="/data">
                Data protection
              </NavLink>
            </li>
            <li className="">
              <NavLink activeClassname="active" to="/endpoint services">
                Endpoint Services
              </NavLink>
            </li>
            <li className="">
              <NavLink activeClassname="active" to="/terminal-inventory">
                Terminal inventory
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

function HautText() {
  return (
    <section>
      <div className="md:(px-40) px-5">
        <h1 className="text-xl font-bold text-amber-400 text-center mt-8 p-4 md:(text-3xl )">
          Managing IT infrastructure is complex, exhausting and thankless.
        </h1>
        <p className="px-4 text-sm md:(text-xl px-60) mt-4 ">
          Managing and resolving IT infrastructure issues is a huge burden for
          SMBs. Not only is it time-consuming, but business operations are
          disrupted by incidents. You are faced with a growing and increasingly
          complex set-up in the face of expense and staff cuts. Not to mention
          the user, who may not know how to use the hardware and system
          properly. When you try to please everyone, you are almost taken for
          granted. And when problems inevitably arise - along with your stress
          level - you're the first one in the firing line.
        </p>
      </div>
      <div className=" pt-6">
        <h1 className="text-xl text-center text-amber-400 font-bold md:(text-3xl)">
          What issues are you most concerned about?
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <ul className="list-disc list-inside px-6 mt-2 font-thin md:(text-xl) ">
          <li>Daily granular tasks</li>
          <li>Shortage or unavailability of staff</li>
          <li>Income from computer services</li>
          <li>Increase of the IT department</li>
          <li>Integration of existing systems</li>
          <li>Increasing complexity of infrastructure management</li>
        </ul>
      </div>
    </section>
  );
}

function HautP() {
  return (
    <section>
      <div className="bg-gray-100 px-5 mt-4 md:(px-40 h-50)">
        <h1 className="text-xl font-bold text-amber-400 text-center mt-8 p-4 md:(text-3xl)">
          Our managed infrastructure has unmatched end-to-end capabilities.
        </h1>
        <p className="px-4 text-sm md:(text-xl mx-30 ) ">
          Drawing on years of experience and accreditations with several major
          vendors, Exunov's IT infrastructure management services offer a
          complete architecture designed for mid-sized companies with in-house
          resources that need help with all or part of their IT infrastructure.
          Thanks to its many years of experience, Exunov will allow you to focus
          on your business applications.
        </p>
      </div>
    </section>
  );
}

function HautListe() {
  return (
    <section className="bg-gray-100 md:(mt-20 py-4)">
      <div className="flex items-center justify-center ">
        <h1 className="text-2xl text-amber-400 font-bold md:(text-3xl) mt-2">
          Key Benefits
        </h1>
      </div>
      <div className=" px-2 space-y-4 font-thin  md:(flex flex-row divide-x-3  divide-yellow-500 flex items-center justify-center text-2xl )">
        <div className="md(px-10)">
          <ul className="space-y-2 px-5 mt-5  ">
            <div className="flex space-x-3 ">
              <Puc />
              <li>Scalability and agility</li>
            </div>
            <div className="flex space-x-3">
              <Puc />
              <li>24x7x365 monitoring and alerts</li>
            </div>
            <div className="flex space-x-3">
              <Puc />
              <li>Anticipated monthly IT costs</li>
            </div>
            <div className="flex space-x-3">
              <Puc />
              <li>Management of cloud computing platforms</li>
            </div>
          </ul>
        </div>
        <div className="md(px-10)">
          <ul className="space-y-2 mt-5 px-5 md:(px-4)">
            <div className="flex space-x-3">
              <Puc />
              <li>Infrastructure and application migration</li>
            </div>
            <div className="flex space-x-3">
              <Puc />
              <li>Business continuity and recovery</li>
            </div>
            <div className="flex space-x-3">
              <Puc />
              <li>Software strategy and planning</li>
            </div>
            <div className="flex space-x-3">
              <Puc />
              <li>Multi-year roadmaps</li>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Puc() {
  return (
    <div className="md:(text-5xl text-amber-600 animate-bounce ) text-amber-600 text-2xl">
      *
    </div>
  );
}

export default Onsite;
