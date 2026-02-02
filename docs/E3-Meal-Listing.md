# E3 – Meal Listing & Discovery

## Goal
Enable home‑cooks to publish meals and buyers to browse/search them.

## User Stories
- As a **Cook**, I want to add a meal (title, description, price, images, categories, dietary tags) and have it appear in the public catalogue.
- As a **Buyer**, I want to browse listings, filter by cuisine/dietary tags, and view detailed meal cards.

## Acceptance Criteria
1. Meal appears in the public catalogue with all fields (photo, title, description, price, tags).
2. Search returns relevant meals; filters work correctly.
3. Each meal card shows photo, price, rating count, and “Add to Cart” button.
4. Mobile‑responsive grid (2‑col on narrow screens, 3‑col on desktop).

## Tasks (Trello Card: #E3-Meal-Listing)
- Meal creation form (title, description, price, images, categories, dietary tags)  
- API endpoint `POST /api/meals`  
- Front‑end meal card component with image upload preview  
- Validation of required fields and file upload MIME/type/size  
- Search & filter API (`GET /api/meals?...`)  
- Pagination & responsive grid layout implementation  
- Unit tests for API and UI components  
