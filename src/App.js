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
import { AuthProvider } from './utils/context'
import { Provider } from 'react-redux'
import store from './utils/store/store'

function App() {
  return (
    <div>
      <Provider store={store}>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<SignInSide />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </Router>
        </AuthProvider>
      </Provider>
    </div>
  )
}

export default App

// abcd@gmail.com
// abcd1234
