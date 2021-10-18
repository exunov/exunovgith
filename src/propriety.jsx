import React from "react";
import gride2 from "./images/gride2.jpg";
import gride3 from "./images/gride3.jpg";
import grid3 from "./images/grid3.jpg";
import "./sectio.css";

function Propriety() {
  const items = [
    {
      image: gride2,
      text: "Microsoft MSHTML  Remote Code Exculsions",
    },
    {
      image: gride3,
      text: "Common Cyber Insurance Coverage Exclusions",
    },
    {
      image: grid3,
      text: "Apple NSO Zero-Click Zero-Day: Dataprise Defense Digest",
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-2 md:(grid-cols-3 place-items-center px-8  ) mt-6 p-2  ">
        {items.map((i) => (
          <>
            <div className="w-full py-2 px-2 shadow-2xl rounded-b-2xl md:(h-full) ">
              <img
                src={i.image}
                alt=""
                className="rounded-t-2xl border-1 w-full "
              />
              <div className="h-2 bg-yellow-300 flex w-full  " />
              <div className="px-2">
                <p className="w-full text-sm md:(p-3 text-xl)">{i.text}</p>
                <a href="#">
                  <h1 className=" text-yellow-400 pt-6 md:(text-xl)">Read</h1>
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
export default Propriety;
