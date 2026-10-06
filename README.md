# Uma Credits — Digital Lending & Bahi-Khata Microfinance Platform

A complete, production-grade digital lending platform and admin control room built with Next.js 14, React 18, Tailwind CSS, and atomic JSON ledger database.

## Brand Identity
- **Brand Name**: Uma Credits
- **Short Name**: Uma
- **Tagline**: Chhoti zaroorat. Bada bharosa. (Small need. Deep trust.)
- **Reference Code Prefix**: `UC-` (e.g. `UC-261005-1042`)

---

## Portals & URLs

### 1. Borrower Portal (Web & Mobile View)
- **Home / Calculator**: `http://localhost:3000/`
- **Instant Loan Application & KYC**: `http://localhost:3000/apply`
- **Borrower Ledger & Repayments**: `http://localhost:3000/dashboard`
- **Full Architecture & DB Schema**: `http://localhost:3000/docs`

### 2. Admin Control Room (Direct Access, No Password Required)
- **Control Room / KPI Dashboard**: `http://localhost:3000/admin/dashboard`
- **Applications & KYC Desk**: `http://localhost:3000/admin/applications`
- **Borrower Registry**: `http://localhost:3000/admin/users`
- **Dynamic Site Settings**: `http://localhost:3000/admin/settings`
- **Audit Trail**: `http://localhost:3000/admin/activity`
- **Cash Movement Ledger**: `http://localhost:3000/admin/ledger`

### 3. Mobile Preview Over Local Wi-Fi Network
Open on any smartphone or tablet on the same Wi-Fi network:
- **Mobile Home**: `http://10.32.94.231:3000/`
- **Mobile Apply**: `http://10.32.94.231:3000/apply`
- **Mobile Admin**: `http://10.32.94.231:3000/admin/dashboard`

*(Alternatively, in Chrome/Edge, press `F12` and click the Device Toggle icon `Ctrl+Shift+M` to test on iPhone/Android resolutions).*

---

## Features & Highlights

1. **Borrower Experience**:
   - Live interactive EMI calculator with Reducing Balance and Flat Rate math.
   - Quick top-up loan chips (₹1K, ₹5K, ₹10K, ₹25K, ₹50K, ₹100K) and flexible tenures.
   - Instant OTP-less login by mobile number and name.
   - 3-step KYC verification (PAN validation, bank account, address, and legal NACH consent).
   - Digital Sanction Letter with official Uma Credits seal.
   - Repayment modal with UPI autopay, NACH, NEFT, and foreclosure simulation.

2. **Admin & Underwriting Control Room**:
   - Direct opening to all admin modules without login passwords.
   - Underwriting desk with Pending, Approved, Active, Closed, and Rejected status tabs.
   - Instant button advancement: Sanction -> Disburse -> Record EMI without stale UI.
   - Credit note modal with live typing and persistence.
   - Delete individual borrowers or purge the whole registry with cascading cleanup.
   - Real-time dynamic site settings that repaint the website instantly without redeployment.

3. **Tech Stack**:
   - **Framework**: Next.js 14 App Router
   - **Styling**: Tailwind CSS with custom Fraunces, IBM Plex Mono, and Manrope typography
   - **Database**: Atomic JSON-backed ACID datastore (`data/db.json`)
   - **Auth**: Server-side revocable session tokens (`lib/auth.ts`)

---

## Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Run in development mode
npm run dev

# 3. Or build and start for production
npm run build
npm start
```
