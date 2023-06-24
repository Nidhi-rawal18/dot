import React from 'react'
import '../Logo & Branding/Bran.css'
import Line from '../Footer/Line';
import Someexample from '../Parts/Someexample';
import All from '../Allbranmark/All';
import Footer from '../Footer/Footer';
import { NavLink } from 'react-router-dom';

const Bran = () => {
  return (
    <>        <div style={{overflow:'hidden',}}>
          <div className='container-fluid mt-5' data-aos="fade-left"  data-aos-duration="1000">
        <h3 className='best'>Best Creative Branding</h3>
          
       </div>
      
        <img className='branimag' alt='' src='https://www.dotlinecreations.com/wp-content/uploads/2022/11/2-1536x350.jpg' />
        <div className='container-fluid mt-1' data-aos="fade-left"  data-aos-duration="1000">
        <h3 className='design'>Design Company in Jaipur</h3>
        </div>
         <Line/>
          <div className='container-fluid'>
          <p className='bran mt-4'>
         It’s been said that a person’s footwear reveals much about their personality. Brands are the same way. Coca-Cola and Vogue have well-recognized symbols, but what does your brand represent? Fortunately, that’s where we come in.
         </p>
         <p className='bran mt-4'>
         We learn about your business and its goals so that we can tailor a brand strategy and visual identity to you.Our designs are relevant and will help you connect with your target audience.
         </p>

         <p className='bran mt-4'>
         It’s the foundation upon which all your other marketing efforts will be built. Strengthen your business with a brand that stands out.Our brand’s innovative look has made us the industry leader in Jaipur. 
         </p>
         <NavLink to='/serv'>
         <button className='btn3' data-aos="fade-up"  data-aos-duration="1000">VIEW ALL</button>
         </NavLink>
        
          </div>
          
       

          <Someexample/>
          <div className='d-flex mt-5' style={{justifyContent:'center'}}>
             <div style={{border:'3px solid  rgb(155, 225, 93)',borderRadius:'3px',width:'12px'}}>
              </div>
              <div className='mx-2' style={{border:'3px solid  rgb(155, 225, 93)',borderRadius:'3px',width:'50px'}}>
              </div>
           </div>
           
           <span  style={{borderBottom:'1px solid #3d3d3d',fontSize:'18px',fontWeight:'400',color:'#000',paddingBottom:'8px'}}>Branding</span>
           <All/>
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

export default Bran;