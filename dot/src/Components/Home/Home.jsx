import React from 'react'
import abc from '../Home/Image/dot1.jpg'
import {BsVolumeUp} from 'react-icons/bs'
import {GoDeviceMobile} from 'react-icons/go'
import {FaRegImages} from 'react-icons/fa'
import {IoLogoBuffer} from 'react-icons/io5'
import "../Home/Home.css"
import Allbranmark from '../Allbranmark/Allbranmark'
import hom from '../Home/Image/home1.jpg'
import Line from '../Footer/Line'
import Footer from '../Footer/Footer'
import {TiTick} from 'react-icons/ti'
import {ImQuotesLeft} from 'react-icons/im'
import Areyou from '../Parts/Areyou'
import Carou from './Carou'
import { NavLink } from 'react-router-dom'


const Home = () => {
  
  return (
    <>
        <div  style={{overflow:'hidden'}}>

           <img className='dotimag' alt='' src={abc}/>
         
            <div className='row mt-5'>
              <div className='col-lg-5 col-sm-12 col-md-12'>
                <div className='container-fluid fade1 p-3 mt-2'  data-aos="fade-right"  data-aos-duration="1000">
                 <h3 className='wedel'>We Deliver Beautiful Results Together With</h3>
                  <h3 className='multi'>Multi-Platform Expertise</h3>
              </div>
              <Line/>
             <div className='container-fluid mt-3'>
                <p className='dotl'>Dotline has a very diverse skill set and broad experience within digital marketing and design.</p>
             </div>
             <div className='container-fluid'>
              <NavLink to='/serv'>
              <button  className='btn'  data-aos="slide-up"  data-aos-duration="1000">VIEW ALL</button>
              </NavLink>
    
             </div>
           </div>
          
        
           <div className='col-lg-7'>
           <div className='container-fluid'>
         <div className='row'>
           <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='card web' data-aos="fade-left"  data-aos-duration="1000" >
               <div className='container-fluid p-4'>
                <span className='mobi'><GoDeviceMobile/></span>
                 <h4 className='webapp mt-3'>Web and App <br/> Development</h4>
                  <p className='omisi mt-2 mb-4'>  Our mission is to make the process <br/> easy and fun. We combine ergonomic <br/> and graphic design as well as <br/> functionality and programming savvy <br/>to create web sites that attract traffic <br/>and meet business objectives.</p>
                   </div>
                  </div>
                </div>
                
                  <div className='col-lg-6  col-md-6 col-sm-12'>
                      <div className='card web' data-aos="fade-left"  data-aos-duration="1000" >
                          <div className='container-fluid p-4'>
                            <span className='volu'><BsVolumeUp/></span>
                            <h4 className='webapp mt-3'>Branding</h4>
                            <div>
                              <p className='omisi mt-4 mb-4' style={{fontSize:'16px',fontWeight:'300'}}>Your brand is inscribed in your company’s DNA and is the symbolic representation of your business personality and culture. More important and here’s where we can help your brand is what your <br/> customers say about you.</p>
                            </div>

                          </div>
                        </div>
                     </div>
                
               </div>
               </div>
                <div className='container-fluid'>
                 <div className='row'>
                  <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='card web mt-5' data-aos="fade-left"  data-aos-duration="1000" >
                          <div className='container-fluid p-4'>
                            <span className='imre'><FaRegImages/></span>
                            <h4 className='webapp mt-3'>Creative Design</h4>
                            <div>
                              <p className='omisi mt-4 mb-5'>Creativity is our fuel it drives our thoughts and actions. Best of all, it’s renewable and never runs out.</p>
                            </div>
                          </div>
                        </div>
                   
                  </div>
                  <div className='col-lg-6  col-md-6 col-sm-12'>
                      <div className='card web mt-5' data-aos="fade-left"  data-aos-duration="1000" > 
                          <div className='container-fluid p-4'>
                            <span className='volu'><IoLogoBuffer/></span>
                            <h4 className='webapp mt-3'>Digital Marketing</h4>
                            <div>
                              <p className='omisi mt-4 mb-4' style={{fontSize:'16px',fontWeight:'300'}}>To develop a successful digital marketing plan, you need to be an expert at both “digital” and  “marketing.” We optimize your presence on the web through effective social media strategies,  natural and paid SEO, and targeted online ad campaigns.</p>
                            </div>

                          </div>
                        </div>
                     </div>


              </div>

                </div>
              
             </div> 
           </div>
          
        
         
           

           {/* 3rdSTEP  */}
         
         
           <div className='container-fluid mt-4'>
           <div className='row'>
             <div className='col-lg-6 col-md-6 col-sm-12'>
           <div className='container-fluid'  data-aos="zoom-in-up"  data-aos-duration="1000">
           <img  className='homein' alt='' src={hom}/>
            </div>

           </div>
           <div className='col-lg-5 col-md-12 col-sm-12'>
            <div className='container-fluid mt-5'  data-aos="fade-up"  data-aos-duration="1000">
              <h3 className='fire'>
                <span className='fiare'>Faire Turning <br/>Good Ideas</span>
                <span className='fiatur'> Into Greater</span>
                <span className='fiare'> Heights</span>
              </h3>
              </div>
              <Line/>
              <div className='container-fluid mt-3'  data-aos="fade-up"  data-aos-duration="1000">
                 <p>Foundational brand design is crucial to bringing your brand’s purpose to life.</p>
                  <p>A strong, distinctive visual brand identity plays a crucial role in defining your brand’s story. It creates a signal of intent and can act as a powerful unifier. Ultimately, it helps create the strong emotional connection between brand and audience.</p>
               <NavLink to='/abo'>
               <button className='btn mt-3' data-aos="slide-up"  data-aos-duration="1000">READ MORE</button>
              
               </NavLink>
               </div>
           
           </div>

           </div>
           </div>
           
          

         

          


           <div className='container-fluid text-center mt-5' data-aos="fade-left"     data-aos-duration="1000">
            <span className='wecte'>We Create</span>
            <span  className='wedowedo'>What We Are</span>
            <span  className='wecte'> & </span>
            <span  className='wecte'><br/>Believe In</span>
            <span  className='wecte'><br/>What </span>
            <span   className='wedowedo'>We DO</span>
            </div>

           <div className='container-fluid d-flex mt-4' style={{justifyContent:'center'}}>
             <div style={{border:'3px solid  rgb(155, 225, 93)',borderRadius:'3px',width:'12px'}}>
               </div>
               <div className='mx-1' style={{border:'3px solid  rgb(155, 225, 93)',borderRadius:'3px',width:'50px'}}>
               </div>
             </div>


        
          <Allbranmark/>
          <div className='container-fluid text-center'>
          <NavLink to='/webport'>
          <button className='btn mt-3' data-aos="fade-up"  data-aos-duration="1000"  style={{borderRadius:'25px',padding:'15px 45px',fontSize:'14px',color:'#eee', fontFamily: "Quicksand"}}>READ MORE</button>
          </NavLink>
        
        </div>

          


        <div className='container-fluid p-4'>
        <div className='row'>
        <div className='col-lg-6 col-sm-12 col-md-12'>
          <div className='card pre p-5 text-center'>
          <span className='counti'>280</span>
          <span className='project'>PROJECTS</span>

          <div className='row mt-3'>
          <div className='col-lg-6'>
          <span className='counting'>+3500</span>
          <span className='project'><br/>USERS' COMMENTS</span>
          </div>
         
          <div className='col-lg-6 bord'>
          <span className='counting'>100%</span>
          <span className='project'><br/>HAPPY CLIENTS</span>
          </div>

          </div>
          </div>
        </div>
        <div className='col-lg-6 col-sm-12 col-md-12'>
        <div className=''>
        <div className='card  pree p-5'>
        <h3 className='fire'  data-aos="zoom-in-right"  data-aos-duration="1000">
                <span className='fiare'>Who</span>
                <span className='fiatur'>We</span>
                <span className='fiare'> Are</span>
              </h3>

              <Line/>
              <div className='container-fluid mt-3'  data-aos="fade-up"  data-aos-duration="1000">
              <p>We’re Strong Strategists. We’re Creative Conceptualizers. We’re Clever Creators. We’re Excellent Executors. We are anything and everything brands need to communicate their story to a diverse and distinguished clientele.</p>
             
               <span><TiTick className='tickti'/>It's All About Turning Great Ideas Into Your Project.</span>
              <span><br/><TiTick className='tickti'/>Together We Expanded Vision, Create And Make it.</span>
              <span> <br/><TiTick className='tickti'/>Choose the best, be the best.</span>
               </div>
</div>
        </div>
       

            </div>


        </div>
        </div> 

        <div  className='workin' style={{marginTop:'100px'}}>
        <img alt='' src='https://www.dotlinecreations.com/wp-content/uploads/2022/09/Untitled-3.jpg' style={{maxWidth:'100%',height:'auto'}}/>
        <div className='container-fluid p-4'>
     <div className="centered">
     <span className='qout'><ImQuotesLeft/></span>
      <div className='past' data-aos="zoom-in"  data-aos-duration="1000">
      <p>I have been working with Dot Line for the past 4 months. They are one of the best digital marketing companies in Jaipur. The team here is very professional and works hard to deliver what they promise. It has been more than a pleasure working with them.  </p>
      </div>

      <img alt='' className='imrou'  src='https://www.dotlinecreations.com/wp-content/uploads/2018/08/businesswoman-analysing-document-P8WSNMC-90x90.png'/>
    

     
      <h2 className='ganika'>
      Ganika Aahuja  
      </h2>
      <h3 className='client'>
      Client 
      </h3>
      
     </div>
     </div>  
        </div>

        <div className='container-fluid'>
        <h3  className='onjo text-center' data-aos="fade-up"  data-aos-duration="1000">
        <span className='onlne'>Online</span>
        <span className='jou'>Journal</span>
        </h3>
        </div>
        <div className='text-center'>
         <NavLink to='/blo'>
         <button className='btn animate__animated animate__slideInUp' >VEIW ALL POST</button>
         </NavLink>  
   
        </div>
         
        <Areyou/>

        <div className='container-fluid ohc'>
        <h3  className='onjo text-center'  data-aos="fade-up"  data-aos-duration="1000">
        <span className='onlne'>Our Happy</span>
        <span className='jou'>Clients</span>
        </h3>
        </div>
        <div className='container-fluid d-flex mt-4 mb-5' style={{justifyContent:'center'}}>
             <div style={{border:'3px solid  rgb(155, 225, 93)',borderRadius:'3px',width:'12px'}}>
               </div>
               <div className='mx-1' style={{border:'3px solid  rgb(155, 225, 93)',borderRadius:'3px',width:'50px'}}>
               </div>
             </div>
        
        <div className='container-fluid'>
        <Carou/>
        </div>

       
       
          <Footer/>
        
        

          
        </div>
    </>
   
  )
}

export default Home;