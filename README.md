# EmpressJasmine Tarot Website

A professional tarot and astrology website built with React, Framer Motion, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Smooth animations and transitions with Framer Motion
- Modern UI components with Tailwind CSS
- Interactive tarot card experience
- Contact form with validation
- Newsletter signup
- FAQ section with animated accordion

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository or download the source code
2. Navigate to the project directory

```bash
cd tarott
```

3. Install all dependencies (including react-intersection-observer)

```bash
npm run install-deps
```

4. Start the development server

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

## Troubleshooting

If you encounter errors related to missing dependencies:

1. Make sure all dependencies are properly installed:

```bash
npm install react-intersection-observer framer-motion tailwindcss postcss autoprefixer
```

2. If you're still having issues, check your package.json to make sure all required dependencies are listed and run:

```bash
npm install
```

## Build for Production

To create a production build, run:

```bash
npm run build
```

This will create an optimized build in the `build` directory.

## Technologies Used

- React.js
- Framer Motion for animations
- Tailwind CSS for styling
- Google Fonts (Cormorant Garamond and Raleway)

## Project Structure

- `/src/components` - React components for different sections of the website
- `/src/App.js` - Main application component
- `/src/index.css` - Global styles and Tailwind imports
- `/public` - Static assets and HTML template

## Component Overview

- `Navbar.js` - Navigation bar with mobile menu
- `Hero.js` - Hero section with parallax effect
- `TarotInfo.js` - Information about tarot readings
- `About.js` - About the tarot reader
- `Services.js` - Services offered
- `InteractiveTarot.js` - Interactive tarot card experience
- `FAQ.js` - Frequently asked questions with accordion
- `Contact.js` - Contact form with validation
- `Manifestation.js` - Call to action for manifestation journal
- `Newsletter.js` - Newsletter signup
- `Footer.js` - Footer with social links