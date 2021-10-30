import React from "react";
import Head from "./header";
import Headertop from "./headertop";
import dataloss from "./images/dataloss.png";
import black from "./images/black.png";
import black1 from "./images/black1.jpg";
import fortigate from "./images/fortigate.png";
import zero from "./images/zero.png";
import sd from "./images/SDWAN.png";
import quote1 from "./images/Group6.png";
import Footer from "./footer";
import "./back.css";

function Product() {
  return (
    <div>
      <Headertop />
      <Head />
      <Body />
      <Body2 />
      <Cadrechild />
      <Footer />
    </div>
  );
}

function Body() {
  return (
    <div className="product md:(p-40 h-120) ">
      <div className="space-y-5">
        <h1 className="font-bold text-light-200 md:(text-5xl) ">Product</h1>
        <p className=" md:(text-3xl text-light-100)  hover:text-black">
          We present our product through
          <br />
          our partners
        </p>
      </div>
    </div>
  );
}

function Body2() {
  return (
    <div className="flex flex-col  md:(px-40 mt-5) ">
      <h1 className="font-bold text-center md:(text-4xl)">Our Product</h1>
      <div className="justify-center items-center p-10">
        <div className="flex flex-col space-y-3">
          <h2 className=" font-bold md:(text-3xl)">Falcongaze Secure Tower </h2>
          <div className="flex flex-col  border-b-4 border-b-yellow-600 md:(flex flex-row  space-x-5) ">
            <img
              src={dataloss}
              alt=""
              className="h-80 w-full md:(w-100 h-100 py-5) "
            />
            <p className="p-2 text-sm md:(text-xl py-20  font-thin font-semibold)">
              {" "}
              A Data Leak Prevention (DLP) system is a system that that prevents
              confidential information from leaking out of from leaking from the
              company's internal network. SecureTower is a 2-in-1 system (Data
              Leak Prevention and User Activity Control).
            </p>
          </div>

          <h2 className=" font-bold md:(text-3xl)">UES BlackBerry </h2>
          <div className="flex flex-col  border-b-4 border-b-yellow-600 md:(flex flex-row  space-x-5) ">
            <img
              src={black}
              alt=""
              className="h-80 w-full md:(w-100 h-100 py-5) "
            />
            <p className="p-2 text-sm md:(text-xl py-20 font-thin font-semibold)">
              {" "}
              it allows you to protect your organization with a modern modern
              Unified Endpoint Security (UES) solution. Our end-to-end approach
              to cybersecurity is deeply rooted in Cylance's artificial
              intelligence (AI) and machine (AI) and machine learning (ML),
              providing enhanced visibility and visibility and protection
              against current and future cyber threats
            </p>
          </div>
          <h2 className=" font-bold md:(text-3xl)">Fortigate</h2>
          <div className="flex flex-col  border-b-4 border-b-yellow-600 md:(flex flex-row  space-x-5) ">
            <p className="p-2 text-sm md:(text-xl py-20 font-thin font-semibold)">
              {" "}
              FortiGate next-generation firewalls accompany the digital
              transformation of companies by protecting all network edges and
              applications and applications, increasing operational efficiency
              efficiency, automating workflows and ensuring a high level of
              workflows, and ensuring a high level of security and and threat
              protection.
            </p>

            <img
              src={fortigate}
              alt=""
              className="h-80 w-full md:(w-100 h-100 py-5) "
            />
          </div>

          <h2 className=" font-bold md:(text-3xl)">UEM </h2>
          <div className="flex flex-col  border-b-4 border-b-yellow-600 md:(flex flex-row  space-x-5) ">
            <p className="p-2 text-sm md:(text-xl py-20 font-thin font-semibold)">
              {" "}
              BlackBerry UEM securely enables the Internet of Things with
              complete endpoint management and policy control for your control
              for your diverse and growing fleet of devices and devices and
              applications. With its single management console and reliable
              end-to-end security. BlackBerry UEM provides flexibility and
              security to keep your employees connected and protected so they
              can work from virtually any device, anywhere
            </p>

            <img
              src={black1}
              alt=""
              className="h-80 w-full md:(w-100 h-100 py-5) "
            />
          </div>
          <h2 className=" font-bold md:(text-3xl)">SD WAN </h2>
          <div className="flex flex-col  border-b-4 border-b-yellow-600 md:(flex flex-row  space-x-5) ">
            <img
              src={sd}
              alt=""
              className="h-80 w-full md:(w-100 h-100 py-5) "
            />
            <p className="p-2 text-sm md:(text-xl py-20 font-thin font-semibold)">
              {" "}
              An SD-WAN solution connects users to to applications deployed in
              the data center or in the cloud. The SD-WAN intelligently
              determines which routing provides the best performance for a
              specific application. Traffic is then routed through the ideal WAN
              path. Traditional WANs, on the other hand have no choice but to
              route application traffic application traffic via MPLS links.
            </p>
          </div>
          <h2 className=" font-bold md:(text-3xl)">ZERO-Trust </h2>
          <div className="flex flex-col  border-b-4 border-b-yellow-600 md:(flex flex-row  space-x-5) ">
            <p className="p-2 text-sm md:(text-xl text-left py-20  font-thin font-semibold)">
              {" "}
              Zero Trust is a network security philosophy that states that no
              one inside or outside the network should be trusted unless their
              identification has been carefully verified. Zero trust operates on
              the assumption that threats both outside and inside the network
              are a pervasive factor. Zero trust also assumes that every attempt
              to access to the network or an application is a threat.
            </p>

            <img
              src={zero}
              alt=""
              className="h-80 w-full md:(w-100 h-100 text-right py-5) "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Cadrechild() {
  return (
    <div className="bg-Group9-img bg-cover w-full h-full md:(h-100 mt-8  place-items-center transform transition-all hover:(  translate-y-10) ) ">
      <div className="md:()">
        <img src={quote1} alt="" className="w-full p-2 md:(h-100 px-40   )" />
      </div>
    </div>
  );
}

export default Product;
