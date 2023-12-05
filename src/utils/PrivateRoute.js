// PrivateRoute.js
import React, { useContext } from 'react'
import { Route, Navigate } from 'react-router-dom'
import { AuthContext } from './context'

const PrivateRoute = ({ path, element }) => {
  const { user } = useContext(AuthContext)

  return user ? <Route path={path} element={element} /> : <Navigate to="/" />
}

export default PrivateRoute
