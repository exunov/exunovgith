import React from 'react'
import "./sectio.css";
import imge from "./images/imge.png";
import { NavLink } from "react-router-dom";


function Helpdesk(){
    return(
        <div>
            <Body1/>
            
        </div>
    )
}



function Body1() {
    return (
      <section>
        <div className="user">
        <h1 className="text-2xl px-15 text-white pt-45 md:(text-3xl )">End User Support</h1>
        </div>
        <div className="md:(h-full) menu ">
          <nav className=" ">
            <ul className="geeks flex flex-col  text-white text-center md:(grid grid-cols-4 gap-x-3 text-white text-xl) ">
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
  export default Helpdesk;