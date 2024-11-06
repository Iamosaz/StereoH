import React from 'react'
import monetize_img from '../Assets/piggy.jpg'
import './Monetization.css'


const Monetization = () => {
  return (
    <div className="monetization">
      <div className="monetize-left">
        <h1>MONETIZATION</h1>
        <br />
        <h3>
        Sell your music on online stores/platforms like iTunes, Spotify, Apple Music, Deezer, Youtube, Boomplay, TikTok and over 90+ Websites.
        </h3>
        <br />
        <br />
        <img src={monetize_img} alt="" />
      </div>
      <div className="monetize-right">
        <h1>How We <span>MONETIZE</span> Your Music</h1>
        <br />
        <h4>  At Stereokhart LLC, we offer various strategies to help you monetize
        your music effectively:</h4>
        <br/>
        <p>
         1.<span>Streaming and Distribution</span>: We can assist
          in distributing your music across all major streaming platforms,
          ensuring you maximize your reach and revenue.
        </p>
        <br/>
        <p>
          2.<span>Licensing Opportunities</span>: We connect you with opportunities to license your
          music for use in films, commercials, and video games, creating
          additional income streams.
        </p>
        <br/>
        <p>
          3.<span>Merchandising</span>: We help you design and
          sell merchandise, capitalizing on your brand and fan engagement.
        </p>
        <br/>
        <p>
         4.<span>Live Performances</span>: We can promote and organize live events, helping
         you book gigs and tours to generate income.
        </p>
        <br/>
         5.<span>Crowdfunding</span>: We
          guide you in launching crowdfunding campaigns to support your projects
          and build a community of dedicated fans.
        <p>
          <br/>
          <p>
           6.<span>Marketing and Promotion</span> Our team will work with you to develop targeted marketing strategies
           to increase your audience and drive sales.
          </p>
          <br/>
          By leveraging these
          services, we can help you build a sustainable income from your music
          career.
        </p>
        <div>
          <br/>
          <br/>
          {/* <h1>Our Publishing Partners</h1> */}
        </div>
       
      </div>
    </div>
  );
}

export default Monetization
