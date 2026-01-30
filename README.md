# My Portfolio

A modern, responsive portfolio website showcasing my design and development work. Built with React, TypeScript, and Tailwind CSS, featuring interactive case studies and a clean, professional design.

## 🌐 Live Demo

View the live portfolio at: [https://raziaprokopiou.github.io/my-portfolio/](https://raziaprokopiou.github.io/my-portfolio/)

## ✨ Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Interactive Case Studies**: Detailed project showcases with images, prototypes, and descriptions
- **Smooth Navigation**: Client-side routing with React Router
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Fast Performance**: Built with Vite for optimal loading speeds

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Custom SVG icons
- **Deployment**: GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RaziaProkopiou/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Build and deploy to GitHub Pages
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── About.tsx       # About section
│   ├── CaseStudy.tsx   # Case study card component
│   ├── Contact.tsx     # Contact information
│   ├── Footer.tsx      # Site footer
│   ├── Hero.tsx        # Hero section
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Navbar.tsx      # Navigation bar
│   └── ...
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   └── CaseStudyPage.tsx # Individual case study page
├── context/            # React context providers
│   ├── ThemeContext.tsx
│   └── ThemeProvider.tsx
├── data/               # Static data
│   └── caseStudiesData.ts
├── hooks/              # Custom React hooks
│   └── useTheme.ts
└── assets/             # Static assets (images, etc.)
```

## 🎨 Customization

### Adding New Case Studies

1. Add your project data to `src/data/caseStudiesData.ts`
2. Follow the existing structure with title, problem, solution, impact, sections, etc.
3. Add images to `public/images/` and reference them in your data

### Theme Customization

The theme system uses CSS custom properties. Modify colors in `src/index.css` or update the Tailwind config in `tailwind.config.js`.

### Content Updates

- Update personal information in the relevant components (`About.tsx`, `Contact.tsx`, etc.)
- Modify navigation links in `Navbar.tsx`
- Update footer content in `Footer.tsx`

## 🚀 Deployment

The site is configured for deployment to GitHub Pages:

1. Ensure your repository settings have Pages set to deploy from the `gh-pages` branch
2. Run `npm run deploy` to build and push to GitHub Pages
3. The site will be available at `https://[username].github.io/[repository-name]/`

## 📝 Notes

- The app uses React Router with a basename for GitHub Pages deployment
- 404.html handles client-side routing for direct URL access
- Images are optimized and served from the public directory

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Razia Prokopiou
    ...reactDom.configs.recommended.rules,
  },
})
```
