# Portfolio

A modern responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

This project showcases personal projects, skills, certifications, and professional experience in a visually rich cyber-inspired design.

## Features

- Responsive one-page portfolio layout
- Dark and light theme support
- French/English language toggle
- Animated typing effect and reveal-on-scroll sections
- Custom circuit-style background and modern UI design
- Contact and CV download actions
- Accessibility-conscious structure with skip links and semantic landmarks

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- PostCSS

## Project Structure

```text
.
├── public/
│   ├── _headers
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── i18n/
│   ├── sections/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will start in development mode and typically be available at:

```text
http://localhost:5173
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

```bash
npm run dev      # start development server
npm run build    # build the app for production
npm run preview  # preview the production build locally
npm run lint     # run ESLint checks
```

## Notes

- The portfolio content and translations are managed in the `src/i18n` folder.
- Theme and language preferences are persisted in `localStorage`.
- The site uses `@` aliases for cleaner imports configured in Vite.

## License

This project is currently unlicensed unless otherwise specified.

## Author

Wijdane Hachani
