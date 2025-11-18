import { useParams } from 'react-router-dom'
import { useProductDetails } from '../../hooks/useProductDetails'
import { ProductDetailsComponent } from '../../components/ProductDetails'

export function ProductDetails() {
  const { id } = useParams<{ id: string }>()
  const { product, loading, error } = useProductDetails(id!)

  return <ProductDetailsComponent product={product} loading={loading} error={error} />
}
