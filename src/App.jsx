import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SoftwareDev from "./software";
import Storage from "./storage";
import Product from "./product";
import Onsite from "./onsite";
import Principale from "./server";
import TerminalInventory from "./terminalinventory";
import Devweb from "./dev_web";
import Service from "./service";
import Manage from "./manage";
import Home from "./home";
import Mcyber from "./mcyber";
import Mobile from "./mobile";
import Training from "./training";
import Mcloud from "./mcloud";
import Network from "./network";
import EndpointService from "./endpoint services";
import Data from "./data";
import Contactus from "./contact_us";
import Exunov from "./Exunov";
import Azure from "./azure";
import Office from "./office";
import Mdetection from "./mdetection";
import Cyberpro from "./cyberpro";
import Cvm from "./cvm";

function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/service">
            <Service />
          </Route>

          <Route path="/manage">
            <Manage />
          </Route>

          <Route path="/software">
            <SoftwareDev />
          </Route>

          <Route path="/product">
            <Product />
          </Route>

          <Route path="/training">
            <Training />
          </Route>

          <Route path="/dev_web">
            <Devweb />
          </Route>

          <Route exact path="/mcyber">
            <Mcyber />
          </Route>

          <Route exact path="/mcloud">
            <Mcloud />
          </Route>

          <Route exact path="/mobiledev">
            <Mobile />
          </Route>

          <Route exact path="/onsite">
            <Onsite />
          </Route>

          <Route exact path="/server">
            <Principale />
          </Route>

          <Route exact path="/storage">
            <Storage />
          </Route>
          <Route exact path="/terminal-inventory">
            <TerminalInventory />
          </Route>
          <Route exact path="/network">
            <Network />
          </Route>

          <Route exact path="/endpoint services">
            <EndpointService />
          </Route>

          <Route exact path="/data">
            <Data />
          </Route>
          <Route exact path="/contact">
            <Contactus />
          </Route>
          <Route exact path="/exunov">
            <Exunov />
          </Route>

          <Route exact path="/azure">
            <Azure />
          </Route>
          <Route exact path="/office">
            <Office />
          </Route>

          <Route exact path="/mdetection">
            <Mdetection />
          </Route>

          <Route exact path="/cyberpro">
            <Cyberpro />
          </Route>

          <Route exact path="/cvm">
            <Cvm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
