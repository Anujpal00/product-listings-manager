import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { ProductList } from '../ProductList'
import { Product } from '../../types'

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Test Product 1',
    price: 100,
    category: 'electronics',
    inStock: true,
    description: 'A test product'
  },
  {
    id: '2',
    name: 'Test Product 2',
    price: 200,
    category: 'books',
    inStock: false,
    description: 'Another test product'
  }
]

const mockPagination = {
  page: 1,
  limit: 10,
  total: 20
}

const mockFilters = {
  query: '',
  category: '',
  sortBy: 'name' as const,
  sortOrder: 'asc' as const
}

const mockOnFiltersChange = vi.fn()
const mockOnPageChange = vi.fn()

describe('ProductList', () => {
  beforeEach(() => {
    mockOnFiltersChange.mockClear()
    mockOnPageChange.mockClear()
  })

  it('renders products correctly', () => {
    render(
      <ProductList
        products={mockProducts}
        pagination={mockPagination}
        filters={mockFilters}
        loading={false}
        error={null}
        onFiltersChange={mockOnFiltersChange}
        onPageChange={mockOnPageChange}
      />
    )

    expect(screen.getByRole('heading', { name: 'Products' })).toBeInTheDocument()
    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByTestId('products-list')).toBeInTheDocument()
    expect(screen.getAllByTestId(/^product-card-/)).toHaveLength(2)
  })

  it('renders loading state', () => {
    render(
      <ProductList
        products={[]}
        pagination={mockPagination}
        filters={mockFilters}
        loading={true}
        error={null}
        onFiltersChange={mockOnFiltersChange}
        onPageChange={mockOnPageChange}
      />
    )

    expect(screen.getByTestId('loading-state')).toBeInTheDocument()
    expect(screen.getByText('Loading products...')).toBeInTheDocument()
  })

  it('renders error state', () => {
    const errorMessage = 'Failed to load products'
    render(
      <ProductList
        products={[]}
        pagination={mockPagination}
        filters={mockFilters}
        loading={false}
        error={errorMessage}
        onFiltersChange={mockOnFiltersChange}
        onPageChange={mockOnPageChange}
      />
    )

    expect(screen.getByTestId('error-state')).toBeInTheDocument()
    expect(screen.getByText(`Error loading products: ${errorMessage}`)).toBeInTheDocument()
  })

  it('renders empty state when no products', () => {
    render(
      <ProductList
        products={[]}
        pagination={mockPagination}
        filters={mockFilters}
        loading={false}
        error={null}
        onFiltersChange={mockOnFiltersChange}
        onPageChange={mockOnPageChange}
      />
    )

    expect(screen.getByTestId('empty-state')).toBeInTheDocument()
    expect(screen.getByText('No products found matching your criteria.')).toBeInTheDocument()
  })

  it('calls onFiltersChange when search input changes', async () => {
    render(
      <ProductList
        products={mockProducts}
        pagination={mockPagination}
        filters={mockFilters}
        loading={false}
        error={null}
        onFiltersChange={mockOnFiltersChange}
        onPageChange={mockOnPageChange}
      />
    )

    const searchInput = screen.getByTestId('search-bar').querySelector('input')
    expect(searchInput).toBeInTheDocument()

    fireEvent.change(searchInput!, { target: { value: 'test search' } })

    await waitFor(() => {
      expect(mockOnFiltersChange).toHaveBeenCalledWith({ query: 'test search' })
    })
  })

  it('calls onFiltersChange when category filter changes', () => {
    render(
      <ProductList
        products={mockProducts}
        pagination={mockPagination}
        filters={mockFilters}
        loading={false}
        error={null}
        onFiltersChange={mockOnFiltersChange}
        onPageChange={mockOnPageChange}
      />
    )

    const categorySelect = screen.getByTestId('category-filter').querySelector('select')
    expect(categorySelect).toBeInTheDocument()

    fireEvent.change(categorySelect!, { target: { value: 'electronics' } })

    expect(mockOnFiltersChange).toHaveBeenCalledWith({ category: 'electronics' })
  })

  it('calls onFiltersChange when sort dropdown changes', () => {
    render(
      <ProductList
        products={mockProducts}
        pagination={mockPagination}
        filters={mockFilters}
        loading={false}
        error={null}
        onFiltersChange={mockOnFiltersChange}
        onPageChange={mockOnPageChange}
      />
    )

    const sortSelect = screen.getByTestId('sort-dropdown').querySelector('select')
    expect(sortSelect).toBeInTheDocument()

    fireEvent.change(sortSelect!, { target: { value: 'price-asc' } })

    expect(mockOnFiltersChange).toHaveBeenCalledWith({ sortBy: 'price', sortOrder: 'asc' })
  })

  it('renders pagination component', () => {
    render(
      <ProductList
        products={mockProducts}
        pagination={mockPagination}
        filters={mockFilters}
        loading={false}
        error={null}
        onFiltersChange={mockOnFiltersChange}
        onPageChange={mockOnPageChange}
      />
    )

    expect(screen.getByTestId('pagination')).toBeInTheDocument()
  })
})
