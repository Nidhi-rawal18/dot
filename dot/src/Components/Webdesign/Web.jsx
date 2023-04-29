import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import All from './All';
import Branding from './Branding';
import Marketing from './Marketing';

const Web = () => {
  const [state,setState] = useState('All');
    
  return (
    <> 
       <div style={{overflowX:"hidden"}}> 
       <div className='fixed-top'><Navbar/>
       <div className='row' style={{backgroundColor:'rgba(33, 150, 243, 0.2)',height:'12px',}}>
       </div>
       </div>
       <div className='' style={{paddingTop:'11px'}}>
       <img src='https://www.dotlinecreations.com/wp-content/uploads/2022/11/5-1536x217.jpg' style={{width:'1350px',height:'236px'}}/>
       </div>
        
      <div className='row my-5'>
       <div className='col-lg-6 col-md-12 col-sm-12 my-5'>
         <div className='container'>
            <h1 style={{fontSize:'60px'}}>Creative Website  </h1>
            <h1  style={{fontSize:'60px'}}>Designing &</h1>
            <h3  style={{fontSize:'46px',color:'rgb(0, 217, 166)'}}>Development Company</h3>
             
             <div className='d-flex mt-5'>
             <div style={{border:'3px solid  rgb(155, 225, 93)',borderRadius:'3px',width:'12px'}}>
               </div>
               <div className='mx-1' style={{border:'3px solid  rgb(155, 225, 93)',borderRadius:'3px',width:'50px'}}>
               </div>
             </div>
              <div className='mt-4'>
             <span style={{fontWeight:'400',fontSize:'17px'}}>You have half a second to get them to pay attention to what you’re saying. Should they visit another site or return to yours?</span>
             </div>
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
       <div className='col-lg-6 col-md-12 col-sm-12  my-5'>
       <div className='container'>
           <h3  style={{fontSize:'36px'}}>Get In Touch To Discuss</h3>
           <div className='mt-5'>
            <span style={{color:'#3D3D3D',fontWeight:'400',fontSize:'18px'}}>Your name</span>
           </div>
           <div>
           <input type='text' style={{width:'95%',height:'7vh'}}/>
           </div>

           <div className='mt-4'>
            <span style={{color:'#3D3D3D',fontWeight:'400',fontSize:'18px'}}>Your email</span>
           </div>
           <div>
           <input type='text' style={{width:'95%',height:'7vh'}}/>
           </div>

           <div className='mt-4'>
            <span style={{color:'#3D3D3D',fontWeight:'400',fontSize:'18px'}}>Website</span>
           </div>
           <div>
           <input type='text' style={{width:'95%',height:'7vh'}}/>
           </div>

           <div className='mt-4'>
            <span style={{color:'#3D3D3D',fontWeight:'400',fontSize:'18px'}}> Your message (optional)</span>
           </div>
           <div>
           <textarea type='text' cols='40' rows='10' style={{width:'95%'}}></textarea>
           </div>

           <div className='mt-5'>
            <input type='checkbox'/>
            <span style={{color:'#3D3D3D',fontWeight:'500',fontSize:'18px'}}>I agree that my data is Collected and Stored.</span>
           </div>

           <div className='mt-5'>
            <button style={{backgroundColor:'#3D3D3D',color:'#FFFFFF',border:'none',padding:'13px',width:'35%',fontWeight:'500',fontSize:'16px'}}>SUBMIT</button>
           </div>
       </div>
       </div>
      </div>

      <div className='container text-center'>
          <span style={{fontWeight:'600',fontSize:'55px',color:'var(--e-global-color-accent )'}}>some examples of</span>
           <div>
            <span style={{fontWeight:'600',fontSize:'55px',color:'var(--e-global-color-accent )'}}>past</span>
            <span  style={{fontWeight:'600',fontSize:'55px',color:'rgb(0, 217, 166)'}}> projects</span>
           </div>

      </div>

     
      <div className='d-flex mt-5' style={{justifyContent:'center'}}>
             <div style={{border:'3px solid  rgb(155, 225, 93)',borderRadius:'3px',width:'12px'}}>
               </div>
               <div className='mx-2' style={{border:'3px solid  rgb(155, 225, 93)',borderRadius:'3px',width:'50px'}}>
               </div>
       </div>


       <div className='mt-5'>
        <span className='mx-3' onClick={()=>{setState('All')}} style={{borderBottom:state==='All'?'1px solid #3d3d3d':'none',color:state==='All'?'#3d3d3d':'#aaa',fontSize:'18px',}}>All</span>
        <span   className='mx-2' onClick={()=>{setState('Branding')}} style={{borderBottom:state==='Branding'?'1px solid #3d3d3d':'none',color:state==='Branding'?'#3d3d3d':'#aaa',fontSize:'18px'}}>Branding</span>
        <span  className='mx-3' onClick={()=>{setState('Marketing')}} style={{borderBottom:state==='Marketing'?'1px solid #3d3d3d':'none',color:state==='Marketing'?'#3d3d3d':'#aaa',fontSize:'18px'}}>Marketing</span>
       </div>
       
       <div>
        {
          state==='All'?<><All/></>:<></>
        }
        {
          state==='Branding'?<><Branding/></>:<></>
        }
        {
          state==='Marketing'?<><Marketing/></>:<></>
        }
       </div>
       
       
  

      </div>
     
    </>
   
  )
}

export default Web;