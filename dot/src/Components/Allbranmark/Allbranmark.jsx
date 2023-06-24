import React, { useState }  from 'react'
import All from '../Allbranmark/All';
import Branding from '../Allbranmark/Branding';
import Marketing from '../Allbranmark/Marketing';

const Allbranmark = () => {
    const [state,setState] = useState('All');
  return (
    <div>  
     <div className='container-fluid mt-5'>
    <span className='' onClick={()=>{setState('All')}} style={{borderBottom:state==='All'?'1px solid #3d3d3d':'none',color:state==='All'?'#3d3d3d':'#aaa',fontSize:'18px',paddingBottom:'5px'}}>All</span>
    <span   className='mx-3' onClick={()=>{setState('Branding')}} style={{borderBottom:state==='Branding'?'1px solid #3d3d3d':'none',color:state==='Branding'?'#3d3d3d':'#aaa',fontSize:'18px',paddingBottom:'5px'}}>Branding</span>
    <span  className='mx-2' onClick={()=>{setState('Marketing')}} style={{borderBottom:state==='Marketing'?'1px solid #3d3d3d':'none',color:state==='Marketing'?'#3d3d3d':'#aaa',fontSize:'18px',paddingBottom:'5px'}}>Marketing</span>
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
   </div></div>
  )
}

export default Allbranmark;