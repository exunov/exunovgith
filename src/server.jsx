import React from "react";
import "./sectio.css";
import { NavLink } from "react-router-dom";
import Footer from "./footer";
import im1 from "./images/im1.png";
import im2 from "./images/im2.png";
import im3 from "./images/im3.png";
import Headertop from "./headertop";
import Head from "./header";
function Principale() {
  return (
    <div>
      <Headertop />
      <Head />
      <Menu />
      <Body />
      <BodyB />
      <BodyC />
      <Footer />
    </div>
  );
}

function Menu() {
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
              <NavLink exact activeClassname="active" to="/server">
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

function Body() {
  return (
    <section>
      <div className=" mt-4">
        <div className="grid grid-cols-1  md:(flex-col items-center justify-center mt-4)">
          <div className=" md:(text-xl ) space-y-4">
            <h1 className="text-center text-amber-400 font-bold text-xl md:(mt-2 px-4 text-3xl)">
              Managed Servers: Scale your servers today. Conquer tomorrow's
              businesses.
            </h1>
            <p className="px-6 text-sm mt-4 md:(px-60 text-xl)">
              Harness the power of a secure, highly available server management
              infrastructure as part of your organization's digital
              transformation journey and achieve maximum performance while
              reducing your monthly costs.
            </p>
          </div>
          <div className="bg-gray-100 mt-6 md:(text-xl py-2)space-y-2">
            <h1 className="text-center font-bold text-amber-400 text-xl mt-2 md:(mt-2 px-8 text-3xl) ">
              Managed servers offer lower costs,
              <br /> greater agility and ongoing stability.
            </h1>
            <p className=" mt-4 p-5 text-sm md:(px-60 text-xl )">
              The server management industry has witnessed a robust growth rate
              in the previous decade and is expected to grow significantly in
              the coming decades. Hence, it is essential to identify all the
              investment opportunities, upcoming market threats, limiting
              factors, challenges, market dynamics, and technological
              advancements to strengthen the presence in the server management
              platform industries. With Exunov Server Management, we will
              evaluate your current and future IT investments, application
              usage, and short and long term goals to see how our server
              management solutions can help the business move forward. Our
              server management strategy and readiness solution provides you
              with a consistent and interpretable set of APIs, clouds, and "buy"
              versus "build". We'll help you understand the changes you need to
              make to your existing systems to integrate with new technologies
              and compare your current managed server environment to a
              world-class standard. .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
function BodyB() {
  return (
    <div className="space-y-4 mt-4">
      <h1 className=" space-y-4 text-center text-amber-400  font-bold text-xl md:(mt-2 px-4 text-3xl)">
        Why server management is important:
      </h1>

      <div className="text-center text-xl">Being offline costs:</div>
      <div className="p-2 mt-4 space-x-6 border-b-4 md:(py-15 mx-20 px-50)">
        <div className="px-8 md:(float-right)">
          <img src={im1} alt="" />
        </div>

        <div className="ml-8 md:(pt-20) ">
          <h1 className="text-2xl font-bold mt-2">Productivity</h1>
          <p className="mt-4 text-sm font-semibold md:(text-xl)">
            Every minute counts when it comes to measuring employee performance
          </p>
        </div>
      </div>
      <div className="p-2 space-x-10 border-b-4 md:( py-15 mx-20 px-50)">
        <div className="px-8 md:(float-left)">
          <img src={im2} alt="" />
        </div>

        <div className="ml-8 md:(pt-20 mml-10) ">
          <h1 className="text-2xl font-bold mt-2">Time</h1>
          <p className="mt-4 text-sm font-semibold md:(text-xl)">
            Server downtime causes more disruption and frustration. It takes
            time to get back to normal.
          </p>
        </div>
      </div>
      <div className="p-2 mt-4 space-x-6 border-b-4 md:(py-15 mx-20 px-50)">
        <div className="px-8 md:(float-right)">
          <img src={im3} alt="" />
        </div>

        <div className="ml-8 md:(pt-20) ">
          <h1 className="text-2xl font-bold mt-2">Productivity</h1>
          <p className="mt-4 text-sm font-semibold md:(text-xl)">
            Every minute counts when it comes to measuring employee performance
          </p>
        </div>
      </div>
    </div>
  );
}
function BodyC() {
  return (


    
    <section>
      <div className="mt-8 md:(mt-20 px-50 py-5) bg-amber-800 text-white space-y-2">
        <h1 className="space-y-4 text-center text-amber-300  font-bold text-xl md:(mt-2 px-4 text-3xl)">
          Our managed server solutions
        </h1>
        <p className="px-4 md:(text-2xl font-semibold mx-10)">
          Save time for strategic planning by relying on Exunov's server
          management to monitor and manage your infrastructure. We distinguish :
        </p>
        <ul className="list-disc list-inside text-white px-15 p-5  md:(text-2xl italic font-thin mx-20)">
          <li>24x7x365 monitoring and alerting</li>
          <li>Correction and support</li>
          <li>Inventory/Asset Report</li>
          <li>Operating system fixes and updates</li>
          <li>Performance optimization and proactive maintenance</li>
          <li>Virtual environment management</li>
          <li>Management of cloud computing platforms</li>
        </ul>
      </div>
    </section>
  );
}

export default Principale;
