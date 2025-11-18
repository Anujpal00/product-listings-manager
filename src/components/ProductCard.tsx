import { Link } from 'react-router-dom'
import { Product } from '../types/index'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <h3>
        <Link
          to={`/products/${product.id}`}
          className="product-link"
        >
          {product.name}
        </Link>
      </h3>

      <p className="product-price">
        ${(product.price / 100).toFixed(2)}
      </p>

      <p className="product-category">
        {product.category}
      </p>

      <p className={`product-stock ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>
    </article>
  )
}
