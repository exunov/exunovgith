import React from "react";
import "./sectio.css";
import { NavLink } from "react-router-dom";
import Footer from "./footer";
import Headertop from "./headertop";
import Head from "./header";

function TerminalInventory() {
  return (
    <div>
      <Headertop />
      <Head />
      <div className="md:(space-y-10) text-justify">
        <Body1 />
        <Body2 />
        <Body3 />
        <Body4 />
      </div>

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
          <ul className="geeks flex flex-col  text-white text-center md:(grid grid-cols-7   text-white space-x-3 justify-center items-center) ">
            <li>
              <NavLink exact activeClassname="active" to="/onsite">
                Infrastructure Solutions
              </NavLink>
            </li>
            <li>
              <NavLink activeClassname="active" to="/server">
                Server
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassname="active"
                to="/storage"
                className="geeks a "
              >
                Storage space
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/network">
                Network
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/data">
                Data protection
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/endpoint services">
                Endpoint Services
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/terminal-inventory">
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
    <div className=" mt-4">
      <h1 className="px-3 text-center font-bold text-amber-400 text-xl md:(text-3xl)">
        Act quickly without straying from what is important{" "}
      </h1>
      <div className="px-10   md:(px-60 p-2)">
        <p className="text-sm md:(text-xl )">
          Optimal equipment with the right configuration is necessary for your
          users as your organization grows. We handle imaging inventory and
          endpoint management to take the burden of user device configuration
          off your shoulders so you and your staff can focus on growing your
          organization.{" "}
        </p>
      </div>
    </div>
  );
}

function Body3() {
  return (
    <div className="mt-4">
      <h1 className="text-center font-bold text-amber-400 text-xl md:(text-3xl)">
        Device imaging and endpoint inventory management{" "}
      </h1>
      <div className=" px-10 mt-4 md:(px-60 p-2 )">
        <p className="text-sm md:(text-xl mt-4 ) ">
          We work with you to create a specific image of the device based on
          your particular needs and industry standards. This image includes
          operating system configuration, productivity and business application
          requirements, etc.{" "}
        </p>
        <p className="text-sm md:(text-xl)">
          We take it from there. Once we create that image, we deploy it to
          users' new devices and send them where they need to be. Your users
          will also have the latest operating system, application and software
          updates, so they can get the latest technology and security updates
          right out of the box.
        </p>
      </div>
    </div>
  );
}
function Body4() {
  return (
    <div className="bg-gray-100">
      <div className=" mt-4">
        <h1 className="px-2 text-center font-bold text-amber-400 text-xl md:(text-3xl)">
          Terminal inventory management
        </h1>
        <div className=" px-10 md:(px-60 p-2)">
          <p className="text-sm mt-4 md:(text-xl)">
            In order to act quickly and allow your employees to better utilize
            their equipment, let us securely manage an inventory of laptops,
            workstations, tablets, and other hardware so that we can provide a
            quick turnaround on your user device deployment. With our device
            inventory management, you don't have to worry about device
            acquisition and configuration.{" "}
          </p>
          <p className="text-sm mt-2 md:(text-xl)">
            EXUNOV's terminal inventory management facilitates the process of
            receiving equipment with images. To get your device up and running
            from day one, just make a quick request to the technical engineering
            center.
          </p>
        </div>
      </div>
      <div className=" mt-4">
        <h1 className="text-center font-bold text-amber-400 text-xl md:(text-3xl)">
          Outsourced Help Desk: A team dedicated to your success
        </h1>
        <div className=" px-10 md:(px-60 p-2)">
          <p className="text-sm mt-4 md:(text-xl)">
            Outsourced IT teams are ambassadors for your organization, like
            physical therapists, coaches and managers for your favorite football
            team. They are critical to success, but it's usually better to help
            your system run smoothly and efficiently without anyone noticing. Is
            your outsourced support service providing the value your business
            needs to grow?{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
export default TerminalInventory;
