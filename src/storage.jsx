import React from "react";
import "./sectio.css";
import { NavLink } from "react-router-dom";
import Footer from "./footer";
import Headertop from "./headertop";
import Head from "./header";

function Storage() {
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
      <div className="head1"></div>
      <div className="md:(h-full) menu">
        <nav className=" ">
          <ul className="geeks flex flex-col  text-white text-center md:(  grid grid-cols-7   text-white gap-2 justify-center items-center) ">
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

function Body2() {
  return (
    <section className="">
      <div className="md:(px-40) px-5">
        <h1 className=" font-bold text-amber-400 text-center mt-8 md:(text-2xl )">
          Management of Exunov's data storage
        </h1>
        <p className="text-sm mt-4 md:(px-50 text-xl)">
          Optimizing your IT infrastructure is a critical step in sustaining
          your business. To truly optimize your IT infrastructure, it is
          essential to take a holistic and resilient approach to data storage
          solutions. Managed data storage solutions are ideal for dynamic
          businesses or businesses with widely distributed employees who need to
          access data from multiple locations or time zones.
        </p>
      </div>

      <div className="pt-4 px-6">
        <h1 className="mt-4 text-amber-400 px-5  font-bold md:(text-center  text-2xl)">
          Implement the right data storage
          <br /> solutions with Data Storage Management.
        </h1>
        <p className=" text-sm mt-4 md:(px-50 text-xl)">
          Exunov understands that as the amount of data acquired by
          organizations continues to grow, managing internal data storage
          becomes increasingly expensive. Similarly, the data storage solution
          your organization uses today may be completely different from the one
          you will need in the months or years to come. Finally, the complexity
          of managing data storage continues to increase with the need for
          customized solutions to store, protect, optimize, and use data to meet
          business needs.{" "}
        </p>
      </div>
      <div className="pt-4 px-6">
        <h1 className="mt-4 text-amber-400 text-center font-bold md:(text-2xl)">
          Our data storage solutions.
        </h1>
        <p className="mt-4 text-sm md:(px-50 text-xl)">
          Adapting to data growth and the need for data storage is not just
          about choosing data storage management software or data storage
          solutions, but also about finding a hosting service provider that best
          understands your business and data needs. Exunov will work with you to
          analyze your environment to ensure that the data storag management
          solutions we offer are the best fit for your organization.{" "}
        </p>
        <ul className="list-none mt-6 space-y-4 font-thin p-5 px-10 md:(mx-50)">
          <div className="flex space-x-3 ">
            <Puce />
            <li className="">24x7x365 monitoring and alerting</li>
          </div>
          <div className="flex space-x-3">
            <Puce />
            <li className="">Correction and support </li>
          </div>
          <div className=" flex space-x-3">
            <Puce />
            <li className="">Inventory/Asset Report </li>
          </div>
          <div className="flex space-x-3">
            <Puce />
            <li className="">System fixes and updates </li>
          </div>
          <div className="flex space-x-3">
            <Puce />
            <li className="">
              Performance optimization and proactive maintenance{" "}
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
}

function Puce() {
  return <div className="text-4xl text-amber-400">•</div>;
}
export default Storage;
