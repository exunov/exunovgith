import React from "react";
import { Slide } from "react-slideshow-image";
import slide1 from "./images/adapami1.png";
import slide2 from "./images/alidé.png";
import slide3 from "./images/bank.png";
import slide4 from "./images/moov.png";
import slide5 from "./images/orabank.jpg";
import slide6 from "./images/pac.png";
import slide7 from "./images/pebco.jpg";
import { Carousel } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function Carouse() {
  return (
    <div className="pl-150  ">
      <Carousel className=" bg-white h-90 w-90">
        <Carousel.Item>
          <img src={slide1} alt="" className="h-full w-full" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={slide3} alt="" className="w-full h-full" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={slide4} alt="" className="w-full h-full" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={slide5} alt="" className="w-full h-full" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={slide6} alt="" className="w-full h-full" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={slide7} alt="" className="w-full h-full bg-white" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Carouse;
