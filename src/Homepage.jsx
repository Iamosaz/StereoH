import React from 'react'
import Hero from './Components/Hero/Hero';
import Services from './Components/Services/Services';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Testimonials from './Components/Testimonails/Testimonials';
import Contact from './Components/Contact/Contact';
const Homepage = () => {
  return (
    <div>
      <Hero />
              <Title subTitle='Our SERVICES' title='"Your Music, Our Priority"' titleh2='We offer a range of services designed to support songwriters, composers, and artists.' />
              <Services />
              <About />
              <Title subTitle='TESTIMONIALS' title='What STEREOKHART LLC Users Say' />
              <Testimonials />
              <Title subTitle='Contact Us' title='STEREOKHART LLC' />
              <Contact /> 
    </div>
  )
}

export default Homepage
