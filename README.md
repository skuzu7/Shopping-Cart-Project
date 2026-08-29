# Shopping Cart

An e-commerce storefront built with Next.js 15, featuring a product carousel,
shopping cart, and Stripe-powered checkout.

> **Maintenance status:** this is a legacy learning project, not a production
> storefront. Review the current dependency audit before deploying it.

## Features

- Product listing with a Swiper carousel
- Shopping cart state managed through the local React context
- Checkout flow integrated with the Stripe API
- Styled with Bootstrap and styled-components

## Tech stack

- **Next.js 15** — React framework with SSR/SSG
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

Use restricted Stripe test keys for local development. Never commit live or
test secret keys; rotate any key that has been exposed in source history.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Security

- Stripe secret keys are read only from server-side environment variables.
- `.env` files are ignored; `.env.example` contains placeholders only.
- Report suspected credential exposure through GitHub's private vulnerability
  reporting channel rather than a public issue.

## Project structure

```
src/
├── pages/       # Next.js pages and API routes
├── components/  # React components
└── styles/      # Global styles
```
