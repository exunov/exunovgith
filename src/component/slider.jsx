import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import Slider from "react-slick";
import img1 from "./images/adapami1.png";
import img2 from "./images/moov.png";
import img3 from "./images/alidé.png";
import img4 from "./images/pebco.png";
import img5 from "./images/pebco.jpg";
import img6 from "./images/bank.png";
import img7 from "./images/orabank.jpg";

function Slide() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-10 space-y-5">
      <h1 className="text-3xl font-bold text-center">Our Clients</h1>
      <Slider {...settings} className="md:(ml-50 mr-20) ">
        <div>
          <img src={img1} alt="" className="w-50 h-full" />
        </div>
        <div>
          <img src={img2} alt="" className="w-50 h-full" />
        </div>

        <div>
          <img src={img7} alt="" className="w-50 h-full" />
        </div>
        <div>
          <img src={img6} alt="" className="w-50 h-full" />
        </div>

        <div>
          <img src={img4} alt="" className="w-50 h-full" />
        </div>
        <div>
          <img src={img5} alt="" className="w-50 h-full" />
        </div>

        <div>
          <img src={img3} alt="" className="" />
        </div>
      </Slider>
    </div>
  );
}

export default Slide;
