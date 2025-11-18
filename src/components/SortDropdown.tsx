import { FilterOptions, SortOption } from '../types/index'
import { SORT_OPTIONS } from '../utils/constants'

interface SortDropdownProps {
  filters: FilterOptions
  onFiltersChange: (filters: Partial<FilterOptions>) => void
}

export function SortDropdown({ filters, onFiltersChange }: SortDropdownProps) {
  const handleSortChange = (sortBy: SortOption) => {
    const sortOrder = filters.sortBy === sortBy && filters.sortOrder === 'asc' ? 'desc' : 'asc'
    onFiltersChange({ sortBy, sortOrder })
  }

  return (
    <div className="sort-dropdown">
      <label htmlFor="sort-select" className="sort-label">
        Sort by:
      </label>
      <select
        id="sort-select"
        value={filters.sortBy}
        onChange={(e) => handleSortChange(e.target.value as SortOption)}
        className="sort-select"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label} {filters.sortBy === option.value && (filters.sortOrder === 'asc' ? '↑' : '↓')}
          </option>
        ))}
      </select>
    </div>
  )
}
