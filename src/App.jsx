import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import MonetizeLayout from './layout/MonetizeLayout';
import AboutLayout from './layout/AboutLayout';
import SharedLayout from './SharedLayout';
import Homepage from './Homepage';
import AboutInfo from './Components/AboutInfo/AboutInfo';

import MusicProduction from './Components/Musicproduction/MusicProduction';
import Distribution from './Components/Distribution/Distribution';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout/>
          }>
          <Route index element={<Homepage/>}/>
          {/* Monetize Layout with Nested Route */}
          <Route path="/monetize" element={<MonetizeLayout />}></Route>
          <Route path="/about" element={<AboutLayout />}>
          </Route>
              <Route path="Aboutinfo"  element={<AboutInfo/>}/>
          <Route path="musicproduction" element={<MusicProduction/>}/>
          <Route path="distribution" element={<Distribution/>}/>
          </Route>
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
