# E4 – Cart & Checkout Flow

## Goal
Collect items, capture delivery/pick‑up details, and process payment securely.

## User Stories
- As a **Buyer**, I want to add meals to a cart, see a total, enter my delivery/pick‑up details, and complete payment with a secure gateway.
- As a **Buyer**, I want to review my order before submitting it.

## Acceptance Criteria
1. Cart shows added items with thumbnail, quantity, and price; total updates dynamically.
2. Checkout form captures delivery address, phone, and any special instructions.
3. Payment gateway integration returns a success status and creates an order with status **Pending**.
4. Order summary page displays order number, ETA estimate, and a receipt download option.

## Tasks (Trello Card: #E4-Cart-and-Checkout)
- Cart state management (React context / Redux)  
- Add/remove items, quantity changes, total calculation  
- Checkout form UI (address, phone, special instructions)  
- Integration with payment gateway (Stripe/PayPal)  
- Implement order creation API (`POST /api/orders`)  
- Receipt generation and email notification  
- End‑to‑end functional tests covering full flow  
