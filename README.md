# 🚀 Sorix Studio — Official Portfolio & Template Architecture

Welcome to the official portfolio and business template architecture for **Sorix Studio**, founded and lead-architected by **Sonu M**.

![Sorix Studio](public/sonu.jpg)

---

## 📌 Founder & Contact Information

| Channel | Contact Link | Details |
| :--- | :--- | :--- |
| 👤 **Founder & Lead Architect** | **Sonu M** | Founder & Lead Architect |
| 📧 **Official Email** | [sorixm149@gmail.com](mailto:sorixm149@gmail.com) | Direct Project Inquiries |
| 💬 **WhatsApp** | [+91 81520 44640](https://wa.me/918152044640) | Quick Chat & Consultations |
| 📸 **Instagram** | [@sorixstudio.in](https://www.instagram.com/sorixstudio.in/) | Studio Portfolio & Updates |
| 🐙 **GitHub Repository** | [Sorix_Studio_Map_Website](https://github.com/Sonu04-create/Sorix_Studio_Map_Website) | Source Code |

---

## 🔥 Key Features

- 🌟 **High-Impact Portfolio Home Page**:
  - Features Sonu M's graphic portrait (`public/sonu.jpg`) with neon glowing frames and tech badges.
  - Showcases Sorix Studio's vision, technical skills (Python, AI, Full-Stack Architecture, React, TypeScript), and core offerings.
- ⚡ **Interactive Business Template Library**:
  - Turnkey website templates for **Salons, Gyms, Restaurants, Clinics, Real Estate, and Agencies**.
  - Includes real-time search, industry filtering, copyable demo URLs, and one-click live demo launching (`/demos/:slug`).
- 🛡️ **Watermarking & Contact Conversion System**:
  - **Sticky Top Watermark Banner**: Displays Sorix Studio watermark and Sonu M's contact credentials on every demo template.
  - **Floating Contact Badge**: Fixed action pill with quick WhatsApp chat, Instagram DM, and Email buttons.
  - **Watermarked Footers**: Ensures brand authority and client reachability on every single page.
- 📩 **Interactive Project Inquiry Hub**:
  - Embedded inquiry form with instant WhatsApp dispatch for client lead capture.

---

## 🛠️ Technology Stack

- **Frontend Core**: React 18, TypeScript, Vite
- **Styling & UI**: Tailwind CSS, Glassmorphism, CSS Custom Properties
- **Icons**: Lucide React (`lucide-react`)
- **Routing**: React Router DOM v6
- **Architecture**: Modular Component-Driven Architecture

---

## 📁 Repository Structure

```text
Sorix_Studio_Map_Website/
├── public/
│   └── sonu.jpg                # Sonu M's Official Hero Avatar & Graphic
├── src/
│   ├── components/
│   │   ├── SorixNavbar.tsx     # Sticky Header with Logo & WhatsApp CTA
│   │   ├── SonuHero.tsx        # Hero Section with Graphic & Quick Actions
│   │   ├── ArchitectAbout.tsx  # Sonu M Profile, Skills & Philosophy
│   │   ├── ServicesSection.tsx # Core Agency Offerings
│   │   ├── TemplateGallery.tsx # Interactive Template Showcase Grid
│   │   ├── ContactHub.tsx      # Contact Cards & Inquiry Form
│   │   ├── WatermarkBadge.tsx  # Persistent Watermark Banner & Floating Badge
│   │   ├── Footer.tsx          # Watermarked Template Footer
│   │   └── DemoBadge.tsx       # Concept Watermark Pill
│   ├── data/
│   │   ├── contactInfo.ts      # Central Contact Data Source of Truth
│   │   └── businesses/         # Turnkey Template Data Sets (Salon, Gym, etc.)
│   ├── pages/
│   │   ├── Dashboard.tsx       # Main Sorix Studio Portfolio Home Page
│   │   └── DemoPage.tsx        # Template Demo Viewer Page
│   ├── templates/
│   │   └── UniversalTemplate.tsx # Watermarked Business Template Renderer
│   ├── App.tsx                 # App Router
│   ├── main.tsx                # Entry Point
│   └── index.css               # Design System Styling & Utilities
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18+) installed.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Sonu04-create/Sorix_Studio_Map_Website.git
   cd Sorix_Studio_Map_Website
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🤝 Contact & Credits

Architected & Built by **Sonu M (Founder & Lead Architect)**  
**Sorix Studio** — Architecting Next-Gen Web Applications & Digital Platforms.

- **WhatsApp**: [+91 81520 44640](https://wa.me/918152044640)
- **Email**: [sorixm149@gmail.com](mailto:sorixm149@gmail.com)
- **Instagram**: [@sorixstudio.in](https://www.instagram.com/sorixstudio.in/)
