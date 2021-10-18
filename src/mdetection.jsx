import React from "react";
import "./sectio.css";
import Footer from "./footer";
import image from "./images/image.jpg";
import { NavLink } from "react-router-dom";
import Headertop from "./headertop";
import Head from "./header";

function Mdetection() {
  return (
    <div>
      <Headertop />
      <Head />
      <div className="text-justify">
        <Body1 />
        <Body2 />
        <Body3 />
        <Body4 />
        <Body5 />
        <Body6 />
        <Body7 />
      </div>

      <Footer />
    </div>
  );
}

function Body1() {
  return (
    <section>
      <div className="head"></div>
      <div className="md:(h-full) menu ">
        <nav className=" ">
          <ul className="geeks flex flex-col  text-white text-center md:(grid grid-cols-4 gap-x-3 text-white text-xl) ">
            <li>
              <NavLink to="/mcyber" className="">
                Managed
                <br /> Cybersecurity
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassname="active"
                to="/mdetection"
                className=" geeks a"
              >
                Managed Detection and Response
              </NavLink>
            </li>
            <li>
              <NavLink to="/cyberpro">
                Cyber Program
                <br /> Management
              </NavLink>
            </li>
            <li>
              <NavLink to="/cvm">Continue Vulnerabilities Management</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
function Body2() {
  return (
    <div>
      <div className="mt-4">
        <h1 className="text-xl font-bold text-amber-400 text-center md:(text-3xl) ">
          Full threat visibility is the only guarantee against cyber risk
        </h1>
        <p className="px-4 mt-2 text-sm md:(px-40 text-center text-xl)">
          The threat is real, and the stakes are high for your company. CISOs
          everywhere are on high alert to keep their systems and physical
          infrastructure running smoothly. Security managers need high
          visibility into their environments to help them detect, investigate
          and respond to threats.
        </p>
      </div>
    </div>
  );
}

function Body3() {
  return (
    <div>
      <div className="mt-4 bg-gray-100">
        <h1 className="text-xl md:(text-3xl) font-bold text-amber-400 text-center mt-2 p-5">
          The volume of data to be monitored is unimaginable.
        </h1>
        <p className="px-4 text-sm p-4 md:(px-40 text-center text-xl p-6)">
          The amount of information available today makes detection or
          remediation nearly impossible. While some technology is used today,
          detection and response services in most cases require the constant
          presence of humans to monitor the state of the network. Yet, the
          NationalCybersecurityEducation Initiative reported that as of January
          2019, the U.S. faces a shortage of approximately 314,000 cybersecurity
          professionals, exposing companies to a debilitating shortage of cyber
          response talent.
        </p>
      </div>
    </div>
  );
}
function Body4() {
  return (
    <div className="mt-6">
      <h1 className="text-center text-xl md:(text-2xl) font-bold text-amber-400 ">
        It's 3:00 in the morning. Who's watching your assets?
      </h1>
      <ul className="list-disc list-inside px-6 mt-4  md:(text-center)">
        <li className="">
          Are security measures in place to detect security breaches before they
          occur?
        </li>
        <li className="">
          Is real-time information collected on security events in your network?{" "}
        </li>
        <li className="">
          Is the amount of logs and alerts induced by the systems difficult to
          manage?{" "}
        </li>
        <li className="">
          Are security management expenses difficult to manage?{" "}
        </li>
      </ul>
    </div>
  );
}
function Body5() {
  return (
    <section className=" bg-gray-200 mt-4 md:(grid grid-cols-2 gap-4)">
      <div className="border-t-20 p-4 border-amber-700 mt-4">
        <div className="px-6 ">
          <h1 className="font-bold text-xl md:(text-3xl) text-center mt-4">
            What you can do with Exunov's managed discovery and response
            services
          </h1>
          <p className="mt-4 px-4 text-sm md:(text-xl)">
            Managed discovery and response services provide threat detection,
            security incident reporting, and cyber response by monitoring
            security system events and logs in real time. It monitors your
            infrastructure and provides detailed analysis and alerts related to
            a global catalog of known and emerging security threats.
          </p>
        </div>
        <div className="px-6 mt-4 ">
          <h2 className="text-amber-400 font-bold text-xl md:(text-3xl) text-center mt-4">
            End separation
          </h2>
          <p className="mt-4 px-4 text-sm md:(text-xl)">
            Exunov's Security Operations Center (SOC) uses this cybersecurity
            technology to isolate at-risk endpoints from the rest of the
            network, effectively eliminate threats, take corrective action and
            investigate processes. It solves security problems while reducing
            lateral movement and data intrusions.
          </p>
        </div>
        <div className="px-6 mt-4  ">
          <h2 className="text-amber-400 font-bold text-xl md:(text-3xl) text-center mt-4">
            Access control to removable media
          </h2>
          <p className="mt-4 px-4  text-sm md:(text-xl)">
            Gain peace of mind by preventing unauthorized removable media from
            being attached to your organization's assets.
          </p>
        </div>
        <div className="px-6 mt-4 ">
          <h2 className="text-amber-400 font-bold text-xl md:(text-3xl) text-center mt-4">
            Endpoint Encryption
          </h2>
          <p className="mt-4 px-4  text-sm md:(text-xl)">
            The multi-layer protection includes the ability to lock the end
            points for added security.
          </p>
        </div>
        <div className="px-6 mt-4 ">
          <h2 className="text-amber-400 text-xl md:(text-3xl) font-bold text-center mt-4">
            24x7x365 monitoring, visitor detection, validation and reporting
          </h2>
          <p className="mt-4 px-4  text-sm md:(text-xl)">
            Protect yourself from global threats with the collective experience
            of a recognized security group that monitors daily.
          </p>
        </div>
        <div className="px-6 mt-4 ">
          <h2 className="text-amber-400 text-xl md:(text-3xl) font-bold text-center mt-4">
            Detection of security incidents on managed terminals
          </h2>
          <p className="mt-4 px-4  text-sm md:(text-xl)">
            Using our new endpoint generation client with Endpoint Detection and
            Response (EDR), 24x7x365 database to identify, validate and report
            security incidents for our customers.
          </p>
        </div>
        <div className="px-6 mt-4 ">
          <h2 className="text-amber-400 text-xl font-bold  md:(text-3xl) text-center mt-4">
            Siem and advanced correlation
          </h2>
          <p className="mt-4 px-4   text-sm md:(text-xl) ">
            Exunov's advanced information and event management (SIEM) assessment
            and correlation adds management, correlation and detection of
            additional log sources. Correlation of additional security log data
            provide visibility and information used to identify security
            incidents in the customer environment.
          </p>
        </div>
        <div className="mt-4 px-6  ">
          <h2 className="text-amber-400 text-xl font-bold  md:(text-3xl) text-center mt-4">
            Preparation of personal incident manuals
          </h2>
          <p className="mt-4 px-4  text-sm md:(text-xl)">
            As part of our managed detection and response services, a personal
            incident manual is obtained to help your team prepare for and manage
            incidents without losing the critical step. Proactive Threat
            Scanning: Our low-title detection process includes an ongoing
            proactive threat scan conducted by the human security team. Incident
            Response (Automated Cyber Response and Remote Control) More than
            just advice, our cyber response services have the ability to contain
            and repair an identified security incident. Malware Removal Malware
            removal from the data uplink is returned to the infected endpoint
            client, reducing disruption and ensuring continued productivity in
            the workplace.Developing an Incident Response (IR){" "}
          </p>

          <p className="mt-4 px-2  text-sm md:(text-xl)">
            Plan Implementing the IR plan is an essential component of a
            successful security program and is an important step in security.
            Reciprocity with other services. Other comprehensive cyber services
            in the database, such as cyber program management and ongoing
            vulnerability management.{" "}
          </p>
        </div>
      </div>
      <div className="border-t-20 border-amber-700 mt-4">
        <div className="px-6">
          <h1 className="font-bold text-2xl text-center mt-4">SIEM</h1>
          <p className="mt-4 px-4  text-sm md:(text-xl)">
            Exunov key's IT security management uses security information and
            event management (SIEM) tools to provide real-time IT security
            monitoring and alerting services. Our SIEM tools are more
            comprehensive than traditional monitoring tools and are risk
            management, monitoring and intelligence gathering engines. This
            cyber response tool compares activity in your IT environment to
            baselines established by threats around the world. The IT security
            management capabilities of SIEM tools include installing,
            configuring, and monitoring the status/availability of hardware or
            software that provides security controls.
          </p>
          <p className="mt-4 px-4  text-sm md:(text-xl)">
            Additional information security risk management capabilities are
            available to your organization through the Integrated Security
            Management platform:{" "}
          </p>
          <ul className="list-disc mt-4 px-6">
            <li>Centralized log management</li>
            <li>Office 365 Monitoring</li>
            <li>Threat Information</li>
            <li>Correlation engine</li>
            <li>Anomaly detection</li>
            <li>Cloud Application Monitoring</li>
          </ul>
        </div>
        <div className="px-6 ">
          <h2 className="font-bold text-xl text-center mt-4">
            Our security certificate
          </h2>
          <p className="mt-4 px-4  text-sm md:(text-xl)">
            CISOs are under pressure to adapt enterprise cybersecurity programs,
            mitigate risks, and report the impact of program development and
            investment to executives and the board of directors.
          </p>
          <ul className="list-disc mt-4 px-6 md:(text-xl)">
            <li>GIAC Certified Intrusion Analyst (GCIA)</li>
            <li>
              ISC2 Certified Information Systems Security Professional (CISSP)
            </li>
            <li>GIAC Advanced Exploit Finder and Penetration Tester (GXPN)</li>
            <li>ISACA Certified Information Systems Manager (CISM)</li>
            <li>
              ISACA Certificate in Risk and Information Systems Control (CRISC)
            </li>
            <li>Sophos Certified Engineer</li>
            <li>GIAC Penetration Tester (GPEN)</li>
            <li>Certified Ethical Hacker (CEH)</li>
            <li>Certificate of Cloud Security Knowledge (CCSK)</li>
            <li>CompTIA Advanced Security Practitioner (CASP)</li>
            <li>GIAC Strategic Planning, Policy and Leadership (SPLM)</li>
            <li>IBM Certified Associate Analyst - QRadar Security</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
function Body6() {
  return (
    <div className=" bg-gray-200 flex flex-col md:(p-10 bg-gray-200)">
      <div className=" mt-4   md:(px-40 flex flex-row  mt-6 )">
        <img src={image} alt="" className="md:( float-right w-full) w-full" />

        <div className="">
          <h1 className="text-3xl font-bold text-center mt-2">
            Your team covers what it can, but there are gaps.
          </h1>
          <p className="px-4 text-sm p-4 md:( text-justify text-xl p-6)">
            Strategic decision making, monitoring and IT team support, but in
            today's complex IT environment, you don't have enough time, team
            members or budget to provide complete coverage. Our managed
            monitoring and response services use our 24/7 security operations
            center to keep your business safe around the clock. A team of
            GIAC-certified Intrusion Analysts (GCIA) perform real-time analysis
            and validation of logs and network traffic. Our IT security
            monitoring helps organizations validate alarms and follow
            appropriate cyber response procedures in the event of an incident.
            Exunov's IT security monitoring services protect your IT
            infrastructure by detecting security threats in real time.
          </p>
        </div>
      </div>
    </div>
  );
}
function Body7() {
  return (
    <div className="bg-gray-100 p-4  ">
      <div className="md:(px-10  mt-2)">
        <h1 className="mt-4 px-8 text-center   text-2xl font-bold ">
          Monitoring of Dark Web credentials
        </h1>
        <p className="mt-3 text-sm  md:(text-xl px-40 text-justify) ">
          Exunov's managed tracking and response services include dark web
          credential
          <br /> monitoring, which detects dark web credentials in real time and
          notifies you immediately when critical ssets are compromised before
          they are used for theft. Identity, data breaches or other crimes.
          Identity protection is animportant part of cyber response and
          information security management.
        </p>
      </div>
    </div>
  );
}
export default Mdetection;
