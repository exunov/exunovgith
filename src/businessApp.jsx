import React from 'react'
import "./sectio.css";
import personal from "./images/personal.jpg";
import provide from "./images/provide.jpeg";
import { NavLink } from "react-router-dom";
import Headertop from './headertop';
import Head from './header';
import Footer from './footer';


function BusinessApp(){
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
        <h1 className="text-2xl px-15 text-white pt-45 md:(text-2xl )">End User Support</h1>
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
                <NavLink
                 
                 to="/helpdesk"
                >
                  Help & Service
                  <br /> Desk
                </NavLink>
              </li>
              <li>
                <NavLink  exact 
                activeClassname="active"
                 to="/businessApp"
                 className=" geeks a">Line of Business<br/> Application Support</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    );
  }

  function Body2() {
    return (
      <section className=" md:()">
        <div className=" p-4">
          <div className=" ">
            <h1 className="text-xl md:(text-2xl px-40) font-bold text-amber-400 text-center mt-2 p-3">
            Support for the unique applications that power your organization
            </h1>
            <p className="px-4 text-sm p-4 text-center md:(px-40 p-4 text-xl)">
            Business programs help promote your success and mission. What if there's a problem with the end user?<br/>
                <br/>Our LOB application end-user support can help. Our solutions provide the support your organization needs for the applications that support and drive your business.<br/>
                
            </p>
          </div>
          
        </div>
      </section>
    );
  }
   function Body3(){
     return(
      <div className="mt-8 bg-gray-200 p-4">
      <h1 className="text-xl md:(text-2xl px-40) px-4 text-center font-bold text-amber-400 mt-2 p-5">
      If your organization has a specific application that you provide as a service to you and your customers :
        </h1>
      <div className="grid grid-cols-1 mt-4 md:(grid grid-cols-2 gap-2 place items-center px-30) ">
        
        <div className="px-5 md:()">
          <ul className="list-disc list-inside">
            <li>Try to find technical talent in your area to support the product</li>
            <li>Experience billing within your own service desk</li>
            <li>Need 24x7 support but do not have the internal resources to provide</li>
          </ul>
          <p className="font-bold text-sm mt-4 md:(text-xl)">Our enterprise application support line can be a great solution for you.</p>
          </div>
        <div><img
              src={personal}
              alt=""
              className="rounded-full  w-120 "
            /></div>
        
      </div>
    </div>
     )
   }
   function Body4(){
     return(
       <div>
         
       </div>
     )
   }
   function Body5(){
     return(
      <div className="mt-8 bg-gray-100 ">
      <h1 className="text-xl md:(text-2xl ) px-4 text-center font-bold text-amber-400 mt-2 p-5">
      Looking for a secure infrastructure to help support your product and business?
        </h1>
      <div className="grid grid-cols-1 mt-4 md:(grid grid-cols-2 gap-2 place items-center px-40) ">
        
        <div className="px-5 md:()">
        <img
              src={provide}
              alt=""
              className="rounded-full  w-120 "
            /></div>
        <div className="">
          <p className="text-sm p-4 md:( text-center text-xl)">
          See Managed Infrastructure and Managed Cybersecurity Solutions.
           We offer best-in-class plans to manage, support and protect your infrastructure and users.
          
        </p></div>
      </div>
    </div> 
     )
   }
  export default BusinessApp;