import { Link } from 'react-router-dom'
import { Product } from '../types/index'

interface ProductDetailsProps {
  product: Product | null
  loading: boolean
  error: string | null
}

export function ProductDetailsComponent({ product, loading, error }: ProductDetailsProps) {
  if (loading) {
    return (
      <article aria-labelledby="product-heading" className="product-details">
        <h1 id="product-heading" className="product-details-title">Product Details</h1>
        <div className="product-details-loading">
          <div className="loading-skeleton w-3/4 mb-4"></div>
          <div className="loading-skeleton w-1/2 mb-4"></div>
          <div className="loading-skeleton w-2/3"></div>
        </div>
      </article>
    )
  }

  if (error) {
    return (
      <article aria-labelledby="product-heading" className="product-details">
        <h1 id="product-heading" className="product-details-title">Product Details</h1>
        <div className="product-details-error">
          <p className="text-red-600 mb-4">Error loading product: {error}</p>
          <Link
            to="/"
            className="btn-primary"
          >
            Back to Products
          </Link>
        </div>
      </article>
    )
  }

  if (!product) {
    return (
      <article aria-labelledby="product-heading" className="product-details">
        <h1 id="product-heading" className="product-details-title">Product Details</h1>
        <div className="product-details-not-found">
          <p className="text-gray-600 mb-4">Product not found</p>
          <Link
            to="/"
            className="btn-primary"
          >
            Back to Products
          </Link>
        </div>
      </article>
    )
  }

  return (
    <article aria-labelledby="product-heading" className="product-details">
      <h1 id="product-heading" className="product-details-title">{product.name}</h1>

      <div className="product-details-content">
        <div className="product-details-section">
          <h2 className="product-details-section-title">Details</h2>
          <dl className="product-details-list">
            <div className="product-details-item">
              <dt className="product-details-label">Price:</dt>
              <dd className="product-details-value price">${(product.price / 100).toFixed(2)}</dd>
            </div>
            <div className="product-details-item">
              <dt className="product-details-label">Category:</dt>
              <dd>{product.category}</dd>
            </div>
            <div className="product-details-item">
              <dt className="product-details-label">Stock Status:</dt>
              <dd className={`product-details-value ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </dd>
            </div>
          </dl>
        </div>

        {product.description && (
          <div className="product-details-description">
            <h2 className="product-details-section-title">Description</h2>
            <p className="product-details-text">{product.description}</p>
          </div>
        )}
      </div>

      <div className="product-details-actions">
        <Link
          to="/"
          className="btn-primary"
        >
          Back to Products
        </Link>
      </div>
    </article>
  )
}
