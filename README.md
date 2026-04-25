# 🚀 Rishav Mishra — Personal Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen?style=for-the-badge&logo=vercel)](https://rishav-mishra-portfolio.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-rishavm003-black?style=for-the-badge&logo=github)](https://github.com/rishavm003/rishav-portfolio)

A modern, high-performance personal portfolio website built with **React**, **Vite**, and **Supabase**. This project features a professional-grade architecture, dynamic project showcases, and a secure admin panel for content management.

---

## ✨ Features

- 🎨 **Modern Aesthetics**: Clean UI with glassmorphism, smooth animations, and high-tech visual effects.
- 🌓 **Theme Support**: Seamless switching between Light and Dark modes.
- ⚡ **Optimized Performance**: Built with Vite and organized using professional architecture patterns (Aliases, Barrel Exports).
- 📱 **Fully Responsive**: Optimized for every screen size from mobile to desktop.
- 🗂️ **Dynamic Showcase**: Automated project and certification rendering from structured data.
- 📬 **Backend Integration**: Functional contact form and resume management powered by **Supabase**.
- 🔐 **Secure Admin**: Password-protected dashboard to update your latest resume.

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| **React 19** | Modern UI framework |
| **Vite** | Fast build tooling and alias mapping |
| **Supabase** | Database, Storage (Resume), and Edge logic |
| **Framer Motion** | Advanced micro-animations |
| **Lucide React** | Consistent, lightweight iconography |
| **CSS Modules** | Scoped, maintainable styling |

---

## 📁 Project Structure

The project follows a clean, scalable architecture with path aliases (`@/` points to `src/`):

```
src/
├── components/      # Reusable components
│   ├── layout/      # Navbar, Footer (with barrel exports)
│   ├── effects/     # Visual effects (LetterGlitch, etc.)
│   └── ui/          # Common UI elements (ShinyText, etc.)
├── contexts/        # Theme and Global State Management
├── data/            # Content configuration (portfolioData.js)
├── hooks/           # Reusable logic (useScrollReveal, etc.)
├── layouts/         # Main page structures (MainLayout)
├── pages/           # Standalone routes (Admin Dashboard)
├── sections/        # Homepage modular sections (About, Skills, etc.)
└── styles/          # Design system & Global CSS
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/rishavm003/rishav-portfolio.git

# Navigate to project directory
cd rishav-portfolio

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_ADMIN_PASSWORD=your_admin_password
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🌐 Deployment

This project is deployed on **Vercel**. Continuous integration ensures that any push to the `main` branch triggers an automatic production build.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/rishavm003/rishav-portfolio)

---

## 📬 Contact

**Rishav Mishra** — AI Engineer | B.Tech CSE (AI), BBD University, Lucknow

- 🌐 Portfolio: [Visit Live Site](https://rishav-mishra-portfolio.vercel.app/)
- 💼 LinkedIn: [Rishav Mishra](https://linkedin.com/in/rishavm003)
- 💻 GitHub: [@rishavm003](https://github.com/rishavm003)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
