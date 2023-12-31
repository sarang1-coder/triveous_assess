import React from 'react'
import { motion } from 'framer-motion'
import Topheadlines from './Topheadlines'

export const Main = () => {
  const mainStyle = {
    minHeight: '100vh',
    overflowY: 'auto',
    backgroundColor: 'wheat',
  }

  const buttonStyle = {
    backgroundColor: '#a838c7',
    padding: '10px',
    border: 'none',
    borderRadius: '10px',
    color: 'white',
    cursor: 'pointer',
    fontFamily: 'Arial, sans-serif',
    margin: '1rem',
  }

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
  }

  const inputStyle = {
    width: '30vw',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    flex: '2',
  }

  return (
    <div style={mainStyle}>
      <Topheadlines />
    </div>
  )
}
