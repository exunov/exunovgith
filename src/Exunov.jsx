import React from "react";
import Head from "./header";
import Headertop from "./headertop";
import "./contact.css";
import quote1 from "./images/Group6.png";
import Footer from "./footer";
import Slide from "./component/slider";

function Exunov() {
  return (
    <div>
      <Headertop />
      <Head />
      <Body />
      <Formulaire />
      <div className="space-y-10">
        {" "}
        <Slide />
        <Footer />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="bg-contact-img bg-cover md:(p-15)">
      <div className="text-light-100 space-y-5 p-3  md:(p-15)">
        <h1 className="text-4xl font-bold md:(text-5xl italic)">
          {" "}
          Exunov Enterprise
        </h1>
        <p className="md:(text-2xl)">
          Cybersecurity, Software Development,
          <br />
          security awareness Training
        </p>
      </div>
    </div>
  );
}

function Puce() {
  return <div className=" text-amber-400 text-xl">*</div>;
}

function Formulaire() {
  return (
    <div className="flex flex-col shadow-2xl  mt-8 border-1 rounded-2xl p-2 md:(mx-80 )">
      <form action="" className=" ">
        <h1 className="text-center font-bold text-2xl md:( mt-2 text-2xl underline) ">
          Request a quote
        </h1>

        <div className="flex flex-col space-y-3 font-semibold  justify-center items-center md:(grid grid-cols-2 p-5 gap-6 text-xl italic )">
          <div className="  mt-3">
            <label htmlFor="" className="flex ">
              Name
              <Puce />
            </label>
            <input
              type="text"
              className="rounded-2xl hover:(placeholder-light-100)  h-10 w-70 p-2 md:(h-15 w-full rounded-2xl ) "
            />
          </div>

          <div>
            <label htmlFor="" className="flex">
              Surname
              <Puce />
            </label>
            <input
              type="text"
              className="rounded-2xl hover:(placeholder-light-100)  h-10 w-70 p-2  md:(h-15 w-full )  "
            />
          </div>

          <div>
            <label htmlFor="" className="flex">
              Phone
              <Puce />
            </label>
            <input
              type="text"
              className="rounded-2xl hover:(placeholder-light-100)  h-10 w-70 p-2  md:(h-15 w-full )  "
            />
          </div>

          <div>
            <label htmlFor="" className="flex">
              Country
              <Puce />
            </label>
            <input
              type="text"
              className="rounded-2xl hover:(placeholder-light-100)  h-10 w-70 p-2  md:(h-15 w-full )  "
            />
          </div>

          <div className="">
            <label htmlFor="" className="flex">
              Message
              <Puce />
            </label>
            <textarea
              type="text"
              className="h-10 w-70 p-2   md:(h-10 w-full ) "
            />
          </div>
        </div>
      </form>
      <div className=" flex flex-col space-y-5 md:(px-10 )">
        <p className="text-semibold p-2 ">
          By submitting this form, you agree to the use of your personal data by
          exunov as described in the privacy statement.
        </p>
        <div className="space-x-5">
          {" "}
          <input
            type="checkbox"
            id=""
            name=""
            value=""
            className="h-6 w-6 mt-5"
          />
          <label for="">
            I have read the privacy policy and I authorize Exunov to send me
            information
          </label>
        </div>
        <button
          type="submit"
          className=" bg-yellow-500  text-light-900 border-2 rounded-lg h-10   hover:(bg-white text-dark-100) md:(text-3xl font-thin ml-40 w-70 h-12 ) "
        >
          Submit
        </button>
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

export default Exunov;
