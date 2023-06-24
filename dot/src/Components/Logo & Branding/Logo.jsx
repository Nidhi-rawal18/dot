import React from 'react'
import '../Logo & Branding/Logo.css';
import Allbranmark from '../Allbranmark/Allbranmark'
import Footer from '../Footer/Footer';
import Form from '../Parts/Form';
import Someexample from '../Parts/Someexample';
import Line from '../Footer/Line';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <>

      <div style={{overflow:'hidden',}}>
        <img className='logoimag' alt='' src='https://www.dotlinecreations.com/wp-content/uploads/2022/11/1.jpg'  style={{}}/>
      

      <div className='row'>
       <div className='col-lg-6 col-md-12 col-sm-12'>
         <div className='container-fluid p-3' data-aos="fade-left"  data-aos-duration="1000">
            <h3 className='make'>Make A Mark By Hiring Our Logo Designing</h3>
            <h3 className='ser'>Services</h3>
            </div>
             <div className='container-fluid d-flex mt-4 line' data-aos="fade-up"  data-aos-duration="1000">
             <div style={{border:'3px solid  rgb(155, 225, 93)',borderRadius:'3px',width:'12px'}}>
               </div>
               <div className='mx-1' style={{border:'3px solid  rgb(155, 225, 93)',borderRadius:'3px',width:'50px'}}>
               </div>
             </div>
              <div className='container-fluid mt-4'>
             <p className='logo'>A logo should convey the company’s values and goals as the public’s first impression of a company. You might hire top designers in India to help you out with this.</p>
             </div>
             <div className='container-fluid mt-4'>
             <p className='logo'>However, there’s no need to go elsewhere when you have a world-class option in your backyard. Dotline Creations is well-known in Jaipur as a top provider of professional logo design services. Our team members are top-tier creatives adept at translating your ideas into a memorable logo that will give your business a leg up in the marketplace.</p>
             </div>
             <div className='container-fluid mt-4'>
              <p className='logo' style={{fontSize:'16px',fontWeight:'400',fontFamily:"Roboto",color:'#444'}}>We’ve designed logos for new businesses and reworked the ones for established ones since Dotline launched.Our team members are hard-wired to provide you with nothing but the finest, and they won’t stop working until they’ve earned your approval. All we need is a few simple details from you, and we’ll be ready to provide our logo service.  </p>
           
           
             </div>
              <div className='container-fluid'>
              <NavLink to='/serv'>
              <button className='btn2' data-aos="fade-up"  data-aos-duration="1000">VIEW ALL</button>
              </NavLink>
            
              </div>
           
        
       </div>
       <div className='col-lg-6 col-md-12 col-sm-12'>
       <div className='container-fluid mt-5'>
           <h3 className='get'>Get In Touch To Discuss</h3>
           </div>
       <Form/>
     
       </div>
      </div>
      <div className='soexam'>              
      <Someexample/>
      </div>
      <div className='container-fluid d-flex mt-4' style={{justifyContent:'center'}}>
             <div style={{border:'3px solid  rgb(155, 225, 93)',borderRadius:'3px',width:'12px'}}>
               </div>
               <div className='mx-1' style={{border:'3px solid  rgb(155, 225, 93)',borderRadius:'3px',width:'50px'}}>
               </div>
             </div>
      <Allbranmark/>
      <div className='text-center'>
      <NavLink to='/webport'>
      <button className='btn mt-3' data-aos="fade-up"  data-aos-duration="1000"  style={{borderRadius:'25px',padding:'15px 45px',fontSize:'14px',color:'#eee', fontFamily: "Quicksand"}}>READ MORE</button>
      </NavLink>
       
        </div>

       <Footer/> 

</div>
    </>
   
  )
}

export default Logo;