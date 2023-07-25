import Stripe from 'stripe'

// Define the type for the products response
interface Product {
  // Define the properties you expect in a product
  id: string
  name: string
  // Add other properties as needed
}

// Create an instance of the Stripe API
const stripe = new Stripe(
  'sk_test_51NJJgKI84MzHZgpn4Qf3eGgXJqlIiXAvdbFPtsM8ovJ5ySTwnobgDXp5tsaL1W9lVhZJjZolBtrdak8PDTWfnLI300fpPkDRWU',
  {
    apiVersion: '2022-11-15',
    appInfo: {
      name: 'Ignite Shop',
    },
  },
)

export default stripe
