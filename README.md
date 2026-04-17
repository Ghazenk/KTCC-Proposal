<div align="center">

<br />

<img src="https://img.shields.io/badge/KTCC-Life%20Stream%20System-AF0045?style=for-the-badge&logo=heart&logoColor=white" alt="KTCC Badge" />

# KTCC — Thalassemia Management System

**A startup-level proposal for a smart blood donor & patient management system focused on Thalassemia care in Kech, Balochistan.**

*A clinical ecosystem bridging the gap with offline-first donor matching.*

<br />

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Gemini AI](https://img.shields.io/badge/Gemini-AI%20Powered-4285F4?style=flat-square&logo=google)](https://ai.google.dev)

<br />

</div>

---

## 📌 About

**KTCC (Kech Thalassemia Care Center)** faces a critical operational problem: patient and donor records are still managed using handwritten registers — slow, error-prone, and dangerous in emergency situations.

This project proposes and showcases **Life Stream System**, a digital clinical ecosystem designed specifically for KTCC Turbat. The system brings offline-first donor matching, reliability-ranked donor tiers, medical cooldown tracking, and Balochi language support to one of Pakistan's most underserved healthcare regions.

This repository contains the **interactive proposal website** — a fully animated, multi-section React application presenting the system's motivation, methodology, features, roadmap, and engineering architecture.

---

## 🧑‍💻 Project Team

| Name | Role | Student ID | Email |
|------|------|------------|-------|
| **Ghazen Khalid** | Head of Design / UI Architect | 1109193 | 1109193@stud.uot.edu.pk |
| **Aman** | Development Lead | 1110325 | 1110325@stud.uot.edu.pk |
| **Mairaj Javed** | Data Expert | 1109159 | 1109159@stud.uot.edu.pk |

> **Supervisor:** Sir Muhammad Asim  
> **Institution:** University of Turbat  
> **Session:** 2023 – 2026

---

## 🚀 Tech Stack (Proposal Website)

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS v4 |
| Animations | Motion (Framer Motion) |
| Icons | Lucide React |
| AI Integration | Google Gemini API |
| Backend | Express.js |

> **Planned App Stack:** Flutter · Isar (local DB) · Supabase (cloud sync)

---

## ✨ Proposal Sections

The website is organized into **8 interactive sections**:

1. **Motivation** — Why KTCC urgently needs digitization
2. **Overview** — The scope and problem statement
3. **Methodology** — 4-stage development cycle (Figma → Flutter → Evaluation)
4. **Features** — 10 field-proven system capabilities
5. **Roadmap** — Strategic execution timeline starting June 1, 2026
6. **Engineering** — Flutter architecture, Isar DB, and Supabase cloud sync
7. **References** — Academic research supporting the clinical approach
8. **Contact** — Direct contact with the project team

---

## 🔬 Key System Features (Proposed App)

| # | Feature | Description |
|---|---------|-------------|
| 01 | **Reliability Ranking** | Green / Yellow / Red donor tiers based on historical reliability |
| 02 | **Offline-First Sync** | Works without internet; conflict-resolving sync when back online |
| 03 | **Honest State Tracking** | Tracks `Confirmed`, `No-show`, `Came but not used` states |
| 04 | **Guardian Alert Hub** | Guardian logins to monitor child schedules and get reminders |
| 05 | **Emergency Escalation** | Priority override for emergencies with TMC escalation logging |
| 06 | **Medical Cooldowns** | Gender-aware cooldowns (3 months for male, 6 months for female) |
| 07 | **Inventory Freshness** | Tracks Camp vs Standard blood and freshness degradation |
| 08 | **Hard-core Privacy** | Female donor contact details restricted to Founder/Manager only |
| 09 | **Balochi Language Support** | Full Arabic typeface interface for local users |
| 10 | **Donor Recognition** | Visual counter showing lives impacted per donor |

---

## 🛠️ Running Locally

**Prerequisites:** Node.js 18+

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/ktcc-thalassemia-management-system.git
cd ktcc-thalassemia-management-system

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Add your GEMINI_API_KEY to .env.local

# 4. Start the dev server
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## 📋 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # TypeScript type checking
npm run clean    # Remove dist folder
```

---

## 🗺️ Roadmap (Planned System)

| Phase | Timeline | Milestone |
|-------|----------|-----------|
| Research & Design | June 2026 | Figma prototypes, field interviews |
| Core Development | July – Sept 2026 | Flutter app, Isar DB integration |
| Pilot Testing | Oct 2026 | Live trial at KTCC Turbat |
| Center Handover | Nov 2026 | Full deployment & staff training |

---

## 📚 Academic Context

This project is a **final year academic proposal** submitted at the University of Turbat, aiming to address the documented digital health gap in thalassemia care across rural Balochistan, supported by peer-reviewed research on offline-first medical systems and clinical donor management.

---

## 📬 Contact

For technical inquiries, pilot data access, or healthcare organization collaboration:

- **Ghazen Khalid** (UI Architect) — 1109193@stud.uot.edu.pk
- **Aman** (Dev Lead) — 1110325@stud.uot.edu.pk
- **Mairaj Javed** (Data Expert) — 1109159@stud.uot.edu.pk

---

<div align="center">

Made with ❤️ for the patients of KTCC Turbat, Balochistan.

</div>
