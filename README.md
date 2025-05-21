# Tarott - Nuxt.js Tarot Reading Website

A professional tarot reading website built with Nuxt.js and TailwindCSS.

## Features

- Modern design with fully responsive layout
- Nuxt.js 3 for static site generation and server-side rendering
- TailwindCSS for styling
- Stripe integration for payment processing

## Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev

# build for production
npm run build

# generate static site
npm run generate
```

## Project Structure

- `pages/` - Page components
- `components/` - Reusable Vue components
- `assets/` - Static assets like images and global CSS
- `public/` - Public files that should be directly accessible
- `app.vue` - Main application component
- `nuxt.config.js` - Nuxt configuration

## Deployment

This project is configured for deployment on Cloudflare Pages, but can be deployed to any static hosting service.

```bash
# Generate static files
npm run generate

# The output will be in the 'dist' directory
```

## Legacy Code

This project was migrated from a React application. Some legacy React components are still present in the `src/` directory but are not used in the Nuxt application.

## Credits

- Design inspired by modern tarot websites
- Tarot card imagery from various public domain sources
