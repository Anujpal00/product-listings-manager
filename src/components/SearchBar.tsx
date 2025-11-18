import { useState } from 'react'
import { FilterOptions } from '../types/index'

interface SearchBarProps {
  filters: FilterOptions
  onFiltersChange: (filters: Partial<FilterOptions>) => void
}

export function SearchBar({ filters, onFiltersChange }: SearchBarProps) {
  const [query, setQuery] = useState(filters.query)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onFiltersChange({ query })
  }

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <label htmlFor="search-input" className="sr-only">
        Search products
      </label>
      <input
        id="search-input"
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <button
        type="submit"
        className="search-btn"
      >
        Search
      </button>
    </form>
  )
}
