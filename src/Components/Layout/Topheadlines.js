import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../utils/slice/dataSlice'
import { motion, AnimatePresence } from 'framer-motion'
import { Modal, Backdrop } from './Modal'
import { Button } from '@mui/material'

const TopHeadlines = () => {
  const headerStyle = {
    borderBottom: '2px solid #000',
    display: 'inline-block',
    textAlign: 'uppercase',
    paddingRight: '20px',
    marginBottom: '0',
    textTransform: 'uppercase',
  }

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

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

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = info.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    setSelectedId(null)
  }

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
      {/* pagination */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        {Array.from(
          { length: Math.ceil(info.length / itemsPerPage) },
          (_, index) => (
            <Button
              key={index}
              onClick={() => paginate(index + 1)}
              style={{
                margin: '0 5px',
                backgroundColor: 'white',
                margin: '1rem',
              }}
            >
              {index + 1}
            </Button>
          ),
        )}
      </div>
    </div>
  )
}

export default TopHeadlines
