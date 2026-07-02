# Interactive Resume Website

An innovative, animated personal website built with React + Vite.

## What Is Included

- Cinematic hero section with animated gradient atmosphere
- Interactive career journey timeline (click milestones)
- Capability map with animated skill meters
- Rich icon-based toolbelt
- Mobile-friendly responsive layout
- Content adapted from your resume

## Local Development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

## Deploy To Vercel

### Option 1: Vercel Dashboard (Recommended)

1. Push this folder to a GitHub repository.
2. Open https://vercel.com/new and import the repository.
3. Use these build settings:
	- Framework Preset: Vite
	- Build Command: `npm run build`
	- Output Directory: `dist`
4. Click Deploy.

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

Use the project folder as root when prompted.

## Where To Update Resume Content

- Profile details: `src/App.jsx` (`profile` object)
- Career timeline: `src/App.jsx` (`milestones` array)
- Skill map and tools: `src/App.jsx` (`skillRadar` and `toolbelt` arrays)

## Notes

- Keep your project cards short and impact-focused for best visual balance.
- After you get your Vercel URL, you can share it directly or map a custom domain from Vercel project settings.
