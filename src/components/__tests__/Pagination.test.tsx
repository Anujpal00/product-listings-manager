import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import { Pagination } from '../Pagination'

const mockOnPageChange = vi.fn()

describe('Pagination', () => {
  beforeEach(() => {
    mockOnPageChange.mockClear()
  })

  it('renders pagination controls correctly', () => {
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    )

    expect(screen.getByLabelText('Pagination')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Previous' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('calls onPageChange when next button is clicked', () => {
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    )

    const nextButton = screen.getByRole('button', { name: 'Next' })
    fireEvent.click(nextButton)

    expect(mockOnPageChange).toHaveBeenCalledWith(3)
  })

  it('calls onPageChange when previous button is clicked', () => {
    render(
      <Pagination
        currentPage={3}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    )

    const prevButton = screen.getByRole('button', { name: 'Previous' })
    fireEvent.click(prevButton)

    expect(mockOnPageChange).toHaveBeenCalledWith(2)
  })

  it('disables previous button on first page', () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    )

    const prevButton = screen.getByRole('button', { name: 'Previous' })
    expect(prevButton).toBeDisabled()
  })

  it('disables next button on last page', () => {
    render(
      <Pagination
        currentPage={5}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    )

    const nextButton = screen.getByRole('button', { name: 'Next' })
    expect(nextButton).toBeDisabled()
  })
})
