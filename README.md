# Next.js Shopping Cart Project

This is a Next.js project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev


Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying pages/index.tsx. The page auto-updates as you edit the file.

API Routes
API routes can be accessed on http://localhost:3000/api/hello. This endpoint can be edited in pages/api/hello.ts.

The pages/api directory is mapped to /api/*. Files in this directory are treated as API routes instead of React pages.

Font Optimization
This project uses next/font to automatically optimize and load Inter, a custom Google Font.

Project Description
The project consists of a React application with a shopping cart manager using the Context API. It allows users to add items to the cart, remove items from the cart, and view the total price of the added items. The cart manager is implemented through a CartProvider component, which provides a context for other application components to access and interact with the cart.

Additionally, the application includes an integration with the Stripe API to process payments, using a Next.js API to create checkout sessions. This makes it possible to securely and efficiently handle payments when users finalize their purchases in the cart.

The project provides a complete and functional solution for shopping cart management and payment processing in a React-based web application.

How to Use
Clone the repository.
Run the development server using npm run dev, yarn dev, or pnpm dev.
Open http://localhost:3000 in your browser to see the application.
Start adding items to the cart and explore the features of the application.
Feel free to contribute to the project or use it as a starting point for your own applications.

Happy shopping!
