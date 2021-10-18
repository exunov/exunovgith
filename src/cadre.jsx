import React from "react";

import quote1 from "./images/Group6.png";
import triangle1 from "./images/Polygon1.png";
import triangle2 from "./images/Polygon2.png";
import triangle3 from "./images/Polygon3.png";
import triangle4 from "./images/Polygon4.png";

function Cadre() {
  return (
    <div className="mt-10 ">
      <Cadrechild />

      <Exunumder />
    </div>
  );
}

function Cadrechild() {
  return (
    <div className="bg-Group9-img bg-cover w-full h-full ">
      <div className="md:()">
        <img src={quote1} alt="" className="w-full p-2" />
      </div>
    </div>
  );
}

function Exunumder() {
  const items = [
    {
      image: triangle1,
      text: "IT Support's Experiences",
    },
    {
      image: triangle2,
      text: "Active Certifications",
    },
    {
      image: triangle3,
      text: "Security Monitoring",
    },
    {
      image: triangle4,
      text: "Customers Retention",
    },
  ];

  return (
    <div className=" mt-5 flex flex-col border-b shadow-2xl space-y-5 ">
      <h1 className="text-center font-bold italic text-xl md:(text-3xl)">
        EXUNOV by Numbers
      </h1>

      <div className="flex grid grid-cols-2 space-x-4 justify-items-center font-bold italic text-center p-px md:(flex grid grid-cols-4 ml-40 mr-30  )">
        {items.map((i) => (
          <div className="flex flex-col justify-center items-center">
            <img src={i.image} alt="" className="h-28 w-38 md:(h-50 w-60)" />
            <h2 className="">{i.text}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cadre;
