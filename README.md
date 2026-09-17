# DeTLeng AI English

DeTLeng AI English is a focused English-learning website for the 12 traditional tense forms, combining curated lessons with a context-aware AI Teacher.

Live domain: [aienglish.detleng.com](https://aienglish.detleng.com)

## Current implementation

- Modern responsive site shell and navigation
- Reusable data-driven 12-tense lesson directory
- Complete Present Simple reference lesson using the locked learning sequence
- Accessible answer-reveal interactions for five practice types
- Context-aware AI Teacher drawer connected through a configurable backend URL
- Secure Express backend for the OpenAI Responses API
- Email, WhatsApp and DeTLeng Network footer actions
- Existing `CNAME` preserved

The other 11 lessons are intentionally marked **Coming Soon**. They will be added one by one after the Present Simple reference lesson is approved.

## Architecture

```text
assets/
  css/styles.css          Shared design system and responsive layouts
  js/app.js               Navigation, practice and AI drawer interactions
  js/components.js        Shared header, footer and AI Teacher shell
  js/config.js            Public backend URL only; never contains secrets
  js/lesson-data.js       Twelve-lesson catalogue and availability state
  js/lessons.js           Data-driven lesson card renderer
lessons/
  present-simple/         Reference lesson route
server/
  knowledge/              Server-only AI Teacher tense reference
  src/                    Express API, validation and OpenAI integration
  test/                   Backend integration tests with a mock reply provider
index.html                Home and lesson directory
CNAME                     GitHub Pages custom domain
_config.yml               Prevents backend files from being published by GitHub Pages
```

This milestone deliberately uses plain HTML, CSS and JavaScript. It has no build step and remains compatible with the existing static deployment.

## Local preview

Run any static file server from the repository root, for example:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## AI backend

The browser never contains or requests an OpenAI API key. It calls the Render backend, which reads the secret from its server-side environment:

```text
Learner browser → DeTLeng backend API → OpenAI API
```

The backend exposes:

- `GET /health` for Render health checks
- `POST /api/chat` for validated, context-aware AI Teacher requests

The API receives `lesson`, `section`, `action` and `message`, then combines them with the server-side tense reference. Responses are generated with the OpenAI Responses API. The server limits JSON request size, validates fields, restricts browser CORS, rate-limits API traffic and returns learner-safe errors.

### Run the backend locally

```bash
cd server
npm install
```

Set environment variables in your shell (or use a local `.env` with your preferred runner), then start:

```bash
npm start
```

Run tests without an OpenAI key:

```bash
npm test
```

The tests use a mock reply provider and verify health, validation, lesson context and CORS behavior.

### Render Web Service settings

- Repository: `Navid-Ishaq/aienglish-detleng`
- Branch: `main`
- Root directory: `server`
- Runtime: Node
- Build command: `npm install`
- Start command: `npm start`
- Health check path: `/health`

Required environment variables:

```text
OPENAI_API_KEY=<set securely in Render>
FRONTEND_ORIGIN=https://aienglish.detleng.com
```

Optional environment variable:

```text
OPENAI_MODEL=gpt-5-mini
```

After Render creates the service, set its public HTTPS URL in `assets/js/config.js` as `aiApiBaseUrl`. This file contains only a public service address, never a secret.

## Security

- `.env` and `.env.*` files are ignored; `.env.example` is allowed.
- The real `OPENAI_API_KEY` is read only by the backend environment.
- `_config.yml` excludes the entire `server/` directory from the GitHub Pages build, so the knowledge file and backend source are not exposed by the frontend domain.
- External links use safe new-tab attributes where appropriate.
- User text is inserted into the demo chat using `textContent`, not HTML.
- No authentication, database, progress tracking, uploads or browser storage are included.
