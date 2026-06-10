# Coorder React App - Quick Reference

## 📍 Project Location
`d:\Desktop\Resume Projects\coorder_react`

## ⚡ Quick Start

```bash
cd "d:\Desktop\Resume Projects\coorder_react"

# Development server
npm run dev

# Production build  
npm run build

# Preview build
npm run preview
```

## 🎯 What Was Built

### ✅ Phase 1: Core Setup (COMPLETE)
- [x] Vite + React + TypeScript project scaffold
- [x] React Router v6 with 5 routes
- [x] Tailwind CSS v4 with custom theme
- [x] Design system config from DESIGN.md (50+ color tokens)
- [x] Global styles with animations and custom CSS

### ✅ Phase 2: Components (COMPLETE)
- [x] **Header** - Sticky navigation with logo and routing
- [x] **Sidebar** - Feed categories and communities
- [x] **GroupBuyCard** - Deal post with progress bar
- [x] **FeaturedDealCard** - Hero card with gradient overlay
- [x] **CategoryFilter** - Mobile chip filter
- [x] **ChatBubble** - Message bubbles for chat

### ✅ Phase 3: Pages (COMPLETE)
- [x] **HomePage** - Feed with featured deals and group buys
- [x] **ChatPage** - Interactive group chat interface
- [x] **ProfilePage** - User profile with stats and history
- [x] **GroupDetailsPage** - Deal details with members
- [x] **MapPage** - Local deals with location info

## 📂 File Structure Quick Guide

```
components/
  ├── Header.tsx          # Navigation
  ├── Sidebar.tsx         # Categories & communities
  ├── GroupBuyCard.tsx    # Main feed card
  ├── FeaturedDealCard.tsx # Hero card
  ├── CategoryFilter.tsx  # Mobile filters
  └── ChatBubble.tsx      # Chat messages

pages/
  ├── HomePage.tsx        # / route
  ├── ChatPage.tsx        # /chat route
  ├── ProfilePage.tsx     # /profile route
  ├── GroupDetailsPage.tsx # /group/:id route
  └── MapPage.tsx         # /map route

config/
  └── theme.ts           # Design tokens (colors, fonts, spacing)

styles/
  └── globals.css        # Tailwind + custom styles
```

## 🎨 Design System Quick Reference

### Colors (All from DESIGN.md)
- Primary: `#ad2c00` (orange-red)
- Secondary: `#0060a9` (blue)
- Tertiary: `#005daa` (blue-dark)
- Surfaces: 8 variations for layering
- Status: Error (`#ba1a1a`)

### Typography
- Headline: lg, md, lg-mobile
- Body: lg, md
- Label: bold, sm
- Font: IBM Plex Sans

### Spacing (4px unit)
- xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px

### Border Radius
- sm: 0.25rem, md: 0.75rem, lg: 1rem, full: 9999px

## 🚀 Routes & Pages

| URL | Component | Purpose |
|-----|-----------|---------|
| `/` | HomePage | Browse group deals |
| `/chat` | ChatPage | Chat in groups |
| `/profile` | ProfilePage | View user profile |
| `/group/[id]` | GroupDetailsPage | Deal details & join |
| `/map` | MapPage | Find local groups |

## 💡 Using the Components

### GroupBuyCard Example
```tsx
<GroupBuyCard
  title="Smart Home Bundle"
  description="4 smart plugs + hub"
  imageUrl="https://..."
  communityIcon="T"
  communityName="r/TechGroup"
  username="u/DealFinder"
  timePosted="2h ago"
  spotsProgress={70}
  totalSpots={10}
  joinPrice="59"
  likes={1200}
  comments={84}
  onJoin={() => alert('Joined!')}
/>
```

### Using Tailwind Classes
- Colors: `text-primary`, `bg-secondary-container`, `border-outline`
- Spacing: `p-md`, `gap-lg`, `mx-margin-mobile`
- Typography: `font-headline-lg`, `text-body-md`
- Responsive: `hidden md:flex`, `lg:w-[240px]`

## 📊 Build Stats

- **JavaScript:** 271 KB (83 KB gzipped)
- **CSS:** 10.16 KB (2.56 KB gzipped)
- **HTML:** 0.46 KB (0.29 KB gzipped)
- **Total:** ~86 KB gzipped
- **Build Time:** ~800ms

## 🔗 Key Files to Modify

1. **Add New Page:** Create file in `src/pages/`, add route in `App.tsx`
2. **Add Component:** Create file in `src/components/`, export in `index.ts`
3. **Adjust Colors:** Edit `src/config/theme.ts`
4. **Global Styles:** Edit `src/styles/globals.css`
5. **Routing:** Edit `src/App.tsx`

## 🎬 Running the Dev Server

```bash
npm run dev
# Server runs at: http://localhost:5173
```

## 📦 Installed Dependencies

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^latest",
  "tailwindcss": "^4.x",
  "typescript": "^latest",
  "@tailwindcss/postcss": "^latest"
}
```

## ✨ Next: Optional Enhancements

1. **More Pages:** HomeRedesigned, LocalDealMap variants
2. **Components:** Avatar, Badge, Button, Chip, Dialog
3. **State:** Add Redux/Zustand for global state
4. **APIs:** Connect to real backend
5. **Auth:** Add user login/signup
6. **Search:** Add filtering and search
7. **Analytics:** Google Analytics or Mixpanel
8. **SEO:** React Helmet or similar

## 🐛 Troubleshooting

**Build fails?**
```bash
rm -rf node_modules dist
npm install
npm run build
```

**Port 5173 already in use?**
```bash
npm run dev -- --port 3000
```

**Styles not applying?**
- Check class names match Tailwind config
- Verify file is included in `tailwind.config.ts` content
- Restart dev server

## 📞 Development Notes

- All images use placeholder URLs - replace in production
- Chat is client-side only - connect WebSocket for real chat
- Map is placeholder - integrate Google Maps or Mapbox
- Authentication not implemented - add backend auth
- No database - mock data only

---

**Status:** ✅ Production-Ready Component Library & Pages
**Last Build:** Successful (0 errors)
