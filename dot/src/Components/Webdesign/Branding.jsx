import React from 'react'
import '../Webdesign/Web.css'
import Carousel from 'better-react-carousel'

const Branding = () => {
  return (
    <div>
        <div className='mt-5'>
<Carousel mt={5}  cols={4} rows={2} gap={10} hideArrow='true' >
    <Carousel.Item>
      <img className='dell' width="100%" src="https://www.dotlinecreations.com/wp-content/uploads/2022/09/lg-1.jpg" style={{borderRadius:'5px'}}/>
    </Carousel.Item>
    <Carousel.Item>
      <img  className='dell' width="100%" src="https://www.dotlinecreations.com/wp-content/uploads/2022/09/lg2.jpg" style={{borderRadius:'5px'}}/>
    </Carousel.Item>
    <Carousel.Item>
      <img className='dell' width="100%" src="https://www.dotlinecreations.com/wp-content/uploads/2018/05/lg-3-758x758.jpg" style={{borderRadius:'5px'}}/>
    </Carousel.Item>
    <Carousel.Item>
      <img className='dell'  width="100%" src="	https://www.dotlinecreations.com/wp-content/uploads/2018/05/lg-5-390x390.jpg" style={{borderRadius:'5px'}}/>
    </Carousel.Item>
    <Carousel.Item>
    <img className='dell' width="100%" src="	https://www.dotlinecreations.com/wp-content/uploads/2018/05/lg-6-758x758.jpg" style={{borderRadius:'5px'}}/>
    </Carousel.Item>
    <Carousel.Item>
    <img className='dell' width="100%" src="https://www.dotlinecreations.com/wp-content/uploads/2018/05/lg-7-758x758.jpg" style={{borderRadius:'5px'}}/>
    </Carousel.Item>
   
  </Carousel>
  </div>
    </div>
  )
}

export default Branding;