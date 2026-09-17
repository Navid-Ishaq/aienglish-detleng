# DeTLeng AI English

DeTLeng AI English is a focused English-learning website for the 12 traditional tense forms, combining curated lessons with a context-aware AI Teacher.

Live domain: [aienglish.detleng.com](https://aienglish.detleng.com)

## Current milestone

- Modern responsive site shell and navigation
- Reusable data-driven 12-tense lesson directory
- Complete Present Simple reference lesson using the locked learning sequence
- Accessible answer-reveal interactions for five practice types
- Context-aware AI Teacher drawer and quick-action contract (UI only)
- Email, WhatsApp and DeTLeng Network footer actions
- Existing `CNAME` preserved

The other 11 lessons are intentionally marked **Coming Soon**. They will be added one by one after the Present Simple reference lesson is approved.

## Architecture

```text
assets/
  css/styles.css          Shared design system and responsive layouts
  js/app.js               Navigation, practice and AI drawer interactions
  js/components.js        Shared header, footer and AI Teacher shell
  js/lesson-data.js       Twelve-lesson catalogue and availability state
  js/lessons.js           Data-driven lesson card renderer
lessons/
  present-simple/         Reference lesson route
index.html                Home and lesson directory
CNAME                     GitHub Pages custom domain
```

This milestone deliberately uses plain HTML, CSS and JavaScript. It has no build step and remains compatible with the existing static deployment.

## Local preview

Run any static file server from the repository root, for example:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## AI backend boundary

The browser does not contain or request an OpenAI API key. The chat UI currently shows a friendly placeholder. A later milestone will connect it to a secure server-side endpoint:

```text
Learner browser → DeTLeng backend API → OpenAI API
```

The future backend will read `OPENAI_API_KEY` only from a server-side environment variable and use the private tense knowledge reference on the server. Never place a real key in frontend files, GitHub, documentation, or commits.

## Security

- `.env` and `.env.*` files are ignored; `.env.example` is allowed.
- External links use safe new-tab attributes where appropriate.
- User text is inserted into the demo chat using `textContent`, not HTML.
- No authentication, database, progress tracking, uploads or browser storage are included.
