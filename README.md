# Shopping Cart

An e-commerce storefront built with Next.js 13, featuring a product carousel, shopping cart, and Stripe-powered checkout.

## Features

- Product listing with a Swiper carousel
- Shopping cart state managed via `use-shopping-cart`
- Checkout flow integrated with the Stripe API
- Styled with Bootstrap and styled-components

## Tech stack

- **Next.js 13** — React framework with SSR/SSG
- **TypeScript**
- **Stripe** — payment processing (`@stripe/stripe-js`, `stripe`)
- **Swiper** — product carousel
- **Bootstrap 5** + **react-bootstrap** — responsive layout
- **styled-components** + **@stitches/react** — component styling
- **axios** — HTTP client

## Getting started

```bash
git clone https://github.com/skuzu7/Shopping-Cart-Project.git
cd Shopping-Cart-Project
npm install
```

Create a `.env.local` file and set your Stripe keys:

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
STRIPE_SECRET_KEY=sk_...
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── pages/       # Next.js pages and API routes
├── components/  # React components
└── styles/      # Global styles
```
