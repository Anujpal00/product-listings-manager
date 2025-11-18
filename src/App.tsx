import { Routes, Route, Link } from 'react-router-dom'
import { ProductList } from './features/products/ProductList'
import { ProductDetails } from './features/products/ProductDetails'

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="header-nav">
          <Link to="/" aria-label="Home" className="header-link">Listings Manager</Link>
        </nav>
      </header>
      <main className="main-content">
        <div className="container">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}
