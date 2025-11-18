import { useProducts } from '../../hooks/useProducts'
import { ProductList as ProductListComponent } from '../../components/ProductList'

export function ProductList() {
  const {
    products,
    pagination,
    filters,
    loading,
    error,
    updateFilters,
    updatePage
  } = useProducts()

  return (
    <ProductListComponent
      products={products}
      pagination={pagination}
      filters={filters}
      loading={loading}
      error={error}
      onFiltersChange={updateFilters}
      onPageChange={updatePage}
    />
  )
}
