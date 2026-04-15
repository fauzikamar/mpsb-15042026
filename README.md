# Corporate Website

A modern, full-stack corporate website built with React, TypeScript, Vite, and Express.

## 🚀 Features

- **Modern UI** - Built with React 19 and Tailwind CSS
- **Component Library** - Comprehensive Radix UI component suite
- **Type-Safe** - Full TypeScript support
- **Responsive Design** - Mobile-first approach with custom hooks
- **OAuth Integration** - Secure authentication flow
- **Server-Side Rendering** - Express backend with static asset serving
- **Dark Mode** - Theme switching with Next Themes
- **Error Handling** - React Error Boundary for graceful fallbacks

## 📋 Prerequisites

- Node.js 18+ (check [.nvmrc](.nvmrc) for specific version)
- pnpm 10.4.1+

## 🔧 Environment Variables

Copy `.env.example` to `.env` and fill in the required values:

```bash
cp .env.example .env
```

Required environment variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_OAUTH_PORTAL_URL` | OAuth portal base URL | `https://oauth.example.com` |
| `VITE_APP_ID` | OAuth application ID | `app_xyz123` |
| `VITE_FRONTEND_FORGE_API_KEY` | Google Maps API key | `AIza...` |
| `VITE_FRONTEND_FORGE_API_URL` | Forge/Maps API endpoint | `https://api.example.com` |
| `PORT` | Server port (production) | `3000` |
| `NODE_ENV` | Environment | `development` or `production` |

## ⚙️ Installation

```bash
# Install dependencies
pnpm install
```

## 🏃 Development

```bash
# Start development server (with hot reload)
pnpm dev
```

The development server runs on `http://localhost:3000` with host access enabled.

## 🏗️ Building

```bash
# Build for production (frontend + API)
pnpm build

# Preview production build
pnpm preview
```

The build process:
1. Builds React client with Vite → `dist/public/`
2. Bundles Express API with esbuild → `dist/index.js`

## 📦 Deployment

### Vercel

This project is configured for Vercel deployment with `vercel.json`:

1. **Push to GitHub** - Ensure commits are up to date
   ```bash
   git push origin main
   ```

2. **Connect to Vercel** - Import project from GitHub at https://vercel.com

3. **Set Environment Variables** - In Vercel dashboard, add:
   - `VITE_OAUTH_PORTAL_URL`
   - `VITE_APP_ID`
   - `VITE_FRONTEND_FORGE_API_KEY`
   - `VITE_FRONTEND_FORGE_API_URL`
   - `NODE_ENV=production`

4. **Deploy** - Vercel will automatically build and deploy on push

### Local Production Testing

```bash
# Build
pnpm build

# Set NODE_ENV
export NODE_ENV=production  # or: $env:NODE_ENV = 'production' on Windows

# Start server
pnpm start
```

## 🧪 Code Quality

```bash
# Type checking
pnpm check

# Code formatting
pnpm format
```

## 📁 Project Structure

```
├── api/                    # Express server & API routes
│   └── index.ts           # Main server entry point
├── client/                # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Route pages
│   │   ├── hooks/         # Custom React hooks
│   │   ├── contexts/      # React contexts (theming, etc.)
│   │   ├── lib/           # Utilities and helpers
│   │   └── App.tsx        # Main app component
│   └── index.html
├── shared/                # Shared code (constants, types)
├── dist/                  # Production build output
│   ├── index.js          # Bundled Express server
│   └── public/           # Static frontend assets
├── patches/              # pnpm patched dependencies
├── vite.config.ts        # Vite build configuration
├── vercel.json          # Vercel deployment config
└── package.json
```

## 🔐 Security Notes

- **Google Maps API Key**: Restrict to web application origins in Google Cloud Console
- **Environment Variables**: Never commit `.env` files with real values
- **OAuth**: Ensure redirect URIs match your domain in OAuth provider settings
- **Dependencies**: Run `pnpm audit` to check for vulnerabilities

## 🛠️ Development Tools

- **Vite** - Fast build tool & dev server
- **React 19** - Latest React features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Unstyled, accessible components
- **Framer Motion** - Animation library
- **Wouter** - Lightweight routing
- **Sonner** - Toast notifications
- **Axios** - HTTP client

## 📝 Scripts Reference

| Script | Purpose |
|--------|---------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build frontend & backend for production |
| `pnpm preview` | Preview production build locally |
| `pnpm start` | Start production server |
| `pnpm check` | Run TypeScript type checking |
| `pnpm format` | Format code with Prettier |

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is busy, Vite will automatically use the next available port.

### Missing Environment Variables
Ensure all variables from `.env.example` are set. Check browser console for `import.meta.env` errors.

### Build Fails
1. Clear cache: `rm -rf node_modules dist .Next dist/public`
2. Reinstall: `pnpm install`
3. Rebuild: `pnpm build`

### Maps Not Loading
- Verify `VITE_FRONTEND_FORGE_API_KEY` is valid
- Check API key restrictions in Google Cloud Console
- Ensure API key has Maps JavaScript API enabled

## 📄 License

MIT

## 🤝 Support

For issues and questions, please check the documentation or contact the development team.
