import React from 'react'
import './mcloud.css'
import {NavLink} from 'react-router-dom';


function Office(){
    return(
    <div>
     <div className="img">
         <div className="font-bold-italic text-white text-3xl px-10 pt-4">Managed<br/> cloud</div>
          <p className="text-white text-xl px-10 pt-8">We help companies of all sizes manage AWS <br/> Exunov is the official partner of Amazon Web Services.<br/> We manage all AWS services</p>
     </div>
     
     <div className="">
     <nav className=" ">
         <ul className="geeks flex flex-row grid grid-cols-3 gap-x-2 text-white text-sm md:(grid grid-cols-4 gap-x-3 text-white text-xl) " >
            <li ><NavLink exact activeClassname="active" to="/mcloud" >AWS</NavLink></li> 
            <li className=""><NavLink activeClassname="active" to="/azure" className="geeks a ">Azure</NavLink></li>
            <li className=""><NavLink activeClassname="active" to="/office">Office 365</NavLink></li> 
            
         </ul>
     </nav>
 
 </div>
 </div>
    )
}
export default Office;