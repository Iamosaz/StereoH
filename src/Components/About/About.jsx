import React from 'react'
import './About.css'
import brand_logo from '../Assets/stero.png'
import { useNavigate } from 'react-router-dom'


const About = () => {

   
  const navigate =useNavigate()

  return (
    <div className='about'>
       <div className='about-left'>
          <img src={brand_logo} alt='' className='about-img'/>
       </div>
       <div className='about-right'>
            <h3>ABOUT STEREOKHART LLC</h3>
            <h2>Monetize Your Music Buisness</h2>
            <p>At Stereokhart LLC, we are passionate about transforming the music landscape through innovative publishing, efficient distribution, and exceptional music production services. Our mission is to empower artists and songwriters, helping them realize their creative visions while maximizing their reach and impact. With a deep understanding of the industry, we provide comprehensive support that includes protecting your intellectual property, distributing your music across all major platforms, and producing high-quality tracks that resonate with audiences. Our dedicated team is committed to nurturing talent and fostering strong relationships, ensuring that every artist we work with has the tools and resources they need to succeed. Join us at Stereokhart LLC, where your music is our heartbeat, and let’s create something extraordinary together.</p>
         <button className='about-btn' onClick={()=>navigate('/info')}>Music Publishing</button>
         {/* <button onClick={()=>navigate('form')}>Contact Form</button> */}
          </div>
    </div>
  )
}

export default About
