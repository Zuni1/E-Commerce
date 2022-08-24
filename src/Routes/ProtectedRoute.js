import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = () => {
  
  const token = useSelector(state => state.user.user)

  return (
    token ? <Outlet/> : <Navigate to={'login'} />
  )
}

export default ProtectedRoute
