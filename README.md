# Thirsty - Cocktail Finder App

A Next.js application for searching and exploring cocktail recipes using the CocktailDB API.

## 🚀 Live Demo

**[View Live App →](https://thirsty-pi.vercel.app/)**

Deployed on Vercel with automatic CI/CD from GitHub.

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **UI Library:** Chakra UI v3
- **Styling:** CSS Modules with design tokens
- **Data Fetching:** SWR
- **Visualization:** Recharts (pie chart)
- **Testing:** Vitest + React Testing Library
- **Documentation:** Storybook
- **Deployment:** Vercel

## ✨ Features

- **Search cocktails** by name with debounced input (300ms)
- **Browse results** with drink images and names
- **View details** including:
  - Circular drink image
  - Color-coded ingredients legend
  - Pie chart showing ingredient ratios
  - Preparation instructions
- **Responsive design** - works on mobile and desktop
- **Unit conversion** - handles oz, tsp, tbsp, cl, cup measurements

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/IshLovesLucy/thirsty.git
cd thirsty

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧪 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
npm run test         # Run unit tests
npm run test:watch   # Run tests in watch mode
npm run storybook    # Launch Storybook
```

## 🏗️ Architecture Decisions

### Component-Scoped CSS Modules

Uses CSS Modules instead of inline styles for better maintainability and separation of concerns. Design tokens defined in `globals.css` provide consistent theming.

### SWR for Data Fetching

Implements SWR for automatic caching, request deduplication, and optimistic UI updates. Provides instant navigation between search results and details pages.

### Debounced Search

300ms debounce prevents excessive API calls while typing, improving performance and user experience.

### Unit Conversion System

Standardizes all measurements to ounces for pie chart display. Handles fractions (1/2), mixed numbers (1 1/2), and multiple units (oz, tsp, tbsp, cl, cup).

### Pastel Color Generation

Randomly generates HSL-based pastel colors (70-85% saturation, 75-85% lightness) for ingredient visualization.

## 🎨 Design Specifications

Built according to Spiral's design specifications including:

- 60px row height for drink cards
- 40px circular thumbnails
- 120px pie chart size
- 20x20px color squares with 3px border radius
- Spiral brand colors (#E91E8C primary pink)

## 🤖 AI Assistant Usage

This project was developed with assistance from Claude (Anthropic) and Claude Code for:

- Project scaffolding and boilerplate setup
- Component generation and CSS modules
- Unit test creation
- Code formatting and linting configuration

Manual work included:

- Architecture decisions and planning
- Business logic implementation (unit conversion, ingredient parsing)
- UI/UX refinements
- Testing strategy and bug fixes

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── drink/[id]/        # Drink details page
│   ├── globals.css        # Design tokens & global styles
│   ├── providers.tsx      # Chakra UI & SWR providers
│   └── theme.ts           # Chakra UI theme config
├── components/            # React components
│   ├── SearchBar/
│   ├── DrinksList/
│   └── DrinkDetails/
├── hooks/                 # Custom React hooks
│   ├── useDebounce.ts
│   ├── useDrinkSearch.ts
│   └── useDrink.ts
├── services/              # API service layer
│   └── cocktailApi.ts
├── utils/                 # Utility functions
│   ├── unitConversion.ts
│   ├── colorGenerator.ts
│   └── parseIngredients.ts
└── types/                 # TypeScript interfaces
    └── drink.ts
```

## 🧪 Testing

Unit tests cover:

- Unit conversion logic (oz, tsp, tbsp, cl, cup)
- Color generation
- Component rendering (DrinkCard)

Run tests: `npm run test`

## 📚 Storybook

Component documentation available for:

- DrinkCard (multiple states)
- IngredientLegend (various ingredient counts)

Run Storybook: `npm run storybook`

---

Built with ❤️ using Next.js and TypeScript
