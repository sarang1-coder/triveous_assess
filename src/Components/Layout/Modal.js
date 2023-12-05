import React from 'react'
import { motion } from 'framer-motion'

const Modal = ({ title, description, date, image, onClose }) => {
  console.log(description)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'wheat',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        zIndex: 999,
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '18px',
          padding: '4px',
        }}
      >
        <b>x</b>
      </button>
      <div
        style={{
          flex: '1',
          padding: '0 20px',
          fontFamily: 'Nanum Myeongjo serif',
        }}
      >
        <h2>
          <u>{title}</u>
        </h2>
        <p>{description}</p>
        <p>
          <b>PUBLISHED ON:</b>&emsp;{date}
        </p>
      </div>
      <div style={{ flex: '1' }}>
        <img
          src={image}
          alt="img"
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
        />
      </div>
    </motion.div>
  )
}

const Backdrop = ({ onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(4px)',
        zIndex: 99,
      }}
      onClick={onClick}
    ></motion.div>
  )
}

export { Modal, Backdrop }
