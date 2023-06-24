import React from 'react'
import '../Parts/Are.css'
import { NavLink } from 'react-router-dom';
const Areyou = () => {
  return (
    <div>   <div className='row mt-5'>
    <div className='col-lg-6 col-md-12 col-sm-12'>
       <div className='container-fluid'>
          <div className='card about1'  data-aos="fade-right"  data-aos-duration="1000">
            <h5 className='are mt-5'>Are You Ready?</h5>
            <h3>
             <span className='start'>Start a New Project</span>
            </h3>
             <div className="input-group  p-2 mt-5 mb-5 ip" style={{ width:"70%", backgroundColor:"rgb(112 112 112/25%)", borderRadius:40}} >
             <input type="text" className="form-control bg-transparent border-0 rounded-0 shadow-none ener" placeholder="Enter Your Email Address" aria-label="Enter Your Email Address" aria-describedby="basic-addon2" />
             <span className="input-group-text bg-transparent border-0 rounded-0 subt" id="basic-addon2" >SUBMIT</span>
           </div>
          </div>
       </div>     
    </div>
    <div className='col-lg-6 col-md-12 col-sm-12'>
    <div className='container-fluid'>
          <div className='card about2'  data-aos="fade-left"  data-aos-duration="1000" >
            <h5 className='what1 mt-5'>What Are You Waiting for?</h5>
            <h3>
             <span className='start'>Let's Talk About Work</span>
            </h3>
            <div className='mt-5 mb-5'>
            <NavLink to='/abo'>
            <button className='star'>START NOW</button>
            </NavLink>
           
             
            </div>
          </div>

       </div>  
   </div>

</div></div>
  )
}

export default Areyou;