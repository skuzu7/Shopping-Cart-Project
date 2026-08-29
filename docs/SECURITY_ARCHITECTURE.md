# Security Architecture: Payment & API Isolation

**Project:** `Shopping-Cart-Project`  
**Security Focus:** Server-Side Payment Secret Isolation & Defensive Checkout Flow

---

## 1. Architectural Boundary

Payment processing with third-party providers (Stripe) requires strict segregation between client-side publicly accessible parameters and server-side secret API keys:

```
[ Client Browser ]
        │  ▲
        │  │  1. Request Checkout Session (POST /api/checkout)
        ▼  │
[ Next.js API Handler (src/pages/api/checkout.ts) ]
        │
        ├──► Validate Request Payload & Product Identifiers
        │
        ├──► Query Stripe API using Server-Side Secret Key (STRIPE_SECRET_KEY)
        │
        └──► Return Session Checkout URL to Client (Zero Secret Exposure)
```

---

## 2. Key Defensive Controls

1. **Server-Side Secret Confinement:**
   - Secret keys (`STRIPE_SECRET_KEY`) are read strictly from backend environment variables via `src/lib/stripe.ts` and are never bundled into client-side Next.js chunks.
2. **Deterministic Payload Validation:**
   - The checkout API endpoint validates request methods (`POST` only), body structures, and product price configurations before generating session objects.
3. **Repository Secret Hygiene:**
   - Enforced by automated CI and pre-commit secret scanning (`gitleaks`), with zero credentials stored in version control.
