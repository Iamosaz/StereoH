import React from 'react'
import './Services.css'
import service_image1 from '../Assets/studioT.jpg'
import service_image2 from '../Assets/rcord.jpg'
import service_image3 from '../Assets/studio.jpg'
import service_icon1 from '../Assets/speaker.jpg'
import service_icon2 from '../Assets/voiceRecord.jpg'
import service_icon3 from '../Assets/mix.jpg'

const Services = () => {
  return (
    <div className='services container'>
       <div className='service'>
          <img src={service_image1} alt='' />
          <div className='caption'>
             <img src={service_icon1} alt='' />
             <p>Studio Session</p>
          </div>
       </div>

       <div className='service'>
          <img src={service_image2} alt='' />
          <div className='caption'>
             <img src={service_icon2} alt='' />
             <p>Vocal Recording</p>
          </div>
       </div>

       <div className='service'>
          <img src={service_image3} alt='' />
          <div className='caption'>
             <img src={service_icon3} alt='' />
             <p>Mixing and Mastering</p>
          </div>
       </div>
    </div>
  )
}

export default Services
