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
    <div className="space-y-10">
      <Slidepartenaire />

      <SlidPart />
    </div>
  );
}

export default Slid;
