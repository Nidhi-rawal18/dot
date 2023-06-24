import React from 'react'
import '../Navbar/Off.css'
import { NavLink } from 'react-router-dom';

const Offc = () => {
  return (
    <>
    <div className='clo'>
          <button type="button" className="btn-close btn-close-white clos" data-bs-dismiss="offcanvas" aria-label="Close"></button>    
    </div>
    <div className='offvas'>
    <div>
    <NavLink to='/serv' style={{textDecoration:'none'}}>
    <span  className='wedo xyz'>WHAT WE DO</span>
    </NavLink>
    </div>
    
    <div>
    <NavLink to='/lo' style={{textDecoration:'none'}}>
    <span  className='wedologo wedo'>LOGO & BRANDING</span>
    </NavLink>
    </div>
    <div>
    <NavLink to='/web' style={{textDecoration:'none'}}>
    <span  className='wedologo wedo'>WEB DESIGN</span>
    </NavLink>
    </div>
    
    <div>
    <NavLink to='/webport' style={{textDecoration:'none'}}>
    <span  className='wedo xyz'>PORTFOLIO</span>
    </NavLink>
    </div>
    <div >
    <NavLink to='/digi' style={{textDecoration:'none'}}>
    <span className='wedologo wedo'>DIGITAL MARKETING</span>
    </NavLink>
    </div>

    <div>
    <NavLink to='/abo' style={{textDecoration:'none'}}>
    <span  className='wedo'>ABOUT US</span>
    </NavLink>
   
    </div>
    <div>
    <NavLink to='/con' style={{textDecoration:'none'}}>
    <span className='wedo'>CONTACT US</span>
    </NavLink>
    </div>
    <div>
    <NavLink to='/blo' style={{textDecoration:'none'}}>
    <span className='wedologo wedo'>BLOG</span>
    </NavLink>
    </div>
    </div>

  
    </>
  )
}

export default Offc;