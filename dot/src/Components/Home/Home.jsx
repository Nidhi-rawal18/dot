import React from 'react'
import abc from '../Home/Image/dot1.jpg'
import {BsVolumeUp} from 'react-icons/bs'
import {GoDeviceMobile} from 'react-icons/go'
import {FaRegImages} from 'react-icons/fa'
import {IoLogoBuffer} from 'react-icons/io5'
import "../Home/Home.css"

const Home = () => {
  return (
    <>
        <div style={{overflow:'hidden'}}>
           <img alt='' src={abc} style={{width:'100%',height:'720px'}}/>
           <div className='row mt-5'>
              <div className='col-lg-5 col-md-12 col-sm-12 mt-5'>
                <div className='container'>
                 <h3 style={{fontSize:'53px',fontWeight:'600',color:'#202020',}}>We Deliver <br/> Beautiful Results Together With</h3>
                  <h3 style={{fontSize:'53px',fontWeight:'600',color:'rgb(0 166 127)'}}>Multi-Platform Expertise</h3>
              </div>
              <div className='d-flex mt-4 ms-3'>
             <div style={{border:'3px solid  rgb(155, 225, 93)',borderRadius:'3px',width:'12px'}}>
               </div>
               <div className='mx-1' style={{border:'3px solid  rgb(155, 225, 93)',borderRadius:'3px',width:'50px'}}>
               </div>
             </div>
             <div className='container mt-4'>
                <p style={{color:'#444',fontSize:'15px', fontFamily: "Quicksand"}}>Dotline has a very diverse skill set and broad experience within digital marketing and design.</p>
             </div>
             <button className='btn ms-3 mt-3'  style={{borderRadius:'25px',padding:'15px 45px',fontSize:'13px',color:'#eee', fontFamily: "Quicksand"}}>VIEW ALL</button>
             
              </div>
              <div className='col-lg-7  col-md-10 col-sm-10'>
               <div className='row'>
                  <div className='col-lg-6 col-md-6 col-sm-6'>
                 
                       <div className='card' style={{width:'95%'}}>
                          <div className='container'>
                            <div className='ms-3 mt-2 text' style={{color:'#8ACCED',fontSize:'60px'}}><GoDeviceMobile/></div>
                            <h4 className='mt-4 ms-3 text' style={{fontSize:'30px',fontWeight:'500'}}>Web and App <br/> Development</h4>
                            
                              <p className='ms-3 mt-4 mb-4 text' style={{color:'#393939'}}>Our mission is to make the process <br/> easy and fun. We combine ergonomic <br/> and graphic design as well as <br/> functionality and programming savvy <br/>to create web sites that attract traffic <br/>and meet business objectives.</p>
                            
                          </div>
                        </div>
                     </div>
                
                  <div className='col-lg-6  col-md-6 col-sm-6'>
                 
                       <div className='card' style={{width:'95%',}}>
                          <div className='container'>
                            <div className='ms-3 mt-2' style={{color:'rgb(0, 217, 166)',fontSize:'65px'}}><BsVolumeUp/></div>
                            <h4 className='mt-4 ms-3' style={{fontSize:'30px',fontWeight:'500'}}>Branding</h4>
                            <div>
                              <p className='ms-3 mt-4 mb-5' style={{color:'#393939',fontSize:'16px',fontWeight:'300'}}>Your brand is inscribed in your company’s DNA and is the symbolic representation of your business personality and culture. More important and here’s where we can help your brand is what your <br/> customers say about you.</p>
                            </div>

                          </div>
                        </div>
                     </div>
                
               </div>

               <div className='row mt-3'>
                  <div className='col-lg-6 col-md-6 col-sm-6'>
                    <div className='container'>
                       <div className='card' style={{width:'100%'}}>
                          <div className='container'>
                            <div className='ms-3 mt-2' style={{color:'rgb(0, 217, 166)',fontSize:'60px'}}><FaRegImages/></div>
                            <h4 className='mt-4 ms-3' style={{fontSize:'30px',fontWeight:'500'}}>Creative Design</h4>
                            <div>
                              <p className='ms-3 mt-4 mb-5' style={{color:'#393939',fontSize:'16px',fontWeight:'300'}}>Creativity is our fuel it drives our thoughts and actions. Best of all, it’s renewable and never runs out.</p>
                            </div>
                          </div>
                        </div>
                     </div>
                  </div>
                  <div className='col-lg-6  col-md-6 col-sm-6'>
                 
                       <div className='card mt-3' style={{width:'95%'}}>
                          <div className='container'>
                            <div className='ms-3 mt-2' style={{color:'rgb(0, 217, 166)',fontSize:'60px'}}><IoLogoBuffer/></div>
                            <h4 className='mt-4 ms-3' style={{fontSize:'29px',fontWeight:'500'}}>Digital Marketing</h4>
                            <div>
                              <p className='ms-3 mt-4 mb-5' style={{color:'#393939',fontSize:'16px',fontWeight:'300'}}>To develop a successful digital marketing plan, you need to be an expert at both “digital” and <br/> “marketing.” We optimize your presence on the web through <br/> effective social media strategies, <br/> natural and paid SEO, and targeted online ad campaigns.</p>
                            </div>
                          </div>
                        </div>
                     </div>
                
               </div>
             </div>
           
           </div>
        </div>
    </>
   
  )
}

export default Home;