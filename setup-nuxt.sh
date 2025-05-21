#!/bin/bash

# This script installs Nuxt.js and sets up the project

echo "Setting up Nuxt.js project..."

# Backup the old package.json
echo "Backing up current package.json..."
cp package.json package.json.react.backup

# Use the new Nuxt package.json
echo "Installing Nuxt package.json..."
cp package.json.nuxt package.json

# Install dependencies
echo "Installing dependencies..."
npm install

# Prepare Nuxt
echo "Running Nuxt preparation..."
npx nuxt prepare

echo "Setup complete! You can now run the Nuxt app with: npm run dev"
echo "The React app has been preserved and can be run with: npm run legacy-start"
