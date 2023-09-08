
import React from "react";
import { Route,Routes} from "react-router";
import Navbar from "./components/NavBar/Navbar";
import Events from "./components/Events/Events";
// import About from "./components/About/About";
import Home from "./components/Home/Home";

import Resources from "./components/Resources/Resources";



function App() {

  return < >

      <Navbar />
      <Routes >
      <Route path = "/" exact  element = { < Home />} /> 
      {/* <Route path = "/about"  element = { < About />}/> */}
      <Route path = "/events" element = { < Events />}/> 
     <Route path = "/resources"  element = { < Resources/> }/> 
  </Routes>    
  </>
}

export default App;