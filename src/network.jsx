import React from "react";
import "./sectio.css";
import { NavLink } from "react-router-dom";
import Footer from "./footer";
import Headertop from "./headertop";
import Head from "./header";

function Network() {
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
      <div className="head1"></div>
      <div className="md:(h-full) menu">
        <nav className=" ">
          <ul className="geeks flex flex-col  text-white text-center md:(grid grid-cols-7   text-white gap-2 justify-center items-center ) ">
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
      <div className=" space-y-6 md:(px-4 )">
        <div className="mt-4 px-6 md:(mt-4)">
          <h1 className="mt-4 text-amber-400 text-center font-bold text-xl md:(text-3xl)">
            Managed Infrastructure: Network Management Solutions
          </h1>
          <p className="space-y-4 text-sm mt-4 md:(px-50 text-xl)">
            The abundance of data, devices, and requirements puts pressure on
            the network. Solution providers who are in the business of
            facilitating the user experience must prepare their networks for
            proper management and maintenance. Our approach to network
            management solutions gives you the confidence that your
            infrastructure is running optimally. EXUNOV provides the tools and
            services your business needs for continuous connectivity.{" "}
          </p>
        </div>
        <div className="pt-4 px-6">
          <h1 className="mt-4 text-amber-400 text-center font-bold text-xl md:(text-3xl)">
            Key Benefits of Managed Network Services:
          </h1>
          <p className="mt-4 text-sm  md:(mx-30 text-xl)">
            Turn the card over to reveal each key benefit of network management
            solutions.{" "}
          </p>
          <ul className="list-none mt-6 space-y-4 md:(mx-40 text-xl)">
            <div className="flex space-x-3">
              <Puce />
              <li className="mt-3">
                Get business performance results with faster networks, better
                resiliency, and managed network services.
              </li>
            </div>
            <div className="flex space-x-3">
              <Puce />
              <li className="mt-3">
                Managed network services reduce costs by reducing network
                configuration time.
              </li>
            </div>
            <div className=" flex space-x-3">
              <Puce />
              <li className="mt-3">
                Network management solutions reduce risk and improve the
                security of your network infrastructure.{" "}
              </li>
            </div>
            <div className="flex space-x-3">
              <Puce />
              <li className="mt-3">
                Automate IT processes and improve application and end-user
                experience with managed network services.{" "}
              </li>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
}
function Body3() {
  return (
    <section>
      <div className=" mt-4">
        <div className="mt-2">
          <h1 className="text-center text-2xl font-bold pt-2 ">
            Your challenges
          </h1>
        </div>
        <div className="grid grid-cols-1 p-2 md:(grid grid-cols-1 place-items-center gap-4)">
          <div className=" bg-gray-100  mt-6 py-4 px-4 shadow-2xl rounded-b-2xl md:(h-full)">
            <h1 className="text-center text-xl text-amber-400">
              Network Policy
            </h1>
            <p className="mt-2 text-sm md:(text-xl) ">
              Auditing and updating network policies is necessary to adapt to
              the new work environment and to find a solution to the
              expectations of the home-based workforce.{" "}
            </p>
          </div>
          <div className=" bg-gray-100  mt-6 py-4 px-4 shadow-2xl rounded-b-2xl md:(h-full)">
            <h1 className="text-center text-xl text-amber-400">
              Security and access solutions
            </h1>
            <p className="mt-2 text-sm  md:(text-xl)">
              The security of your organization's information and data,
              regardless of your location or device.{" "}
            </p>
          </div>
          <div className=" bg-gray-100  mt-6 py-4 px-4 shadow-2xl rounded-b-2xl md:(h-full)">
            <h1 className="text-center text-xl text-amber-400">
              Wi-Fi connectivity
            </h1>
            <p className="mt-2 text-sm  md:(text-xl)">
              Operating scalable WiFi networks and being able to meet your
              expectations while providing a quality experience.{" "}
            </p>
          </div>
          <div className=" bg-gray-100  mt-6 py-4 px-4 shadow-2xl rounded-b-2xl md:(h-full)">
            <h1 className="text-center text-xl text-amber-400">
              Multi-cloud networking
            </h1>
            <p className="mt-2 text-sm  md:(text-xl)">
              Bring together multiple cloud and storage services in a single
              network architecture.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
function Body4() {
  return (
    <section>
      <div className="pt-4 px-6 md:(mt-8)">
        <h1 className="mt-4 text-amber-400 text-center font-bold text-xl md:(text-3xl)">
          Our network management solutions :
        </h1>
        <div className=" px-2 space-y-4 font-thin md:(flex flex-row divide-x-3 mt-4 divide-yellow-500 flex items-center justify-center text-xl )">
          <div className="md(px-10)">
            <ul className="space-y-2 px-3 mt-5 ">
              <div className="flex space-x-3">
                <Puc />
                <li>24x7x365 monitoring and alerting</li>
              </div>
              <div className="flex space-x-3">
                <Puc />
                <li>Correction and support</li>
              </div>
              <div className="flex space-x-3">
                <Puc />
                <li>Software defined networks</li>
              </div>
              <div className="flex space-x-3">
                <Puc />
                <li>Internet Security</li>
              </div>
            </ul>
          </div>
          <div className="md(px-10)">
            <ul className="space-y-2 mt-5 md:(px-4)">
              <div className="flex space-x-3">
                <Puc />
                <li>Performance optimization and proactive maintenance</li>
              </div>
              <div className="flex space-x-3">
                <Puc />
                <li>Network Operations Centre (NOC)</li>
              </div>
              <div className="flex space-x-3">
                <Puc />
                <li>Network management and automation solutions</li>
              </div>
              <div className="flex space-x-3">
                <Puc />
                <li>Network Management Services and Support</li>
              </div>
            </ul>
          </div>
          <div className="md(px-10)">
            <ul className="space-y-2 mt-5 md:(px-4)">
              <div className="flex space-x-3">
                <Puc />
                <li>Managed Wireless and LAN Services</li>
              </div>
              <div className="flex space-x-3">
                <Puc />
                <li>Managed WAN service</li>
              </div>
              <div className="flex space-x-3">
                <Puc />
                <li>Device fixes and updates</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Puce() {
  return <div className="text-4xl text-amber-400">•</div>;
}

function Puc() {
  return <div className="text-4xl text-amber-400">*</div>;
}
export default Network;
