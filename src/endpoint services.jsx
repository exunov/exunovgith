import React from "react";
import "./sectio.css";
import { NavLink } from "react-router-dom";
import Footer from "./footer";
import Headertop from "./headertop";
import Head from "./header";

function EndpointService() {
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
          <ul className="geeks flex flex-col  text-white text-center md:(grid grid-cols-7   text-white gap-2 justify-center items-center) ">
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
    <section>
      <div className="  space-y-8 ">
        <div className="mt-4 px-6 md:( px-60)">
          <h1 className="mt-4 text-amber-400 text-center font-bold text-xl md:(text-3xl)">
            Focus on your goals and we'll take care of your end users.
          </h1>
          <p className="space-y-4 mt-4  text-sm md:( text-xl)">
            Our people rely on these devices to help them do their best work,
            whether in the office or remotely. We ensure that their endpoint
            management technology works optimally in terms of performance,
            security, consistency and efficiency. Our endpoint management.
            technology is optimized for the best results, with zero impact on
            its end use.{" "}
          </p>
        </div>
        <div className="pt-4 px-6 md:( px-60)">
          <h1 className="mt-4 text-amber-400 text-center font-bold text-xl md:(text-3xl)">
            Remote management of terminals
          </h1>
          <p className="mt-4 text-sm  md:(text-xl)">
            With endpoint management, we can manage your environment without
            disrupting users. With proactive endpoint management, we ensure that
            your users are working with high-performance equipment and that
            technical problems are resolved remotely before your users notice
            them. In order to optimize your end users' equipment, our endpoint
            management services :{" "}
          </p>
          <ul className="list-none mt-6 space-y-4 md:(text-xl)">
            <div className="flex space-x-3">
              <Puce />
              <li className="mt-3">
                Deploy preventive software and operating system repairs on all
                end-user Windows workstations.
              </li>
            </div>
            <div className="flex space-x-3">
              <Puce />
              <li className="mt-3">
                Provides reporting and endpoint management on the status of
                relevant devices, number under management, activity status,
                patch compliance, etc.
              </li>
            </div>
            <div className=" flex space-x-3">
              <Puce />
              <li className="mt-3">
                Performs global maintenance, such as cleaning up temporary
                files, clearing the DNS cache and cleaning up Windows disks.{" "}
              </li>
            </div>
          </ul>
        </div>
        <div className=" px-6  md:(px-60)">
          <h1 className="mt-4 text-amber-400 text-center font-bold text-xl md:(text-3xl)">
            Peace of mind through patch security
          </h1>
          <p className="mt-4 font-bold text-sm  md:(text-xl)">
            Are you sure your endpoint fleet is up to date with patches?
          </p>
          <p className="mt-4 text-sm md:(text-xl)">
            With many teams adopting a hybrid environment, there is a need to
            ensure that endpoints are patched and up to date. Our endpoint
            device management solution helps protect your organization with
            patch management and ensures that your users' devices are not
            exposed to operating system vulnerabilities and potential security
            risks.{" "}
          </p>
        </div>

        <div className="space-y-2 px-6 md:(px-60)">
          <h1 className="mt-4 text-amber-400 text-center font-bold text-xl md:(text-3xl)">
            Terminal Management:
            <br /> Level 1 and Level 2 Support
          </h1>
          <p className=" text-sm md:(text-xl)  ">
            Our endpoint management solution ensures that your users have the
            support they need in the event of a problem. Our user support and
            endpoint management includes ticket-based maintenance options for
            our users' endpoints so they can get back up and running quickly and
            efficiently.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

function Puce() {
  return <div className="text-4xl text-amber-400">•</div>;
}
export default EndpointService;
