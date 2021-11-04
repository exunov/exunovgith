import React from "react";
import "./sectio.css";
import Footer from "./footer";
import { NavLink } from "react-router-dom";
import Headertop from "./headertop";
import Head from "./header";

function Cyberpro() {
  return (
    <div>
      <Headertop />
      <Head />
      <Body1 />
      <Body2 />
      <Body3 />
      <Body4 />
      <Body5 />
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
          <ul className="geeks flex flex-col text-center text-white md:(grid grid-cols-4 gap-x-3 text-white text-center) ">
            <li>
              <NavLink to="/mcyber">
                Managed <br />
                Cybersecurity
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/mdetection">Managed Detection and Response</NavLink>
            </li>
            <li className="">
              <NavLink
                to="/cyberpro"
                exact
                activeClassname="active"
                className=" geeks a"
              >
                Cyber Program
                <br /> Management
              </NavLink>
            </li>
            <li className="">
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
        <h1 className="text-xl font-bold text-amber-400 text-center md:(text-2xl)">
          Your most powerful tool against cyber attacks is foresight
        </h1>
        <p className="px-4 mt-6 text-sm md:(px-40 text-center text-xl)">
          Security is at the heart of your organization's technological
          advancements, but it is also the most complex and invisible.
          SonicWall's annual report identified 74,290 novel attacks in 2019;
          variants so new, unique and complex that they had no signature at the
          time of discovery and included the detection of multiple side-channel
          attacks. To address evolving and emerging cyber threats, an
          organization must ensure that it has core cyber capabilities in place
          that protect against current threats now, while investing in
          higher-level capabilities to protect against threats that may emerge
          in the future.
        </p>
      </div>
    </div>
  );
}
function Body3() {
  return (
    <div>
      <div className="mt-4 bg-gray-100">
        <h1 className="text-xl font-bold text-amber-400 text-center  md:(text-2xl) mt-2 p-5">
          Creating cybersecurity programs from scratch is an overwhelming task.
        </h1>
        <p className="px-4 text-sm  md:(px-40 text-center p-6 text-xl)">
          With cybersecurity programs, it's not easy to know where to start.
          Understanding the threats you face and gaining the knowledge to combat
          them is not easy, and assembling a team with the requisite knowledge
          is expensive. Even with the necessary time and resources, there is a
          significant gap between the security industry and the ability to
          recruit and identify a cybersecurity expert to develop and maintain a
          full-time security program.
        </p>
      </div>
    </div>
  );
}
function Body4() {
  return (
    <section>
      <div>
        <h1 className="text-xl font-bold text-amber-400 text-center  md:(text-2xl) mt-2 p-5">
          Threats to watch out for in 2021
        </h1>
        <p className="px-5 text-sm md:(text-center p-6 text-xl)">
          We don't have a crystal ball, but here are four cybersecurity threats
          to watch for in the new year.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 p-8  md:(grid grid-cols-1 place-items-center p-10 gap-4)">
        <div className=" bg-gray-100   py-4 px-10 shadow-2xl rounded-b-2xl md:(h-full)">
          <h1 className="text-center font-bold md:(text-2xl ) text-amber-400">
            Exploitation of remote work
          </h1>
        </div>
        <div className=" bg-gray-100  py-4 px-4 shadow-2xl rounded-b-2xl md:(h-full)">
          <h1 className="text-center font-bold md:(text-2xl) text-amber-400">
            Exploitation of ineffective cyber hygiene
          </h1>
        </div>
        <div className=" bg-gray-100  py-4 px-4 shadow-2xl rounded-b-2xl md:(h-full)">
          <h1 className="text-center font-bold text-amber-400 md:(text-2xl)">
            Ransomware
          </h1>
        </div>
        <div className=" bg-gray-100  py-4 px-4 shadow-2xl rounded-b-2xl md:(h-full)">
          <h1 className="text-center font-bold text-amber-400 md:(text-2xl)">
            Increased exposure of cloud data
          </h1>
        </div>
      </div>
    </section>
  );
}
function Body5() {
  return (
    <section className=" bg-gray-200 mt-4 md:(grid grid-cols-2 gap-4)">
      <div className="border-t-10 p-4 border-amber-700 mt-4">
        <div className="px-6 ">
          <h1 className="font-bold text-xl text-center mt-4 md:(text-2xl)">
            What Exunov's Cyber program management brings to you
          </h1>
          <p className="mt-4 px-4 text-justify text-sm md:(text-xl)">
            Effective cybersecurity begins with board members and senior
            executives recognizing that at some point the company will be
            attacked. Companies need to understand the most significant threats
            and how they can put their core mission assets at risk.
            Cybersecurity program management was designed with the premise that
            CISOs are under pressure to align cybersecurity programs with
            business needs, reduce risk, and report to their executive peers and
            the board of directors on program development and the impact of
            investments.
          </p>
        </div>
        <div className="px-6 mt-4 ">
          <h2 className="text-amber-400 font-bold text-xl text-center mt-4">
            Evaluation of the cybersecurity model
          </h2>
          <p className="mt-4 px-4 text-sm md:(text-xl) ">
            Get a complete understanding of your environmental risk exposure
            with measurable scores, executive-level reports and recommendations
            for achieving a higher level of safety maturity.
          </p>
        </div>
        <div className="px-6 mt-4 ">
          <h2 className="text-amber-400 font-bold text-xl text-center mt-4">
            Firewall audit
          </h2>
          <p className="mt-4 px-4 text-sm md:(text-xl)">
            Leverage Exunov's deep network knowledge to improve firewall
            performance and mitigate risk.
          </p>
        </div>
        <div className="px-6 mt-4 ">
          <h2 className="text-amber-400 font-bold text-xl text-center mt-4">
            Virtual CISO Consultation Hours (vCISO)
          </h2>
          <p className="mt-4 px-4 text-sm md:(text-xl)">
            Exunov offers a compelling virtual CISO service that draws customers
            into a tightly regulated environment without the resources to create
            their own security team.
          </p>
        </div>
        <div className="px-6 mt-4 ">
          <h2 className="text-amber-400 text-xl font-bold text-center mt-4">
            Assessment of regulatory compliance
          </h2>
          <p className="mt-4 px-4 text-sm md:(text-xl)">
            Improve compliance through assessments that strategically close the
            gap between the current environment and what is needed.
          </p>
        </div>
        <div className="px-6 mt-4 ">
          <h2 className="text-amber-400 text-xl font-bold text-center mt-4">
            Safety training for end users
          </h2>
          <p className="mt-4 px-4  text-sm md:(text-xl)">
            We provide up-to-date employee training with engaging and digestible
            content. The most important training topics in general include
            password management, privacy, email/phishing security, web/internet
            security, physical security and office security.
          </p>
        </div>
        <div className="px-6 mt-4 ">
          <h2 className="text-amber-400 text-xl font-bold text-center mt-4">
            Phishing email simulations
          </h2>
          <p className="mt-4 px-4 text-sm md:(text-xl)">
            Exunov provides phishing security tests (PST) programmed from a
            comprehensive library of over 5,000 known and working templates.
          </p>
        </div>
        <div className="mt-4 px-6 ">
          <h2 className="text-amber-400 text-xl font-bold text-center mt-4">
            Transparency + Ownership
          </h2>
          <p className="mt-4 px-4 text-sm md:(text-xl)">
            Unlike many software providers, you own the data. This means that
            customers have the autonomy to move their data without losing their
            security records, whether they decide to move internally or to
            another software management provider.
          </p>
        </div>
        <div className="mt-4 px-6 ">
          <h2 className="text-amber-400 text-xl font-bold text-center mt-4">
            Automated measurement and reporting at the management level
          </h2>
          <p className="mt-4 px-4 text-sm md:(text-xl)">
            Executive-level reports on cyber program management and security
            measures are automatically provided.
          </p>
        </div>
        <div className="mt-4 px-6 ">
          <h2 className="text-amber-400 text-xl font-bold text-center mt-4">
            Reciprocity with other services
          </h2>
          <p className="mt-4 px-4 text-sm md:(text-xl)">
            It complements Exunov's other cybersecurity services, such as
            managed detection and response and ongoing vulnerability management.{" "}
          </p>
        </div>
      </div>
      <div className=" mt-4">
        <div className="px-6">
          <h1 className="font-bold text-xl text-center mt-4 md:(text-3xl)">
            Security
          </h1>
          <h2 className="font-bold text-xl text-center mt-4">
            The best safety certifications
          </h2>
          <p className="mt-4 px-4 text-sm md:(text-xl)">
            Exunov's cybersecurity team is composed of experienced and certified
            analysts and technicians to ensure the protection of your company's
            data and networks.
          </p>
          <div>
            <h2 className="font-bold text-xl text-center mt-4">
              Assessment and Roadmap Services
            </h2>
            <p className="mt-4 px-4 text-sm md:(text-xl)">
              Cyber program management can help cybersecurity professionals
              develop a set of policies, tools, and procedures to systematically
              manage the risks and responses of an organization's sensitive
              data, networks, and applications.
            </p>
          </div>
        </div>
        <div className="px-6 ">
          <h2 className="font-bold text-xl text-center mt-4 md:(text-xl)">
            Our security certificate
          </h2>
          <ul className="list-disc mt-4 px-6">
            <li>GIAC Certified Intrusion Analyst (GCIA)</li>
            <li>
              Certified Information Systems Security Professional ISC2 (CISSP)
            </li>
            <li>
              Operations Scientist and GIAC Advanced Penetration Tester (GXPN)
            </li>
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
export default Cyberpro;
