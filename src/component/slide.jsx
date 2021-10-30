import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "./images/blackberry.png";
import img2 from "./images/ccna_2.png";
import img3 from "./images/CCNP_2.png";
import img4 from "./images/ceh_2.png";
import img5 from "./images/CHFI.png";
import img6 from "./images/cisa.png";
import img8 from "./images/cism.png";
import img9 from "./images/devOps.png";
import img10 from "./images/Falcongaze.jpg";
import img11 from "./images/Fortine.png";
import img12 from "./images/Inetum.png";
import img13 from "./images/iso.png";
import img14 from "./images/itil4.png";
import img15 from "./images/logorezosis.png";
import img16 from "./images/MCSA_logo.png";

import img18 from "./images/ns1.jpg";
import img19 from "./images/ns2.jpg";
import img20 from "./images/ns3.png";
import img21 from "./images/ns4.png";
import img22 from "./images/nse_5.png";
import img23 from "./images/ns6.png";
import img33 from "./images/ns7.png";
import img24 from "./images/pmp.png";
import img25 from "./images/prince2.png";
import img26 from "./images/SecureDigitale.png";
import img27 from "./images/syntrology.png";
import img28 from "./images/techwins.png";
import img29 from "./images/AWS.png";
import img30 from "./images/compa.png";
import img31 from "./images/mtcnapng.png";
import img32 from "./images/cisco.png";

function Slidepartenaire() {
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="mt-10 space-y-7">
      <h1 className=" font-bold text-center text-3xl">Our Certification</h1>
      <Slider {...settings} className="md:(mx-20) ">
        <div>
          <img src={img29} alt="" className="w-50 h-full" />
        </div>

        <div>
          <img src={img2} alt="" className="w-50 h-full" />
        </div>
        <div>
          <img src={img3} alt="" className="w-50 h-full" />
        </div>
        <div>
          <img src={img4} alt="" className="w-50 h-full" />
        </div>
        <div>
          <img src={img5} alt="" className="" />
        </div>
        <div>
          <img src={img6} alt="" className="" />
        </div>
        <div>
          <img src={img9} alt="" className="w-50 h-full" />
        </div>
        <div>
          <img src={img16} alt="" className="w-50 h-full" />
        </div>

        <div>
          <img src={img13} alt="" className="" />
        </div>
        <div>
          <img src={img24} alt="" className="" />
        </div>
        <div>
          <img src={img18} alt="" className="" />
        </div>
        <div>
          <img src={img19} alt="" className="" />
        </div>
        <div>
          <img src={img20} alt="" className="" />
        </div>
        <div>
          <img src={img21} alt="" className="" />
        </div>
        <div>
          <img src={img22} alt="" className="" />
        </div>
        <div>
          <img src={img23} alt="" className="" />
        </div>
        <div>
          <img src={img33} alt="" className="w-full " />
        </div>

        <div>
          <img src={img30} alt="" className="" />
        </div>

        <div>
          <img src={img32} alt="" className="" />
        </div>
        <div>
          <img src={img31} alt="" className="mt-10" />
        </div>

        <div>
          <img src={img14} alt="" className="mt-10" />
        </div>
        <div>
          <img src={img25} alt="" className="mt-10" />
        </div>
      </Slider>
    </div>
  );
}

export default Slidepartenaire;
