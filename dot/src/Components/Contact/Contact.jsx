import React from 'react';
import '../Contact/Contact.css';
import Line from '../Footer/Line';
import {MdOutlineFacebook} from 'react-icons/md'
import {MdWhatsapp} from 'react-icons/md'
import {RiInstagramLine} from 'react-icons/ri'
import {BsTwitter} from 'react-icons/bs'
import {TbBrandLinkedin} from 'react-icons/tb'
import Footer from '../Footer/Footer'
import Form from '../Parts/Form';
import Areyou from '../Parts/Areyou';

const Contact = () => {
  return (
    <>      
        <div style={{overflow:'hidden',marginTop:'80px'}}>
             <div className='container-fluid cont1 mt-2'  data-aos="fade-left"  data-aos-duration="1000">
            <span className='need1'>Need Expert </span>
            <span className='ad1'> Advice</span>
                </div>
            <div className='container-fluid cont1'  data-aos="fade-left"  data-aos-duration="1000">
            <span  className='need1'>Contact</span>
            <span className='ad1'> Us</span>
            </div>
             
          
            <Line/>
           
            <div className='container-fluid mt-2'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.46780742861!2d75.77075741120915!3d26.88864466102667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5dded51171d%3A0x85e83c9071ba175c!2sDOTLINE%20CREATIONS%20%7C%20Best%20Digital%20Marketing%20Agency%20%7C%20SEO%20SMO%20%7C%20Best%20Digital%20Marketing%20Company!5e0!3m2!1sen!2sin!4v1683278018492!5m2!1sen!2sin" width="100%" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        


             <div className='row'>
       <div className='col-lg-6 col-md-12 col-sm-12'>
         <div className='container-fluid hav mt-5'  data-aos="fade-left"  data-aos-duration="1000">
            <span className='having'>Having Queries?</span>
            <span className='let'> LET'S TALK!</span>
            <Line/>
              <div className='container-fluid mt-4'>
             <p className='you'>Feel Free to call us or connect with our experts to discuss the ideas with us. We’d love to hear from you.</p>
             </div>
             <div className='container-fluid mt-4'>
             <p className='you'>You can fill out the form with the required details or send us an email at- info@dotlinecreations.com</p>
             </div>

             <div className='container-fluid mt-4'  data-aos="fade-up"  data-aos-duration="1000">
                 <span className='face'><MdOutlineFacebook/></span>
                 <span className='what mx-1'><MdWhatsapp/></span>
                 <span className='insta'><RiInstagramLine/></span>
                 <span className='twit mx-1'><BsTwitter/></span>
                 <span  className='link'><TbBrandLinkedin/></span>
              </div>

          
         
           
         </div>
       </div>
       <div className='col-lg-6 col-md-12 col-sm-12'>
       <div className='container-fluid mt-5'>
       <Form/>
           </div>
      
     
       </div>
      </div>
         <Areyou/>
          <div className='foote'>
          <Footer/>
          </div>
        
         </div>
     
      
        
      
     
     
           

       
    </>
  
  )
}

export default Contact;