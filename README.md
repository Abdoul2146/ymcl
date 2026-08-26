# YMCL Website

Corporate website for Yarima Multi Concept Limited. The application presents YMCL's company profile, services, selected projects, office locations, and enquiry channels.

## Technology

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Nodemailer for enquiry delivery

Node.js 20.9 or newer is required.

## Local Development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Environment

Create `.env.local` from `.env.example` and configure:

- `SITE_URL`: canonical public origin, for example `https://www.example.com`. This must be set correctly before deployment.
- `CONTACT_EMAIL_USER`: Gmail account used to deliver website enquiries.
- `CONTACT_EMAIL_PASS`: Gmail App Password. Never use or commit the normal account password.
- `CONTACT_EMAIL_TO`: optional enquiry recipient; defaults to the public YMCL email address.
- `CONTACT_ALLOWED_ORIGINS`: optional comma-separated additional origins allowed to submit the contact form.

When email delivery is unavailable, the form presents explicit email and WhatsApp fallback links. It never claims that a fallback draft was sent.

## Project Structure

- `src/app`: routes, metadata, API handlers, sitemap, robots, and error pages
- `src/core`: shared components, theme provider, design tokens, and site configuration
- `src/features`: home, about, services, projects, and contact features
- `public`: public assets owned by the application

## Quality Checks

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run start
```

CI runs install, lint, type checking, contact-route tests, and a production build for every push and pull request.

## Production Notes

- Confirm `SITE_URL`, SMTP credentials, and `CONTACT_ALLOWED_ORIGINS` in the hosting environment.
- The built-in contact rate limiter is best-effort per server instance. A distributed limiter or managed bot challenge should be added if traffic or abuse increases.
- Current content photographs are fetched from `lh3.googleusercontent.com` and optimized by Next.js. Replace them with approved, licensed assets on YMCL-owned storage before final public launch.
- Verify all project claims, addresses, telephone numbers, registration details, and imagery with YMCL before publication.
- Review the privacy policy with qualified counsel before launch.
- Check `/robots.txt`, `/sitemap.xml`, security response headers, the contact flow, and both visual themes after deployment.
