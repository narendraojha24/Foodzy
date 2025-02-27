
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import { assets } from './assets/assets'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'

function App() {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/order' element={<PlaceOrder/>} />
        </Routes>
      </div>
      <div className='footer' id='footer'>
              <div className='footer-content'>
                  <div className='footer-content-left'>
                      <h1>Foodzy</h1>
                      <p> Every dish is made to bring you the perfect balance of taste and quality.</p>
                      <div className='footer-social-icons'>
                         <img src={assets.facebook_icon} alt="" />
                         <img src={assets.twitter_icon} alt="" />
                         <img src={assets.linkedin_icon} alt="" />
                      </div>
                  </div>
                  <div className='footer-content-center'>
                    <h2>COMPANY</h2>
                    <ul>
                      <li>Home</li>
                      <li>About</li>
                      <li>Delivery</li>
                      <li>Privacy policy</li>
                    </ul>
                      
                  </div>
                  <div className='footer-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                      <li>+91-7987627973</li>
                      <li>contact@foodzy.com</li>
                    </ul>
                      
                  </div>
              </div>
              <hr />
              <p className="footer-copyright">Copyright 2025 Foodzy.com - All Right Reserved</p>
            
          </div>
    </>
  )
}

export default App
