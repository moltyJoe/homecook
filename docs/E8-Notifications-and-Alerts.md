# E8 – Notifications & Alerts

## Goal
Send real‑time updates via email/push notifications for critical events.

## User Stories
- As a **Cook**, I want to receive an email when a buyer places an order.
- As a **Buyer**, I want to receive an email when my order status changes (e.g., “In‑Progress”, **Completed**).
- As a **Cook**, I want push notifications for new orders if I have the mobile app.

## Acceptance Criteria
1. Email templates render correctly for:
   - Order placed
   - Status change (Pending → In‑Progress → Completed)
   - Payment success/failure
2. Events fire automatically when order is created, status changes, or payment completes.
3. Optional push notifications are sent via web push when the buyer’s device registers.
4. Tests verify that emails are sent on the correct events.

## Tasks (Trello Card: #E8-Notifications-and-Alerts)
- Create email templates (order placed, status change, payment receipt)  
- Implement notification dispatch logic (called from order lifecycle events)  
- Set up optional push‑notification subscription flow (Web Push API)  
- Add unit tests for notification triggers  
- (Optional) Integrate with Firebase Cloud Messaging for push alerts  
