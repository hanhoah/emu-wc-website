# EMU-WC Website

Next.js website for EMU-WC, a premium provider of smart toilet covers and smart toilets.

## Technologies

- Next.js 14
- TypeScript
- Tailwind CSS
- Vercel (Hosting & Database)

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

## Project Structure

```
emu-wc/
├── .github/            # GitHub Actions workflows
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js App Router pages
│   ├── components/     # React components
│   ├── config/         # Configuration files
│   ├── lib/            # Utility functions
│   ├── styles/         # Global styles
│   └── types/          # TypeScript type definitions
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vercel.json
```

## Internationalization

The website supports the following languages:
- English (default)
- German
- Russian

## Deployment

The website is automatically deployed to Vercel through GitHub Actions.
