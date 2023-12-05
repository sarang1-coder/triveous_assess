import React from 'react'
import { motion } from 'framer-motion'
import Topheadlines from './Topheadlines'

export const Main = () => {
  const mainStyle = {
    minHeight: '100vh',
    overflowY: 'auto',
    backgroundColor:'wheat'
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
      <div style={containerStyle}>
        <div className="toggle_btn">
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            style={buttonStyle}
          >
            Button 1
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            style={buttonStyle}
          >
            Button 2
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            style={buttonStyle}
          >
            Button 3
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            style={buttonStyle}
          >
            Button 4
          </motion.button>
        </div>
        <div className="search_txt">
          <input
            className="input_txt"
            type="text"
            placeholder="Search"
            style={inputStyle}
          />
        </div>
      </div>
      <Topheadlines />
    </div>
  )
}
