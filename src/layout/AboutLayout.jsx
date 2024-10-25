import React from 'react'
import { Outlet } from 'react-router-dom';
import About from '../Components/About/About';

const AboutLayout = () => {
  return (
    <div>
      <Outlet/>
      <About/>
    </div>
  )
}

export default AboutLayout
