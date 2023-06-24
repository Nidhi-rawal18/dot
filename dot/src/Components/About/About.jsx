import React from 'react'
import '../About/About.css';
import Line from '../Footer/Line'
import abo from '../About/Image/about3.jpg'
import Footer from  '../Footer/Footer'
import Areyou from '../Parts/Areyou';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <>
   <div style={{overflowX:'hidden'}}>
     <div className='row ghijkl'>
     <div className='col-lg-5 col-md-12 col-sm-12'>
     <div className='container-fluid mt-5'>
     <h3 className='revolve' data-aos="zoom-in-up"  data-aos-duration="1000">
        <span className='revol'>A Revolutionary</span>
        <span className='creat'><br/>Creative Company</span>
      </h3>
      <Line/>
      <p className='mt-3' style={{fontSize:'16px',fontWeight:'200',color:'#393939',}}>At DotLine Creations we help communicate your brand’s vision through creative campaigns, generating conversions and brand loyalty on the way forward. Our Marketing Deliverables cover every need for a business to enter, propagate and sustain in the competitor’s market in 2022. We have carefully prepared our deliverables to provide you with the full lot of things you might need to reach your desired target with results.</p>
     </div>
     
     </div>
     <div className='col-lg-7 col-md-12 col-sm-12'>
     <div className='container-fluid mt-2'>
    <img  className='dotli'  data-aos="zoom-in-up"  data-aos-duration="1000" alt='' src='https://www.dotlinecreations.com/wp-content/uploads/2022/11/9-858x632.jpg'/>
   </div>
   </div>

     </div>
     <div className='row mt-5'>
     <div className='col-lg-4 col-md-12 col-sm-12'>
     <div className='container-fluid'>
     <h3 className='whatdo' data-aos="fade-left"  data-aos-duration="1000">
        01. What We Do​
      
      </h3>
      </div>
     
      <Line/>
      <div className='container-fluid'>
      <p className='mt-4' style={{color:'#444'}}>
      We believe in the power of ideas to create positive, meaningful change.<br/>
      1: The change you want to make – What is the world you want to see and what is your role in it?<br/>
      2 : The value you want to create – How do you define the progress you want to make ?<br/>
      3 : The people you need to inspire – How do you engage and inspire those around you to be a part of this change ?

      
      </p>
      </div>

   
     </div>
     <div className='col-lg-4 col-md-12 col-sm-12'>
     <div className='container-fluid'>
     <h3 className='whatdo' data-aos="fade-left"  data-aos-duration="1000">
      02. Our Approach​
      </h3>
      </div>
      <Line/>
      <div className='container-fluid'>
      <p className=' mt-4' style={{color:'#444'}}>
      We are working on multi-faceted stories that comes to life through experiences. Their power comes from delivering on their positioning over and over again, for all audiences and through a range of environments. To tap into this power, we go deep into what makes your brand tangible, helping you shape how and where it lives and breathes.

     </p>
     </div>
     
     </div>
     <div className='col-lg-4 col-md-12 col-sm-12'>
     <div className='container-fluid'>
     <h3 className='whatdo' data-aos="fade-left"  data-aos-duration="1000">
       03.Why we
      </h3>
      </div>
      <Line/>
      
      <div className='container-fluid'>
    
      <p className=' mt-4' style={{color:'#444'}}>
      We rank no.1 by Google in the field of digital marketing. We take pains to make your product a big brand. We consider your needs our 1st point to achieve. We work hard to listen to “PERFECT” from our clients. Call us anytime, anywhere, we are always available with a smile to hear you.

      
      </p>
     </div>
     </div>

     </div>
     
     <div className='abt' style={{marginTop:'100px'}}>
     <img alt='' src={abo} style={{width:'100%',height:'70vh'}}/>
     <div className='container-fluid'>
     <div className="centered">
      <h3 style={{fontSize:'30px',fontWeight:'600',}} data-aos="fade-up"  data-aos-duration="1000">
    
     <span> PLEASE SEND US YOUR </span>
      <span style={{color:'rgb(0, 217, 166)'}}>QUESTIONS</span>
      <span> AND</span>
     </h3>
      <h3 className='' style={{fontSize:'30px',fontWeight:'600'}} data-aos="fade-up"  data-aos-duration="1000">
      <span>  WE CAN</span>
      <span  style={{color:'rgb(0, 217, 166)'}}> HELP</span>
      <span> YOU BETTER</span>
      </h3>
      <NavLink to='/con'>
      <button className='btn ms-3 mt-5' data-aos="fade-in-up"  data-aos-duration="1000"  style={{borderRadius:'25px',padding:'15px 45px',fontSize:'13px',color:'#eee', fontFamily: "Quicksand"}}>CONTACT US</button>

      </NavLink>
     </div>
     </div>    
   
 </div>
     </div>

     <Areyou/>


     <Footer/>
   

  





   
</>

   
  )
}

export default About;