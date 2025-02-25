import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

export default function Navbar({setShowLogin}) {
  const[menu,setMenu]=useState("home");

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'><div className="logo">
        <h1>Foodzy</h1></div></Link>
        <ul className='navbar-menu'>
          <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
          <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
          <a href='#app-download' onClick={()=>setMenu("mobile-app")}className={menu==="mobile-app"?"active":""}>mobile-app</a>
          <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
          </ul>   
          <div className="navbar-right">
            <div className="box-icon"><i class='bx bx-search'></i></div>
            <div className="navbar-search-icon">
            <Link to='/Cart'><div className="box-icon"><i class='bx bxs-basket' ></i></div></Link> 
              <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button className='signin' onClick={()=>setShowLogin(true)} >Sign in</button>
          </div> 
      
    </div>
  )
}
