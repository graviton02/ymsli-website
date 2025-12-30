# YMSLI Website

A modern, production-grade website for Yamaha Motor Solutions India (YMSLI) built with Next.js 14, React 18, Tailwind CSS, and Framer Motion.

## Features

- **Modern Tech Stack**: Next.js 14 with App Router, React 18, TypeScript
- **Responsive Design**: Fully responsive across all device sizes
- **Animations**: Smooth animations and transitions using Framer Motion
- **Performance**: Optimized for fast loading and excellent Core Web Vitals
- **SEO Ready**: Proper meta tags and semantic HTML structure

## Color Scheme

Based on YMSL.in brand guidelines:
- Primary Navy: `#0A1F5C`
- Primary Blue: `#1E3A8A`
- Yamaha Red: `#E60012`
- Cyan Accent: `#00D4FF`
- Light Background: `#F8FAFC`

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd "YMSLI Website"

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── about/           # About Us section pages
│   ├── careers/         # Careers section pages
│   ├── contact/         # Contact page
│   ├── innovation/      # Innovation section pages
│   ├── insights/        # Insights/Blog section
│   ├── services/        # Services section pages
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/
│   └── layout/          # Header, Footer components
└── lib/
    └── utils.ts         # Utility functions and data
```

## Pages

### Main Sections
- **Homepage**: Hero, stats, services overview, DX journey, certifications
- **About Us**: Our Story, Vision & Mission, Strategic Goals, Global Footprint, Leadership, Quality & Certifications
- **Services**: SAP Practice, Enterprise Applications, Custom Development, Infrastructure & Cybersecurity, Data & AI, Engineering, Digital Transformation
- **Innovation**: Innovation Lab (ETIL), DX Journey, Success Stories, Ecosystem
- **Careers**: Life at YMSLI, Benefits, Learning & Development, Diversity & CSR, Open Positions
- **Insights**: Blog, Case Studies, News & Events
- **Contact**: Contact form with office locations

## Technologies

- [Next.js 14](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## License

© 2024 Yamaha Motor Solutions (India) Private Limited. All rights reserved.
