import React from 'react'
import { motion } from 'framer-motion'
import { Modal, Backdrop } from './Modal'
import { Button } from '@mui/material'

const TopHeadlinesGrid = ({ currentItems, selectedId, setSelectedId }) => {
  return (
    <>
      {currentItems?.map((item, idx) => (
        <motion.div
          key={idx}
          layoutId={idx}
          onClick={() => setSelectedId(idx)}
          style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            margin: '16px',
            width: '300px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              backgroundImage: `url(${item.urlToImage})`,
              backgroundSize: 'cover',
              borderTopLeftRadius: '8px',
              borderTopRightRadius: '8px',
              height: '150px',
              border: '1px solid black',
            }}
          ></div>
          <div style={{ padding: '16px', flexGrow: 1 }}>
            <h3 style={{ margin: '0', marginBottom: '8px' }}>{item.title}</h3>
            <p style={{ margin: '0', color: '#666', fontSize: '14px' }}>
              {item.author}
            </p>
          </div>
        </motion.div>
      ))}
    </>
  )
}

export default TopHeadlinesGrid
