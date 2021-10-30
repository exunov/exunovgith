import React from "react";
import "./sectio.css";
import { NavLink } from "react-router-dom";
import Footer from "./footer";
import Headertop from "./headertop";
import Head from "./header";

function Data() {
  return (
    <div>
      <Headertop />
      <Head />
      <BodyHaut />
      <BodyBas />

      <Footer />
    </div>
  );
}
function BodyHaut() {
  return (
    <section>
      <div className="head1"></div>
      <div className="md:(h-full) menu">
        <nav className=" ">
          <ul className="geeks flex flex-col  text-white text-center md:( grid grid-cols-7   text-white gap-2 justify-center items-center) ">
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
                className="geeks a "
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

function BodyBas() {
  return (
    <section className="">
      <div className=" bg-gray-100 space-y-6 md:( px-4 )">
        <div className="mt-4 px-6 md:(mt-4)">
          <h1 className="mt-4 text-amber-400 text-center font-bold md:(text-3xl)">
            Managed Infrastructure: Managed Data Protection Solutions
          </h1>
          <p className="space-y-4 mt-4 text-sm  md:(px-50 text-xl)">
            It is necessary to ensure that your critical systems, applications
            and data are protected from loss and avoid costly downtime with
            managed data protection solutions. Risk prevention allows our
            customers to access our services, no matter what.
          </p>
          <p className="mt-4 text-sm md:(px-50 text-xl)">
            The implementation and development of Business Continuity Plans
            (BCP) has become the theme of our time. When the COVID-19 crisis
            broke out, EXUNOV was in a unique position to help companies of all
            sizes deal with this crisis.
          </p>
        </div>

        <div className="pt-4 px-6">
          <h1 className="mt-4 text-amber-400 text-center font-bold md:(text-3xl)">
            End-to-end business continuity
          </h1>
          <p className="space-y-4 mt-4 text-sm  md:(px-50 text-2xl)">
            By choosing a customer-centric approach to data protection
            solutions, we ensure informed and pragmatic investments in robust
            processes and technologies.
          </p>
        </div>
        <div className="pt-4 px-6">
          <h1 className="mt-4 text-amber-400 text-center font-bold md:(text-3xl)">
            Agility and capacity
          </h1>
          <p className="mt-4 text-sm md:(px-50 text-xl)">
            We are a partner capable of supporting your projects in the long
            term and we also intervene in the event of unforeseen circumstances.
            Our role is to ensure that the services are available no matter what
            happens.{" "}
          </p>
        </div>
        <div className="pt-4 px-6">
          <h1 className="mt-4 text-amber-400 text-center font-bold md:(text-3xl)">
            Real World Experience
          </h1>
          <p className="mt-4 text-sm  md:(px-50 text-xl)">
            Our staff has extensive experience in business continuity design and
            planning, strategy, mapping, design and adoption of managed data
            security solutions.{" "}
          </p>
        </div>
        <div className="pt-4 px-6">
          <h1 className="mt-4 text-amber-400 text-center text-xl font-bold md:(text-3xl)">
            Aligned with the sector
          </h1>
          <p className="mt-4 text-sm text-center md:(text-xl)">
            Our staff has extensive experience in aligning organizations with
            best practices in your industry.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
export default Data;
