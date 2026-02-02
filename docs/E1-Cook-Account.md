# E1 – Cook Account & Profile

## Goal
Enable a home‑cook to register, verify email, and configure a public profile (photo, bio, pricing, categories).

## User Stories
- As a **Cook**, I want to sign‑up with email/password, verify my email, and set up a profile (photo, bio, pricing, categories) so that I can start offering meals on HomeCook.
- As a **Cook**, I want to edit my profile at any time.

## Acceptance Criteria
1. Email verification link works and expires after 24 h.
2. All required fields (photo, bio, pricing, categories) are saved and displayed correctly.
3. Updated profile data is persisted and visible to buyers.

## Tasks (Trello Card: #E1-Cook-Account)
- Design UI mockup (Figma/Sketch) → #12345
- Implement registration API (`POST /api/cooks/register`)
- Implement email verification flow (send‑mail + token validation)
- Build profile form & persistence (React components + API)
- Add unit tests (≥80 % coverage)