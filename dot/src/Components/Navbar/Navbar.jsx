import React from 'react'
import '../Navbar/Nav.css'
import {BsSearch } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container-fluid">
    <NavLink to="/">
    <img className='ms-4'  src='https://www.dotlinecreations.com/wp-content/uploads/2022/10/cropped-18-322x107.png' style={{width:'150px',height:'50px'}}/>
    </NavLink>
    
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
            <button className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize:'15px',fontWeight:'400',color:'#000000'}}>
            LOGO & BRANDING
            </button>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><span className="dropdown-item" to="/">Logo Design</span></li>
              <li><span className="dropdown-item" to="/">Branding</span></li>
              <li><span className="dropdown-item" to="/">Graphic Design</span></li>
              <li><span className="dropdown-item" to="/">Packaging Design</span></li>
            </ul>
          </li>

          <li className="nav-item">
            <NavLink  className="nav-link active" aria-current="page" to="/web" style={{fontSize:'15px',fontWeight:'400',color:'#000000'}}>WEB DESIGN</NavLink>
          </li>
          <li className="nav-item dropdown">
            <button className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize:'15px',fontWeight:'400',color:'#000000'}}>
          DIGITAL MARKETING
            </button>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><span className="dropdown-item" to="/">SEO</span></li>
              <li><span className="dropdown-item" to="/">SMM</span></li>
            
              <li><span className="dropdown-item" to="/">PPC</span></li>
            </ul>
          </li>
         
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/abo" style={{fontSize:'15px',fontWeight:'400',color:'#000000'}}>ABOUT US</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/" style={{fontSize:'15px',fontWeight:'400',color:'#000000'}}>CONTACT US</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/" style={{fontSize:'15px',fontWeight:'400',color:'#000000'}}>BLOG</NavLink>
          </li>
        </ul> 
        <div style={{fontSize:'25px'}}>
          <span><BsSearch/></span>
          <span className='mx-4'><AiOutlineMenu/></span>
        </div>
  
      
      </div>
    </div>
  </nav>
  )
}

export default Navbar;