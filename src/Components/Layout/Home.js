import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Main } from './Main'
import Header from './Header'

const Home = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}

export default Home
