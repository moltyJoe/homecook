# E7 – Ratings & Reviews

## Goal
Enable buyers to rate cooks and leave feedback; allow cooks to view their rating history.

## User Stories
- As a **Buyer**, after an order is marked **Completed**, I want to rate the cook (1‑5 stars) and leave a comment so that other buyers know the quality of the experience.
- As a **Cook**, I want to view my rating history and average rating on my public profile.

## Acceptance Criteria
1. Rating component (1‑5 stars) is clearly visible on each order card.
2. Review submission creates a record linked to the order and cook.
3. Average rating is calculated and displayed prominently on the cook’s profile.
4. Reviews are displayed in a scrollable list on the cook’s profile page.

## Tasks (Trello Card: #E7-Ratings-Reviews)
- Design star rating UI (editable stars, optional comment box)  
- API endpoint `POST /api/reviews` (linked to order ID)  
- Store review in `reviews` table with cook ID, buyer ID, rating, comment, timestamp  
- Query for average rating per cook and render on cook profile page  
- Front‑end star rating component with hover/selection logic  
- Validation: only allow rating after order status = **Completed**  
- Unit and integration tests for review submission and aggregation  
