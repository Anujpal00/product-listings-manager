import { FilterOptions } from '../types/index'
import { CATEGORIES } from '../utils/constants'

interface CategoryFilterProps {
  filters: FilterOptions
  onFiltersChange: (filters: Partial<FilterOptions>) => void
}

export function CategoryFilter({ filters, onFiltersChange }: CategoryFilterProps) {
  return (
    <div className="category-filter">
      <label htmlFor="category-select" className="text-sm font-medium text-gray-700">
        Category:
      </label>
      <select
        id="category-select"
        value={filters.category}
        onChange={(e) => onFiltersChange({ category: e.target.value })}
        className="category-select"
      >
        {CATEGORIES.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  )
}
