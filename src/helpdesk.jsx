import React from 'react'
import "./sectio.css";
import itsupport from "./images/itsupport.jpg";
import itsupports from "./images/itsupports.png";
import { NavLink } from "react-router-dom";
import Headertop from './headertop';
import Head from './header';
import Footer from './footer';


function Helpdesk(){
    return(
        <div>
          <Headertop/>
          <Head/>
            <Body1/>
            <Body2/>
            <Body3/>
            <Body4/>
            <Body5/>
            <Footer/>
        </div>
    )
}



function Body1() {
    return (
      <section>
        <div className="user">
        <h1 className="text-sm text-white pt-35 px-5 md:(text-3xl )">IT Help Desk Services  and<br/> Service Desk Support</h1>
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
        <div className="mt-6">
          <h1 className="mt-6 text-xl font-bold text-amber-400 text-center px-6 md:(text-2xl px-40) ">
          Winning IT support services and support for your business
          </h1>
          <p className="px-4 mt-4 text-sm text-center md:(px-40 text-xl)">
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
      <div className="mt-8 bg-gray-100 ">
        <h1 className="text-xl md:(text-2xl ) px-4 text-center font-bold text-amber-400 mt-2 p-5">
          State-of-the-art IT services and support
          </h1>
        <div className="grid grid-cols-1 mt-4 md:(grid grid-cols-2 gap-2 place items-center px-40) ">
          
          <div className="px-5 md:()">
          <img
                src={itsupport}
                alt=""
                className=" w-120 "
              /></div>
          <div className="">
            <p className="text-sm p-4 md:( text-center text-xl)">
          Our technical support information is based in Cotonou, Benin.
           This model is based on the industry standard ITIL (Information Technology 
           Infrastructure Library) framework for continuous improvement. 
           As an integral part of IT help desk services, also known as help desk support,
            the CPI model is tailored to the specific needs of your organization and your
             employees.
            
          </p></div>
        </div>
      </div>
    );
  }
  
  function Body4() {
    return (
      <section className=" bg-gray-100 md:()">
        <div className=" p-4">
          <div className=" ">
            <h1 className="text-xl md:(text-2xl px-40)px-10 font-bold text-amber-400 text-center mt-2 p-3">
            Our own IT Service Management (ITSM) platform will provide you with a unique service experience
            </h1>
            <p className="px-4 text-sm p-4 text-center md:(px-40 p-4 text-xl)">
            Exunov uses a unique IT Service Management (ITSM) platform that allows IT support
             personnel to resolve support issues quickly and efficiently.
              We have created a unique support workflow that focuses on rapid testing and
               resolution of initial calls. The underlying learning engine, like you,
                can only help solve a problem by blindly recording thousands of responses 
                from hundreds of environments.<br/>
                <br/>All Exunov helpdesks and support solutions offer free access to ITSM.<br/>
                <br/>For customers who wish to use a third-party ticketing system, the ITSM platform provides full API integration of the ticketing system.<br/>
            </p>
          </div>
          
        </div>
      </section>
    );
  }
   function Body5(){
     return(
      <div className="mt-8 ">
      <h1 className="text-xl md:(text-2xl ) px-4 text-center font-bold text-amber-400 mt-2 p-5">
      Complete IT service desk solutions enable businesses to win with IT
        </h1>
      <div className="grid grid-cols-1 mt-4 md:(grid grid-cols-2 gap-2 place items-center px-30) ">
        
        <div className="px-5 md:()">
        
          <p className="text-sm p-4 md:( text-center )">
          Exunov offers a wide range of comprehensive IT services for small businesses that
           require part-time or full-time technical support, application support, customer 
           service or a full-time resource center. No matter what type of help desk
            functionality you need, we can provide a complete solution for your specific needs.
          <br/><br/>
          Exunov's IT services and support go far beyond traditional IT support services and consist
           of over 300 certified IT professionals available 24 hours a day, 7 days a week. 
           Our IT support services provide you and your customers with effective solutions for 
           immediate assistance. We provide comprehensive IT consulting services to businesses of
            all sizes and provide 24-hour technical support. Are you ready to learn how Exunov IT 
            support services can make you more competitive? Please fill out the request form below.
        </p></div>
        <div><img
              src={itsupports}
              alt=""
              className="  w-100 "
            /></div>
        
      </div>
    </div>
     )
   }
  
  export default Helpdesk;