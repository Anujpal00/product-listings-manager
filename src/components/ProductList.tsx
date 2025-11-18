import { ProductCard } from './ProductCard'
import { Pagination } from './Pagination'
import { SearchBar } from './SearchBar'
import { CategoryFilter } from './CategoryFilter'
import { SortDropdown } from './SortDropdown'
import { Product, FilterOptions, PaginationState } from '../types/index'

interface ProductListProps {
  products: Product[]
  pagination: PaginationState
  filters: FilterOptions
  loading: boolean
  error: string | null
  onFiltersChange: (filters: Partial<FilterOptions>) => void
  onPageChange: (page: number) => void
}

export function ProductList({
  products,
  pagination,
  filters,
  loading,
  error,
  onFiltersChange,
  onPageChange
}: ProductListProps) {
  return (
    <section aria-labelledby="products-heading" className="container">
      <h1 id="products-heading" className="products-heading">Products</h1>

      {/* Toolbar */}
      <div className="toolbar">
        <div className="toolbar-controls">
          <SearchBar filters={filters} onFiltersChange={onFiltersChange} />
          <CategoryFilter filters={filters} onFiltersChange={onFiltersChange} />
          <SortDropdown filters={filters} onFiltersChange={onFiltersChange} />
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="loading-state" aria-live="polite">
          <div className="loading-spinner"></div>
          <p>Loading products...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="error-state" role="alert">
          <p className="error-message">Error loading products: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="btn-primary"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && products.length === 0 && (
        <div className="empty-state">
          <p className="empty-message">No products found matching your criteria.</p>
          <button
            onClick={() => onFiltersChange({ query: '', category: '' })}
            className="btn-primary"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Products Grid */}
      {!loading && !error && products.length > 0 && (
        <>
          <div
            className="products-container"
            aria-live="polite"
            data-testid="products-list"
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Pagination
            currentPage={pagination.page}
            totalPages={Math.ceil(pagination.total / pagination.limit)}
            onPageChange={onPageChange}
          />
        </>
      )}
    </section>
  )
}
