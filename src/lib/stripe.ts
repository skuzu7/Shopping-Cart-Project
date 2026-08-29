import Stripe from 'stripe'

const secretKey = process.env.STRIPE_SECRET_KEY

if (typeof secretKey !== 'string' || secretKey.length === 0) {
  throw new Error('STRIPE_SECRET_KEY is not configured')
}

const stripe = new Stripe(secretKey, {
  apiVersion: '2022-11-15',
  appInfo: {
    name: 'Ignite Shop',
  },
})

export function stripeAuthorizationHeader() {
  return { Authorization: `Bearer ${secretKey}` }
}

export default stripe
