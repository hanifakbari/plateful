# Plateful — Exclusive Dining Deals in Indonesia

A marketing landing page built with Next.js, TypeScript, and Tailwind CSS for **Plateful** — Indonesia's exclusive dining deals app connecting diners to 1,000+ premium restaurants across Jakarta, Bali & Bandung.

**Live Demo:** [plateful-hazel.vercel.app](https://plateful-hazel.vercel.app)

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Testing:** Jest + React Testing Library, Playwright

---

## Getting Started

### Prerequisites

- Node.js 20+
- Yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/hanifakbari/plateful.git
cd plateful

# Install dependencies
yarn install
```

### Development

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
yarn build
yarn start
```

---

## Testing

### Unit & Component Tests (Jest + React Testing Library)

```bash
yarn test
```

Covers:

- `PrimaryButton` — render, size classes, click handler
- `DealCard` — render, discount calculation, bookmark toggle, visibility state
- `Navbar` — logo, nav links, mobile drawer open/close

### End-to-End Tests (Playwright)

```bash
yarn playwright test
```

Runs across **5 browsers:** Chromium, Firefox, WebKit, Mobile Chrome, Mobile Safari.

Covers:

- Navbar scroll hide/show behavior
- Mobile drawer open/close
- Hero section render
- Featured deals filter tabs
- Bookmark toggle
- Anchor navigation
- Responsive layout

```bash
# View test report
yarn playwright show-report
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with SEO metadata
│   └── page.tsx          # Main landing page
├── assets/               # Images, icons, static assets
├── components/
│   ├── atoms/            # PrimaryButton, AnimatedCounter, EyebrowPill, SectionHeading
│   ├── molecules/        # DealCard, CuisineCard, StepCard, TestimonialCard, etc.
│   └── organisms/        # Hero, Navbar, Footer, and all page sections
├── hooks/
│   └── index.ts          # useInView hook
└── __tests__/            # Jest component tests
tests/                    # Playwright E2E tests
```

---

## Sections

| Section          | Description                                |
| ---------------- | ------------------------------------------ |
| Navbar           | Fixed, scroll hide/show, mobile drawer     |
| Hero             | Headline, stats, trending restaurants      |
| Why Plateful     | Feature cards with 3D hover, image gallery |
| How It Works     | 3-step process with interactive mockups    |
| Featured Deals   | Filterable deal cards with bookmark        |
| Popular Cuisines | Cuisine category cards                     |
| Testimonials     | Horizontal scroll reviews                  |
| App Download     | CTA with App Store & Google Play           |
| Footer           | Navigation links                           |
