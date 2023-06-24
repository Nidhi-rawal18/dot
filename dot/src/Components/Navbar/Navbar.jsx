import React from 'react'
import '../Navbar/Nav.css'
import {BsSearch } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import Offc from './Offc'
import {BiSearch} from 'react-icons/bi'

const Navbar = () => {
  return (
    <>  
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white">
    <div className="container-fluid">

    
    <NavLink to="/">
    <img className='ms-4'  src='https://www.dotlinecreations.com/wp-content/uploads/2022/10/cropped-18-322x107.png' style={{width:'150px',height:'50px'}}/>
    </NavLink>
    
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      


      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
            <button className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            LOGO & BRANDING
            </button>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><NavLink className="dropdown-item" to="/lo">Logo Design</NavLink></li>
              <li><NavLink  className="dropdown-item" to="/bran">Branding</NavLink></li>
              <li><NavLink className="dropdown-item" to="/Gra">Graphic Design</NavLink></li>
              <li><NavLink className="dropdown-item" to="/Pack">Packaging Design</NavLink></li>
            </ul>
          </li>

          <li className="nav-item">
            <NavLink  className="nav-link" aria-current="page" to="/web">WEB DESIGN</NavLink>
          </li>


          <li className="nav-item dropdown">
            <NavLink  className="nav-link dropdown-toggle" to="/digi" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          DIGITAL MARKETING
            </NavLink>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><NavLink  className="dropdown-item" to="/SE">SEO</NavLink></li>
              <li><NavLink  className="dropdown-item" to="/SM">SMM</NavLink></li>
            
              <li><NavLink  className="dropdown-item" to="/PP">PPC</NavLink></li>
            </ul>
          </li>
         
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/abo">ABOUT US</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/con">CONTACT US</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/blo">BLOG</NavLink>
          </li>
        </ul> 
        <div style={{fontSize:'25px'}}>
        
          <button className="offcan" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight1" aria-controls="offcanvasRight"><BsSearch/></button>
          {/* <span className='mx-4'><AiOutlineMenu/></span> */}
          <button className="offcan mx-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><AiOutlineMenu/></button>
        </div>

        
  
      
      </div>
    </div>
  </nav>
 

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel"  style={{width:'100%',backgroundColor:'#04132B'}}>
 
  <div class="offcanvas-body">
  <Offc/>
  </div>
</div>
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight1" aria-labelledby="offcanvasRightLabel"  style={{width:'100%'}}>
 
 <div class="offcanvas-body">
 <div className='clo'>
          <button type="button" className="btn-close  clos2" data-bs-dismiss="offcanvas" aria-label="Close"></button>    
    </div>
    <div className='container-fluid'>
    <div className="input-group ipgrou mb-3">
  <input type="text" className="form-control iput" placeholder="" aria-label="" aria-describedby="button-addon2"/>
  <button className="btn-outline-secondary iput2" type="button" id="button-addon2"><BiSearch/></button>
</div>
    </div>
 </div>
</div>
  </>
  )
}

export default Navbar;