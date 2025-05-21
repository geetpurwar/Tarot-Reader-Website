#!/bin/bash

# This script is for deployment in CI environments

# Install dependencies
npm install

# Install Nuxt and its modules
npm install nuxt @nuxt/content @nuxt/image @nuxt/ui @nuxt/icon @nuxt/fonts @nuxt/scripts

# Generate static site with Nuxt
npx nuxt generate

echo "Build completed! The static site is in the 'dist' directory."
