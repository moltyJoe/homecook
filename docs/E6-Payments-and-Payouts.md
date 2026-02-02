# E6 – Payments & Payouts

## Goal
Secure payment capture, storage, and payout workflow for completed orders.

## User Stories
- As a **Buyer**, I want to pay safely using a trusted gateway so that my transaction is protected.
- As a **Cook**, I want to receive payment automatically after an order is marked **Completed** and view my earnings summary.

## Acceptance Criteria
1. Payment is captured via integrated gateway (Stripe/PayPal) and stored with the order.
2. Transaction details (order ID, amount, timestamp) are persisted.
3. Cook can view a summary of earned revenue in their dashboard.
4. (Future) Payout endpoint allows cooks to request a transfer to their bank account.

## Tasks (Trello Card: #E6-Payments-and-Payouts)
- Choose payment gateway (Stripe/PayPal) and set up SDK integration  
- Implement webhook handling for payment success/failure events  
- Store transaction records linking order ID, amount, timestamp, and payment method  
- Add “Earnings” dashboard component showing total earned, pending payouts  
- Add button to request payout (triggers backend job)  
- Security & PCI‑DSS compliance checklist  
- Unit & integration tests for payment flow  
