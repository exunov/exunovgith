import React from "react";
import "./mcloud.css";
import "./mcloud.css";
import Footer from "./footer";
import eye1 from "./images/eye1.png";
import installer from "./images/installer.png";
import infogérance from "./images/infogérance.png";
import iconsupport from "./images/iconsupport.png";
import admin from "./images/admin.png";
import devtesting from "./images/devtesting.jpg";
import security from "./images/infrastructuresecurity.jpg";
import desk from "./images/desskservice.jpg";
import consulting from "./images/consulting.png";
import { NavLink } from "react-router-dom";
import Headertop from "./headertop";
import Head from "./header";

function Azure() {
  return (
    <div>
      <Headertop />
      <Head />
      <Body1 />
      <Body2 />
      <Body3 />
      <Body4 />
      <Body5 />
      <Body6 />
      <Body7 />
      <Body8 />
      <div className="md:(mt-10)">
        <Footer />
      </div>
    </div>
  );
}

function Body1() {
  return (
    <div>
      <div className="img md:(p-20)">
        <h1 className="font-bold text-white text-3xl px-10 pt-4 md:(text-5xl pt-4)">
          Managed
          <br /> cloud
        </h1>
        <p className="text-white  px-10 pt-8 md:(text-2xl) ">
          We help companies of all sizes manage AWS <br /> Exunov is the
          official partner of Amazon Web Services.
          <br /> We manage all AWS services
        </p>
      </div>

      <div className=" md:(h-full) menu">
        <nav className=" ">
          <ul className="geeks flex flex-col text-center text-white text-xl  md:(grid grid-cols-3  text-white  place-items-center )  ">
            <li>
              <NavLink exact activeClassname="active" to="/mcloud">
                AWS
              </NavLink>
            </li>
            <li className="">
              <NavLink
                activeClassname="active"
                to="/azure"
                className="geeks a "
              >
                Azure
              </NavLink>
            </li>
            <li className="">
              <NavLink activeClassname="active" to="/office">
                Office 365
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

function Body2() {
  return (
    <div className="flex items-center justify-center ">
      <div className=" p-5">
        <h1 className="text-2xl text-center font-bold text-amber-400 md:(text-4xl mt-8)">
          About Service
        </h1>
        <p className="mt-4 px-6 md:(text-xl ) text-justify">
          EXUNOV is the first official Microsoft partner in Benin. We manage all
          Microsoft Azure services:
        </p>
        <div className="mt-5 grid grid-cols-1 gap-5 place-items-stretch h-48 pt-4 md:(grid grid-cols-3 place-items-stretch h-48 gap-10  )">
          <div className="shadow-2xl border-1 rounded-2xl py-4 items-center justify-center md:(h-45 w-60  )">
            <img
              src={installer}
              alt=""
              className="w-12 h-12 ml-30 md:(w-18 h-18 mr-20 ml-20) "
            />
            <h1 className="   text-xl font-bold p-2 text-center md:(text-2xl)">
              Install
            </h1>
          </div>

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
function Body3() {
  return (
    <section>
      <div className="mt-180 p-5 md:( mt-70 px-22)">
        <p className=" text-sm text-justify md:(text-xl px-50)">
          Microsoft Azure is an open and flexible cloud platform. It enables
          rapid deployment of IT infrastructures of any complexity and supports
          a wide range of applications, databases, development platforms, and
          other solutions.
        </p>
        <p className="mt-4 md:(px-50)">
          In 2019, Azure has 54 regions, which is more than any other vendor.
        </p>
      </div>
    </section>
  );
}
function Body4() {
  return (
    <div className="bg-gray-200 md:(px-50))">
      <div className="mt-4">
        <h1 className="mt-6 px-10 p-2 md:(text-2xl font-bold mt-6 p-4 px-18)">
          EXUNOV provides support for
        </h1>
      </div>
      <div className="px-2 space-y-4 font-thin md:(flex flex-row   flex items-center justify-center text-xl )">
        <div className="md(px-10 p-4)">
          <ul className="space-y-2 px-5 mt-5 p-5">
            <div className="flex space-x-3">
              <Icon />
              <li>
                Business Intelligence: to capture, store and analyze data
                efficiently
              </li>
            </div>
            <div className="flex space-x-3">
              <Icon />
              <li>
                Microsoft Identity Manager: to identify and manage account data
              </li>
            </div>
          </ul>
        </div>
        <div className="md(px-10) p-2">
          <ul className="space-y-2 px-4 md:(px-4 p-5)">
            <div className="flex space-x-3">
              <Icon />
              <li>
                Microsoft Project Server: to provide the project life cycle
              </li>
            </div>
            <div className="flex space-x-3">
              <Icon />
              <li>Microsoft System Center: manage IT services</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
function Body5() {
  return (
    <div className="mt-4 md:(px-40)">
      <div>
        <h1 className="mt-4 px-8 text-xl md:(px-14 text-2xl font-bold )">
          We Provide
        </h1>
      </div>
      <div className="mt-4 px-6 space-y-4 md:(px-15 mt-6 grid grid-cols-2 gap-6 space-x-4)">
        <div>
          <h1 className="mt-2 px-4 text-xl text-amber-400  md:(text-xl  text-amber-400 font-bold)">
            Migration and sizing, full support of the solution
          </h1>
          <p className="text-sm  mt-4 px-4 md:(text-xl) ">
            Investigate your needs, calculate the amount of computing resources
            you require and choose the configuration that best suits your needs.
            We suggest ways to balance your IT budget with changing needs as
            your business grows.
          </p>
        </div>
        <div>
          <h1 className=" px-4 text-xl text-amber-400 md:(text-2xl font-bold)">
            24/7 technical support
          </h1>
          <p className="mt-4 px-4">
            Our technical support is available 24/7.
            <br />
            We monitor the status of your system and applications and respond
            instantly to incoming user requests.
          </p>
        </div>
        <div>
          <h1 className="mt-2 px-4 text-xl text-amber-400  md:(text-2xl font-bold)">
            Optimized service package and budget
          </h1>
          <p className="mt-4 px-4">
            The budget meets the requirements and contains only the necessary
            services and resources related to the task.
            <br />
            Services are provided by qualified professionals.
          </p>
        </div>
        <div>
          <h1 className="mt-2 px-4 text-xl text-amber-400 md:(text-2xl font-bold)">
            Consultation
          </h1>
          <p className="text-sm mt-4 px-4 md:(text-xl) ">
            We will guide you through our portfolio of suppliers and prepare the
            best possible offer.
            <br />
            Describe the strengths and weaknesses of the solution you choose and
            how it meets your project needs.
          </p>
        </div>
        <div>
          <h1 className="mt-2 px-4 text-xl text-amber-400  md:(text-2xl font-bold)">
            Data backup and recovery
          </h1>
          <p className="text-sm mt-4 px-4 md:(text-xl) ">
            We offer backup and recycling services. Our data and applications
            are always available, reducing the risk of loss due to downtime
            issues.
          </p>
        </div>
        <div>
          <h1 className="mt-2 px-4 text-xl text-amber-400 md:(text-2xl font-bold)">
            Save time and money
          </h1>
          <p className="text-sm mt-4 px-4 md:(text-xl) ">
            All Azure services are available for refundable VAT payments in
            rubles. Due to different exchange rates, you do not have to pay,
            pass currency management or create a currency transaction report
            form.
          </p>
        </div>
      </div>
    </div>
  );
}

function Body6() {
  return (
    <div className="bg-gray-200">
      <div className="mt-4 md:(px-50))">
        <h1 className="text-xl px-8 font-bold p-4 md:(text-2xl px-20 mt-4)">
          Our Expertise
        </h1>
        <div className="mt-4 px-6 space-y-4 md:(px-15 mt-4 grid grid-cols-2 gap-6 space-x-4)">
          <div className="">
            <p className="mt-2 px-4 md:(px-10)">
              We have been providing managed IT services for over 10 years with
              our cloud, third party clouds and our customers. We know how to
              design a reliable and efficient architecture.
            </p>
          </div>
          <div>
            <p className=" px-4 md:(px-10) p-6">
              It manages solutions for Microsoft Azure and other major players
              in the cloud services market. We will study your needs and provide
              you with a unique and best-selling solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
function Body7() {
  return (
    <div className="md:(bg-gray-200 px-40) ">
      <h1 className="text-center px-10 text-xl font-bold text-amber-400 md:(text-2xl)">
        Our Focus Areas in Cloud Management
      </h1>
      <p className="mt-4 text-sm text-center px-6 md:(text-xl)">
        Focus on your key business issues and let us manage your cloud
        infrastructure in the following areas:
      </p>
      <div className="md:(space-y-10)">
        <h1 className="mt-4 md:(px-20 text-2xl) font-bold text-center">
          Infrastructure Services
        </h1>
        <div className=" flex flex-col px-5 justify-center items-center space-y-4 mt-5 md:(space-x-5 flex flex-row)">
          <img src={desk} alt="" className="md:(w-100) rounded-5xl w-100 " />
          <p className="mt-4 text-sm px-1 md:( mt-8 text-xl font-semibold)">
            Design and implement Azure IT infrastructure and services to provide
            24/7 support.
            <br />
            It monitors and controls system software such as storage, databases
            and development capabilities.
          </p>
        </div>
      </div>
      <div>
        <h1 className="mt-4 text-xl md:(px-20 text-2xl mt-10) font-bold text-center">
          Development and testing
        </h1>
        <div className="flex flex-col px-5 justify-center items-center space-y-4 mt-5 md:(flex flex-row space-x-5)">
          <img
            src={devtesting}
            alt=""
            className=" w-150 rounded-5xl md:(hidden)"
          />
          <p className="mt-4 text-sm px-1 md:( mt-8 text-xl font-semibold)">
            Create a development and test environment in seconds.
            <br />
            As part of your team, our specialists ensure the careful integration
            of business processes and ongoing development.
            <br />
            MS Azure cloud solution for developers:
            <ul className="list-disc list-inside mt-4 px-1 md:()">
              <li>Improve the efficiency and quality of development.</li>
              <li>Reduce development costs.</li>
              <li>Reduce development costs.</li>
            </ul>
          </p>
          <img
            src={devtesting}
            alt=""
            className="hidden md:(flex w-100 rounded-5xl)"
          />
        </div>
      </div>
      <div>
        <h1 className="mt-4 text-xl font-bold text-center md:(text-2xl mt-10 px-20)">
          Compliance with safety standards
        </h1>
        <div className="justify-center items-center  md:(flex flex-col mt-10 space-x-5)">
          <img
            src={security}
            alt=""
            className="  md:(w-100 ml-0) ml-20 rounded-full"
          />
          <p className="mt-4 text-sm px-10 md:(text-center text-justify font-semibold m-4 text-xl)">
            Ensure your infrastructure is compliant with security standards and
            implement the latest security tools. Ensure your infrastructure is
            compliant with security standards and implement the latest security
            tools.
          </p>
        </div>
      </div>
    </div>
  );
}

function Body8() {
  return (
    <div className="">
      <h1 className="mt-4 px-4 text-xl text-center font-bold md:(px-10 text-2xl )">
        Why Exunov
      </h1>
      <p>
        <ul className="list-disc text-sm list-inside mt-4 px-10 md:(text-xl text-center) ">
          <li>Optimize your quality/price/performance ratio</li>
          <li>Implement your service quality requirements via SLA</li>
          <li>Pay for services in Russian rubles and refund VAT</li>
          <li>Build an architecture adapted to your business issues</li>
        </ul>
      </p>
    </div>
  );
}
function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-amber-400 "
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
function Puce() {
  return (
    <div className=" md:( text-amber-400 text-4xl text-center mt-10 )">
      ***************************
    </div>
  );
}
export default Azure;
