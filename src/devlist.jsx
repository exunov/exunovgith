import React from "react";

function Body1() {
  return (
    <div className="flex flex-col space-y-5 md:(mt-5)">
      <h2 className="font-bold text-center md:(text-3xl)">About Service</h2>
      <div className="flex flex-row  space-x-5  place-items-center justify-center divide-x-4  divide-yellow-400 font-thin md:(text-2xl py-5  )">
        <div className="md:(px-10)">
          <ul className="space-y-2 ">
            <div className="flex space-x-3">
              <Puce />
              <li>API Development</li>
            </div>
            <div className="flex space-x-3">
              <Puce /> <li>Software Development</li>
            </div>

            <div className="flex space-x-3">
              <Puce /> <li>UI/UX</li>
            </div>

            <div className="flex space-x-3">
              <Puce /> <li>Website Design</li>
            </div>
          </ul>
        </div>

        <div className="md:(px-5)">
          <ul className=" space-y-2 px-2  ">
            <div className="flex space-x-3">
              <Puce />
              <li>Software Requiement</li>
            </div>

            <div className="flex space-x-3">
              <Puce />
              <li>Web Applicationt</li>
            </div>

            <div className="flex flex-row space-x-3">
              <Puce />
              <li>E-Commerce Solution</li>
            </div>

            <div className="flex space-x-3">
              <Puce />
              <li>Application Modernisation Services</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Puce() {
  return (
    <div className="md:(text-5xl text-amber-600 animate-bounce hover:animate-none) text-amber-600 text-2xl">
      *
    </div>
  );
}

export default Body1;
