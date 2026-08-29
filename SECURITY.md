# Security Policy

## Scope

This repository is a personal development project. Security testing is limited
to this source code and local test instances controlled by the tester. Public or
third-party systems are not in scope without explicit authorization from their
owner.

## Reporting a vulnerability

Do not place credentials, exploit details, or personal data in a public issue.
Use GitHub private vulnerability reporting when it is available for this
repository. Otherwise, contact the maintainer through the LinkedIn profile
linked from [skuzu7](https://github.com/skuzu7).

Include the affected component, reproduction conditions, security impact, and a
minimal redacted proof. Reports are manually reviewed before any validation or
remediation is performed.

## Credential handling

Stripe keys belong in local environment files. `.env` files are ignored and
only placeholder names are kept in `.env.example`. Any exposed key must be
revoked or rotated at the provider; deleting it from the current source tree is
not sufficient to invalidate it.
