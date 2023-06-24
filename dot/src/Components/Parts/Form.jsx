import React from 'react'
import '../Parts/Form.css'

const Form = () => {
  return (
    <div>
  
           <div className='container-fluid mt-2'>
            <span className='name'>Your name</span>
           </div>
           <div  className='container-fluid'>
           <input className='inp' type='text' style={{}}/>
           </div>

           <div className='container-fluid mt-4'>
            <span className='name'>Your email</span>
           </div>
           <div className='container-fluid'>
           <input  className='inp' type='text'/>
           </div>

           <div className='container-fluid mt-4'>
            <span  className='name'>Website</span>
           </div>
           <div className='container-fluid'>
           <input   className='inp' type='text'/>
           </div>

           <div className='container-fluid mt-4'>
            <span className='name'> Your message (optional)</span>
           </div>
           <div className='container-fluid'>
           <textarea className='texare' type='text' cols='40' rows='10'></textarea>
           </div>

           <div className='container-fluid iagre mt-5'>
            <input type='checkbox'/>
            <span>I agree that my data is Collected and Stored.</span>
           </div>

           <div className='container-fluid  mt-5'>
            <button className='sub'>SUBMIT</button>
           </div>
       </div>
      
  )
}

export default Form;