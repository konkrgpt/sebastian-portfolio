# Sebastian Rivera: AI Automation & Agent Systems (Portfolio V2)

A responsive, static portfolio site: plain HTML, CSS and a few lines of JavaScript (mobile menu, footer year). No build step, no external dependencies, no trackers, no cookies, no secrets.

## Structure

- `index.html`: overview, case-study cards, approach, about and contact
- `work/multi-agent-research-system.html`: case study 01
- `work/automotive-operations-automation.html`: case study 02
- `work/inventory-listing-assistant.html`: case study 03
- `demo/inventory-prototype.html`: the fictional, self-contained inventory prototype (pre-written output, no AI calls)
- `assets/img/`: diagrams and prototype screenshots
- `styles.css`, `script.js`

All links are relative, so the site works at a GitHub Pages project subpath as well as locally.

## Preview locally

Run `python3 -m http.server 8000` from this folder and open `http://localhost:8000/`.

## Status labels

Every feature is labeled **Implemented**, **Prototype**, **Dry run** or **Proposed**. Automotive work is additionally marked **Self-reported**, and its only diagram is an illustrative reconstruction, not an export of the production system.
