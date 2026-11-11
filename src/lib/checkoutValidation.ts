/**
 * Checkout price allowlist. Each item must use a server-configured Stripe Price ID.
 * Quantity is deliberately fixed to one per submitted item.
 */
export type CheckoutLineItem = { price: string; quantity: 1 }

const PRICE_ID_PATTERN = /^price_[A-Za-z0-9]+$/
const MAX_ITEMS = 25

export function parseAllowedPrices(
  raw: string | undefined,
): ReadonlySet<string> {
  const ids = (raw ?? '').split(',').map((id) => id.trim())
  return new Set(ids.filter((id) => PRICE_ID_PATTERN.test(id)))
}

export function parseCheckoutItems(
  payload: unknown,
  allowedPrices: ReadonlySet<string>,
): CheckoutLineItem[] | null {
  if (
    allowedPrices.size === 0 ||
    payload === null ||
    typeof payload !== 'object'
  ) {
    return null
  }
  const itemsData = (payload as { itemsData?: unknown }).itemsData
  if (
    !Array.isArray(itemsData) ||
    itemsData.length === 0 ||
    itemsData.length > MAX_ITEMS
  ) {
    return null
  }

  const lineItems: CheckoutLineItem[] = []
  for (const item of itemsData as unknown[]) {
    if (item === null || typeof item !== 'object') return null
    const data = item as { priceId?: unknown; quantity?: unknown }
    if (
      typeof data.priceId !== 'string' ||
      !PRICE_ID_PATTERN.test(data.priceId)
    ) {
      return null
    }
    if (!allowedPrices.has(data.priceId) || data.quantity !== undefined) {
      return null
    }
    lineItems.push({ price: data.priceId, quantity: 1 })
  }
  return lineItems
}
