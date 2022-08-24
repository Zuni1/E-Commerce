import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Container from '../Navbar/Container'
import ProtectedRoute from './ProtectedRoute'
import Index from '../Components/Vudu/Index'
import Movies from '../Components/Movies/Movies'
import Tv from '../Components/Tv/Tv'
import Free from '../Components/Free/Free'
import Cart from '../Components/Cart/Cart' 
import Login from '../Components/Login/Login'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Container/>}>
          <Route element={<ProtectedRoute/>}>
            <Route index element={<Index/>}/>
          </Route>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/tv' element={<Tv/>}/>
          <Route path='/free' element={<Free/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter