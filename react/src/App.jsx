
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

function App() {
  return (
    <>
      <div className='app'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/order' element={<PlaceOrder/>} />
        </Routes>
      </div>
      <div className='footer' id='footer'>
              <div className='footer-content'>
                  <div className='footer-content-left'>
                      <img src="" alt="" />
                      <p>sbdckjerg jbviheoihv hviorhigu94rg hfibhoriupoegtb</p>
                      <div className='footer-social-icons'>
                         <img src="" alt="" />
                         <img src="" alt="" />
                         <img src='' alt="" />
                      </div>
                  </div>
                  <div className='footer-content-center'>
                      
                  </div>
                  <div className='footer-content-right'>
                      
                  </div>
              </div>
            
          </div>
    </>
  )
}

export default App
