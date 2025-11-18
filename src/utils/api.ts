import { Product, ListResponse } from '../types'

const API_BASE = ''

export async function fetchProducts(params: {
  page?: number
  limit?: number
  query?: string
  category?: string
}): Promise<ListResponse<Product>> {
  const searchParams = new URLSearchParams()
  if (params.page) searchParams.set('page', params.page.toString())
  if (params.limit) searchParams.set('limit', params.limit.toString())
  if (params.query) searchParams.set('query', params.query)
  if (params.category) searchParams.set('category', params.category)

  const response = await fetch(`${API_BASE}/products?${searchParams}`)
  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }
  return response.json()
}

export async function fetchProduct(id: string): Promise<Product> {
  const response = await fetch(`${API_BASE}/products/${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch product')
  }
  return response.json()
}
