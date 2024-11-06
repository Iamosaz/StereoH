import React from 'react'
import './AboutInfo.css'
import publishing_img from '../Assets/publ.jpg'

const AboutInfo = () => {
  return (
    <div className="about-publishing">
      <div className="publishing-left">
        <h1>How We Publish Your Music</h1>
        <p>
          Music publishing is the process through which you collect the
          royalties earned from the music you write. When you write a song, and
          it’s used commercially, you’re owed royalties. That means your
          original songs generate revenue with every stream on Spotify, video
          creation on TikTok, view on YouTube, radio spin, or live performance
          worldwide. As your Publishing administrator, Stereokhart Publishing will
          collect your revenue and pay it to you.
        </p>
        <br />
        <br />
        <img src={publishing_img} alt="" />
      </div>
      <div className="publishing-right">
        <h2> At StereoKhart LLC, we understand that navigating the music publishing
        landscape can be challenging.</h2>
        <h3>Here’s how we can support you ;</h3>
        <br />
        <p>
        <span>1.Copyright Registration:</span> We help you register your works to protect your intellectual property and ensure you receive proper credit and royalties. 
        </p>
        <br/>
        <p>
        <span ><b>2. </b>Licensing and Royalties:</span> Our team specializes in
          securing licenses for your music, maximizing your revenue through
          performance and mechanical royalties. 
        </p>
        <br/>
        <p>
        <span>3.Creative Support:</span> We offer
          guidance in song development and collaboration opportunities,
          connecting you with industry professionals to enhance your craft.
        </p>
        <br/>
        <p>
          <span>4.Marketing and Promotion:</span> We assist in promoting your music through
          various channels, increasing your visibility and reach in the
          industry. 
        </p>
        <br/>
        <p>
          <span>5.Music Catalog Management:</span> Our services include managing
          your music catalog efficiently, helping you keep track of your works
          and their performance.
        </p>
        <br/>
        <p>
         <span> 6.Dispute Resolution:</span> In case of any
          conflicts or disputes regarding your works, we provide legal support
          and guidance to resolve issues swiftly.
        </p>
        <br/>
        <p>
          <span> 7.Royalty Collection:</span> Our team monitors and collects performance and mechanical royalties from
          various sources, including streaming platforms and public
          performances.
        </p>
         <br/>
         <p>
         By partnering with StereoKhart LLC, you gain a dedicated
          team committed to advancing your music career. Let’s work together to
          unlock your potential and achieve your publishing goals.
        </p>
    
     
      </div>
    </div>
  );
}

export default AboutInfo
