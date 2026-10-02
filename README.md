# Elena Vance, CMA — Management Accounting & Strategic Advisory

A multi-page, executive-tier corporate web application and professional portfolio built for **Vance Management Accounting & Strategic Advisory**. Built with modern web standards, responsive design, dual Light/Dark theme architecture, and interactive financial diagnostic tools.

---

## 🌟 Key Features

- **Dual Light & Dark Theme Architecture**: Smooth, instant theme switching with a custom segmented toggle pill control (`[ ☀️ Light | 🌙 Dark ]`) and persistent `localStorage` user preferences.
- **Executive Practice Areas**: Showcase of 6 core advisory capabilities including:
  - **GST & Corporate Tax Architecture** (Input Tax Credit / ITC reconciliation, compliance)
  - **Strategic Cost Architecture & Activity-Based Costing (ABC)**
  - **Enterprise FP&A & 13-Week Rolling Cash Velocity Models**
  - **Fractional CFO & Boardroom Advisory**
  - **C-Suite KPI Decision Architecture**
  - **Working Capital Engineering & DSO Compression**
- **Interactive ROI & Capital Recovery Calculator**: Real-time diagnostic slider modeling annual enterprise revenue, SG&A overhead, EBITDA margin lift, and working capital liberation.
- **Suite 400 Headquarters Showcase**: Interactive facility explorer detailing the Strategic Boardroom, Financial Vault, and Client Salon with floor specs and coordinates.
- **Thought Leadership & Insights Hub**: Modal-driven editorial briefings covering cost engineering, liquidity management, and fiduciary governance.
- **Confidential Intake Diagnostic Form**: Interactive consultation intake form with real-time validation and service URL parameter pre-filling.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with class-based Dark Mode
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/nubi.git
   cd nubi
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```
src/
├── assets/          # Images & visual assets
├── components/      # UI components (Navbar, Footer, ThemeToggle, etc.)
├── config/          # Site configuration & content data (siteConfig.ts)
├── context/         # React Context providers (ThemeContext.tsx)
├── pages/           # Page routes (Home, About, Services, Office, Insights, Contact)
├── App.tsx          # Main application component & routes
├── index.css        # Tailwind directives & global styling layer
└── main.tsx         # Entry point & ThemeProvider wrapper
```

---

## 📄 License

Copyright © 2026 Vance Management Accounting & Strategic Advisory. All rights reserved.
