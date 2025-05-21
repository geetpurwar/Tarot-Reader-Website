#!/bin/bash

# Run this script to install Nuxt and its dependencies

# Install Nuxt
echo "Installing Nuxt and its dependencies..."
npm install

# Generate a basic Nuxt project
echo "Setting up Nuxt..."
npx nuxi prepare

echo "Installation complete!"
echo "You can now run: npm run dev"
