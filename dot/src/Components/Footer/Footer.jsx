import React from 'react';
import '../Footer/Footer.css';
import Line from './Line';
import {CgFacebook} from 'react-icons/cg';
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {GrLinkedinOption} from 'react-icons/gr'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
        <div className='mt-5'>
          <footer className="bg-dark text-center text-lg-start text-white">
              <div className="p-4">
                  <div className='row mt-4'>
                      <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                          <h6 className="text-uppercase serv">Services</h6>
                            <Line/>
                            <ul class="list-unstyled mb-0 mt-3">
            <li>
            <NavLink to='/lo' style={{textDecoration:'none'}}>
            <span style={{color:'#1bb0ce'}}>Logo Design</span>
            </NavLink>
           
            </li>
            <li>
            <NavLink to='/bran' style={{textDecoration:'none'}}>
              <span  style={{color:'#1bb0ce'}}>Branding</span>
              </NavLink>
            </li>
            <li>
            <NavLink to='/Gra' style={{textDecoration:'none'}}>
              <span href="#!" style={{color:'#1bb0ce'}}>Graphics design</span>
              </NavLink>
            </li>
            <li>
            <NavLink to='/Pack' style={{textDecoration:'none'}}>
              <span style={{color:'#1bb0ce'}}>Packaging Design</span>
              </NavLink>
            </li>
            <li>
            <NavLink to='/web' style={{textDecoration:'none'}}>
              <span  style={{color:'#1bb0ce'}}>Website Design</span>
              </NavLink>
            </li>
            <li>
            <NavLink to='/lo' style={{textDecoration:'none'}}>
              <span  style={{color:'#1bb0ce'}}>E-commerce Website Design</span>
              </NavLink>
            </li>
            <li>
            <NavLink to='/lo' style={{textDecoration:'none'}}>
              <span style={{color:'#1bb0ce'}}>One Page Website</span>
              </NavLink>
            </li>
            <li>
            <NavLink to='/digi' style={{textDecoration:'none'}}>
              <span  style={{color:'#1bb0ce'}}>Digital Marketing</span>
              </NavLink>
            </li>
            <li>
            <NavLink to='/SE' style={{textDecoration:'none'}}>
              <span  style={{color:'#1bb0ce'}}>Search Engine Optimization</span>
              </NavLink>
            </li>
            <li>
            <NavLink to='/SM' style={{textDecoration:'none'}}>
              <span  style={{color:'#1bb0ce'}}>Social Media Marketing</span>
              </NavLink>
            </li>
            <li>
            <NavLink to='/PP' style={{textDecoration:'none'}}>
              <span  style={{color:'#1bb0ce'}}>Pay Per Click Services</span>
           </NavLink>
            </li>
                            </ul>
                      </div>
                      <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                          <h6 className="text-uppercase serv">Information</h6>
                          <Line/>

                          <ul class="list-unstyled mb-0 mt-3 ">
            <li>
              <span href="#!" style={{color:'#1bb0ce'}}>About Us</span>
            </li>
            <li>
              <span href="#!" style={{color:'#1bb0ce'}}>Web Portfolio</span>
            </li>
            <li>
              <span href="#!" style={{color:'#1bb0ce'}}>What We Do</span>
            </li>
            <li>
              <span href="#!" style={{color:'#1bb0ce'}}>Contact us</span>
            </li>
            <li>
              <span href="#!" style={{color:'#1bb0ce'}}>Testimonials</span>
            </li>
            <li>
              <span href="#!" style={{color:'#1bb0ce'}}>Blog</span>
            </li>
            <li>
              <span href="#!" style={{color:'#1bb0ce'}}>Privacy Policy</span>
            </li>
            <li>
              <span href="#!" style={{color:'#1bb0ce'}}>Legal Disclaimer</span>
            </li>
            <li>
              <span href="#!" style={{color:'#1bb0ce'}}>Terms & Conditions</span>
            </li>
            <li>
              <span href="#!" style={{color:'#1bb0ce'}}>Write for us</span>
            </li>
          
          </ul>
                      </div>
                      <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                          <h6 className="text-uppercase serv">Contact</h6>
                          <Line/>
                          <div className='mt-3'>
                          <p style={{fontSize:'15px'}}>29,30 S.B. Vihar 1st Floor, Behind Mahima Trinity Mall, Swej Farm, Jaipur</p>
                          <b>Email Address :- </b>
                          <span style={{color:'#1bb0ce'}}>info@dotlinecreations.com</span>

                          <div className='mt-2 mb-2'>
                          <b>Contact Number :-</b>
                          <span style={{color:'#1bb0ce'}}>+918905409677</span>
                          </div>
                           <strong style={{color:'#1bb0ce',fontSize:'12px'}}>Get Directions on Google Maps</strong>
                          </div>


                        
                      </div>
                      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                          <h6 className="text-uppercase serv">CERTIFICATES </h6>
                           <Line/>
                          <div className='ms-3 mt-3'>
                            <img  alt='' src='https://www.dotlinecreations.com/wp-content/uploads/2022/08/DMP-LLP-Trustpilot-logo.webp'  style={{width:'80%'}}/>
                          </div>
                          <div className='ms-3 mt-3'>
                            <img  alt='' src='https://www.dotlinecreations.com/wp-content/uploads/2022/08/dmca-badge-w250-2x1-01.png'  style={{width:'80%'}}/>
                          </div>

                         
                      </div>
                      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                           <h6 className="text-uppercase serv">Review</h6>
                           <Line/>
                      </div>

                   </div>
              </div>
              <div className="container-fluid p-4" style={{backgroundColor:'rgb(16 16 16 / 98%)',display:'flex',justifyContent:'space-between'}}>
    
                <p className="foot">DOTLINE CREATIONS © All Rights Reserved.</p>
                <p className='ico'> <CgFacebook/> <AiOutlineTwitter/> <AiOutlineInstagram/> <GrLinkedinOption/></p>
             
               </div>
          </footer>

        </div>

  )
}

export default Footer;