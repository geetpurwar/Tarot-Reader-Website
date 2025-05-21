#!/bin/bash

# This script creates a new Nuxt project and copies over existing files

# Create a backup directory for the current project
mkdir -p ../tarott-backup
cp -r . ../tarott-backup

# Create a new Nuxt project
echo "Creating a new Nuxt project..."
cd ..
npx nuxi init tarott-nuxt

# Copy over important files and directories
echo "Copying existing files to new project..."
cp -r tarott/pages tarott-nuxt/pages
cp -r tarott/components tarott-nuxt/components
cp tarott/app.vue tarott-nuxt/app.vue
cp tarott/.gitignore tarott-nuxt/.gitignore

echo "New Nuxt project created at ../tarott-nuxt"
echo "Your existing project is backed up at ../tarott-backup"
echo ""
echo "To start using the new project:"
echo "  cd ../tarott-nuxt"
echo "  npm install"
echo "  npm run dev"
