# Backend - HomeCook Marketplace

This folder will contain the server‑side code for the HomeCook marketplace.

## Planned Structure

- **/Models** - Entity classes (User, FoodItem, Order, Payment, etc.)
- **/Data** - EF Core `DbContext` and migrations
- **/Controllers** - REST API endpoints
- **/Services** - Business logic services
- **/Middleware** - Custom middleware (auth, logging, etc.)
- **Program.cs** - Application bootstrap
- **appsettings.json** - Configuration

## Next Steps

1. **Create the .NET Web API project** (already scaffolded as a project file).
2. **Add Entity Framework Core** with migrations for the database schema.
3. **Define the data model** (User, FoodItem, Order, Payment, etc.).
4. **Implement CRUD endpoints** for food listings, user profiles, orders, and payments.
5. **Add authentication** (JWT with role‑based claims).
6. **Write unit/integration tests**.
7. **Set up CI/CD** (GitHub Actions) for build, test, and deploy.

This backend will be hosted alongside the frontend in the same repository, with separate project directories.