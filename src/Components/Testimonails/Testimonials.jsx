import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../Assets/next-icon.png'
import back_icon from '../Assets/back-icon.png'
import user_1 from '../Assets/user-1.png'
import user_2 from '../Assets/scahlett1.jpg'
import user_3 from '../Assets/naughtyG.jpg'
import user_4 from '../Assets/jigi.jpg'
import user_5 from '../Assets/jayw.jpg'


const Testimonials = () => {

            const slider = useRef();
            let tx = 0;

      const slideForward = ()=>{
            if(tx > -50){
               tx -= 20;
            }
            slider.current.style.transform = `translateX(${tx}%)`;
      }
      const slideBackward = ()=>{
        if(tx < 0){
          tx += 20;
       }
       slider.current.style.transform = `translateX(${tx}%)`;
      }
  
  return (
    <div className='testimonials'>
       <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
       <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}/>
       <div className='slider'>
         <ul ref={slider}>
           <li>
              <div className='slide'>
                 <div className='user-info'>
                   <img src={user_1} alt='' />
                   <div>
                     <h3>Jenny Cadi</h3>
                     <span>Artiste</span>
                   </div>
                 </div>
                  <p>
                  I was introduced to Stereokhart llc by a colleague of mine. I decided to give them a try and the rest they say is history. Now am available on all major platforms.​​</p>
              </div>
           </li>

           <li>
              <div className='slide'>
                 <div className='user-info'>
                   <img src={user_2} alt='' />
                   <div>
                     <h3>Scahlett</h3>
                     <span>Artiste</span>
                   </div>
                 </div>
                  <p>
                  Stereokhart llc was able to launch my Ep within just a week of giving them my songs. My fans could download and stream all my songs on all platforms. Kudos to them.​</p>
              </div>
           </li>

           <li>
              <div className='slide'>
                 <div className='user-info'>
                   <img src={user_3} alt='' />
                   <div>
                     <h3>Naughty Beat</h3>
                     <span>Music Producer</span>
                   </div>
                 </div>
                  <p>If you are looking for a platform where you can get value for your creative as musician,artiste or music producer, stereokhart llc is your go to site.​</p>
              </div>
           </li>

           <li>
              <div className='slide'>
                 <div className='user-info'>
                   <img src={user_4} alt='' />
                   <div>
                     <h3>Jigi G</h3>
                     <span>Artiste</span>
                   </div>
                 </div>
                  <p>Before now, i have never earned any money from my Music, but since i started using Stereokhart, i get paid monthly.​</p>
              </div>
           </li>

           <li>
              <div className='slide'>
                 <div className='user-info'>
                   <img src={user_5} alt='' />
                   <div>
                     <h3>Jay W</h3>
                     <span>Artiste</span>
                   </div>
                 </div>
                  <p>
               Stereokhare has major role to play in my music growth,my major break in music as an artiste came as a major gobal music of mine was produced and handle by the big hands in music production industry through them. ​​</p>
              </div>
           </li>
         </ul>
       </div>
    </div>
  )
}

export default Testimonials
