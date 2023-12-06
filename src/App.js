import { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import UserContext from './utils/userContext'
import { Toaster } from 'react-hot-toast'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Button } from '@mui/material'
import SignInSide from './Components/Authentication/SignIn'
import SignUp from './Components/Authentication/SignUp'
import Home from './Components/Layout/Home'
import { Provider } from 'react-redux'
import store from './utils/store/store'
import ProtectedRoute, { RequireAuth } from './utils/PrivateRoute'
import { AuthProvider, UserAuthContextProvider } from './utils/useAuth'

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/" element={<SignInSide />} />
              <Route path="/signup" element={<SignUp />} />
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </UserAuthContextProvider>
        </Router>
      </Provider>
    </div>
  )
}

export default App
