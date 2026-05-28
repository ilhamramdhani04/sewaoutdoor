# CLAUDE.md

# OUTDOOR RENTAL PLATFORM
Modern Outdoor Gear Rental Website
Version: 3.0
Architecture: AI-Friendly Fullstack Next.js Platform

---

# PROJECT OVERVIEW

Build a modern premium outdoor rental platform inspired by:
https://sibayakadventure.com/product-category/rent-for-camping

However the final product MUST:
- feel more premium
- modernized UI
- mobile-first
- cinematic outdoor aesthetic
- faster booking experience
- scalable architecture
- optimized for AI coding agents

Main business:
Rental perlengkapan outdoor dan camping seperti:
- tenda
- matras
- sleeping bag
- headlamp
- carrier
- jaket gunung
- trekking pole
- hammock
- cooking set
- flysheet
- kursi camping
- meja camping
- sepatu hiking
- alat hiking
- paket camping

---

# PRIMARY OBJECTIVE

Create:
- premium outdoor booking experience
- inventory rental management
- modern ecommerce-like rental flow
- responsive mobile UX
- AI maintainable architecture
- scalable codebase

User feeling target:
“Booking alat outdoor semudah booking hotel”

---

# TECH STACK

## FRONTEND
- Next.js 15 App Router
- React 19
- TypeScript
- TailwindCSS
- shadcn/ui
- Framer Motion
- Lucide Icons

## BACKEND
- Next.js Server Actions
- API Route Handler
- Prisma ORM

## DATABASE
- Supabase PostgreSQL

## AUTH
- Clerk Auth

## STORAGE
- Supabase Storage

## PAYMENT
- Midtrans

## DEPLOYMENT
- Vercel

---

# WHY THIS STACK

## NEXT.JS
- best React ecosystem
- SSR support
- SEO friendly
- fast deployment
- AI-friendly architecture
- optimized for Vercel

## SUPABASE
- managed PostgreSQL
- realtime support
- simple dashboard
- scalable
- easy AI integration

## PRISMA
- type-safe
- AI highly understands schema
- easier migration
- scalable query management

---

# UI/UX REFERENCE

Main reference:
https://sibayakadventure.com/product-category/rent-for-camping

Important:
DO NOT clone the UI directly.

Use only as inspiration for:
- product layout
- outdoor rental flow
- category structure
- package presentation
- business logic

Modernize using:
- cinematic hero section
- premium product cards
- glassmorphism
- smooth animations
- modern spacing
- dark earthy color palette
- immersive mobile experience

---

# DESIGN DIRECTION

## DESIGN STYLE

The website should feel:
- premium
- modern
- adventurous
- cinematic
- immersive
- professional

NOT:
- generic ecommerce
- cheap marketplace
- cluttered UI

---

# COLOR SYSTEM

## PRIMARY COLORS

```css
--forest-dark: #081C15;
--forest-green: #1B4332;
--moss-green: #2D6A4F;
--sand-beige: #DAD7CD;
--earth-brown: #7F5539;
--stone-gray: #A3B18A;
--soft-white: #F8F9FA;
--charcoal: #111827;
```

---

# TYPOGRAPHY

## FONT SYSTEM

| Usage | Font |
|---|---|
| Heading | Poppins |
| Body | Inter |
| Accent | Bebas Neue |

Rules:
- bold large hero
- spacious typography
- clean readability
- minimal paragraph width

---

# ANIMATION SYSTEM

Use Framer Motion.

Animation style:
- fade up
- smooth reveal
- hover lift
- image zoom
- parallax scroll
- stagger animation
- blur transitions

Avoid:
- excessive animation
- heavy movement
- distracting motion

---

# LAYOUT SYSTEM

## CONTAINER
Use:
```tsx
max-w-7xl mx-auto px-4 md:px-6 lg:px-8
```

## BORDER RADIUS
Use:
```tsx
rounded-2xl
rounded-3xl
```

## SHADOW
Use:
```tsx
shadow-lg
shadow-xl
shadow-black/10
```

---

# RESPONSIVE PRIORITY

The platform MUST be:
- mobile-first
- tablet optimized
- desktop immersive

Target:
90% users mobile.

---

# CORE FEATURES

# PUBLIC FEATURES

## HOMEPAGE

Sections:
1. Navbar
2. Hero section
3. Quick booking form
4. Product categories
5. Popular rentals
6. Featured package
7. Why choose us
8. Testimonials
9. Outdoor articles
10. Instagram gallery
11. Footer

---

# HERO SECTION

Style:
- fullscreen cinematic background
- mountain/camping imagery
- dark overlay
- large typography
- booking form floating

Components:
- heading
- subheading
- CTA button
- booking search
- animated statistics

---

# QUICK BOOKING

Features:
- select rental date
- select return date
- availability checking
- quick search

UI:
- glassmorphism form
- floating card
- sticky mobile button

---

# CATEGORY SECTION

Categories:
- Tenda
- Carrier
- Sleeping Bag
- Matras
- Lighting
- Cooking Set
- Hiking Gear
- Hammock

Design:
- icon card
- image thumbnail
- hover animation

---

# PRODUCT CATALOG

## FEATURES

- realtime search
- category filtering
- stock filtering
- sort product
- price filter
- pagination

---

# PRODUCT CARD

## COMPONENTS

Each card contains:
- product image
- category badge
- product name
- rental price/day
- availability status
- quick view
- add to cart button

## STYLE

- rounded-3xl
- image zoom hover
- dark overlay
- gradient bottom
- floating price badge

---

# PRODUCT DETAIL PAGE

## SECTIONS

1. Product gallery
2. Product info
3. Booking form
4. Specifications
5. Included items
6. Reviews
7. Related products

---

# BOOKING SYSTEM

## FLOW

```bash
Select Date
↓
Check Availability
↓
Add Quantity
↓
Input Customer Data
↓
Checkout
↓
Payment
↓
Booking Confirmed
```

---

# CART SYSTEM

Features:
- multi item booking
- realtime subtotal
- auto duration calculation
- deposit calculation

---

# CHECKOUT PAGE

## FEATURES

- booking summary
- customer form
- payment selection
- upload identity
- promo code
- terms agreement

---

# AUTHENTICATION

Use Clerk Auth.

Methods:
- Google login
- Email login
- OTP login

---

# USER DASHBOARD

## FEATURES

- active rentals
- rental history
- invoices
- profile management
- notifications
- wishlist

---

# REVIEW SYSTEM

Users can:
- rate products
- upload review
- upload images

---

# ADMIN PANEL

# ADMIN DASHBOARD

## WIDGETS

- total revenue
- active bookings
- pending bookings
- inventory status
- popular products
- latest transactions

---

# PRODUCT MANAGEMENT

## FEATURES

- CRUD products
- upload multiple image
- inventory management
- category management
- stock tracking

---

# BOOKING MANAGEMENT

## FEATURES

- approve booking
- reject booking
- extend rental
- update status
- return management

---

# INVENTORY STATUS

Statuses:
- available
- rented
- maintenance
- damaged
- lost

---

# PAYMENT MANAGEMENT

## FEATURES

- verify payment
- refund handling
- payment tracking

---

# CMS MANAGEMENT

## FEATURES

- blog articles
- homepage banner
- FAQ
- SEO metadata

---

# DATABASE ARCHITECTURE

# USERS TABLE

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  email TEXT UNIQUE,
  phone TEXT,
  avatar TEXT,
  role TEXT DEFAULT 'customer',
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

# CATEGORIES TABLE

```sql
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE,
  icon TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

# PRODUCTS TABLE

```sql
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID REFERENCES categories(id),
  name TEXT,
  slug TEXT UNIQUE,
  description TEXT,
  brand TEXT,
  price_per_day INTEGER,
  deposit_price INTEGER,
  stock INTEGER DEFAULT 0,
  thumbnail TEXT,
  status TEXT DEFAULT 'available',
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

# PRODUCT_IMAGES TABLE

```sql
CREATE TABLE product_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES products(id),
  image_url TEXT
);
```

---

# BOOKINGS TABLE

```sql
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  invoice_code TEXT,
  start_date DATE,
  end_date DATE,
  total_price INTEGER,
  deposit_total INTEGER,
  grand_total INTEGER,
  status TEXT DEFAULT 'pending',
  payment_status TEXT DEFAULT 'unpaid',
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

# BOOKING_ITEMS TABLE

```sql
CREATE TABLE booking_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID REFERENCES bookings(id),
  product_id UUID REFERENCES products(id),
  quantity INTEGER,
  price INTEGER,
  subtotal INTEGER
);
```

---

# PAYMENTS TABLE

```sql
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID REFERENCES bookings(id),
  payment_method TEXT,
  amount INTEGER,
  status TEXT DEFAULT 'pending',
  paid_at TIMESTAMP
);
```

---

# REVIEWS TABLE

```sql
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  product_id UUID REFERENCES products(id),
  rating INTEGER,
  review TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

# DUMMY PRODUCT DATA

```ts
[
  {
    name: "Tenda Eiger 4P",
    category: "Tenda",
    pricePerDay: 75000,
    stock: 10
  },
  {
    name: "Carrier Consina 60L",
    category: "Carrier",
    pricePerDay: 50000,
    stock: 8
  },
  {
    name: "Sleeping Bag Rei",
    category: "Sleeping Gear",
    pricePerDay: 35000,
    stock: 15
  },
  {
    name: "Headlamp Naturehike",
    category: "Lighting",
    pricePerDay: 20000,
    stock: 20
  }
]
```

---

# FOLDER STRUCTURE

```bash
src/
│
├── app/
│   ├── (public)/
│   ├── admin/
│   ├── dashboard/
│   ├── api/
│   └── checkout/
│
├── components/
│   ├── ui/
│   ├── cards/
│   ├── sections/
│   ├── forms/
│   ├── dashboard/
│   └── shared/
│
├── lib/
│   ├── prisma.ts
│   ├── auth.ts
│   ├── validations/
│   └── utils.ts
│
├── hooks/
├── services/
├── store/
├── styles/
├── constants/
└── types/
```

---

# COMPONENT RULES

## IMPORTANT

Components MUST:
- reusable
- modular
- typed
- scalable
- clean naming
- atomic structure

Avoid:
- massive components
- inline business logic
- duplicated styling

---

# API STRUCTURE

# PRODUCTS

```bash
GET /api/products
GET /api/products/:id
POST /api/products
PUT /api/products/:id
DELETE /api/products/:id
```

---

# BOOKINGS

```bash
POST /api/bookings
GET /api/bookings
PATCH /api/bookings/:id
```

---

# SEO REQUIREMENTS

Must support:
- metadata API
- sitemap.xml
- robots.txt
- OpenGraph
- Twitter card
- dynamic meta title

---

# PERFORMANCE TARGET

| Metric | Target |
|---|---|
| Lighthouse | 95+ |
| Mobile Performance | 95+ |
| FCP | <1.5s |
| TTI | <2.5s |

---

# DEPLOYMENT

## DEPLOYMENT FLOW

```bash
GitHub
↓
Vercel
↓
Production
```

---

# ENVIRONMENT VARIABLES

```env
DATABASE_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
MIDTRANS_SERVER_KEY=
MIDTRANS_CLIENT_KEY=
NEXT_PUBLIC_APP_URL=
```

---

# AI CODING AGENT OPTIMIZATION

This project MUST be optimized for:
- Claude Code
- Cursor AI
- GitHub Copilot
- OpenAI Codex
- RooCode
- Windsurf

Codebase should:
- easy to understand
- strict typing
- modular architecture
- predictable naming
- scalable foldering

---

# FUTURE FEATURES

## PHASE 2
- realtime inventory
- push notification
- WhatsApp notification
- loyalty points
- voucher system

## PHASE 3
- AI recommendation
- AI chatbot
- QR pickup system
- Flutter mobile app
- multi branch

---

# FINAL VISION

The final product should feel like:
“premium outdoor adventure booking platform”

NOT:
“traditional camping rental website”

The experience should:
- modern
- immersive
- premium
- cinematic
- smooth
- fast
- trustworthy

END OF FILE