import React from 'react'
import Footer from '../Footer/Footer';
import '../Service/Service.css'
import Line from '../Footer/Line';
import {BiTachometer} from 'react-icons/bi'
import {RiCloudLine} from 'react-icons/ri'
import {MdOutlineTabletMac} from 'react-icons/md'
import {TiStopwatch} from 'react-icons/ti'
const Service = () => {
  return (
    <div style={{overflow:'hidden',marginTop:'70px'}}>
  
    <div className='container-fluid mt-5'  data-aos="zoom-in"  data-aos-duration="1000">
        <h1 className='vices'>Services</h1>
    </div>
 
   <div className='container-fluid'>
   <div className='row mt-5'>
   <div className='col-lg-5 col-sm-12 col-md-12'>
   <div className='container-fluid'>
   <h3 className='areand mt-5'  data-aos="fade-left"  data-aos-duration="1000">
    <span className='arwho'>Who We Are & </span>
   </h3>
   <h3 className='areand'  data-aos="fade-left"  data-aos-duration="1000">
    <span className='arwho'>What</span>
    <span className='arwhowe'> We Do</span>
   </h3>
   <div className='mt-5'>
   <Line/>
   </div>
  
   <p className='ms-2 mt-5'  data-aos="fade-up"  data-aos-duration="1000">
    <span style={{fontWeight:'400'}}>Our very chromosomes code for originality. We are an eclectic crew of digital-age thinkers eager to present our original ideas to the world. Among the 
    <strong>top digital marketing agencies in Jaipur</strong>, we’re in it with you, feeling the joy and the pain of creating something remarkable.</span>
   </p>
   </div>
 
   </div>
   <div className='col-lg-7  col-sm-12 col-md-12'>
   <div className='container-fluid'>
   <img alt=''  data-aos="zoom-in"  data-aos-duration="1000" src='https://www.dotlinecreations.com/wp-content/uploads/2018/08/business-woman-opening-laptop-at-office-PU4ZAGW-821x631.png' style={{maxWidth:'100%',height:'auto'}}/>
   </div>
   
   </div>

   </div>

   </div>
   <div className='container-fluid text-center' style={{marginTop:'200px'}}>
   <h3 className='areand mt-5'  data-aos="fade-left"  data-aos-duration="1000">
    <span className='arwho'>We have</span>
    <span className='arwhowe'>everything </span>
   </h3>
   <h3 className='areand'  data-aos="fade-left"  data-aos-duration="1000">
    <span className='arwho'>you</span>
    <span className='arwhowe'>need</span>
   </h3>
   <div className='container-fluid d-flex mt-4 mb-5' style={{justifyContent:'center'}}>
             <div style={{border:'3px solid  rgb(155, 225, 93)',borderRadius:'3px',width:'12px'}}>
               </div>
               <div className='mx-1' style={{border:'3px solid  rgb(155, 225, 93)',borderRadius:'3px',width:'50px'}}>
               </div>
   </div>
   </div>

   <div className='container-fluid'>
   <div className='row'>
   <div className='col-lg-3 col-md-12 col-sm-12'>
   <div className='card opticard'>
   <div className='container-fluid  text-center'>
   <span className='tacho'><BiTachometer/></span>
   <h4 className='optim'>SEO Optimized</h4>
   <p className='mt-3' style={{fontWeight:'400'}}>Nothing beats being on the <br/> top page of Google for your <br/>target keywords. We have <br/>  the methods, resources, and expertise necessary to get <br/>  you there.</p>

   </div>

   </div>
   </div>
   <div className='col-lg-3  col-md-12 col-sm-12'>
   <div className='card opticard'>
   <div className='container-fluid  text-center'>
   <span className='tacho'><RiCloudLine/></span>
   <h4 className='optim'>Cloud Solutions</h4>
   <p className='mt-3' style={{fontWeight:'400'}}>Gain entry to the marketing <br/> cloud and its many <br/> advantages for your <br/>company. It includes text <br/> messages, emails, webpages,<br/> and more.</p>
   </div>
   </div>
   </div>
   <div className='col-lg-3  col-md-12 col-sm-12'>
   <div className='card opticard'>
   <div className='container-fluid  text-center'>
   <span className='tacho'><MdOutlineTabletMac/></span>
   <h4 className='optim'>Website Design</h4>
   <p className='mt-3' style={{fontWeight:'400'}}>A website needs something<br/>  simple but imaginative. Our <br/> specialty is designing <br/> websites that are not only <br/> simple but also <br/> contemporary.</p>
   </div>
   </div>
   </div>
   <div className='col-lg-3  col-md-12 col-sm-12'>
   <div className='card opticard'>
   <div className='container-fluid  text-center'>
   <span className='tacho'><TiStopwatch/></span>
   <h4 className='optim'>Online Marketing</h4>
   <p className='mt-3' style={{fontWeight:'400'}}>With the help of the internet, <br/> we can reach a wider  <br/> audience and tell them about  <br/>your business, its goods, and services.</p>
   </div>
   </div>
   </div>
   </div>
   </div>
    <div style={{marginTop:'200px'}}><Footer/></div>
    </div>
  )
}

export default Service;