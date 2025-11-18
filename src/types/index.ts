export type Product = {
  id: string
  name: string
  price: number
  category: string
  inStock: boolean
  description?: string
}

export type ListResponse<T> = {
  items: T[]
  page: number
  limit: number
  total: number
}

export type SortOption = 'name' | 'price' | 'category'

export type FilterOptions = {
  query: string
  category: string
  sortBy: SortOption
  sortOrder: 'asc' | 'desc'
}

export type PaginationState = {
  page: number
  limit: number
  total: number
}
