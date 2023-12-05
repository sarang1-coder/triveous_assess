import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../utils/slice/dataSlice'
import { motion, AnimatePresence } from 'framer-motion'
import { Modal, Backdrop } from './Modal'

const TopHeadlines = () => {
  const headerStyle = {
    borderBottom: '2px solid #000',
    display: 'inline-block',
    textAlign: 'uppercase',
    paddingRight: '20px',
    marginBottom: '0',
    textTransform: 'uppercase',
  }

  const [selectedId, setSelectedId] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data.data)
  const loading = useSelector((state) => state.data.loading)
  const error = useSelector((state) => state.data.error)
  const info = data.articles

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const handleCloseModal = () => {
    setSelectedId(null)
    setShowModal(false)
  }

  if (!info || !Array.isArray(info) || info.length === 0) {
    return <div>No data available</div>
  }

  return (
    <div>
      &emsp;<h1 style={headerStyle}>Top Headlines</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      >
        {info?.map((item, idx) => (
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

        <AnimatePresence>
          {selectedId !== null && (
            <>
              <Modal
                title={info[selectedId]?.title}
                description={info[selectedId]?.description}
                date={info[selectedId]?.publishedAt}
                image={info[selectedId]?.urlToImage}
                onClose={() => setSelectedId(null)}
              />
              <Backdrop onClick={() => setSelectedId(null)} />
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default TopHeadlines
