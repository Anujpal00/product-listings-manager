import React from 'react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  const handlePageClick = (page: number) => {
    onPageChange(page)
  }

  const renderPageButtons = () => {
    const buttons = []
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`pagination-btn ${i === currentPage ? 'active' : ''}`}
          disabled={i === currentPage}
        >
          {i}
        </button>
      )
    }
    return buttons
  }

  return (
    <nav aria-label="Pagination" className="pagination">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="pagination-btn"
      >
        Previous
      </button>
      {renderPageButtons()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="pagination-btn"
      >
        Next
      </button>
    </nav>
  )
}
