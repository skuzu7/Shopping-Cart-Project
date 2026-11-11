import { NextApiRequest, NextApiResponse } from 'next'
import stripe from '@/lib/stripe'
import { parseAllowedPrices, parseCheckoutItems } from '@/lib/checkoutValidation'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  // A client must never choose an arbitrary Stripe Price ID.
  // Fail closed until the merchant configures eligible prices server-side.
  const allowedPrices = parseAllowedPrices(process.env.STRIPE_ALLOWED_PRICE_IDS)
  if (allowedPrices.size === 0) {
    return res.status(503).json({ error: 'Checkout price catalog is not configured' })
  }
  const lineItems = parseCheckoutItems(req.body, allowedPrices)
  if (!lineItems) {
    return res.status(400).json({ error: 'Invalid checkout items' })
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      success_url:
        'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:8080/cancel',
    })
    return res.status(200).json({ sessionId: session.url })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
