import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

const stripe = new Stripe(
  'sk_test_51NJJgKI84MzHZgpn4Qf3eGgXJqlIiXAvdbFPtsM8ovJ5ySTwnobgDXp5tsaL1W9lVhZJjZolBtrdak8PDTWfnLI300fpPkDRWU',
  {
    apiVersion: '2022-11-15', // Optional: Specify the API version to use (you can use the latest version)
  },
)

interface ItemData {
  priceId: string
}

interface RequestBody {
  itemsData: ItemData[]
}

interface ApiResponse {
  sessionId: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end() // Método HTTP não permitido
  }

  const { itemsData }: RequestBody = req.body // Recebe os dados dos itens do carrinho do corpo da solicitação
  console.log(itemsData)

  try {
    // Crie a sessão de checkout no Stripe usando os itemsData
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: itemsData.map((item) => ({
        price: item.priceId,
        quantity: 1,
      })),
      success_url:
        'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:8080/cancel',
    })

    res.status(200).json({ sessionId: session.url })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
