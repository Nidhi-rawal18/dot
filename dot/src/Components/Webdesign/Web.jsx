import React from 'react'

import Form from '../Parts/Form'
import '../Webdesign/Web.css'

import Allbranmark from '../Allbranmark/Allbranmark';
import Someexample from '../Parts/Someexample';
import Footer from '../Footer/Footer';

const Web = () => {
 
    
  return (
    <> 
       <div style={{overflowX:"hidden",}}> 
      
       <img className='webimag' src='https://www.dotlinecreations.com/wp-content/uploads/2022/11/5-1536x217.jpg' style={{}}/>
       
        
      <div className='row my-5'>
       <div className='col-lg-6'>
       <div className='container-fluid p-3' data-aos="fade-left"  data-aos-duration="1000">
            <h3 className='cre'>Creative Website</h3>
            <h3 className='cre'>Designing &</h3>
             
       <h3 className='deve'>Development Company</h3>
       </div>
        <div className='container-fluid com d-flex' data-aos="fade-left"  data-aos-duration="1000">
             <div style={{border:'3px solid  rgb(155, 225, 93)',borderRadius:'3px',width:'12px'}}>
               </div>
               <div className='mx-1' style={{border:'3px solid  rgb(155, 225, 93)',borderRadius:'3px',width:'50px'}}>
               </div>
             </div>
              <div className='container-fluid mt-4'>
             <p style={{fontWeight:'400',fontSize:'17px'}}>You have half a second to get them to pay attention to what you’re saying. Should they visit another site or return to yours?</p>
            
             <div className='mt-4'>
             <strong style={{fontSize:'17px'}}>Are you looking for a reliable company to assist you with website design and development services in Jaipur?</strong>
             </div>
             <div className='mt-4'>
              <span style={{fontWeight:'400',fontSize:'17px'}}>Our Jaipur-based</span>
              <b style={{fontSize:'17px'}}> web design development  agency</b>
              <span style={{fontWeight:'400',fontSize:'17px'}}> can help you keep visitors on your site. Everyone knows that research about a company is done on the internet before a purchase is made. That’s why we’ve assembled a team of experts to handle everything for you, so you can focus on getting the most satisfactory outcomes possible. </span>
              <span style={{fontWeight:'400',fontSize:'17px'}}>It’s more crucial than ever to have a website that works well and is easy to navigate. To get the full advantages of the internet, have a professional website built by </span>
              <b style={{fontSize:'17px'}}>one of Jaipur’s top website development firms</b>
              <span style={{fontWeight:'400',fontSize:'17px'}}>.</span>
             </div>
             </div>
         </div>
       
       <div className='col-lg-6 col-md-12 col-sm-12'>
       <div className='container-fluid mt-5'>
           <h3 className='getin'>Get In Touch To Discuss</h3>
           </div>
          <Form/>
       </div>
       </div>
    

      <Someexample/>

     
      <div className='d-flex mt-5' style={{justifyContent:'center'}}>
             <div style={{border:'3px solid  rgb(155, 225, 93)',borderRadius:'3px',width:'12px'}}>
               </div>
               <div className='mx-2' style={{border:'3px solid  rgb(155, 225, 93)',borderRadius:'3px',width:'50px'}}>
               </div>
       </div>


       <Allbranmark/>



       <div className='container-fluid text-center'>
       <img alt='' src='https://www.dotlinecreations.com/wp-content/uploads/2022/08/1-4.png' style={{maxWidth:'100%',height:'auto'}}/>
       </div>

       <div className='container-fluid mt-5' data-aos="fade-left"  data-aos-duration="1000">
       <h3 className='custdev'>
        Custom Web Development Company
        </h3>
       <div className='container-fluid'>
       <p className='mt-4'>We have a robust and secure team at your service for your needs for <strong>website development</strong>. You will be experiencing effective online development solutions which can help you with higher ROI. Technology brings in a whole new world to your brand and being the best web design & development company we will help you have a lot of opportunities. We have the best facilities to cover your needs with web design services and help you with cutting edge technology which can help you connect with your audience online.</p>
        <p>
				In the current world, web trading has become the go-to option as it gives them a bigger audience to connect with. So, it becomes very important to have an impactful online presence which can make a difference. We being the best web design agency in the USA, UK, India, France, and Canada, will help you with the best possible solutions!</p>

       </div>
     
       </div>

       <Footer/>
       
  
       </div>
  
     
    </>
   
  )
}

export default Web;