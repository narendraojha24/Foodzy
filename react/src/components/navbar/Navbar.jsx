import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

export default function Navbar() {
  const[menu,setMenu]=useState("home");
  return (
    <div className='navbar'>
      <div className="logo">
        <h1>Foodzy</h1></div>
        <ul className='navbar-menu'>
          <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
          <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
          <a href='#app-download' onClick={()=>setMenu("mobile-app")}className={menu==="mobile-app"?"active":""}>mobile-app</a>
          <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
          </ul>   
          <div className="navbar-right">
            <div className="box-icon"><i class='bx bx-search'></i></div>
            <div className="navbar-search-icon">
            <div className="box-icon"><i class='bx bxs-basket' ></i></div>
              <div className="dot"></div>
            </div>
            <button className='signin'>Sign in</button>
          </div> 
      
    </div>
  )
}
