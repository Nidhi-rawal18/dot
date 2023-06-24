import React from 'react'
import Line from '../Footer/Line'
import Someexample from '../Parts/Someexample'
import Allbranmark from '../Allbranmark/Allbranmark'
import Footer from '../Footer/Footer'
import '../Logo & Branding/Graphic.css'

const Graphic = () => {
  return (
    <div style={{overflow:'hidden'}}>
        <img className='grapimag' alt='' src='https://www.dotlinecreations.com/wp-content/uploads/2022/11/3.jpg'/>
         <div className='container-fluid p-3' data-aos="fade-left"  data-aos-duration="1000">
         <h3 className='grap'>
               Best Graphic Design Company In Jaipur
         </h3>
        <Line/>
     
        <p className='lead mt-3'>
          As a leading graphic design firm In Jaipur, India, we work hard to meet the individual needs of each of our customers by carefully studying their industry and assessing their business and marketing goals.
        </p>
        <h3 className='grap'>
        Best Graphic Design Services In Jaipur
        </h3>
       
       
      
        <Line/>
        <p className='lead mt-3'>
          We have successfully served a wide range of clientele because of the years of experience our staff has garnered in the field. Among the many things we’ve designed are business cards, brochures, packaging, websites, and more.
        </p>

        
        <h3 className='grap mt-5'>
               Why choose us ?
        </h3>
        <Line/>
        
       </div>

      
         <img  alt='' src='https://www.dotlinecreations.com/wp-content/uploads/2022/08/1-2-1536x319.png' style={{width:'100%'}}/>
     
        <img alt='' src='https://www.dotlinecreations.com/wp-content/uploads/2022/08/2-1536x281.png'  style={{width:'100%'}}/>
        

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

export default Graphic;