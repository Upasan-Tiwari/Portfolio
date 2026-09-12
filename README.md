# upasantiwari.com.np — source

Plain HTML/CSS/JS. No build step, no framework, no dependencies to install.
Push this straight to your existing GitHub repo and it's live.

## Structure

```
index.html          Home — hero, skills preview, 2 featured projects
about.html           Education, experience, full skills list
projects.html        All projects (currently 3 placeholders)
contact.html         Contact details + a front-end-only form
css/style.css        All styles, one file, CSS custom properties at the top
js/main.js           Mobile nav toggle only — no other JS
assets/img/          SVG thumbnails + favicon (vector, no image hosting needed)
```

## What's real vs. placeholder

**Real:** name, education (Nobel College / Pokhara University, BCSIT), the
tutoring role, the course list, the skills list. Edit these directly if
anything changes.

**Placeholder — replace before this goes live for real hiring use:**
- All 3 projects in `projects.html` and the 2 featured on `index.html`
  (TaskFlow, MarketPulse, ShelfSpace). Each has an HTML comment
  `<!-- TODO: replace with real project description -->` marking exactly
  what to swap: thumbnail (`assets/img/project-0X.svg`), title, description,
  tags, and the two `#` links (demo + source).
- GitHub/LinkedIn URLs in the sidebar and contact page currently point to
  placeholder `#`/root URLs — put your real profile URLs in.
- Email address `hello@upasantiwari.com.np` — replace if you'd rather use
  something else.
- `assets/resume.pdf` is linked from the homepage but the file doesn't
  exist yet — drop your résumé PDF at that exact path and the link on
  the homepage will work as-is.
- The contact form (`contact.html`) submits nowhere. Point its `action`
  attribute at a form service (Formspree, Netlify Forms, etc.) or remove
  the form and keep just the direct contact cards.

## Design notes

- Palette, type (IBM Plex Serif/Sans/Mono), and layout tokens all live at
  the top of `css/style.css` — change once, applies everywhere.
- No JS framework and no external images beyond Google Fonts — keeps
  load fast and avoids the "flashy but laggy" trap.
- One entrance animation on the homepage hero; everything else is static.
  Respects `prefers-reduced-motion`.
