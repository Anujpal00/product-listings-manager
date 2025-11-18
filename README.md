# Product Listings Manager

A modern React application for browsing and managing product listings with search, filter, sort, and pagination features.
This project is built as part of the iGnosis Frontend Assignment.

📌 Features

Product Listing Page

Paginated product grid

Search by name

Filter by category

Sort by name, price, or category

Product Details Page

Full details of a selected product

UI & UX Enhancements

Responsive layout (mobile-first)

Clean and consistent styling

Loading and error states

Accessible components (ARIA, keyboard navigation)

Animations for smooth interactions

Developer Features

API mocking using MSW

TypeScript support

Component-based architecture

🛠️ Tech Stack

React 19 + TypeScript

Vite (build tooling)

React Router

Mock Service Worker (MSW) for API mocking

CSS (custom styles) – TailwindCSS not used

Vitest + React Testing Library for tests

🚀 Getting Started
Prerequisites

Node.js v22+

npm or yarn

Installation

Clone the repository:

git clone <repository-url>
cd frontend-task


Install dependencies:

npm install
# or
yarn install


Start the development server:

npm run dev
# or
yarn dev


Visit the app in browser:
http://localhost:5173

📂 Project Structure
src/
├── components/             # Reusable UI components
│   ├── ProductCard.tsx
│   ├── SearchBar.tsx
│   ├── CategoryFilter.tsx
│   ├── SortDropdown.tsx
│   ├── Pagination.tsx
│   └── ProductDetails.tsx
│
├── features/
│   └── products/
│       ├── ProductList.tsx
│       └── ProductDetails.tsx
│
├── hooks/
│   ├── useProducts.ts
│   └── useProductDetails.ts
│
├── types/
│   └── index.ts
│
├── utils/
│   ├── api.ts
│   └── constants.ts
│
├── mocks/                  # MSW mock handlers and mock data
│
└── App.tsx                 # Application entry

📘 Architecture Overview
Component Hierarchy

App → Routing setup

ProductList → Fetches & manages list state

ProductDetails → Fetches selected product

UI Components → ProductCard, Filters, Pagination, etc.

State Management

Fully handled with React hooks

useProducts → List, pagination, filters, sorting

useProductDetails → Individual product data

API Integration (Mocked)

Handled using MSW:

GET /products?page=&limit=&search=&category=&sort=

GET /products/:id

🧪 Running Tests
npm run test

🎨 Design Decisions
Styling

Pure CSS (styles.css and reset.css)

Mobile-first responsive layout

Simple, clean UI for clarity

TailwindCSS not used (aligned with assignment repo)

Component Architecture

Clear separation of container and presentational components

Custom hooks used to isolate business logic

Strong TypeScript typing for maintainability

Performance Enhancements

Server-side pagination through MSW

Debounced search input

Memoized lists and derived state

🔍 Trade-offs & Future Improvements
What Can Be Improved Next

Advanced filtering (price range, multi-category)

Add React Query for caching and syncing data

Implement global error boundaries

Add more animations (Framer Motion)

Offline mode with service workers

Add E2E tests (Cypress / Playwright)

Add multi-language support (i18n)

Performance monitoring tools

Current Limitations

API is mocked (no backend integration)

Sorting is client-side only

No authentication system

Basic test coverage (needs more integration tests)

♿ Accessibility

The app follows WCAG 2.1 principles:

Semantic HTML structure

ARIA labels on interactive components

Keyboard navigation supported

High-contrast UI elements

Visible focus states

🤝 Contributing

Follow existing code structure

Add tests for new features

Maintain accessibility standards

Update documentation when needed
