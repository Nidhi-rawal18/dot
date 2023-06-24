import React from 'react'
import Line from '../Footer/Line';
import '../Logo & Branding/Packa.css'
import Someexample from '../Parts/Someexample'
import Allbranmark from '../Allbranmark/Allbranmark'
import Footer from '../Footer/Footer'
const Packaging = () => {
  return (
    <div style={{overflow:'hidden'}}>
      <img className='packimag' alt='' src='https://www.dotlinecreations.com/wp-content/uploads/2022/11/4.jpg'/>
      <div className='container-fluid p-3'>
      <h3 className='packa' data-aos="fade-left"  data-aos-duration="1000">
          Best Packaging Design Company in Jaipur
       </h3>
         <Line/>

         <p className='mt-4' style={{color: '#444',fontWeight: '400',fontSize:'15px'}}>
         Suppose consumers decide not to purchase your goods because the packaging doesn’t grab their attention. This, however, is not likely to be the situation.          </p>
         <p className='mt-4' style={{color: '#444',fontWeight: '400',fontSize:'15px'}}>
         Your product’s packaging design will significantly impact how likely a customer is to make a purchase. Don’t be concerned! You can rely on us to study the market and your competition so that we can develop a plan that will set you apart.         </p>
         </div>
       
       <div className='container-fluid p-4'>
       <div className='row mb-5 mt-5'>
        <div className='col-lg-6 col-sm-12 col-md-12'>
        <div className='card packing p-4' data-aos="fade-right"  data-aos-duration="1000">
        <b className='ms-2 mt-4' style={{fontSize:'29px',lineHeight:'36px'}}>How Dotline Creations can help?</b>
        <p className='ms-2 mt-3'>
          <span style={{fontWeight:'400',fontSize:'16px'}}>Dotline can assist you in developing distinctive and alluring packaging for your products. With our expert team of package designers, we can create a label for your goods that will stand out in a crowded marketplace. </span>
        </p>
        </div>
        
         

        </div>
        <div className='col-lg-6 col-sm-12 col-md-12'>
         <div className='card packing p-4'  data-aos="fade-left"  data-aos-duration="1000" >
         <b className='ms-2 mt-4' style={{fontSize:'29px',lineHeight:'36px'}}>Unique Product Designs for your Brand</b>
        <p className='ms-2 mt-3'>
          <span style={{fontWeight:'400',fontSize:'16px'}}>Innovative product packaging is crucial to the success of any business, and our designers are here to provide advice and assistance in finding a solution that will yield the desired outcomes.</span>
        </p>
         </div>
         

         </div>


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

          <Footer/> 
     
     
    </div>
  )
}

export default Packaging;