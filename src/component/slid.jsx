import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "./images/blackberry.png";
import img10 from "./images/Falcongaze.jpg";
import img11 from "./images/Fortine.png";
import img12 from "./images/Inetum.png";
import img15 from "./images/logorezosis.png";
import img26 from "./images/SecureDigitale.png";
import img27 from "./images/syntrology.png";
import img28 from "./images/techwins.png";

function SlidPart() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="mt-10 space-y-5 ">
      <h1 className=" font-bold text-center text-3xl">Our Patners</h1>
      <Slider {...settings} className="md:(mx-20) ">
        <div>
          <img src={img1} alt="" className="w-50" />
        </div>

        <div>
          <img src={img10} alt="" className="w-50 mt-10" />
        </div>

        <div>
          <img src={img12} alt="" className="w-50  mt-10" />
        </div>
        <div>
          <img src={img15} alt="" className=" mt-10" />
        </div>
        <div>
          <img src={img26} alt="" className=" mt-10" />
        </div>
        <div>
          <img src={img27} alt="" className=" mt-10" />
        </div>

        <div>
          <img src={img28} alt="" className=" mt-10" />
        </div>
      </Slider>
    </div>
  );
}

export default SlidPart;
