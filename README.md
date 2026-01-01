# Monolith

Structural Evolution Systems - A serious sanctuary for those who build the future with absolute intent.

## Deployment to Vercel

This is a Next.js application powered by Bun, ready for Vercel deployment.

### Quick Deploy

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial monolith setup"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import this repository
   - Click "Deploy"

   Vercel will automatically detect the Next.js configuration and deploy.

### Manual Deploy with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   bun install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

   Follow the prompts to deploy.

### Local Development

```bash
# Install dependencies
bun install

# Run development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
bun run build
bun run start
```

## Project Structure

- `app/page.tsx` - Main page component (Monolith application)
- `app/layout.tsx` - Root layout with metadata
- `app/globals.css` - Global styles and Tailwind
- `tailwind.config.ts` - Tailwind CSS configuration
- `next.config.mjs` - Next.js configuration

## Features

- Interactive mouse tracking and 3D effects
- Scroll-based module activation
- Real-time clock sync
- Responsive design
- Atmospheric grain and lighting effects
- SVG-based Eternal Mark icon with filters
