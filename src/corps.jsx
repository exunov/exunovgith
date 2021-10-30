import React from "react";
import "./slider.css";
import Slidepartenaire from "./component/slide";
import SlidPart from "./component/slid";

function Slid() {
  return (
    <div>
      <Parteners />
    </div>
  );
}

function Parteners() {
  return (
    <div className="mt-10 space-y-5 text-center place-items-center">
      <div className="  ">
        <Slidepartenaire />
      </div>
      <div className=" ">
        <SlidPart />
      </div>
    </div>
  );
}

export default Slid;
