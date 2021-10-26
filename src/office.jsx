import React from 'react'
import './mcloud.css'
import Footer from "./footer";
import Head from "./header";
import Headertop from "./headertop";
import eye1 from './images/eye1.png'
import {NavLink} from 'react-router-dom';

function Office(){
    return(
        <div>
        <Body1/>
        <Body2/>
        <Body3/>
        <Body4/>
        <Body5/>
        <Body6/>
        <Body7/>
        <Body8/>
        <Footer/>
        </div>
    )
}



function Body1(){
    return(
        <div>
            <Headertop />
             <Head />
        <div className="img md:(p-20)">
          <h1 className="font-bold text-white text-3xl px-10 pt-4 md:(text-5xl)">
            Managed
            <br /> cloud
          </h1>
          <p className="text-white  px-10 pt-8 md:(text-2xl) ">
            We help companies of all sizes manage AWS <br /> Exunov is the
            official partner of Amazon Web Services.
            <br /> We manage all AWS services
          </p>
        </div>
  
        <div className=" md:(h-full) menu">
          <nav className=" ">
            <ul className="geeks flex flex-col text-center text-white text-xl md:(grid grid-cols-3 gap-3 text-white text-4xl place-items-center) ">
              <li>
                <NavLink exact activeClassname="active" to="/mcloud">
                  AWS
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  activeClassname="active"
                  to="/azure"
                  
                >
                  Azure
                </NavLink>
              </li>
              <li className="">
                <NavLink activeClassname="active" to="/office"
                className="geeks a ">
                  Office 365
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
}

function Body2(){
    return(
        <section>
           <div className="mt-4">
               <h1 className="text-xl font-bold text-center md:(text-3xl) px-4 ">Boost your productivity with our Microsoft 365 solutions</h1>
               <p className="text-justify px-10  text-sm md:(text-xl px-50) mt-2">Boost your business performance with Microsoft 365 Consulting Services (formerly Office 365) 
                   from EXUNOV. As a Microsoft Gold Partner and Microsoft Cloud Solutions Provider (CSP), 
                   EXUNOV offers a range of powerful Microsoft solutions to increase productivity, workflow 
                   and operations. We can help your business identify, deploy and manage the right Microsoft
                    365 solutions to meet your unique business needs. If you are ready to win with IT, contact
                     our team of Microsoft 365 consultants today!</p>
           </div>
           <div className="mt-8">
               <h2 className="text-xl font-bold text-amber-400 text-center md:(text-3xl) px-4">How can EXUNOV help with Microsoft 365?</h2>
               <p className="text-justify px-10  text-sm md:(text-xl px-50) mt-4">EXUNOV's Microsoft 365 consulting services help companies define the program 
               they want to win with IT. Our in-depth knowledge of Microsoft 365 solutions ensures you
                have the right program for your unique business needs. We help you achieve a smooth and 
                efficient cloud migration. Whether you're working with a small IT team or facilitating a
                 company-wide migration to the cloud, we design the best migration solution for your
                  business. Once the migration is complete, our Microsoft Service Desk solution will
                   meet all your needs.</p>
           </div>
        </section>
    )
}
function Body3(){
    return(
        <section>
             <div className="mt-2 bg-gray-200 p-5">
            <h1 className="mt-4 px-4 text-amber-400 text-xl font-bold text-center md:(px-20 text-3xl)">Benefits of Microsoft licensing via Dataprise :</h1>
            <p className="mt-4 px-10 md:(px-50) text-sm md:(text-xl)">This price is the same as if you bought it directly from Microsoft, but with these additional benefits:
           <ul className="list-disc list-inside mt-4 px-2 md:(px-40) ">
            <li>24x7x365 customer service and technical support</li>
            <li>Migration support, either fully managed or in addition to your IT team</li>
            <li>Proactive monitoring of Microsoft 365 tenant services with action required to address events</li>
            <li>Microsoft 365 solution activations, active user and group activity</li>
            <li>Exchange activity, application usage and mailbox usage</li>
            <li>Proactive and predictive problem management</li>
            <li>Identify potential operational risks and plan the action plans, tasks and changes needed to resolve the problem</li>
            <li>Evaluate the new features of Microsoft 365 and assess them in the context of your organization's tenant, strategies and goals to determine the adoption plan</li>
        </ul>
        </p>
          </div>
        </section>
    )
}

function Body4(){
  return(
      <section>
           
  
        
             <div className="bg-gray-100 p-6">
            <h1 className="mt-4 px-4 text-amber-400 text-xl font-bold text-center md:(px-20 text-3xl)">Additional services EXUNOV</h1>
            <p className="mt-4 px-10 md:(px-50)  text-sm md:(text-xl)">Get the most out of Microsoft 365 with these additional options:
        <ul className="list-disc list-inside mt-4 px-2 md:(px-40) ">
            <li>Quarterly reporting</li>
            <li>Quarterly review sessions</li>
            <li>Third-party backups</li>
            <li>Third-party email encryption</li>
            <li>Monitoring and alerting with automated SMS alerts</li>
            
        </ul>
        </p>
          </div>
        </section>
    

  )
}
 function Body5(){
   return(
     <section>
       <div className="mt-4 shadow-2xl  rounded-xl p-4">
         <h1 className="font-bold px-4 text-center text-amber-400 text-xl md:(text-3xl)">Microsoft 365 Accelerators</h1>
         <p className="text-sm px-4 mt-4 md:(text-xl px-50) text-justify">Does your business need hosted email solutions? Our business acceleration
            services offer the most powerful solutions for your business communication 
            competitive advantage.</p>
            <div className="md:(grid grid-cols-2 gap-4) mt-4">
              <div className=" px-4">
              <img src={eye1} alt=""className="w-12 h-12 ml-30 md:(w-18 h-18 mr-50) "/>
              <h2  className="text-center text-xl text-amber-400  mt-4 md:(text-2xl)">Email archiving</h2>
            <p className="text-sm p-2 text-center md:(text-xl px-10)mt-4">Store and manage your compliance needs with managed email archiving, 
              storage, search and retrieval solutions. Email archiving can also serve as
               a powerful email continuity solution to guard against unexpected crashes.</p>
              </div>
              <div className="px-4">
            <img src={eye1} alt=""className="w-12 h-12 ml-30 md:(w-18 h-18 mr-50) "/>
            <h2 className="text-center text-xl text-amber-400  mt-4 md:(text-2xl)">Managed anti-spam</h2>
            <p className="text-sm p-2 text-center md:(text-xl px-10)mt-4">Do you need help filtering spam, malware and viruses from your messages 
            before they reach your network? Our managed spam service is a fully hosted solution that
             provides spam filtering for businesses of all sizes in all organizations.</p>
            </div>
            </div>
       </div>
     </section>
   )
 }
 function Body6(){
   return(
     <section>
     <div className="mt-4">
       <h1 className="font-bold text-xl mt-4 text-center md:(text-3xl )">EXUNOV is a Microsoft cloud solutions provider</h1>
       <p className="text-sm mt-4 px-4 md:(text-xl px-50)">Exunov is a Microsoft Cloud Solution Provider (CSP) partner. By partnering with Exunov 
         for your Microsoft cloud license, we offer the same price as Microsoft, but with the 
         added benefits of 24/7 dedicated support, routing, immigration assistance, etc.
          We offer an integrated customer experience by handling the entire customer
           relationship including support, billing and invoicing.</p>

     </div>
     </section>
   )
 }
function Body7(){
  return(
    <section>
    <div className="mt-4 bg-gray-100">
       <h1 className="font-bold text-xl mt-4 text-center text-amber-400 p-4 md:(text-3xl )">Why choose Exunov for your organization's Microsoft 365 migration?</h1>
       <p className="text-sm px-4 md:(text-xl px-50 )p-8 ">As a Microsoft Gold Partner, Exunov has the certification and experience to overcome
          the complexity of migrating to Microsoft 365 (formerly Office 365). We develop a 
          migration solution unique to your business to maximize your investment in Microsoft
           365. With over 10 years of IT experience, Exunov ensures that your migration is 
           secure. Once your business is fully integrated, highly trained technical consultants
            can provide excellent Microsoft technical support on migration issues.</p>
    </div>
    <div>
      <h1 className="text-center text-amber-400 text-xl px-4 mt-4 md:(text-3xl )">Our in-depth expertise includes:</h1>
      <div className="px-2 space-y-2 font-thin md:(grid grid-cols-2 gap-4 px-50 )">
          <div className="md(px-30 p-4)">
           <ul className="space-y-2 px-5 mt-5 p-5">
        <div className="flex space-x-3">
         <Icon/>
          <li>Exchange</li>
        </div>
        <div className="flex space-x-3">
        <Icon/>
        <li>Power BI</li>
        </div>
        <div className="flex space-x-3">
        <Icon/>
        <li>Microsoft authentication technologies</li>
        </div>
        <div className="flex space-x-3">
        <Icon/>
        <li>Project management</li>
        </div>
        </ul>
      </div>
        <div className="md(px-10 p-2) ">
          <ul className="space-y-2 px-4 md:(px-4 p-5)">
            <div className="flex space-x-3">
              <Icon/>
              <li>SharePoint</li>
              </div>
              <div className="flex space-x-3">
              <Icon/>
              <li>Teams</li>
              </div>
              <div className="flex space-x-3">
              <Icon/>
              <li>Networking</li>
              </div>
              <div className="flex space-x-3">
              <Icon/>
              <li>and more!</li>
              </div>
                    
          </ul>
       </div>
                           
      
      </div>
    </div>
    </section>
  )
}
function Body8(){
    return(
        <section>
        <div className="mt-4 border-4 w-full">
            <h1 className="mt -4 px-4 text-amber-400 text-xl text-center font-bold p-6 md:(text-3xl )"> Maximize your investment in Microsoft 365 services with Dataprise</h1>
        </div>
        <div className="mt-4">
            <h2 className="mt -4 px-4 text-amber-400 text-xl text-center md:(text-2xl )">Need a Microsoft 365 consultant</h2>
            <h3 className="mt -4 px-4 text-xl text-center font-bold md:(text-2xl )">Does your company need a Microsoft 365 consultant?</h3>
            <p className="mt-4 text-sm px-4 md:(text-xl px-50) text-justify">Keeping up with the latest features and updates to Microsoft 365 can be difficult.
                 Data pricing is designed to keep you up to date with new features and fully prepared 
                 for future updates. With access to monthly strategy sessions, businesses can keep up 
                 with the range of powerful productivity tools and applications in Microsoft 365. 
                 We provide tips on how to get the most out of Microsoft 365.</p>
        </div>
        
        <div className="mt-4"><h2 className="mt -4 px-4 text-amber-400 text-xl text-center md:(text-2xl )">Win in IT with Microsoft Business Solutions</h2>
        <p className="mt-4 text-sm px-4 md:(text-xl px-50) text-justify">Exunov offers more than consulting, management and support services for the leading 
          Microsoft 365 solutions. From Microsoft SharePoint solutions to Teams, Azure to Power
           BI, our consultants take care of everything Microsoft. They also support the integration 
           of third party technologies such as Dell EMC solutions, cloud solutions and mobile solutions. 
           Contact your Microsoft Office 365 Data Prize Service consultant and start acquiring IT now!</p>
        </div>
        
        </section>
    )
}
function Icon(){
  return(
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}
export default Office;

