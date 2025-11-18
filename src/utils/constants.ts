export const CATEGORIES = [
  'All',
  'Electronics',
  'Home',
  'Clothing',
  'Books'
] as const

export const SORT_OPTIONS = [
  { value: 'name', label: 'Name' },
  { value: 'price', label: 'Price' },
  { value: 'category', label: 'Category' }
] as const

export const ITEMS_PER_PAGE = 8
