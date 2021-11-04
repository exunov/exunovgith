import React from 'react'
import "./sectio.css";
import imge from "./images/imge.png";
import { NavLink } from "react-router-dom";


function Helpdesk(){
    return(
        <div>
            <Body1/>
            <Body2/>
            <Body3/>
            <Body4/>
            
        </div>
    )
}



function Body1() {
    return (
      <section>
        <div className="user">
        <h1 className="text-sm px-15 text-white pt-45 md:(text-2xl )">End User Support</h1>
        </div>
        <div className="md:(h-full) menu ">
          <nav className=" ">
            <ul className="geeks flex flex-col  text-white text-center md:(grid grid-cols-4 gap-x-3 text-white text-sm) ">
              <li>
              <NavLink
                  
                  to="/muser"
                 
                >
                  Managed
                  <br /> User
                </NavLink>
              </li>
              <li>
                <NavLink
                 
                 to="/enduser"
                
                 
                >
                  End-User <br/>Support
                </NavLink>
              </li>
              <li>
                <NavLink exact
                 activeClassname="active"
                 to="/helpdesk"
                 className=" geeks a">
                  Help & Service
                  <br /> Desk
                </NavLink>
              </li>
              <li>
                <NavLink to="/businessApp">Line of Business<br/> Application Support</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    );
  }
   
  function Body2() {
    return (
      <div>
        <div className="mt-4">
          <h1 className="text-xl font-bold text-amber-400 text-center px-6 md:(text-3xl) ">
          Winning IT support services and support for your business
          </h1>
          <p className="px-4 mt-2 text-sm text-center md:(px-40)">
          Our global IT support services are delivered by certified IT professionals.
           We provide high quality remote network monitoring and IT support services every hour of
            the day. Exunov's IT support services go far beyond traditional help desk services to
             provide customers with professional and immediate support at no charge. 
             Our IT support services are available 24/7 via phone, email, online chat or
              through a secure web portal.
          </p>
        </div>
      </div>
    );
  }
  
  function Body3() {
    return (
      <div>
        <div className="mt-6 bg-gray-100">
          <h1 className="text-xl md:(text-3xl px-50) px-4 font-bold text-amber-400 mt-2 p-5">
          State-of-the-art IT services and support
          </h1>
          <p className="px-4 text-sm p-4 md:(px-40 text-center p-6)">
          Our technical support information is based in Cotonou, Benin.
           This model is based on the industry standard ITIL (Information Technology 
           Infrastructure Library) framework for continuous improvement. 
           As an integral part of IT help desk services, also known as help desk support,
            the CPI model is tailored to the specific needs of your organization and your
             employees.
            
          </p>
        </div>
      </div>
    );
  }
  
  function Body4() {
    return (
      <section className=" bg-gray-100 md:()">
        <div className=" p-4">
          <div className=" ">
            <h1 className="text-xl md:(text-3xl) font-bold text-amber-400 text-center mt-2 p-3">
            Our own IT Service Management (ITSM) platform will provide you with a unique service experience
            </h1>
            <p className="px-4 text-sm p-4 text-center md:(px-40 p-4)">
            Exunov uses a unique IT Service Management (ITSM) platform that allows IT support
             personnel to resolve support issues quickly and efficiently.
              We have created a unique support workflow that focuses on rapid testing and
               resolution of initial calls. The underlying learning engine, like you,
                can only help solve a problem by blindly recording thousands of responses 
                from hundreds of environments.
            </p>
          </div>
          
        </div>
      </section>
    );
  }
  function Body6() {
    return (
      <div className=" bg-gray-200 flex flex-col md:(p-10 bg-gray-200)">
        <div className=" mt-4   md:(px-40 flex flex-row  mt-6 )">
          <img src={image} alt="" className="md:( float-right w-full) w-full" />
  
          <div className="">
            <h1 className="text-3xl font-bold text-center mt-2">
              Your team covers what it can, but there are gaps.
            </h1>
            <p className="px-4 text-sm p-4 md:( text-justify text-xl p-6)">
              Strategic decision making, monitoring and IT team support, but in
              today's complex IT environment, you don't have enough time, team
              members or budget to provide complete coverage. Our managed
              monitoring and response services use our 24/7 security operations
              center to keep your business safe around the clock. A team of
              GIAC-certified Intrusion Analysts (GCIA) perform real-time analysis
              and validation of logs and network traffic. Our IT security
              monitoring helps organizations validate alarms and follow
              appropriate cyber response procedures in the event of an incident.
              Exunov's IT security monitoring services protect your IT
              infrastructure by detecting security threats in real time.
            </p>
          </div>
        </div>
      </div>
    );
  }
  function Body7() {
    return (
      <div className="bg-gray-100 p-4  ">
        <div className="md:(px-10  mt-2)">
          <h1 className="mt-4 px-8 text-center   text-2xl font-bold ">
            Monitoring of Dark Web credentials
          </h1>
          <p className="mt-3 text-sm  md:(text-xl px-40 text-justify) ">
            Exunov's managed tracking and response services include dark web
            credential
            <br /> monitoring, which detects dark web credentials in real time and
            notifies you immediately when critical ssets are compromised before
            they are used for theft. Identity, data breaches or other crimes.
            Identity protection is animportant part of cyber response and
            information security management.
          </p>
        </div>
      </div>
    );
  }
  
  export default Helpdesk;