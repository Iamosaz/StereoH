
import React, {useEffect, useState} from 'react';
import './Navbar.css';
import logo from '../Assets/stero.png';
import { Link } from 'react-router-dom';
// import {Fabeer, FaHamburger, FaWindowClose} from 'react-icons/fa'
import { FaTimes,FaBars } from 'react-icons/fa';

const Navbar = () => {
     const [navColor, setNavColor]=useState('#fff')  
const [isOpen, setIsOpen] = useState(false)
const toggleMenu = () => {
  setIsOpen(!isOpen);
};

const handleLinkClick = (menuName) => {
  setMenu(menuName);
  setIsOpen(false); // Close the menu on link click
};

   useEffect(()=>{
      const handleScroll = ()  =>{
      
      const scrollPosition = window.screen.scrollY;
      if(scrollPosition> 100){
        setNavColor("transparent")
      }else{
        setNavColor('#fff')
      }

      window.addEventListener('scroll',handleScroll)
      }
       return () => {
        window.removeEventListener('scroll',handleScroll)  
      }


   },[])
    
   const [menu,setMenu] = useState("home")

  return (
    <nav className='navbar' style={{backgroundColor:navColor}}>
      <div className='nav-logo'>
        <a href='/'> <img src={logo} alt='brand-logo' /></a>
     
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}><Link to='/'>Home</Link> {menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("about")}}><Link to='about'>About</Link>  {menu==="about"?<hr/>:<></>}</li>
        {/* <li  onClick={()=>{setMenu("contact")}}><Link to='/contact'>Contact</Link>  {menu==="contact"?<hr/>:<></>}</li> */}
        <li  onClick={()=>{setMenu("distribution")}}><Link to='/distribution'>Distribution</Link>  {menu==="distribution"?<hr/>:<></>}</li>
        {/* <li  onClick={()=>{setMenu("publishing")}}><Link to='/publishing'>Publishing</Link> {menu==="publishing"?<hr/>:<></>}</li> */}
        <li  onClick={()=>{setMenu("monetize")}}><Link to='/monetize'>Monetize</Link> {menu==="monetize"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("musicproduction")}}><Link to='/musicproduction'>Music Production</Link> {menu==="musicproduction"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login'>
       <a href='#contact'> <button>Contact Us</button> </a>
      </div>

 <div className="nav-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={isOpen? "nav-menu-open":"mobile"}>
      <li onClick={() => handleLinkClick("home")}><Link to="/">Home</Link> {menu === "home" && <hr />}</li>
        <li onClick={() => handleLinkClick("about")}><Link to="/about">About</Link> {menu === "about" && <hr />}</li>
        {/* <li onClick={() => handleLinkClick("contact")}><Link to="/contact">Contact</Link> {menu === "contact" && <hr />}</li> */}
        <li onClick={() => handleLinkClick("distribution")}><Link to="/distribution">Distribution</Link> {menu === "distribution" && <hr />}</li>
        <li onClick={() => handleLinkClick("monetize")}><Link to="/monetize">Monetize</Link> {menu === "monetize" && <hr />}</li>
        <li onClick={() => handleLinkClick("musicproduction")}><Link to="/musicproduction">Music Production</Link> {menu === "musicproduction" && <hr />}</li>
        {/* <div className="mobile_nav-login"> */}
      <div className='mobile_nav-login' onClick={handleLinkClick}>
       <a href='#login' to='/login'> Contact Us </a>
      </div>
      </ul>

    </nav>
  )
}

export default Navbar