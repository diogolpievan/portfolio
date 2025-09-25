# Diogo Pievan's Portfolio
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/diogolpievan/portfolio)

This repository contains the source code for my personal portfolio website, built with Next.js and Tailwind CSS. It is designed to showcase my skills, experience, and projects as a full-stack developer.

## Features

*   **Modern & Responsive Design:** Fully responsive layout for optimal viewing on all devices, from desktops to mobile phones.
*   **Interactive UI:** Smooth animations and transitions powered by `motion` to create an engaging user experience.
*   **Component-Driven Architecture:** Built with React and TypeScript, featuring a structured and maintainable component system using **shadcn/ui**.
*   **Dynamic Skill Display:** Skills are presented with icons from `react-icons` and informative tooltips.
*   **Smooth Navigation:** Utilizes `react-scroll` for seamless navigation between sections.
*   **Theming & Language:** Includes a configuration menu for theme (dark mode) and language preferences.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
*   **Animation:** [Motion](https://motion.dev/), [React Scroll](https://github.com/fmor/react-scroll)
*   **Icons:** [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
*   **Linting & Formatting:** ESLint, Prettier

## Project Structure

The codebase is organized to be clean and scalable:

```
.
├── public/                 # Static assets (images)
├── src/
│   ├── app/                # Next.js App Router: pages, layout, and global styles
│   ├── components/         # Reusable React components
│   │   ├── about-section/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── hero-section/
│   │   └── ui/             # Shadcn UI components
│   └── lib/                # Utility functions
├── next.config.ts          # Next.js configuration
└── package.json            # Project dependencies and scripts
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/diogolpievan/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    This command starts the development server on `http://localhost:3000`.
    ```bash
    npm run dev
    ```

## Available Scripts

In the `package.json`, the following scripts are available:

*   `npm run dev`: Runs the app in development mode with Turbopack.
*   `npm run build`: Creates a production-ready build of the app with Turbopack.
*   `npm run start`: Starts the production server after a build.
*   `npm run lint`: Lints the project files using ESLint.
