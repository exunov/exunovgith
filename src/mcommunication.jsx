import React from "react";
import Footer from "./footer";
import Head from "./header";
import Headertop from "./headertop";
import image12 from "./images/image12.png";
import image22 from "./images/image22.png";
import "./sectio.css";

function Mcommunication() {
  return (
    <div>
     <Headertop />
      <Head />
      <Body />
      <Body1 />
      <Body2/>
      <Body3/>
      <Footer />
    </div>
  );
}

function Body() {
  return (
    
      

      <div className="user  text-light-100 md:(p-30 h-100) p-8 space-y-5 transform transition-all  ">
        <h1 className="font-bold text-xl md:(text-5xl)">
          <marquee behavior="" direction="">
            {" "}
           Exunov Managed Communication and Collaboration
          </marquee>
        </h1>
        
      </div>
    
  );
}
function Body1(){
    return(
        <div>
          <div>
           <h1 className="text-xl font-bold text-amber-400 text-center mt-10 p-4 md:(text-2xl)">Connectivity is the key to productivity </h1>
           <p className="px-4 md:(px-50) mt-4 text-center text-sm">In today's environment, staff must be connected
            anytime, anywhere. Data pricing allows you to implement cost-effective, scalable
             communication and collaboration solutions that provide users with all the benefits 
             of traditional phone systems, as well as a multitude of collaboration capabilities.
           </p>
            <p className="px-4 md:(px-50) mt-4 text-center font-bold text-xl">Managing multiple communication platforms for a distributed 
             can be time-consuming, costly, and result in lost productivity.</p>
             <p className="px-4 md:(px-50) mt-4 text-center text-sm">Whether it's managing an existing on-premise solution, managing multiple 
             communication platforms, or ensuring the security and accessibility of your 
             communication and collaboration solutions, your IT department is more strategic.
             This can be inferred from various initiatives.
           </p>
        </div> 
        </div>
    )
}
function Body2(){
  return(
  <div className=" mt-10 px-4 md:(border-t-6  mx-40)">
    <h1 className="text-xl font-bold text-amber-400 text-center mt-6 md:(text-2xl )">Exunov Managed Communication and Collaboration streamlines your 
      communications and provides high standards of reliability and security.</h1>
      <p className="px-4 md:(px-50) mt-4 text-center text-sm">
     Our Managed Communication and Collaboration offers a variety of solutions 
     to stay connected to your business. Our experience and associative associations
      help identify and implement the right communication solutions for your needs, 
      ensure overall business continuity, reduce complexity and enable organizational mobility.
     </p>
  </div>
  )
}
function Body3(){
  
  return(
    <section className="mt-8">
      <h1 className="text-xl font-bold text-amber-400 text-center mt-6 md:(text-2xl )">Key services include:</h1>
    <div class="md:(grid grid-cols-2 divide-x-3 divide-yellow-400 px-20) mt-6 grid grid-cols-1 divide-x-3 divide-yellow-500 gap-18">
      <div>
      
      <img src={image22} alt="" className="mt-6 mx-25"/> 
      <div className="md:(pt-5) ">
                <h1  className="text-xl font-bold  mt-6 p-4 md:(text-2xl)">Unified Communications as a Service (UCaaS)</h1>
                      <p className="px-4 md:(px-10) mt-4 text-center text-sm">
                        UCaaS is a single cloud communications solution offering integrated voice, video, messaging and team messaging.
                         We can help you find the right technology and capabilities for your workforce needs.
                      </p>
                      <h2 className="text-xl font-bold text-center mt-6 p-4 md:(text-xl)">Key UCaaS features include:</h2>
                <ul className="list-disc list-inside md:(mx-25) px-4">
                  <li>Hosted PBX</li>
                  <li>Video conferencing</li>
                  <li>Instant messaging</li>
                  <li>Mobile application</li>
                  <li>Desktop and softphones</li>
                  <li>Toll-free and local numbers</li>
                  
                </ul>
                </div>
      </div>
      <div>
      <img src={image12} alt=""  className="mt-6 mx-25"/> 
      <div className="md:(pt-5) ">
                <h1  className="text-xl font-bold  mt-6 p-4 md:(text-2xl)">Contact Center as a Service (CCaaS)</h1>
                      <p className="px-4 md:(px-10) mt-4 text-center text-sm">
                      Support and communicate with your customers seamlessly with CCaaS. 
                      This high-quality cloud-based customer experience solution enables your 
                      business to establish inbound and outbound communication with customers or prospects.
                      </p>
                      <h2 className="text-xl font-bold text-center mt-6 p-4 md:(text-xl)">Key features of CCaaS include:</h2>
                <ul className="list-disc list-inside md:(mx-20) px-4">
                  <li>Intelligent call and email routing</li>
                  <li>CRM, database and RESTful API integrations</li>
                  <li>Workforce optimization and management</li>
                  <li>On-demand access to customer account information and history</li>
                  <li>Voice, email, chat and social media channels</li>
                  
                </ul>
                </div>
      </div>
      </div>
      </section>
  )
}
export default Mcommunication;