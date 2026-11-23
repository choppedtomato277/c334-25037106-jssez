# JS-SEZ website for Singapore manufacturers

A one-page static website that introduces the Johor–Singapore Special Economic
Zone (JS-SEZ) to Singapore manufacturers. It summarises the SMF JS-SEZ
Playbook: *A Guide to Setting Up and Operating in Johor*, and includes an AI
advisor chat that answers questions from the playbook.

## Pages

- **Home** — `index.html`: hero, the nine zones, the SETUP framework,
  incentives and tax watch-outs, passes for staff, and the advisor section.

## Advisor chat

The chat widget is n8n's `@n8n/chat` (v1.46.5), loaded from jsDelivr.
A round button at the bottom right opens the advisor window. The advisor
answers JS-SEZ questions from the playbook and names the page it drew from.

## Running locally

No build step is needed. Open `index.html` in a browser, or serve the folder:

```
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Publishing

The site is published with GitHub Pages from `main`, root folder. Pushing to
`main` updates the site.

## Project rules

- Plain HTML, CSS and JavaScript only: `index.html`, `styles.css`, `chat.js`.
  No framework, no build step, no npm.
- Works at 360 px wide with no sideways scrolling.
- Visible keyboard focus and good colour contrast.
- Plain English, UK spelling, short sentences.
- All facts come from the SMF JS-SEZ Playbook. No invented rates, dates,
  names or statistics.

---

C334 class exercise. Not affiliated with SMF, Enterprise Singapore or MIDA.
