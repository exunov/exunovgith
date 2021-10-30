import React from "react";
import icon1 from "./images/managedirec.png";
import icon2 from "./images/manageserv.png";
import icon3 from "./images/saas_2.png";
import icon4 from "./images/socservi.png";
import icon5 from "./images/softwaredev.png";
import icon6 from "./images/formation.png";

function Foot() {
  return (
    <div className=" mx-auto w-8/9">
      <Cardre />
    </div>
  );
}

/*function ServiceItem(props) {
  const { icon, title, text } = props.item;

  return (
    <div className="flex flex-col p-3 space-y-2 border-1  shadow-purple-900 shadow-2xl  rounded-3xl  md:(h-100 w-100 space-y-5 p-2)">
      <img src={icon} alt="" className="w-20 ml-30" />
      <div className="divide-y-4 divide-yellow-400 space-y-2">
        <h1 className="font-bold text-xl text-center  md:(text-2xl)">
          {title}
        </h1>

        <p className="text-xl  p-6  md:(text-2xl)">{text}</p>
      </div>
      <p></p>
    </div>
  );
}*/

/*function Debut() {
  const items = [
    {
      icon: icon1,
      title: "Manage Directions",
      text: "We help you make the right decision, check the vulnerability of your infrastructure and ensure the integrity of your data",
    },
    {
      icon: icon2,
      title: "Manage Service",
      text: "We help you manage,operate, optimize and secure your information system",
    },
    {
      icon: icon3,
      title: "SOC SERVICE",
      text: "the SOC will detect, analyze and remediate cybersecurity incidents using technology solutions",
    },

    {
      icon: icon5,
      title: "Business Continuity Plan",
      text: "We help you to guarantee the survival of the company in case of a major disaster affecting the computer system",
    },

    {
      icon: icon6,
      title: "Software Development",
      text: "We help you through the design process to the creation and maintenance of any type of application you may need",
    },

    {
      icon: icon4,
      title: "Training",
      text: "We offer you a solid understanding of digital forensics through training CHFI, CISA, CISM, ITIIL 4 certified",
    },
  ];
  return (
    <div className=" flex flex-col mt-3 md:(mt-5)">
      <div className="">
        <h1 className="text-center text-black font-bold text-2xl md:text-4xl">
          Our Service In Short
        </h1>
        <p className="text-lg text-center font-semibold">
          We help companies to fight against data piracy, and we guide them
          through IT supportand efficient management of IT services. We pave the
          way for new decision making through data analysis and perform high
          quality audits to build confidence in order to strengthen confidence
          in the finicial markets abd companies.
        </p>
      </div>

      <div class="mt-5 grid grid-cols-1 place-items-center gap-2 md:( grid grid-cols-3 place-items-center gap-10)">
        {items.map((i) => (
          <ServiceItem key={i.title} item={i} />
        ))}
      </div>
    </div>
  );
}*/

function Cardre() {
  return (
    <div className="md:(mt-10)">
      <div className=" space-y-5 ">
        <h1 className="text-center text-black font-bold text-2xl md:(text-4xl)">
          Our Service In Short
        </h1>
        <p className="text-lg text-center  text-justify md:(text-xl text-center px-60)">
          We help companies to fight against data piracy, and we guide them
          through IT supportand efficient management of IT services. We pave the
          way for new decision making through data analysis and perform high
          quality audits to build confidence in order to strengthen confidence
          in the finicial markets abd companies.
        </p>
      </div>

      <div class="mt-5 grid grid-cols-1 place-items-center gap-2 md:( grid grid-cols-2 ml-30 gap-4)">
        <div className="flex flex-col p-3 space-y-2 border-1  shadow-purple-900 shadow-2xl  rounded-3xl hover:(bg-red-200 transform translate-y-5 italic) md:(h-90 w-90 space-y-5 p-2)">
          <img src={icon1} alt="" className="w-20 ml-30 md:(w-20 )" />
          <div className="divide-y-4 divide-yellow-400 space-y-2">
            <h1 className="font-bold text-xl text-center  md:(text-2xl)">
              Manage Directions
            </h1>

            <p className="text-xl  p-6  md:(text-xl)">
              We help you make the right decision, check the vulnerability of
              your infrastructure and ensure the integrity of your data
            </p>
          </div>
        </div>

        <div className="flex flex-col p-3 space-y-2 border-1   shadow-purple-900 shadow-2xl  rounded-3xl hover:(bg-red-200 transform translate-y-5 italic)   md:(h-90 w-90 space-y-5 p-2)">
          <img src={icon2} alt="" className="md:(w-35 ml-30)  w-30 ml-18" />
          <div className="divide-y-4 divide-yellow-400 space-y-2">
            <h1 className="font-bold text-xl text-center  md:(text-2xl)">
              Manage Service
            </h1>

            <p className="text-xl  p-6  md:(text-xl)">
              We help you manage,operate, optimize and secure your information
              system
            </p>
          </div>
        </div>

        <div className="flex flex-col p-3 space-y-2 border-1  shadow-purple-900 shadow-2xl  rounded-2xl hover:(bg-red-200 transform translate-y-5 italic)   md:(h-90 w-90 space-y-5 p-2)">
          <img src={icon4} alt="" className="md:(w-30 ml-30) w-30 ml-18" />
          <div className="divide-y-4 divide-yellow-400 space-y-2">
            <h1 className="font-bold text-xl text-center  md:(text-2xl)">
              SOC Service
            </h1>

            <p className="text-xl  p-6  md:(text-xl)">
              The SOC will detect, analyze and remediate cybersecurity incidents
              using technology solutions
            </p>
          </div>
        </div>

        <div className="flex flex-col p-3 space-y-2 border-1  shadow-purple-900 shadow-2xl  rounded-3xl hover:(bg-red-200 transform translate-y-5 italic)   md:(h-90 w-90 space-y-5 p-2)">
          <img src={icon3} alt="" className="md:(w-20 ml-30) w-20 ml-22" />
          <div className="divide-y-4 divide-yellow-400 space-y-2">
            <h1 className="font-bold text-xl text-center  md:(text-2xl)">
              Bussiness Continuity Plan
            </h1>

            <p className="text-xl  p-6  md:(text-xl)">
              We help you to guarantee the survival of the company in case of a
              major disaster affecting the computer system
            </p>
          </div>
        </div>

        <div className="flex flex-col p-3 space-y-2 border-1  shadow-purple-900 shadow-2xl  rounded-3xl hover:(bg-red-200 transform translate-y-5 italic)   md:(h-90 w-90 space-y-5 p-2)">
          <img src={icon5} alt="" className="md:(w-20 ml-30) w-20 ml-22" />
          <div className="divide-y-4 divide-yellow-400 space-y-2">
            <h1 className="font-bold text-xl text-center  md:(text-2xl)">
              Software Development
            </h1>

            <p className="text-xl  p-6  md:(text-xl)">
              We help you through the design process to the creation and
              maintenance of any type of application you may need
            </p>
          </div>
        </div>

        <div className="flex flex-col p-3 space-y-2 border-1  shadow-purple-900 shadow-2xl  rounded-3xl hover:(bg-red-200 transform translate-y-5 italic)   md:(h-90 w-90 space-y-5 p-2)">
          <img src={icon6} alt="" className="md:(w-20 ml-30) w-20 ml-22" />
          <div className="divide-y-4 divide-yellow-400 space-y-2">
            <h1 className="font-bold text-xl text-center  md:(text-2xl)">
              Training
            </h1>

            <p className="text-xl  p-6  md:(text-xl)">
              We offer you a solid understanding of digital forensics through
              training CHFI, CISA, CISM, ITIIL 4 certified
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foot;
