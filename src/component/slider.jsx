import React from "react";
import "./slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Slider() {
  return (
    <div>
      <Carousel>
        <div>salut</div>
        <div>bojour</div>
      </Carousel>
    </div>
  );
}

export default Slider;
