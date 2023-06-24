import React from "react";
import Home from "./Components/Home/Home";
import Web from "./Components/Webdesign/Web";
import About from "./Components/About/About";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Logo from "./Components/Logo & Branding/Logo";

import Bran from "./Components/Logo & Branding/Bran";
import Blog from "./Components/Blog/Blog";
import Graphic from "./Components/Logo & Branding/Graphic";
import Packaging from "./Components/Logo & Branding/Packaging";
import Digital from "./Components/DigitalMarketing/Digital";
import PPC from './Components/DigitalMarketing/PPC'
import SEO  from './Components/DigitalMarketing/SEO'
import SMM  from './Components/DigitalMarketing/SMM'
import Contact from "./Components/Contact/Contact";
import Service from "./Components/Service/Service";
import Webport from "./Components/Webportfolio/Webport";

const App = () => {
  return (
  <>   
       <Navbar/>
       <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/web" element={<Web/>}/>
      <Route exact path="/abo" element={<About/>}/>
      <Route exact path="/lo" element={<Logo/>}/>
      <Route exact path="/bran" element={<Bran/>}/>
      <Route exact path="/blo" element={<Blog/>}/>
      <Route exact path="/Gra" element={<Graphic/>}/>
      <Route exact path="/Pack" element={<Packaging/>}/>
      <Route exact path="/digi" element={<Digital/>}/>
      <Route exact path="/PP" element={<PPC/>}/>
      <Route exact path="/SE" element={<SEO/>}/>
      <Route exact path="/SM" element={<SMM/>}/>
      <Route exact path="/con" element={<Contact/>}/>
      <Route exact path="/serv" element={<Service/>}/>
      <Route exact path="/webport" element={<Webport/>}/>
      
      
    </Routes>
  </>
  )
}

export default App;
