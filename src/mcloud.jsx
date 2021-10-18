import React from "react";
import "./sectio.css";
import "./paragraph.css";
import { NavLink } from "react-router-dom";
import eye1 from "./images/eye1.png";
import infogérance from "./images/infogérance.png";
import iconsupport from "./images/iconsupport.png";
import admin from "./images/admin.png";
import consulting from "./images/consulting.png";
import gride2 from "./images/gride2.jpg";
import gride3 from "./images/gride3.jpg";
import grid3 from "./images/grid3.jpg";
import List from "./list";
import Headertop from "./headertop";
import Head from "./header";
import Footer from "./footer";

function Mcloud() {
  return (
    <div>
      <Headertop />
      <Head />
      <Menu />
      <Cadre />
      <Text />
      <List />
      <Bloc />
      <Footer />
    </div>
  );
}

function Menu() {
  return (
    <div>
      <div className="img md:(p-20)">
        <div className="font-bold text-white text-3xl px-10 pt-4 md:(text-5xl ) ">
          Managed
          <br /> cloud
        </div>
        <p className="text-white text-xl px-10 pt-8 md:(text-2xl)">
          We help companies of all sizes manage AWS <br /> Exunov is the
          official partner of Amazon Web Services.
          <br /> We manage all AWS services
        </p>
      </div>

      <div className=" md:(h-full) menu">
        <nav className=" ">
          <ul className="geeks  flex flex-col text-center text-white text-xl  md:(grid grid-cols-3  text-white text-4xl place-items-center ) ">
            <li>
              <NavLink
                exact
                activeClassname="active"
                to="/mcloud"
                className=" mt-1"
              >
                AWS
              </NavLink>
            </li>
            <li className="">
              <NavLink
                activeClassname="active"
                to="/azure"
                className="geeks a "
                className=" mt-1"
              >
                Azure
              </NavLink>
            </li>
            <li className="">
              <NavLink activeClassname="active" to="/office" className=" mt-1">
                Office 365
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

function Cadre() {
  return (
    <div className="flex items-center justify-center ">
      <div className="">
        <h1 className="text-2xl text-center font-bold italic pt-4 md:(text-4xl)">
          About Service
        </h1>
        <div className="mt-5 grid grid-cols-1 gap-5 place-items-stretch h-48 pt-4 md:(grid grid-cols-3 place-items-stretch h-48 gap-20  )">
          <div className="shadow-2xl border-1 rounded-2xl py-4 items-center justify-center md:(h-45 w-60  )">
            <img
              src={eye1}
              alt=""
              className="w-12 h-12 ml-30 md:(w-18 h-18 mr-20 ml-20) "
            />
            <h1 className="   text-xl font-bold p-2 text-center md:(text-2xl)">
              Assistance
            </h1>
          </div>
          <div className="shadow-2xl border-1 rounded-2xl py-4 md:(h-45 w-60)">
            <img
              src={infogérance}
              alt=""
              className="w-10 h-12 place-items-center ml-30 md:(w-18 h-18 mr-20 ml-20)"
            />
            <h1 className="   text-xl font-bold p-2 text-center md:(text-2xl)">
              Migration to the cloud
            </h1>
          </div>
          <div className="shadow-2xl border-1 rounded-2xl py-4 md:(h-45 w-60)">
            <img
              src={iconsupport}
              alt=""
              className="w-10 h-12 place-items-center ml-30 md:(w-18 h-18 mr-20 ml-20 )"
            />
            <h1 className="   text-xl font-bold p-2 text-center md:(text-2xl)">
              Technical support
            </h1>
          </div>
          <div className="shadow-2xl border-1 rounded-2xl py-4 md:(h-45 w-60)">
            <img
              src={admin}
              alt=""
              className="w-10 h-12 place-items-center ml-30 md:(w-18 h-18 mr-20 ml-20 )"
            />
            <h1 className="   text-xl font-bold p-2 text-center md:(text-2xl)">
              Administration
            </h1>
          </div>
          <div className="shadow-2xl border-1 rounded-2xl  py-4 md:(h-45 w-60)">
            <img
              src={consulting}
              alt=""
              className="w-10 h-12 justify-center ml-30 md:(w-18 h-18 mr-20 ml-20 ) "
            />
            <h1 className="   text-xl font-bold p-2 text-center md:(text-2xl)">
              Consultation on any product
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="mt-150 px-4 space-y-4    md:(space-y-10 mt-40 p-40 place-items-center font-thin ) ">
      <div className="md:(text-xl border-1 bg-gray-100 rounded-2xl shadow-2xl border-b-yellow-600 border-b-4 )">
        <p className=" px-10 py-10 text-center">
          According to analyst firm Canalys, by early 2021, AWS has taken 31% of
          the global cloud market, outpacing other hyper-scalers. The closest
          competitors are Azure (20%) and Google (7%).
        </p>
      </div>
      <div className="pt-4 md:(text-xl border-1 bg-gray-100 rounded-2xl shadow-2xl border-b-yellow-600 border-b-4 )">
        <p className=" px-10 py-10 text-center">
          AWS offers more than 200 comprehensive, fully functional services for
          all tasks. The platform allows you to build your own infrastructure
          from scratch - or use out-of-the-box solutions, reducing your IT
          expenses.
        </p>
      </div>
      <div className="pt-4 md:(text-xl border-1 bg-gray-100 rounded-2xl shadow-2xl border-b-yellow-600 border-b-4 )">
        <p className=" px-10 py-10 text-center">
          The platform provides mobile, web and business applications, data
          processing and storage, backup and other features.
        </p>
      </div>
      <div className="pt-4 md:(text-xl border-1 bg-gray-100 border-b-yellow-600 border-b-4 rounded-2xl shadow-2xl )">
        <p className=" px-10 py-10 text-center">
          AWS launches in new regions faster than competitors; it's the most
          in-demand hyper-scaler in the world. Large companies like Netflix,
          LinkedIn and Facebook choose AWS solutions.
        </p>
      </div>
    </div>
  );
}

function Bloc() {
  const items = [
    {
      image: gride2,
      text: "Microsoft MSHTML  Remote Code  Execution Vulnerability",
    },
    {
      image: gride3,
      text: "Common Cyber Insurance Coverage Exclusions",
    },
    {
      image: grid3,
      text: "Apple NSO Zero-Click  Zero-Day: Dataprise  Defense Digest",
    },
  ];
  return (
    <section>
      <div className="grid grid-cols-2 mt-6 p-2 md:(grid grid-cols-3 place-items-center)">
        {items.map((i) => (
          <>
            <div className="w-full py-2 px-4 shadow-2xl rounded-b-2xl md:(h-full)">
              <img
                src={i.image}
                alt=""
                className="rounded-t-2xl border-1 w-full"
              />
              <div className="h-2 bg-yellow-300 flex w-full" />
              <div className="p-2">
                <p className="w-full text-xl md:(p-3)">{i.text}</p>
                <a href="#">
                  <h1 className="text-yellow-400 pt-6 md:(text-xl)">Read</h1>
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}

export default Mcloud;
