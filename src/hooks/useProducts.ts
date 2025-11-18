import { useState, useEffect, useCallback } from 'react'
import { Product, ListResponse, FilterOptions, PaginationState } from '../types/index'
import { fetchProducts } from '../utils/api'
import { ITEMS_PER_PAGE } from '../utils/constants'

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [pagination, setPagination] = useState<PaginationState>({
    page: 1,
    limit: ITEMS_PER_PAGE,
    total: 0
  })
  const [filters, setFilters] = useState<FilterOptions>({
    query: '',
    category: '',
    sortBy: 'name',
    sortOrder: 'asc'
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loadProducts = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const response: ListResponse<Product> = await fetchProducts({
        page: pagination.page,
        limit: pagination.limit,
        query: filters.query,
        category: filters.category === 'All' ? '' : filters.category
      })

      // Sort the items
      const sortedItems = [...response.items].sort((a, b) => {
        const aValue = a[filters.sortBy as keyof Product] as string | number
        const bValue = b[filters.sortBy as keyof Product] as string | number
        const comparison = aValue < bValue ? -1 : aValue > bValue ? 1 : 0
        return filters.sortOrder === 'asc' ? comparison : -comparison
      })

      setProducts(sortedItems)
      setPagination((prev: PaginationState) => ({ ...prev, total: response.total }))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }, [pagination.page, pagination.limit, filters])

  useEffect(() => {
    loadProducts()
  }, [loadProducts])

  const updateFilters = useCallback((newFilters: Partial<FilterOptions>) => {
    setFilters((prev: FilterOptions) => ({ ...prev, ...newFilters }))
    setPagination((prev: PaginationState) => ({ ...prev, page: 1 })) // Reset to first page on filter change
  }, [])

  const updatePage = useCallback((page: number) => {
    setPagination((prev: PaginationState) => ({ ...prev, page }))
  }, [])

  return {
    products,
    pagination,
    filters,
    loading,
    error,
    updateFilters,
    updatePage,
    refetch: loadProducts
  }
}
