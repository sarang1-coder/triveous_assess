import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../utils/slice/dataSlice'
import { motion, AnimatePresence } from 'framer-motion'
import { Modal, Backdrop } from './Modal'
import { Button } from '@mui/material'
import TopHeadlinesGrid from './TopHeadlinesGrid'
import TopHeadlinesList from './TopHeadlinesList'

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
  const [viewType, setViewType] = useState('grid')
  const data = useSelector((state) => state.data.data)
  const loading = useSelector((state) => state.data.loading)
  const error = useSelector((state) => state.data.error)
  const info = data?.articles

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  //   pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = info?.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    setSelectedId(null)
  }

  if (!info || !Array.isArray(info) || info.length === 0) {
    return <div>No data available</div>
  }

  const handleToggleView = () => {
    setViewType(viewType === 'grid' ? 'list' : 'grid')
  }

  return (
    <div>
      &emsp;<h1 style={headerStyle}>Top Headlines</h1>
      {/* Button to toggle view */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '20px 0',
        }}
      >
        <Button variant="outlined" onClick={handleToggleView}>
          Switch to {viewType === 'grid' ? 'List' : 'Grid'} View
        </Button>
      </div>
      {/* Grid View */}
      <div
        style={{
          display: viewType === 'grid' ? 'flex' : 'block',
          flexWrap: 'wrap',
          justifyContent: viewType === 'grid' ? 'space-evenly' : 'flex-start',
        }}
      >
        {viewType === 'grid' ? (
          <TopHeadlinesGrid
            currentItems={currentItems}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        ) : (
          <TopHeadlinesList
            currentItems={currentItems}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        )}

        {/* show modal */}
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
