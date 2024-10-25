import React from 'react'
import './Footer.css'
import music_platform from '../Assets/musicplatform1.jpg'

const Footer = () => {
  return (
    <div className='footer'>
      <p>@ 2024 Stereokhart. All rights reserved.</p>
      <ul>
        <li>Terms of Services</li>
        <li>Privacy Policy</li>
      </ul>
        <div className='musicp'>
        <img src={music_platform} alt='' />
        </div>
    </div>
  )
}

export default Footer
