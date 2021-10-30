import React from "react";

import "./back.css";

function Globecenter() {
  return (
    <div className=" p-5 md:(h-full p-10)  home space-y-5  ">
      <p className="font-bold text-light-200 text-3xl md:(text-5xl) ">
        Cybersecurity
        <br />
        Service
        <br />
        And Training
      </p>
      <div className="md:(flex justify-between py-20) inline-block justify-between">
        <p className="font-bold text-xl italic  text-light-200  md:( text-3xl)">
          As your partner of choice,
          <br />
          we provide cybersecurity
          <br />
          service and security awareness training
        </p>
        <div className="items-center space-x-5 flex flex-row md:( flex flex-row space-x-5 mt-5 )">
          <button
            type="submit"
            className=" bg-black p-2 bg-opacity-70 text-light-900 border-2 border-white-600 hover:(bg-black) rounded-lg md:(text-2xl rounded-xm)"
          >
            LEARN MORE
          </button>
          <button
            type="submit"
            className=" bg-yellow-400 p-2  text-light-900 border-2 border-white-600 rounded-lg text-xm hover:(bg-green-400)  md:(text-2xl rounded-xm)"
          >
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
}

export default Globecenter;
