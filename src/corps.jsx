import React from "react";
import part1 from "./images/Fortinet.png";
import part2 from "./images/syntrology.png";
import part3 from "./images/techwins.png";
import part4 from "./images/blackberry.png";
import part5 from "./images/Falcongaze.jpg";
import part6 from "./images/Inetum.png";
import part7 from "./images/secureDigitale.png";
import part8 from "./images/AWS.png";
import part9 from "./images/awssecurity.jpg";
import part10 from "./images/devOps.png";
import part11 from "./images/MCSA_logo.png";
import part12 from "./images/ccna_2.png";
import part13 from "./images/CCNP_2.png";
import part14 from "./images/cisa.png";
import part15 from "./images/CISM.png";
import part16 from "./images/iso27005.png";
import part17 from "./images/iso.png";
import part18 from "./images/ns1.jpg";
import part19 from "./images/ns2.jpg";
import part20 from "./images/ns3.png";
import part21 from "./images/ns4.png";
import part22 from "./images/nse_5.png";
import part23 from "./images/ns6.png";
import part24 from "./images/itil4.png";
import part25 from "./images/prince2.png";
import part26 from "./images/pmp.png";
import part27 from "./images/ceh_2.png";
import part28 from "./images/CHFI.png";
import "./slider.css";

function Slide() {
  return (
    <div>
      <Parteners />
    </div>
  );
}

function Parteners() {
  return (
    <div className="mt-10 space-y-6 ">
      <div className="  ">
        <h1 className=" font-bold text-center text-3xl">Our Certification</h1>
        <Certification />
      </div>
      <div className=" ">
        <h2 className="font-bold text-center text-3xl">Our Parteners</h2>
        <Corps />
      </div>
    </div>
  );
}

function Corps() {
  return (
    <div className=" slider">
      <div className=" slide-track ">
        <div className=" slide ">
          {" "}
          <img src={part1} alt="" />
        </div>
        <div className=" slide ">
          {" "}
          <img src={part2} alt="" />
        </div>
        <div className=" slide ">
          {" "}
          <img src={part3} alt="" />
        </div>
        <div className=" slide ">
          {" "}
          <img src={part4} alt="" />
        </div>

        <div className=" slide ">
          {" "}
          <img src={part5} alt="" />
        </div>

        <div className=" slide ">
          {" "}
          <img src={part6} alt="" />
        </div>
        <div className=" slide ">
          {" "}
          <img src={part7} alt="" />
        </div>
      </div>
    </div>
  );
}

function Certification() {
  return (
    <div className=" slider">
      <div className=" slide-track ">
        <div className=" slide ">
          {" "}
          <img src={part8} alt="" />
        </div>
        <div className=" slide ">
          {" "}
          <img src={part9} alt="" />
        </div>
        <div className=" slide ">
          {" "}
          <img src={part10} alt="" />
        </div>
        <div className=" slide ">
          {" "}
          <img src={part11} alt="" />
        </div>

        <div className=" slide ">
          {" "}
          <img src={part12} alt="" />
        </div>

        <div className=" slide ">
          {" "}
          <img src={part13} alt="" />
        </div>
        <div className=" slide ">
          {" "}
          <img src={part14} alt="" />
        </div>

        <div className=" slide ">
          {" "}
          <img src={part15} alt="" />
        </div>

        <div className=" slide ">
          {" "}
          <img src={part16} alt="" />
        </div>

        <div className=" slide ">
          {" "}
          <img src={part17} alt="" />
        </div>

        <div className=" slide ">
          {" "}
          <img src={part18} alt="" />
        </div>

        <div className=" slide ">
          {" "}
          <img src={part19} alt="" />
        </div>

        <div className=" slide ">
          {" "}
          <img src={part20} alt="" />
        </div>

        <div className=" slide ">
          {" "}
          <img src={part21} alt="" />
        </div>

        <div className=" slide ">
          {" "}
          <img src={part22} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Slide;
