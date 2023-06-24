import React from 'react'
import '../DigitalMarketing/Digitall.css'
import {TiTick} from 'react-icons/ti'
import Line from '../Footer/Line'
import Footer from '../Footer/Footer'

const Digital = () => {
  return (
    <div style={{overflow:'hidden',}}>
    <img className='digimag' alt='' src='https://www.dotlinecreations.com/wp-content/uploads/2022/08/1-5.png'/>
    <div className='container-fluid mt-5'>
    <div className='row'>
    <div className='col-lg-6 col-md-12 col-sm-12'>
    <div className='container-fluid'  data-aos="fade-left"  data-aos-duration="1000">
    <h3 className='bestresu'>
      <span>Best Results-Driven Digital</span>
     </h3>
     <h3 className='comdimark'>
      <span>Digital Marketing Company in Jaipur</span>
     </h3>
   
    </div>
    <Line/>
    <div className='container-fluid mt-4'  data-aos="fade-left"  data-aos-duration="1000">
    <p style={{fontWeight:'400'}}>
     Digital marketing is a revolution in the field of marketing. It’s the new age of marketing. Expand your business to grow your business on a broad level with some latest data-driven and targeted strategies.
     </p>
     <p>
      <strong>Marketing Team at Dotline Creations</strong>
     </p>
     <p>
      <span style={{fontWeight:'400'}}>
      SEO experts at Dotline Creations work alongside the team of graphic designers, SMM experts, and PPC experts, all working under one roof. This enables our team to coordinate better and work efficiently.
      </span>
      </p>
     <p>
    <strong>Keeping “TRUST” a major focus, we satisfy all our clients</strong>
     </p>  
     <p>
      <span style={{fontWeight:'400'}}>
      Our company does digital marketing for multiple industries and services with better organic (SEO and Content) and inorganic approach (Paid ads: Facebook ads, Instagram ads, and Google ads)</span>
      </p> 
      <p>
    <strong>Let’s grow your business to sky-rocket sales</strong>
     </p>  
     <p>
      <span style={{fontWeight:'400'}}>
      We are a leading Digital Marketing Company in Jaipur providing ROI-driven services that will help you to grow more. We can help you analyze and chase new opportunities, increasing the visibilities of your company on SERPs</span>
      </p>     


    </div>
    
    </div>
    <div className='col-lg-6 col-md-12 col-sm-12'>
    <div className='container-fluid mt-5'>
           <h3 className='gettouc'>Get In Touch To Discuss</h3>
           </div>
           <div  className='container-fluid mt-3'>
           <input className='inptu' type='text' placeholder=' Name'/>
           </div>
           <div  className='container-fluid mt-3'>
           <input className='inptu' type='text' placeholder=' E-Mail'/>
           </div>
           <div  className='container-fluid mt-3'>
           <input className='inptu' type='text' placeholder=' Website'/>
           </div>
           <div className='container-fluid mt-3'>
           <textarea className='texareare' type='text' cols='40' rows='10' placeholder=' Message'></textarea>
           </div>
           <div className='container-fluid  mt-3'>
            <button className='subtm'>SUBMIT</button>
           </div>
          
     </div>

    </div>

    </div>

    <div className='container-fluid'>
    <h3 className='wcdms'  data-aos="fade-left"  data-aos-duration="1000">
      <span>Why Choose Digital Marketing Services?</span>
    </h3>
    <h3 className='teyb'  data-aos="fade-left"  data-aos-duration="1000">
      <span>To Expand Your Business</span>
    </h3>
    <p  data-aos="fade-left"  data-aos-duration="1000">
      <span style={{fontWeight:'400'}}>Our Return-on-Investment (ROI) approach ensures you better results that matter for your business to grow more. The team of Digital Marketing Experts at Dotline Creations is very well aware of the tactics required to expand your business reach. We deliver the best SEO, PPC, SMM, and Graphic Design Services to do it in the right way.</span>
    </p>
    <p  data-aos="fade-left"  data-aos-duration="1000">
      <span style={{fontWeight:'400'}}>We understand your concern to adapt the latest marketing techniques to skyrocket sales. So, we always do our best to generate more leads. Your website or business and services may not have a strong customer base today, here we come in a frame. We will deliver your business and services to the right customers online.</span>
    </p>

    </div>

    <div className='container-fluid mb-5'>
    <h3 className='advantag'  data-aos="fade-left"  data-aos-duration="1000">
      <span>Advantages of Getting Digital Marketing Services</span>
    </h3>
    <div className='ticktext'>
    <span><TiTick className='ticktiii'/> Present the data and information in the right way.</span>
    </div>
    <div className='ticktext'>
    <span><TiTick className='ticktiii'/> Precise target audience with the possibility of using the best digital marketing efforts</span>
    </div>
    <div className='ticktext'>
    <span><TiTick className='ticktiii'/> To lead the industry with the latest marketing tactics</span>
    </div>
    <div className='ticktext'>
    <span><TiTick className='ticktiii'/> Digital Marketing is cheaper than Traditional Marketing</span>
    </div>
    <div className='ticktext'>
    <span><TiTick className='ticktiii'/> Get visible on Google</span>
    </div>
    <div className='ticktext'>
    <span><TiTick className='ticktiii'/> Increase traffic, leads, and growth rate on your website</span>
    </div>
    <div className='ticktext'>
    <span><TiTick className='ticktiii'/> Reach potential customers globally</span>
    </div>
    

    </div>
    <Footer/>
    </div>
  )
}

export default Digital;