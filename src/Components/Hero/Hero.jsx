import React from 'react'
import './Hero.css'
import arrow from '../Assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container' >
       <div className='hero-text'>
          <h1>STEREOKHART LLC</h1>
          <h5>Monetize Your Creativity,</h5>
          <h5>License Your Sound.</h5>
          <p>In today's digital landscape, music publishing requires innovative solutions and adaptability.   STEREOKHART stays ahead of the curve, utilizing cutting-edge technology to streamline licensing, royalty tracking, and copyright protection. Our forward-thinking approach enables us to maximize revenue opportunities for our clients, while ensuring their creative work remains protected. Join us in shaping the future of music publishing.</p>
          <a className='btn' href='#contact'>Get started<img src={arrow} alt='' /></a>
       </div>
    </div>
  )
}

export default Hero
