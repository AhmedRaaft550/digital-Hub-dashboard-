# Digital Hub Dashboard

High-performance, enterprise-grade dashboard built with Next.js 16.1.1. Provides Role-Based Access Control (RBAC), real-time visualizations, advanced tables, and resilient state management for production-ready admin & analytics workflows.

## Highlights

- Next.js (App Router) with server/client boundaries tuned for security and performance
- Role-Based Access Control (Admin / Project Manager / Developer)
- Real-time visualizations (Recharts) and SSR-safe rendering
- Fast, feature-rich tables (TanStack Table) with inline editing, filtering, sorting
- Robust auth & persistence: Redux Toolkit + Redux Persist (JWT/session persistence)
- Strict forms & validation: React Hook Form + Zod
- Styling: Tailwind CSS + Shadcn UI components
- Data fetching: TanStack Query for client-side queries; server-side seeded data + instant local filtering

## Tech Stack

- Framework: Next.js 16.1.1 (App Router)
- Type System: TypeScript
- State Management: Redux Toolkit, Redux Persist
- Data Fetching: TanStack Query
- Forms & Validation: React Hook Form + Zod
- UI: Tailwind CSS, Shadcn UI
- Charts: Recharts (SSR-safe)
- Tables: TanStack Table
- Build tools: Node.js 18.x+

## Core Features

## RBAC with a lightweight route wrapper to enforce server-side and client-side access rules

- Admin: Full access (Chart + Dashboard)
- Project Manager: Dashboard only
- Developer: Chart only

## Professional Data Table

- Inline editing of row fields
- Dynamic filtering by status (In Progress, Completed, On Hold)
- Advanced sorting (budget)
- Zero-latency search: server-seeded data + client filters
- Smart Visualizations

## Composable charts with Recharts, SSR-friendly rendering

- Custom-built charts using Recharts.

## UX & Resilience

- Custom error boundaries (error.tsx)
- Custom 404 (not-found.tsx)
- Session persistence via Redux Persist
- Zod schemas to validate every form before state updates

## Project Structure

Top-level :

- components/ — UI primitives, Shadcn custom components, route guard (ProtuctedRoute)
- app/ — Next.js App Router pages and layout (dashboard, analytics, api routes)
- hooks/ — Reusable hooks for fetching, form helpers, redux bindings
- store/ — Redux Toolkit slices, store & persist config
- services/ — API clients, mock data loaders, adapters
- constant/ — App-level constants (roles, nav links)
- types/ — TypeScript interfaces & type unions
- validation/ — Zod schemas for forms
- public/ — images and data (public/data.json)

tree:
├── app/
│ ├── dashboard/
│ ├── chart/
│ └── layout.tsx
├── components/
├── hooks/
├── store/
├── services/
├── constant/
├── types/
├── validation/
└── public/data.json

## Getting started

Prerequisites

- Node.js 18.x or higher
- npm or pnpm

Clone and install

```bash
git clone https://github.com/AhmedRaaft550/Digital-Hub.git
cd digital-Hub-dashboard-
npm install
# or
# pnpm install
```

Run in development

```bash
npm run dev
# Open http://localhost:3000
```

Build & run production

```bash
npm run build
npm run start
```

Common scripts

- npm run dev — development server
- npm run build — production build
- npm run start — start built app
- npm run lint — run linters
- npm test — run tests

## Notes

- Data: public/data.json is the mock dataset used during development.
- RBAC: enforce role checks server-side where sensitive data or pages exist (use force-dynamic on pages that must evaluate RBAC at request time).
- Forms: prefer Zod-first schema validation to guarantee payload shape before dispatching Redux actions.
- Performance: server-side + client-side filtering enables instant search without debouncing for small-to-medium datasets. For large datasets, move filtering server-side and reintroduce debounce.

# Technical Decisions & Optimizations :

- Why No Debounce on Search? Unlike typical API-heavy searches, our data is pre-fetched on the server and kept in a local state. An instant filter provides a superior "desktop-app" feel with zero input lag.

- Zod Validation: Every form input is validated at the schema level before the Redux action is dispatched, ensuring data integrity

- Used force-dynamic rendering for the Analytics and Dashboard pages to ensure real-time data accuracy and strict adherence to Role-Based Access Control (RBAC) during server-side execution.

## License

MIT © 2025 Digital Hub Dashboard
