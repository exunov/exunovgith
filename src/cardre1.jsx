import React from "react";
import "./sectio.css";

function Cardre1() {
  return (
    <div>
      <Body />
    </div>
  );
}

function Body() {
  return (
    <div className="new">
      <div className="grid grid-cols-2 gap-3 px-6 py-2 md:(grid grid-cols-3 gap-2 place-items-streeth pl-70)">
        <div className="p-2 border-2 border-light-50 rounded-xl text-light-50 md:(w-50 p-4 text-xl)">
          I'm beginner in security. Where to start?
        </div>

        <div className="p-2 border-2 border-light-50 rounded-xl  text-light-50 md:(w-50 p-4 text-xl)">
          I'm getting hacked. Help me?
        </div>

        <div className="p-2 border-2 border-light-50 rounded-xl text-light-50 md:(w-50 p-4 text-xl)">
          Is my information system secure?
        </div>

        <div className="p-2 border-2 border-light-50 rounded-xl text-light-50 md:(w-50 p-4 text-xl)">
          II want to outsource security?
        </div>

        <div className="p-2 border-2 border-light-50 rounded-xl text-light-50 md:(w-50 p-4 text-xl) ">
          How to set up the cyber security policy?
        </div>

        <div className="p-2 border-2 border-light-50 rounded-xl text-light-50 md:(w-50 p-4 text-xl)">
          How do I prove to my clients that I'm safe?
        </div>
      </div>
    </div>
  );
}

export default Cardre1;
/*<div className="new">
      <div className="grid grid-cols-2 gap-2 place-items-center p-5  m-3 md:(grid grid-cols-3 gap-2) ">
        <div className=" rounded-2xl border-white border-2 p-2  md:(p-3  )">
          <p className=" md:(text-xl) text-white font-semibold ">
            I'm beginners in
            <br /> security. Where to start?
          </p>
        </div>
        <div className="  rounded-2xl border-white border-2 p-2 md:(p-3 )">
          <p className="md:(text-xl) text-white text-full font-semibold">
            I'm getting hacked.
            <br /> help me?
          </p>
        </div>
        <div className=" rounded-2xl border-white border-2 p-2 md:(p-3  )">
          <p className="md:(text-xl) text-white text-left font-semibold">
            Is my information
            <br /> system secure?
          </p>
        </div>
        <div className="  rounded-2xl border-white border-2 p-2 md:(p-3 )">
          <p className="md:(text-xl) text-white text-left font-semibold md:(p-">
            I want to outsource my cyber security?
          </p>
        </div>
        <div className="  rounded-2xl border-white border-2 p-2 ">
          <p className="md:(text-xl) text-white font-semibold ">
            How to set up the cyber security policy?
          </p>
        </div>
        <div className=" rounded-2xl border-white border-2 p-2">
          <p className="md:(text-xl) text-white font-semibold ">
            How do i prove to my clients that I'm safe?
          </p>
        </div>
      </div>
    </div>
  );
}
*/
