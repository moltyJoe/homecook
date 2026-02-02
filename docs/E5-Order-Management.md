# E5 – Order Management (Cook Side)

## Goal
Enable cooks to view, accept/reject, and update orders, and to track earnings.

## User Stories
- As a **Cook**, I want to see a list of pending orders, accept an order, and mark it **In‑Progress**, then **Completed**, and optionally add notes.
- As a **Cook**, I want to view my earnings summary after an order is completed.

## Acceptance Criteria
1. Order appears in the cook’s dashboard with status **Pending**.
2. “Accept” button changes status to **In‑Progress** and notifies the buyer.
3. “Mark Completed” updates order status and triggers payment processing.
4. Earnings summary reflects completed orders and updated totals.

## Tasks (Trello Card: #E5-Order-Management)
- Dashboard UI showing pending orders list  
- “Accept” button triggers status change & notification  
- “Mark Completed” updates status and records payout  
- Add notes/comments field for order details  
- Real‑time updates via WebSocket (optional)  
- Integration tests for flow  
