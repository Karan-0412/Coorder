# Coorder — Backend Requirements Summary

Derived from full analysis of all frontend pages, components, types, mock data, and routing.

---

## 1. Data Models

### User
| Field | Type | Notes |
|---|---|---|
| id | string / uuid | |
| name | string | |
| username | string | unique, e.g. `@sarahc` |
| avatarUrl | string | CDN URL |
| email | string | |
| passwordHash | string | |
| karma | number | displayed as "1.2k" |
| trustScore | number | 0–100, displayed as "98%" |
| level | number | gamification tier |
| isEmailVerified | boolean | |
| isIdentityVerified | boolean | KYC — unlocks "Pro Buyer" badge |
| role | `"user" \| "admin"` | |
| walletAddress | string | Solana or Ethereum |
| joinedAt | datetime | |

---

### GroupBuyDeal
| Field | Type | Notes |
|---|---|---|
| id | number | |
| title | string | |
| description | string | |
| imageUrl | string | CDN URL |
| productUrl | string | source retail page |
| category | enum | Electronics, Home & Living, Fashion, Software, Food & Beverage, Sports |
| communityId | FK → Community | |
| creatorId | FK → User | |
| groupStatus | `"pending" \| "active" \| "filled" \| "expired" \| "cancelled"` | |
| currentPrice | decimal | group price per person |
| originalPrice | decimal | retail price |
| minParticipants | number | minimum to activate |
| maxParticipants | number? | optional cap |
| filledSpots | number | |
| totalSpots | number | = maxParticipants or agreed cap |
| spotsProgress | number | % filled, derived |
| expiryDate | datetime | |
| estimatedShippingDate | date? | |
| isEscrowProtected | boolean | always true in current UI |
| fulfillmentCondition | `"auto_min_reached" \| "admin_confirm" \| "creator_confirm_arrival"` | |
| escrowStatus | `"unlocked" \| "locked" \| "released" \| "refunded"` | |
| likes | number | |
| comments | number | |
| timePosted | datetime | |

---

### GroupMember (join table: User ↔ GroupBuyDeal)
| Field | Type | Notes |
|---|---|---|
| id | number | |
| userId | FK → User | |
| dealId | FK → GroupBuyDeal | |
| role | `"leader" \| null` | creator gets "leader" |
| status | `"confirmed" \| "pending"` | |
| paymentStatus | `"escrowed" \| "released" \| "refunded"` | |
| joinedAt | datetime | |

---

### Conversation
| Field | Type | Notes |
|---|---|---|
| id | number | |
| participantIds | FK[] → User | |
| type | `"dm" \| "order" \| "request"` | drives chat filter chips |
| linkedDealId | FK → GroupBuyDeal? | context card shown in chat header |
| lastMessage | string | snapshot |
| lastMessageTime | datetime | |
| unreadCount | Map\<userId, number\> | per-participant |

---

### ChatMessage
| Field | Type | Notes |
|---|---|---|
| id | number | |
| conversationId | FK → Conversation | |
| senderId | FK → User | |
| message | string | |
| timestamp | datetime | |
| readBy | FK[] → User | |

---

### Escrow
| Field | Type | Notes |
|---|---|---|
| id | number | |
| dealId | FK → GroupBuyDeal | |
| totalLocked | decimal | sum of all participant locks |
| pendingAmount | decimal | not yet released |
| status | `"active" \| "released" \| "refunded"` | |

### EscrowTransaction
| Field | Type | Notes |
|---|---|---|
| id | number | |
| escrowId | FK → Escrow | |
| userId | FK → User | |
| amount | decimal | |
| type | `"lock" \| "release" \| "refund" \| "top_up"` | |
| orderRef | string? | |
| createdAt | datetime | |

---

### Order (RecentPurchase)
| Field | Type | Notes |
|---|---|---|
| id | number | |
| userId | FK → User | |
| dealId | FK → GroupBuyDeal | |
| titleSnapshot | string | name at time of purchase |
| price | decimal | |
| purchaseDate | datetime | |
| status | `"Escrow Locked" \| "In Transit" \| "Delivered" \| "Refunded"` | |

---

### Community
| Field | Type | Notes |
|---|---|---|
| id | string | |
| name | string | e.g. `r/TechGroup` |
| icon | string | single character or image |

---

### SavedDeal (User ↔ GroupBuyDeal bookmark)
| Field | Type | Notes |
|---|---|---|
| userId | FK → User | |
| dealId | FK → GroupBuyDeal | |
| savedAt | datetime | |

---

### LocalDeal (geo-tagged view)
- Extends GroupBuyDeal with `lat`, `lng` stored on the deal.
- `distance` is computed server-side from user coordinates.
- `markerIcon` can be derived from category.

---

## 2. API Endpoints

### Authentication
| Method | Endpoint | Auth | Notes |
|---|---|---|---|
| POST | `/auth/register` | — | email, password, username |
| POST | `/auth/login` | — | returns JWT + refresh token |
| POST | `/auth/logout` | ✓ | invalidate token |
| GET | `/auth/me` | ✓ | current user |
| POST | `/auth/refresh` | — | token refresh |
| POST | `/auth/verify-identity` | ✓ | KYC submission |
| POST | `/auth/connect-wallet` | ✓ | link Solana/ETH address |

---

### Users
| Method | Endpoint | Auth | Notes |
|---|---|---|---|
| GET | `/users/:id` | — | public profile |
| PATCH | `/users/me` | ✓ | name, avatar, username |
| GET | `/users/me/stats` | ✓ | active, completed, saved, level |
| GET | `/users/me/saved-deals` | ✓ | bookmarked deals |
| POST | `/users/me/saved-deals/:dealId` | ✓ | save deal |
| DELETE | `/users/me/saved-deals/:dealId` | ✓ | unsave deal |

---

### Deals
| Method | Endpoint | Auth | Notes |
|---|---|---|---|
| GET | `/deals` | — | paginated feed; query: `category`, `status`, `sort`, `lat`, `lng`, `radius` |
| GET | `/deals/featured` | — | featured deal(s) for hero card |
| GET | `/deals/nearby` | — | geo-filtered for MapPage; requires `lat`, `lng` |
| GET | `/deals/:id` | — | full detail |
| POST | `/deals` | ✓ | create group buy |
| PATCH | `/deals/:id` | ✓ creator | edit deal |
| DELETE | `/deals/:id` | ✓ creator/admin | cancel deal |
| POST | `/deals/:id/like` | ✓ | toggle like |
| POST | `/deals/:id/join` | ✓ | commit — initiates escrow lock |
| DELETE | `/deals/:id/leave` | ✓ | leave + trigger escrow refund |
| POST | `/deals/:id/fulfill` | ✓ creator | mark goods arrived → release escrow |
| GET | `/deals/:id/members` | — | participants list |
| POST | `/deals/drafts` | ✓ | save draft from PostDealPage |

---

### Communities
| Method | Endpoint | Auth | Notes |
|---|---|---|---|
| GET | `/communities` | — | list all |
| GET | `/communities/:id` | — | detail + linked deals |

---

### Categories
| Method | Endpoint | Auth | Notes |
|---|---|---|---|
| GET | `/categories` | — | static list for CategoryFilter |

---

### Conversations & Messaging
| Method | Endpoint | Auth | Notes |
|---|---|---|---|
| GET | `/conversations` | ✓ | list; query: `filter=all\|unread\|orders\|requests` |
| POST | `/conversations` | ✓ | create new DM |
| GET | `/conversations/:id` | ✓ | single conversation + linked deal context |
| GET | `/conversations/:id/messages` | ✓ | paginated message history |
| POST | `/conversations/:id/messages` | ✓ | send message (REST fallback; prefer WS) |
| PATCH | `/conversations/:id/read` | ✓ | mark conversation as read |

---

### Wallet & Escrow
| Method | Endpoint | Auth | Notes |
|---|---|---|---|
| GET | `/wallet` | ✓ | balance: total locked + pending |
| GET | `/wallet/transactions` | ✓ | full transaction history |
| POST | `/wallet/topup` | ✓ | add funds |
| POST | `/escrow/:dealId/release` | ✓ admin | release funds to seller |
| POST | `/escrow/:dealId/refund` | ✓ admin | refund all participants |

---

### Orders
| Method | Endpoint | Auth | Notes |
|---|---|---|---|
| GET | `/orders` | ✓ | recent purchases (ProfilePage activity) |
| GET | `/orders/:id` | ✓ | order detail |

---

### Browser Extension
| Method | Endpoint | Auth | Notes |
|---|---|---|---|
| POST | `/scrape/product` | optional | receives scraped data (title, url, description, price) from the Coorder browser extension; returns structured data that the extension appends to the `/post-deal?data=` query param |

---

## 3. Authentication & Authorization

- **JWT** (access + refresh token). All write endpoints require a valid token.
- **Public** (no token): deal feed, deal detail, community pages, categories.
- **Authenticated**: join deal, post deal, chat, wallet, profile edit, save deal.
- **Creator-only**: edit/cancel own deal, confirm fulfillment.
- **Admin**: manual escrow release/refund, fulfillment override.
- **KYC-gated**: higher escrow limits, "Pro Buyer" badge, increased karma tier.
- No login/register UI exists yet in the frontend — plan for it.

---

## 4. Real-Time (WebSocket / SSE)

| Channel | Event | Consumers |
|---|---|---|
| `conversation:{id}` | `new_message` | Live chat delivery in ChatPage panel + ConversationDetailPage |
| `conversation:{id}` | `presence` (online/offline) | Chat header status indicator |
| `conversations` | `unread_count` | Conversation list unread badge + BottomNav chat icon |
| `deal:{id}` | `member_joined` / `member_left` | spotsProgress bar on GroupDetailsPage and GroupBuyCard |
| `deal:{id}` | `status_changed` | Status badge updates across feed and detail page |
| `notifications` | `order_update`, `escrow_event` | Global notification system (not yet in UI but expected) |

---

## 5. File Uploads

| Asset | Trigger | Endpoint | Notes |
|---|---|---|---|
| Deal product image | POST `/deals` | multipart or presigned URL | Required field |
| User avatar | PATCH `/users/me` | multipart or presigned URL | Profile photo |

Use object storage (S3 / Cloudflare R2). Backend returns CDN URL stored on the model.

---

## 6. Business Logic

### Group Buy Lifecycle
1. Creator submits PostDealPage form → status starts as `pending`.
2. Participants join → each triggers an escrow lock for `joinPrice`.
3. When `filledSpots >= minParticipants` → status becomes `active`.
4. When `filledSpots == totalSpots` → status becomes `filled`.
5. Escrow release depends on `fulfillmentCondition`:
   - `auto_min_reached` — releases automatically when minimum is hit.
   - `admin_confirm` — admin manually triggers release.
   - `creator_confirm_arrival` — creator marks goods received, then release.
6. If `expiryDate` is reached and `filledSpots < minParticipants` → status `expired`, all escrow refunded.
7. Creator can cancel the deal only before any escrow is locked. Admin can cancel at any time.

### Escrow Model
- Each participant's `joinPrice` is locked individually at join time.
- Wallet card total = sum of all locked amounts across active deals.
- `pending` = locked in deals not yet fulfilled.
- Order status flow: `Escrow Locked` → `In Transit` → `Delivered` | `Refunded`

### Tiered Pricing (implied)
- The GroupDetailsPage copy mentions "unlock tier-based discounts as more members join." The backend may need to support pricing tiers keyed to `filledSpots` thresholds.
- `spotsProgress` is a percentage; `filledSpots = round((spotsProgress / 100) * totalSpots)`.

### Karma & Trust Score
- `karma` accrues from completed deals, positive ratings, and dispute-free history.
- `trustScore` is a 0–100 metric derived from disputes, refunds, and identity verification.
- `level` (1–N) is a gamification tier based on karma thresholds.

### Chat Conversation Typing
- Filter chips `Orders` and `Requests` require `Conversation.type` field.
- Every conversation linked to a deal surfaces a context card (product image, spots left, price, deep-link).

### Geo / Map
- Deals store `lat` + `lng` at creation.
- `/deals/nearby` accepts user coordinates and returns deals sorted by proximity.
- Requires geospatial indexing (PostGIS, MongoDB geo, or equivalent).

### Browser Extension Flow
- The extension scrapes a retail product page and appends the data as a JSON-encoded `?data=` query param when opening `/post-deal`.
- `PostDealPage` reads this on mount and pre-fills the form fields.
- No separate backend scraping endpoint is strictly required — the final form submit is just `POST /deals`.

---

## 7. Infrastructure Notes

- **Database**: Relational (PostgreSQL recommended) for transactional escrow integrity + geospatial support via PostGIS.
- **Real-time**: WebSocket server (e.g. Socket.io, Ably, Pusher) or SSE for message delivery and deal progress.
- **File storage**: S3-compatible object storage with CDN.
- **Payments / Escrow**: Integrate with a crypto wallet SDK (Solana web3.js / Ethers.js) for on-chain escrow, or a fiat escrow provider (Stripe Escrow, Mangopay) if off-chain.
- **Background jobs**: Cron job to expire deals past `expiryDate` and trigger bulk refunds.
- **Search**: Full-text search on deal titles/descriptions (PostgreSQL FTS or Elasticsearch).
