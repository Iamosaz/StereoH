
import React, {useEffect, useState} from 'react';
import './Navbar.css';
import logo from '../Assets/stero.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
     const [navColor, setNavColor]=useState('#fff')  

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
    <div className='navbar' style={{backgroundColor:navColor}}>
      <div className='nav-logo'>

      <img src={logo} alt='brand-logo' />
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("home")}}><Link to='/'>Home</Link> {menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("about")}}><Link to='about'>About</Link>  {menu==="about"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("contact")}}><Link to='/contact'>contact</Link>  {menu==="contact"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("distribution")}}><Link to='/distribution'>distribution</Link>  {menu==="distribution"?<hr/>:<></>}</li>
        {/* <li  onClick={()=>{setMenu("publishing")}}><Link to='/publishing'>Publishing</Link> {menu==="publishing"?<hr/>:<></>}</li> */}
        <li  onClick={()=>{setMenu("monetize")}}><Link to='/monetize'>Monetize</Link> {menu==="monetize"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("musicproduction")}}><Link to='/musicproduction'>Music Production</Link> {menu==="musicproduction"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login'>
       <a href='#login' to='/login'> <button>Contact Us</button> </a>
      </div>
    </div>
  )
}

export default Navbar