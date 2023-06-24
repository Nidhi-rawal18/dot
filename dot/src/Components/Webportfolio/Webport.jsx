import React from 'react'
import '../Webportfolio/Webport.css'
import Line from '../Footer/Line'
import Allbranmark from '../Allbranmark/Allbranmark'
import Footer from '../Footer/Footer'
const Webport = () => {
  return (
    <div style={{overflow:'hidden',marginTop:'150px'}}>
     <div className='container-fluid'>
    <div className='row'>
    <div className='col-lg-6'>
    <div className='container-fluid'  data-aos="fade-left"  data-aos-duration="1000">
    <h3>
        <span className='rece'>Our recent</span>
        <span className='wedes'><br/> web designs</span>
        <span className='rece'> &</span>
    </h3>
    <h3>
        <span className='rece'>some examples of</span>
   </h3>
   <h3>
        <span className='rece'>past</span>
        <span className='wedes'> projects</span>
   </h3>
    </div>
     
    </div>
    <div className='col-lg-6'>
     <div className='container-fluid mt-4'  data-aos="fade-right"  data-aos-duration="1000">
     <p className='doesnt'>It doesn’t take a genius to figure out what the leaders are doing. The results of our recent endeavors will demonstrate our proficiency and originality. For us, “going digital” means more than simply having a website. We put in the time and effort to establish you as a recognized name in your industry. You’ll read about some of our efforts below. Our advertising approach uses various channels to get your name out there and demonstrates your dedication to satisfying clients.</p>
    </div>
    </div>

    </div>

    </div>
    <div className='container-fluid'>
    <Line/>
    <Allbranmark/>
    </div>
    <Footer/>  
  
   

    </div>
   
  )
}

export default Webport;