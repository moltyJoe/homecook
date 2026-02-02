# HomeCook – Marketplace for Home‑Cooked Meals

A platform that connects home cooks with customers who want to order homemade food. This repository will contain:

- **Frontend** – React (Vite) with Material‑UI
- **Backend** – C# (.NET) with Entity Framework Core and SQL Server
- **Database** – Design for Users, Food Items, Orders, Payments, etc.

## Getting Started

1. **Frontend** – Run `npm install` then `npm run dev` to start the dev server.
2. **Backend** – Open the `Backend` folder, run `dotnet restore` then `dotnet run`.
3. **Database** – Ensure a SQL Server instance is running and apply migrations.

## User Journeys (high‑level)

### Home Cook (Provider) Journey
1. **Sign‑up / Profile Setup** – Create a cook profile, add photos, set pricing.
2. **List Food Items** – Define menu items with descriptions, prices, and availability.
3. **Order Management** – Receive and manage orders, prepare food, mark as completed.
4. **Payment Processing** – Receive payments, withdraw to bank, view earnings.

### Buyer (Customer) Journey
1. **Browse Listings** – Search and filter home‑cooked dishes.
2. **Select & Add to Cart** – Choose items, specify quantities.
3. **Checkout** – Review cart, enter shipping/pickup details, choose payment method.
4. **Order Confirmation** – Receive confirmation, track order, leave feedback.

## Next Steps
- Set up the repository structure.
- Scaffold the frontend (Vite + React + Material‑UI).
- Scaffold the backend (C# .NET Web API template).
- Design the database schema.
- Implement user authentication and profile management.
- Build core API endpoints for listings, orders, and payments.
- Write unit/integration tests.
- Prepare CI/CD pipeline.

---

This repo will be used to track tasks on the **HomeCook Development** Trello board.