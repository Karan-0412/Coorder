# Coorder React App

A modern React + TypeScript web application converting Stitch-generated pages into a fully functional group buying platform.

## 🚀 Project Setup

**Location:** `d:\Desktop\Resume Projects\coorder_react`

**Build Status:** ✅ Successful (271 KB JS gzipped, 10.16 KB CSS gzipped)

## 📦 Tech Stack

- **Frontend Framework:** Vite + React 18 + TypeScript
- **Styling:** Tailwind CSS v4 with custom design system
- **Routing:** React Router v6
- **Build Tool:** Vite
- **Font:** IBM Plex Sans
- **Icons:** Material Symbols (Google Fonts)

## 📁 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── Header.tsx          # Navigation header with routing
│   ├── Sidebar.tsx         # Feed & community sidebar
│   ├── GroupBuyCard.tsx    # Group buy post card
│   ├── FeaturedDealCard.tsx # Large featured deal card
│   ├── CategoryFilter.tsx  # Mobile category filter
│   ├── ChatBubble.tsx      # Chat message bubble component
│   └── index.ts            # Component exports
├── pages/                  # Page components (routes)
│   ├── HomePage.tsx        # Feed/discovery page with cards
│   ├── ChatPage.tsx        # Group chat interface
│   ├── ProfilePage.tsx     # User profile with stats
│   ├── GroupDetailsPage.tsx # Deal details & members
│   └── MapPage.tsx         # Local deals map view
├── config/                 # Configuration files
│   └── theme.ts            # Design system tokens (50+ colors, typography, spacing)
├── styles/                 # Global styles
│   └── globals.css         # Tailwind directives + custom CSS
├── App.tsx                 # Router configuration
└── main.tsx                # Entry point
```

## 🎨 Design System

Complete design system from DESIGN.md integrated:

- **50+ Color Tokens:** Primary, secondary, tertiary, surface, error palettes
- **Typography:** Headline (lg, md, lg-mobile), body (lg, md), label (bold, sm)
- **Spacing:** xs (4px), sm (8px), md (16px), lg (24px), xl (32px)
- **Border Radius:** sm, default, md, lg, xl, full (9999px)
- **Custom Styles:** Glass effects, chat bubbles, shimmer animations, scrollbars

## 📱 Responsive Design

- **Mobile:** Single column, 12px margins
- **Tablet:** Hidden sidebar, full-width content
- **Desktop:** 3-column layout with 240px sidebars, 640px max content width
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)

## 🛣️ Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | HomePage | Main feed with featured deals and group buy cards |
| `/chat` | ChatPage | Group chat interface with message bubbles |
| `/profile` | ProfilePage | User profile with stats and purchases |
| `/group/:id` | GroupDetailsPage | Deal details with member list and join option |
| `/map` | MapPage | Local deals with map integration placeholder |

## 🧩 Components

### Header
- Sticky navigation with logo
- Desktop nav links (Deals, Map, Chat)
- Search and profile avatar
- Active route styling

### Sidebar
- Feed categories (Group Buys, Popular, Newest)
- Communities quick access
- Sticky positioning on desktop
- Hidden on mobile/tablet

### GroupBuyCard
- Deal post with image
- Community info and escrow status
- Progress bar for group completion
- Like/comment/share buttons
- Join button with pricing

### FeaturedDealCard
- Large hero card with gradient overlay
- Badge indicators (Group Active, Spots Left)
- Hover zoom effect on image
- Prominent CTA button

### CategoryFilter
- Mobile-only horizontal chip filter
- 4 categories: Group Buys, Flash Sales, Coupons, Bundles
- Active state highlighting

### ChatBubble
- User/peer message differentiation
- Avatar support
- Timestamp display
- Loading animation
- Styled with rounded corners

## 🎯 Key Features Implemented

✅ **Responsive Layout**
- Mobile-first design
- Adaptive navigation
- Touch-friendly buttons

✅ **Component Library**
- 6 reusable UI components
- Type-safe props with TypeScript
- Consistent styling via Tailwind

✅ **Design System Integration**
- All colors from DESIGN.md
- Custom font sizes and spacing
- Dark mode support (enabled in config)

✅ **Routing & Navigation**
- 5 main routes
- React Router v6 with Link components
- Active route indicators

✅ **Sample Data**
- Mock deals with images
- Chat messages
- User profiles
- Group member lists

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Start dev server (Vite)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint with ESLint
npm run lint
```

## 📦 Dependencies

- `react`: 18.3.1
- `react-dom`: 18.3.1
- `react-router-dom`: Latest
- `tailwindcss`: v4
- `postcss`: For CSS processing
- `typescript`: Type safety

## 🎨 Styling Notes

- Tailwind v4 with @tailwindcss/postcss
- Custom theme extends base Tailwind
- All color names map to design tokens
- Font sizes use semantic names (headline-lg, body-md, etc.)
- Spacing uses design unit scale (4px base)

## 🚀 Next Steps for Production

1. **Connect Backend API**
   - Replace mock data with API calls
   - Implement user authentication
   - Add real group buy logic

2. **Map Integration**
   - Integrate Google Maps or Mapbox
   - Add geolocation features
   - Real-time location filtering

3. **State Management**
   - Add Redux or Zustand for global state
   - Persist user preferences
   - Cache API responses

4. **Additional Features**
   - Search functionality
   - Filters and sorting
   - Notifications
   - User messaging
   - Payment integration

5. **Testing**
   - Unit tests (Vitest)
   - Component tests (React Testing Library)
   - E2E tests (Cypress/Playwright)

6. **Performance**
   - Code splitting by route
   - Image optimization
   - Lazy loading
   - Bundle analysis

7. **Deployment**
   - Vercel, Netlify, or self-hosted
   - CI/CD pipeline
   - Environment variables
   - Analytics integration

## 📄 File Sizes

| File | Size (Gzip) |
|------|------------|
| JS Bundle | 83.43 KB |
| CSS Bundle | 2.56 KB |
| HTML | 0.29 KB |
| **Total** | **~86 KB** |

## ✨ Key Implementation Details

### Tailwind Configuration
- Custom colors extended in `tailwind.config.ts`
- All 50+ design tokens from DESIGN.md
- Custom font families for typography
- Dark mode enabled with `class` strategy

### Global Styles
- Material Symbols font configuration
- Custom scrollbar styling
- Glass morphism effects
- Chat bubble CSS
- Shimmer animation for loading states

### Component Architecture
- Props interfaces for type safety
- Controlled inputs where applicable
- Event handlers for interactions
- Responsive classes for mobile/tablet/desktop
- Icon support via Material Symbols

### Responsive Strategy
- Mobile-first approach
- Hidden sidebar on small screens
- Full-width content on tablets
- 3-column layout on desktop
- Flexible image containers

## 📝 Notes

- All images use placeholder URLs (replace with real images in production)
- Authentication is not implemented (placeholder user avatars)
- Chat is client-side only (connect to WebSocket backend)
- Map is a placeholder (integrate mapping library)
- Group buying logic is simplified (add escrow/payment in production)

---

**Project Status:** ✅ Phase 2 Complete - Core Components & Pages Built
**Last Updated:** June 2026
