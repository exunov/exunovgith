import React from "react";
import { Slide } from "react-slideshow-image";
import slide1 from "./images/adapami1.png";
import slide2 from "./images/alidé.png";
import slide3 from "./images/bank.png";
import slide4 from "./images/moov.png";
import slide5 from "./images/orabank.jpg";
import slide6 from "./images/pac.png";
import slide7 from "./images/pebco.jpg";

function Carousel() {
  return (
    <div className="containerSlide">
      <Slide {...proprietes}>
        <div>
          <div className="each-slide">
            <img src={slide1} alt="" />
          </div>
        </div>

        <div>
          <div className="each-slide">
            <img src={slide2} alt="" />
          </div>
        </div>

        <div>
          <div className="each-slide">
            <img src={slide3} alt="" />
          </div>
        </div>

        <div>
          <div className="each-slide">
            <img src={slide4} alt="" />
          </div>
        </div>

        <div>
          <div className="each-slide">
            <img src={slide5} alt="" />
          </div>
        </div>

        <div>
          <div className="each-slide">
            <img src={slide6} alt="" />
          </div>
        </div>

        <div>
          <div className="each-slide">
            <img src={slide7} alt="" />
          </div>
        </div>
      </Slide>
    </div>
  );
}

function Iconleft() {
  return (
    <div className="text-red-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
}

function Iconright() {
  return (
    <div className=" text-red-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
}
export default Carousel;
