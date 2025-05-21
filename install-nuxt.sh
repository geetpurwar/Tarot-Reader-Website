#!/bin/bash

# Install Nuxt.js and essential dependencies
echo "Installing Nuxt.js and dependencies..."

# First install Nuxt
npm install nuxt

# Install Nuxt modules
npm install @nuxt/content @nuxt/image @nuxt/ui

# Install dev dependencies
npm install --save-dev autoprefixer postcss tailwindcss

# Create necessary directories if they don't exist
mkdir -p components layouts pages public assets

echo "Installation complete!"
echo "You can now run: npx nuxt dev"
