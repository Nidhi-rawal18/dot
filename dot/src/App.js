import React from "react";
import Home from "./Components/Home/Home";
import Web from "./Components/Webdesign/Web";
import About from "./Components/Home/About";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
  <>    
      <Navbar/>
         <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/web" element={<Web/>}/>
      <Route exact path="/abo" element={<About/>}/>
    </Routes>
  </>
  )
}

export default App;
