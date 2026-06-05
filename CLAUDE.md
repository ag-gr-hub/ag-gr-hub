# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Personal portfolio website for Angel G. Gonzalez Rosado. Pure static site — three files, no build step, no dependencies.

## Development

No build system, package manager, or dev server. To preview locally, open `index.html` in a browser or use any static file server (e.g., `python3 -m http.server`).

No tests or linting configured.

## Architecture

- **`index.html`** — Single-page layout with all content hardcoded. Sections: hero, current role, previous roles, selected projects, skill stack, joke card, footer.
- **`css/styles.css`** — All styling. Design system lives in `:root` CSS variables (dark theme default, light mode via `prefers-color-scheme`). Responsive breakpoint at 720px.
- **`README.md`** — GitHub profile README that mirrors the HTML content.

## Key Patterns

- **Dual maintenance:** Content appears in both `index.html` and `README.md`. When updating content (roles, projects, skills), change both files.
- **`<base target="_blank">`** is set in the HTML head — all links open in new tabs by default.
- **External runtime dependencies:** Google Fonts (Inter, JetBrains Mono), shields.io badges, readme-jokes.vercel.app API for the joke card.
- **CSS variables** control the entire color palette, typography, spacing, and radii — use them instead of hardcoding values.
- **Accessibility:** Dark/light mode detection, `prefers-reduced-motion` support, semantic HTML. Preserve these when making changes.
