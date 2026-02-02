# E2 – Buyer Account & Profile

## Goal
Enable a buyer to register, verify email, and set up a profile (saved addresses, payment method, preferences).

## User Stories
- As a **Buyer**, I want to create an account, verify my email, and set up a profile (photo optional, saved addresses, payment method) so that I can order meals.
- As a **Buyer**, I want to edit my profile at any time.

## Acceptance Criteria
1. Email verification works and expires after 24 h.
2. Address and payment method fields are stored and editable.
3. Updated profile data persists and is used during checkout.

## Tasks (Trello Card: #E2-Buyer-Account)
- UI mockup for sign‑up and profile pages  
- `POST /api/buyers/register` endpoint  
- Email verification token generation & expiry (24 h)  
- Form handling for addresses and payment methods  
- Persistence layer (store in `buyers` table)  
- Unit tests for validation and API endpoints  
