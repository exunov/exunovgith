import React from "react";
import "./sectio.css";

import { NavLink, Link } from "react-router-dom";
import Footer from "./footer";
import council from "./images/council.png";
import isaca from "./images/isaca.png";
import axelos from "./images/axelos.png";
import comptia from "./images/comptia.png";
import vmware from "./images/VMware.png";
import linux from "./images/linux.png";
import microsoft from "./images/MCSA_logo.png";
import fortinet from "./images/Fortinet.png";
import iso from "./images/iso27005.png";
import Headertop from "./headertop";
import Head from "./header";

function Training() {
  return (
    <div>
      <Headertop />
      <Head />
      <HautP />
      <Formation />
      <Body />
      <Footer />
    </div>
  );
}

function HautP() {
  return (
    <div className="image md:(p-30 h-120)">
      <div className=" text-light-200 p-10 md:(space-y-5 text-right)">
        <h1 className="font-bold text-white text-3xl  md:(text-5xl )">
          Training
        </h1>
        <p className="text-white text-xl md:(text-3xl text-right  )">
          We offer you the skills to build
          <br /> your digital futur through our accelerated courses
        </p>
      </div>
    </div>
  );
}

function Formation() {
  return (
    <div className="flex flex-col md:(grid grid-cols-3 gap-8 px-40 ) space-y-5 p-5  mt-20">
      <div className="rounded-xl p-8 shadow-2xl ">
        <img src={council} alt="" className=" w-35 mx-15 md:(w-30)" />
        <div className="divide-y-4 divide-yellow-400 space-y-2 ">
          <h1 className="font-bold text-xl text-center  md:(text-3xl p-y-1)">
            EC-COUNCIL
          </h1>

          <p className="text-xl p-6 underline md:(text-2xl underline) text-amber-500 justify-end items-end">
            <Link to="/council-course"> Course</Link>
          </p>
        </div>
        <p></p>
      </div>

      <div className="rounded-xl p-8 shadow-2xl ">
        <img src={isaca} alt="" className="py-9  md:(w-50 py-9)" />
        <div className="divide-y-4 divide-yellow-400 space-y-2 ">
          <h1 className="font-bold text-xl text-center  md:(text-3xl p-y-1)">
            ISACA
          </h1>

          <p className="text-xl p-6 underline md:(text-2xl underline) text-amber-500 justify-end items-end">
            <Link to="/council-course"> Course</Link>
          </p>
        </div>
      </div>

      <div className="rounded-xl p-8 shadow-2xl ">
        <img src={comptia} alt="" className="w-40 mx-10  md:(w-37  )" />
        <div className="divide-y-4 divide-yellow-400 space-y-2 ">
          <h1 className="font-bold text-xl text-center  md:(text-3xl p-y-1)">
            COMPTIA
          </h1>

          <p className="text-xl p-6 underline md:(text-2xl underline) text-amber-500 justify-end items-end">
            <Link to="/council-course"> Course</Link>
          </p>
        </div>
      </div>

      <div className="rounded-xl p-8 shadow-2xl ">
        <img src={axelos} alt="" className="py-10 mx-10 md:(w-40 py-10 )" />
        <div className="divide-y-4 divide-yellow-400 space-y-3 ">
          <h1 className="font-bold text-xl text-center mt-2 md:(text-3xl p-y-1)">
            AXELOS
          </h1>

          <p className="text-xl p-6 underline md:(text-2xl underline) text-amber-500 justify-end items-end">
            <Link to="/council-course"> Course</Link>
          </p>
        </div>
      </div>
      <div className="rounded-xl p-8 shadow-2xl ">
        <img src={microsoft} alt="" className="py-8 mx-8 md:(w-40 py-5 )" />
        <div className="divide-y-4 divide-yellow-400 space-y-2 ">
          <h1 className="font-bold text-xl text-center  md:(text-3xl p-y-1)">
            MCSA
          </h1>

          <p className="text-xl p-6  underline md:(text-2xl underline) text-amber-500 justify-end items-end">
            <Link to="/council-course"> Course</Link>
          </p>
        </div>
      </div>

      <div className="rounded-xl p-8 shadow-2xl ">
        <img src={linux} alt="" className=" mx-8 md:(w-40 py-3 )" />
        <div className="divide-y-4 divide-yellow-400 space-y-2 ">
          <h1 className="font-bold text-xl text-center  md:(text-3xl p-y-1)">
            LINUX
          </h1>

          <p className="text-xl p-6  underline md:(text-2xl underline) text-amber-500 justify-end items-end">
            <Link to="/council-course"> Course</Link>
          </p>
        </div>
      </div>

      <div className="rounded-xl p-8 shadow-2xl ">
        <img src={vmware} alt="" className=" w-35 mx-12  md:(w-30 py-3 )" />
        <div className="divide-y-4 divide-yellow-400 space-y-2 ">
          <h1 className="font-bold text-xl text-center mt-2  md:(text-3xl p-y-1)">
            VMWARE
          </h1>

          <p className="text-xl p-6 underline  md:(text-2xl underline) text-amber-500 justify-end items-end">
            <Link to="/council-vmware"> Course</Link>
          </p>
        </div>
      </div>

      <div className="rounded-xl p-8 shadow-2xl ">
        <img src={iso} alt="" className="w-35 mx-15  md:(w-30 py-3 )" />
        <div className="divide-y-4 divide-yellow-400 space-y-2 ">
          <h1 className="font-bold text-xl text-center mt-2  md:(text-3xl p-y-1)">
            ISO-275005
          </h1>

          <p className="text-xl p-6  underline  md:(text-2xl underline) text-amber-500 justify-end items-end">
            <Link to="/council-iso"> Course</Link>
          </p>
        </div>
      </div>

      <div className="rounded-xl p-8 shadow-2xl md:() ">
        <img src={fortinet} alt="" className="mx-10 md:( py-1 )" />
        <div className="divide-y-4 divide-yellow-400 space-y-2 ">
          <h1 className="font-bold text-xl text-center  md:(text-3xl p-y-1)">
            FORTINET
          </h1>

          <p className="text-xl p-6  underline  md:(text-2xl underline) text-amber-500 justify-end items-end">
            <Link to="/council-fortinet"> Course</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className=" space-y-6 md:(p-20 ) text-justify">
      <div className=" px-6 md:( text-xl  px-50   )">
        <h1 className="mt-4 text-amber-400 text-center font-bold text-xl md:(text-3xl)">
          Why every course you took was a waste of time
        </h1>
        <p className="space-y-4 mt-4 md:(text-xl ) text-sm  ">
          Firebrand Training uses accelerated learning techniques to deliver
          large amounts of information in the shortest possible time.
          Accelerated learning is very different from traditional teaching.{" "}
          <p className="mt-4 text-sm md:(text-xl)">
            But people can absorb and retain much more information than we
            think.{" "}
          </p>
        </p>
      </div>
      <div className="pt-4 px-6 md:( text-xl  px-50   ) ">
        <h1 className="mt-4 text-amber-400 text-center text-xl  font-bold md:(text-3xl)">
          Acceleratced learning: Learn more, efficiently, effectively
        </h1>
        <p className="space-y-4 mt-4 text-sm  md:(text-2xl)">
          From a very early age, we are convinced that the teaching methods used
          in schools ("traditional teaching methods") are the only methods of
          learning.{" "}
        </p>
        <p className="mt-4 text-sm  md:(text-xl)">
          In accelerated learning, students are involved in the learning process
          and teaching methods are constantly evolving. This takes into account
          all the basic learning styles we use.{" "}
        </p>
        <ul className="list-disc list-inside mt-6 space-y-4 px-6 ml-10">
          <li>Visual (whiteboard sessions and discussion) </li>
          <li>Tactile (hands-on lab sessions) </li>
          <li>Auditory (review sessions) </li>
        </ul>
      </div>
      <div className="pt-4 px-6 md:( text-xl  px-50   )">
        <h1 className="mt-4 text-amber-400 text-center text-xl  font-bold md:(text-3xl)">
          We train you, you don't train yourself
        </h1>
        <p className="space-y-4 text-sm  mt-4 md:(text-xl)">
          Students do not have to study large amounts of information alone. We
          guarantee that you will be trained and certified with us in the
          shortest possible time. Accelerated learning is very different from
          traditional teaching.{" "}
        </p>
        <p className="mt-4 text-sm text-sm  md:(text-xl)">
          Firebrand training is unlike any other boot camp. The focus is not
          only on testing, but on skill development under the guidance of an
          instructor.{" "}
        </p>
      </div>
      <div className="pt-4 px-6 md:( text-xl  px-50   )">
        <h1 className="mt-4 text-amber-400 text-center font-bold text-xl  md:(text-3xl)">
          Ask yourself these questions
        </h1>

        <ul className="list-none mt-6 space-y-4 px-4">
          <div className=" flex space-x-3">
            <Puce />
            <li className="mt-3">
              "Can I wait 12 months to learn the skills I need in my job today?"{" "}
            </li>
          </div>
          <div className="flex space-x-3">
            <Puce />
            <li className="mt-3">
              "Do I have hundreds of hours of personal time available for
              self-study before a class?"{" "}
            </li>
          </div>
          <div className="flex space-x-3">
            <Puce />
            <li className="mt-3">
              "Can I or my employer allow me to take several weeks off to
              complete my education?"{" "}
            </li>
          </div>
        </ul>
        <p className="mt-4 text-sm md:(text-xl)">
          If you answer no to any of these questions, we are your only option.
          Call us now to discuss how we achieve what many consider impossible.{" "}
        </p>
      </div>
    </div>
  );
}

function Puce() {
  return <div className="text-4xl text-amber-400">•</div>;
}
export default Training;
