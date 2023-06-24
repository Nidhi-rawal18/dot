import React from 'react'
import '../Footer/Line.css'

const Line = () => {
  return (
    <div className='container-fluid  lie d-flex mt-4 ' data-aos="fade-left"  data-aos-duration="1000">
    <div style={{borderLeft: 0,
  borderRight: 0,
  borderBottom: 0,border:'3px solid rgb(155, 225, 93)',borderRadius:'3px',width:'10px'}}>
  </div>
  
    <div className='mx-1' style={{border:'3px solid  rgb(155, 225, 93)',borderRadius:'3px',width:'45px'}}>
     </div>
  </div>
  )
}

export default Line;