import React from "react";
import Head from "./header";
import Headertop from "./headertop";
import "./contact.css";
import quote1 from "./images/Group6.png";
import Footer from "./footer";

function Contactus() {
  return (
    <div>
      <Headertop />
      <Head />
      <Body />
      <Formulaire />
      <Body1 />
      <Body2 />
      <Cadrechild />
      <Footer />
    </div>
  );
}

function Body() {
  return (
    <div className="bg-contact-img bg-cover md:(py-5)">
      <div className="text-light-100 space-y-5 p-3  md:(p-15)">
        <h1 className="text-4xl font-bold md:(text-5xl)"> Contact</h1>
        <p className="md:(text-2xl)">
          Let us know what you need, <br />
          and our team will contact you as soon as possible.
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
    <div className="flex flex-col shadow-2xl  bg-yellow-800 mt-8 border-1 rounded-2xl p-2 md:(mx-80 )">
      <form action="" className=" ">
        <h1 className="text-center text-light-100 font-bold text-2xl md:( text-3xl underline) ">
          Started
        </h1>

        <div className="flex flex-col space-y-3  justify-center items-center md:(grid grid-cols-2 p-5 gap-6 text-2xl italic font-thin)">
          <div className="  mt-3">
            <label htmlFor="" className="flex text-light-100">
              Name
              <Puce />
            </label>
            <input
              type="text"
              className="rounded-2xl hover:(placeholder-light-100)  h-10 w-70 p-2 md:(h-15 w-full rounded-2xl ) "
            />
          </div>

          <div>
            <label htmlFor="" className="flex text-light-100">
              Surname
              <Puce />
            </label>
            <input
              type="text"
              className="rounded-2xl hover:(placeholder-light-100)  h-10 w-70 p-2  md:(h-15 w-full )  "
            />
          </div>

          <div>
            <label htmlFor="" className="flex text-light-100">
              Professional email address
              <Puce />
            </label>
            <input
              type="text"
              className="rounded-2xl hover:(placeholder-light-100)  h-10 w-70 p-2 md:(h-15 w-full rounded-2xl) "
            />
          </div>

          <div>
            <label htmlFor="" className="flex text-light-100">
              Enterprise
              <Puce />
            </label>
            <input
              type="text"
              className="rounded-2xl hover:(placeholder-light-100)  h-10 w-70 p-2  md:(h-15 w-full )  "
            />
          </div>

          <div>
            <label htmlFor="" className="flex text-light-100">
              Business sector
              <Puce />
            </label>
            <input
              type="text"
              className="rounded-2xl hover:(placeholder-light-100)  h-10 w-70 p-2  md:(h-15 w-full )  "
            />
          </div>

          <div>
            <label htmlFor="" className="flex text-light-100">
              Phone
              <Puce />
            </label>
            <input
              type="text"
              className="rounded-2xl hover:(placeholder-light-100)  h-10 w-70 p-2  md:(h-15 w-full )  "
            />
          </div>

          <div className="">
            <label htmlFor="" className="flex text-light-100">
              Message
              <Puce />
            </label>
            <textarea
              type="text"
              className="h-10 w-70 p-2   md:(h-10 w-full) "
            />
          </div>
        </div>
      </form>
      <div className=" flex flex-col space-y-5 md:(px-10 text-xl)">
        <p className="text-semibold text-white  p-2 ">
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
          <label for="" className="text-white">
            I have read the privacy policy and I authorize Exunov to send me
            information
          </label>
        </div>
        <button
          type="submit"
          className=" bg-yellow-500  text-black border-2 rounded-lg h-10   hover:(bg-white text-dark-100) md:(text-3xl font-thin float-left w-70 h-12 ) "
        >
          Submit
        </button>
      </div>
    </div>
  );
}

function Body1() {
  return (
    <div className="flex flex-col space-y-5 mt-5 p-5 md:(px-60 text-center)">
      <h1 className="text-3xl text-amber-500 font-bold text-center">
        If you have any questions about your computer, we have the answers
      </h1>
      <p className="font-semibold">
        If you tell us your IT needs, we can help you attract them. So let's
        start the discussion!
      </p>
      <p className="font-semibold">
        EXUNOV has been providing effective technology services to large and
        small businesses since 10 years at least. With over two decades of
        experience, we know that your business goals are unique and fit your
        specific business objectives. That's why we offer IT solutions tailored
        to your goals so you can benefit from IT.{" "}
      </p>

      <p className="font-semibold">
        Our goal is to give your business a competitive advantage. When you're
        ready to start a conversation about how to meet and exceed your
        company's IT goals, contact us today
      </p>
    </div>
  );
}

function Body2() {
  return (
    <div className="flex flex-col space-y-5 mt-5 p-5 md:(px-60 text-center)">
      <h1 className="text-3xl text-amber-500 text-center font-bold">
        National reach with a local presence
      </h1>
      <p className="font-semibold">
        We're not old enough to help your growing businesses deal with their
        growing pains, and we're not young enough to handle the workload of the
        entire company. With ours offices, we can serve your needs wherever you
        are.
      </p>
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

export default Contactus;
