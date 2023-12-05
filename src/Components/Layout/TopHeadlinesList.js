import React from 'react'
import { motion } from 'framer-motion'
import { Modal, Backdrop } from './Modal'
import { Button } from '@mui/material'

const TopHeadlinesList = ({ currentItems, selectedId, setSelectedId }) => {
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
            width: '70vw',
            height: '20vh',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <div
            style={{
              backgroundImage: `url(${item.urlToImage})`,
              backgroundSize: 'cover',
              borderTopLeftRadius: '8px',
              borderBottomLeftRadius: '8px',
              width: '30%',
              minHeight: '150px',
            }}
          ></div>
          <div style={{ padding: '16px', width: '70%' }}>
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

export default TopHeadlinesList
