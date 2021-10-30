import React from 'react'
import "./sectio.css";
import manageduser from "./images/manageduser.jpg";
import manageduser1 from "./images/manageduser1.jpg";
import desskservice from "./images/desskservice.jpg";
import image12 from "./images/image12.png";
import image22 from "./images/image22.png";
import image13 from "./images/image13.png";
import Footer from "./footer";
import { NavLink } from "react-router-dom";



function Muser(){
    return(
        
        
        <div >
          <Body1 />
          <Body2/>
          <Body3/>
          <Body4/>
  
      </div>

        
    );
}

function Body1() {
    return (
      <section>
        <div className="user">
        <h1 className="text-2xl px-15 text-white pt-20 md:(text-4xl )">Manage User</h1>
        <p className="text-xl px-15 text-white pt-10 md:(text-2xl )">We manage our </p>
        </div>
        <div className="md:(h-full) menu ">
          <nav className=" ">
            <ul className="geeks flex flex-col  text-white text-center md:(grid grid-cols-4 gap-x-3 text-white text-xl) ">
              <li>
              <NavLink
                  exact
                  activeClassname="active"
                  to="/muser"
                  className=" geeks a"
                >
                  Managed
                  <br /> User
                </NavLink>
              </li>
              <li>
                <NavLink to="/enduser"
                 
                >
                  End-User <br/>Support
                </NavLink>
              </li>
              <li>
                <NavLink to="/helpdesk">
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
  
 function Body2(){
     return(
         <section>
           <div>
           <h1 className="text-xl font-bold text-amber-400 text-center mt-8 p-4 md:(text-2xl)">We provide top-notch support so you can focus on your business </h1>
           <p className="px-4 md:(px-50)mt-4 text-center">End-user support can take some time.
            It's nearly impossible to optimize technology for complete protection.
             Take care of your computer.
               targeted.
           </p>
           <p className="px-4 md:(px-50) mt-4 text-center ">Managed Users helps organizations focus on critical IT initiatives
            and increase productivity with key end-user support. With a multi-channel, 24x7 
            service experience, you can rest assured that your employees are supported by effective 
            technology that can advance your organization's mission.
           </p>
        </div> 
         </section>
     )
 }
 function Body3(){

    const items = [
        {
          image: manageduser,
          text1: "End User Support",
          text: "Our support can be integrated with Terminal Server services, which are managed to keep end-user technology up-to-date, optimized and secure.",
        },
        {
            image: desskservice,
            text1: "Global Service Desk",
            text: "We can provide both employees and customers with the support your organization needs for its own applications.",
          },
        {
          image: manageduser1,
          text1: "Business Application Support",
          text: "Multi-channel, 24x7 remote support provides immediate assistance to quickly resolve end-user issues.",
        },
        
      ];
     return(
         <section className="bg-gray-200">
             <div className="mt-4">
                 <h1 className="text-xl font-bold text-center mt-8 p-4 md:(text-2xl)">Managed User includes options for:</h1>
            
             </div>
             <div className="grid grid-cols-2 md:(grid-cols-3 place-items-center px-8  ) mt-6 p-2  ">
        {items.map((i) => (
          <>
            <div className="w-full py-2 px-2  rounded-b-2xl md:(h-full) ">
              <img
                src={i.image}
                alt=""
                className="rounded-full  w-full "
              />
              <div className="h-2 flex w-full  " />
              <div className="px-2">
                  <h1 className=" font-bold text-amber-400 text-xl mt-4 px-4 md:(text-2xl) text-center">{i.text1}</h1>
                <p className="w-full mt-4 text-sm md:(p-3 text-xl) ">{i.text}</p>
                <div className="text-center"><button
            type="submit"
            className="mt-4 px-4 bg-amber-400 p-2 text-white border-2 border-white-600 rounded-lg md:(text-xl rounded-xm)"
          >
            LEARN MORE
          </button></div>
              </div>
            </div>
          </>
        ))}
      </div>
          
         </section>
     )
 }

 function Body4(){
  const items = [
    {
      image: image12,
      text1: "Best-In Class Support",
      text: "Delivered by a deep bench of certified, technical experts that utilize proven processes and leading technologies, we provide a seamless customer experience.",
    },
    {
        image: image22,
        text1: "Flexibility",
        text: "We provide multi-channel communication options and support your users where they are and when they need it.",
      },
    {
      image: image13,
      text1: "Scalability",
      text: "As your organization grows, we make scaling your end-user support easy so you can focus on the bigger picture.",
    },
    
  ];
   return(
   <section>
     <div className="mt-20 border-t-8 mx-20">
                 <h1 className="text-xl font-bold text-amber-400 text-center mt-8 p-4 md:(text-2xl)">With Managed User, Power Your Workforce With:</h1>
            
             </div>
             <div className="grid grid-cols-1 md:(grid-cols-3 place-items-center px-8  ) mt-6 p-2  ">
        {items.map((i) => (
          <>
            <div className=" py-2 px-2   md:() ">
              <img
                src={i.image}
                alt=""
                className="px-30"
              />
              <div className="h-2 flex w-full  " />
              <div className="px-2">
                  <h1 className=" font-bold  text-xl mt-4 px-4 md:(text-xl) text-center">{i.text1}</h1>
                <p className="w-full mt-4 text-sm md:(p-3 text-xl) text-center">{i.text}</p>
               
              </div>
            </div>
          </>
        ))}
      </div>
   </section>
   )
 }

export default Muser;