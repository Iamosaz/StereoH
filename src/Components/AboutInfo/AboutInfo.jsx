import React from 'react'
import './AboutInfo.css'
import publishing_img from '../Assets/piggy.jpg'

const AboutInfo = () => {
  return (
    <div className="about-publishing">
      <div className="publishing-left">
        <h1>How We Publish Your Music</h1>
        <br />
        <p>
          Music publishing is the process through which you collect the
          royalties earned from the music you write. When you write a song, and
          it’s used commercially, you’re owed royalties. That means your
          original songs generate revenue with every stream on Spotify, video
          creation on TikTok, view on YouTube, radio spin, or live performance
          worldwide. As your Publishing administrator, Yivera Publishing will
          collect your revenue and pay it to you.
        </p>
        <br />
        <br />
        <img src={publishing_img} alt="" />
      </div>
      <div className="publishing-right">
        <h2> At StereoKhart LLC, we understand that navigating the music publishing
        landscape can be challenging.</h2>
        <h3>Here’s how we can support you</h3>
        <br />
        <p>
          At StereoKhart LLC, we understand that navigating the music publishing
          landscape can be challenging. Here’s how we can support you: 1.
          *Copyright Registration*: We help you register your works to protect
          your intellectual property and ensure you receive proper credit and
          royalties. 2. *Licensing and Royalties*: Our team specializes in
          securing licenses for your music, maximizing your revenue through
          performance and mechanical royalties. 3. *Creative Support*: We offer
          guidance in song development and collaboration opportunities,
          connecting you with industry professionals to enhance your craft. 4.
          *Marketing and Promotion*: We assist in promoting your music through
          various channels, increasing your visibility and reach in the
          industry. 5. *Music Catalog Management*: Our services include managing
          your music catalog efficiently, helping you keep track of your works
          and their performance. 6. *Dispute Resolution*: In case of any
          conflicts or disputes regarding your works, we provide legal support
          and guidance to resolve issues swiftly. 7 *Royalty Collection* Our
          team monitors and collects performance and mechanical royalties from
          various sources, including streaming platforms and public
          performances. By partnering with StereoKhart LLC, you gain a dedicated
          team committed to advancing your music career. Let’s work together to
          unlock your potential and achieve your publishing goals.
        </p>
      </div>
    </div>
  );
}

export default AboutInfo
