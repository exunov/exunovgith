import React, { useState } from "react";
import logo from "./images/Exulogo.png";
import bg1 from "./images/securite.png";
import { Link, NavLink } from "react-router-dom";
import "./header.css";

function Head() {
  return (
    <div>
      <Header />
    </div>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function onMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className="flex flex-row justify-between ">
      <div className="md:( hidden) mt-3 float-right" onClick={onMenuClick}>
        <MenuButton isMenuOpen={isMenuOpen} />
      </div>

      {isMenuOpen && (
        <div className=" md:hidden">
          <ul className="border-t border-b divide-y place-items-center">
            <li className="p-4 border-l border-r">
              <NavLink to="/mcyber">Service</NavLink>
              <ul className=" absolute z-2  shadow-2xl border bg-light-50 rounded-2xl">
                <li>
                  <NavLink to="/mcloud">Managed Cloud</NavLink>
                </li>

                <li>
                  <NavLink to="/mcyber">Managed Cybersecurity</NavLink>
                </li>

                <li>
                  <NavLink to="/muser">Managed User</NavLink>
                </li>

                <li>
                  <NavLink to="/communication">
                    Managed Communication & Colaboration
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/audi">Audit </NavLink>
                </li>

                <li>
                  <NavLink to="/onsite">
                    Onsite IT infrastructure Support{" "}
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/cloud">Vitual CISCO </NavLink>
                </li>

                <li>
                  <NavLink to="/manage">Risks management</NavLink>
                </li>

                <li>
                  <NavLink to="/software">Business Continuity Plan</NavLink>
                </li>
              </ul>
            </li>

            <li className="p-4 border-l border-r">
              <NavLink to="/dev_web">SoftwareDeveloppement</NavLink>

              <ul className="absolute z-2 text-center shadow-2xl border bg-light-50  rounded-2xl">
                <li>
                  <Link to="/custom">Custom Software</Link>
                </li>

                <li>
                  <Link to="/dev_web">Development</Link>
                </li>
                <li>
                  <NavLink
                    ClassName="main-nav"
                    activeClassName="main-nav-active"
                    to="/mobiledev"
                  >
                    Mobile App Development
                  </NavLink>
                </li>
                <li>
                  <Link to="/technologis">Technologies</Link>
                </li>

                <li>
                  <Link to="/enterprise_sol">Enterprise Solutions </Link>
                </li>

                <li>
                  <Link to="/stesting">Software Testing Servicdes </Link>
                </li>

                <li>
                  <Link to="/minfrastructure">Infrastructure Management</Link>
                </li>

                <li>
                  <Link to="/Data-service">Database Services</Link>
                </li>

                <li>
                  <Link to="/it_staffing">IT Staffing Services</Link>
                </li>
                <li>
                  <Link to="/office">Office 365</Link>
                </li>
              </ul>
            </li>
            <li className="p-4 border-l border-r">
              <Link to="/product">Product</Link>
            </li>

            <li className="p-4 border-l border-r">
              <NavLink to="/training">Training</NavLink>
            </li>
          </ul>
        </div>
      )}
      <div className=" ml-30 md:(animate-pulse hover:animate-bounce)">
        <Logo />
      </div>

      <div className="px-4 ">
        <div className=" hidden text-xm flex space-x-2 mt-1  font-thin md:(flex text-xl ml-100 items-start mt-3  ) justify-center items-start">
          <div className=" ">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuButton(props) {
  const { isMenuOpen } = props;

  if (isMenuOpen) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 font-bold text-center"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 font-bold"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

function Logo() {
  return (
    <div>
      <img src={logo} alt="" />
    </div>
  );
}

function Menu() {
  return (
    <div className="text-sm">
      <ul
        id="navigation"
        className=" flex space-x-2 md:(font-thin space-x-10 )"
      >
        <li>
          <NavLink
            ClassName="main-nav"
            activeClassName="main-nav-active"
            to="/mcyber"
          >
            Services
          </NavLink>
          <ul className="md:(absolute z-2 text-center shadow-2xl border bg-light-50 rounded-2xl)">
            <li>
              <Link to="/mcloud">Managed Cloud</Link>
            </li>

            <li>
              <Link to="/mcyber">Managed Cybersecurity</Link>
            </li>

            <li>
              <Link to="/muser">Managed User</Link>
            </li>

            <li>
              <Link to="/communication">
                Managed Communication & Colaboration{" "}
              </Link>
            </li>

            <li>
              <Link to="/audi">Audit </Link>
            </li>

            <li>
              <Link to="/onsite">Onsite IT infrastructure Support </Link>
            </li>

            <li>
              <Link to="/cloud">Vitual CISCO </Link>
            </li>

            <li>
              <Link to="/manage">Risks management</Link>
            </li>

            <li>
              <Link to="/software">Business Continuity Plan</Link>
            </li>
          </ul>
        </li>

        <li>
          <NavLink
            ClassName="main-nav"
            activeClassName="main-nav-active"
            to="/dev_web"
          >
            SoftwareDevelopment
          </NavLink>
          <ul className="md:(absolute z-2 text-center shadow-2xl border bg-light-50  rounded-2xl)">
            <li>
              <Link to="/custom">Custom Software</Link>
            </li>

            <li>
              <Link to="/dev_web">Development</Link>
            </li>
            <li>
              <NavLink
                ClassName="main-nav"
                activeClassName="main-nav-active"
                to="/mobiledev"
              >
                Mobile App Development
              </NavLink>
            </li>
            <li>
              <Link to="/technologis">Technologies</Link>
            </li>

            <li>
              <Link to="/enterprise_sol">Enterprise Solutions </Link>
            </li>

            <li>
              <Link to="/stesting">Software Testing Servicdes </Link>
            </li>

            <li>
              <Link to="/minfrastructure">Infrastructure Management</Link>
            </li>

            <li>
              <Link to="/Data-service">Database Services</Link>
            </li>

            <li>
              <Link to="/it_staffing">IT Staffing Services</Link>
            </li>
            <li>
              <Link to="/office">Office 365</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="">Ressources</Link>
          <ul className="md:(absolute z-2 bg-light-50 border text-center rounded-2xl )">
            <li>
              <Link to="/blog">Blog</Link>
            </li>

            <li>
              <Link to="/webevent">Webinars & Events</Link>
            </li>

            <li>
              <Link to="/videos">Videos</Link>
            </li>

            <li>
              <Link to="/case">Case Studies</Link>
            </li>

            <li>
              <Link to="/data_sheets">Data sheets</Link>
            </li>

            <li>
              <NavLink to="/certification">Certification & Credential</NavLink>
            </li>
          </ul>
        </li>

        <li>
          <NavLink
            ClassName="main-nav"
            activeClassName="main-nav-active"
            to="/product"
          >
            Products
          </NavLink>
        </li>

        <li>
          <NavLink
            ClassName="main-nav"
            activeClassName="main-nav-active"
            to="/training"
          >
            Training
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Head;
