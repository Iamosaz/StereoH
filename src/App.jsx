import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MonetizeLayout from './layout/MonetizeLayout';
import AboutLayout from './layout/AboutLayout';
import SharedLayout from './SharedLayout';
import Homepage from './Homepage';
import AboutInfo from './Components/AboutInfo/AboutInfo';
import MusicProduction from './Components/Musicproduction/MusicProduction';
import Distribution from './Components/Distribution/Distribution';
import Contact from './Components/Contact/Contact';


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
          <Route path="/about" element={<AboutLayout />}></Route>
              <Route path="info"  element={<AboutInfo/>}/>
          <Route path="musicproduction" element={<MusicProduction/>}/>
          <Route path="distribution" element={<Distribution/>}/>
          <Route path="contact" element={<Contact/>}/>
          </Route>
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
