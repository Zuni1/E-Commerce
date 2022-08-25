import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Container from './Navbar/Container'
import ProtectedRoute from './Routes/ProtectedRoute'
import Index from './Components/Vudu/Index'
import Movies from './Components/Movies/Movies'
import Tv from './Components/Tv/Tv'
import Free from './Components/Free/Free'
import Cart from './Components/Cart/Cart' 
import Login from './Components/Login/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Container/>}>
          <Route element={<ProtectedRoute/>}>
            <Route index element={<Index/>}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/tv' element={<Tv/>}/>
            <Route path='/free' element={<Free/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Route>
          <Route path='/login' element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
