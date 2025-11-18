import { useState, useEffect } from 'react'
import { Product } from '../types/index'
import { fetchProduct } from '../utils/api'

export function useProductDetails(id: string) {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    const loadProduct = async () => {
      setLoading(true)
      setError(null)
      try {
        const data = await fetchProduct(id)
        setProduct(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    loadProduct()
  }, [id])

  return {
    product,
    loading,
    error
  }
}
