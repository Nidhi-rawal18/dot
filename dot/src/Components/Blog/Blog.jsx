import React from 'react'
import '../Blog/Blog.css'
import Footer from '../Footer/Footer';
const Blog = () => {
  return (
    <>
    <div style={{overflow:'hidden',marginTop:'100px'}}>
    <div style={{ backgroundColor:'#F9F9F9',height:'30vh',marginBottom:'200px'}}>
    <div  data-aos="zoom-up"  data-aos-duration="1000">
        <h1 className='Blog'>Blog</h1>
    </div>
    </div>
    <div><Footer/></div>
    </div>
  
    </>
  )
}

export default Blog;