# Portfolio test record

Run browser tests against https://tya-dgi.github.io/Portfolio/ unless local is specified.
Not run means no result is claimed. Missing pages remain assignment work.

| ID | Test and steps | Expected result | Actual result |
| --- | --- | --- | --- |
| T01 | On each of the five pages, click all five navigation links. | All 25 links reach the correct pages. | Not run; four pages do not exist yet. |
| T02 | Open each page at 390 × 844; inspect and scroll horizontally. | Readable layout, no horizontal overflow. | Not run. |
| T03 | Open each page at 1366 × 768; inspect and scroll horizontally. | Readable layout, no horizontal overflow. | Not run. |
| T04 | At phone width, activate Menu, then Close menu. | Menu opens/closes and aria-expanded matches. | Not run. |
| T05 | Open phone menu; focus a navigation link; press Escape. | Menu closes and focus returns to button. | Not run. |
| T06 | Resize from phone to laptop and back. | Navigation and menu state match the layout. | Not run. |
| T07 | On each page use Tab and Enter through all controls. | Visible focus, logical order, working links and controls. | Not run. |
| T08 | Run Chrome DevTools Lighthouse Accessibility on each page. | Each scores at least 90; record each actual score. | Not run; no scores recorded. |
| T09 | Open every live project/contact link and inspect every image. | Valid destinations, loaded images with suitable alt text. | Not run; project/contact pages absent. |
| T10 | Double-click local index.html; inspect CSS and use menu. | Site works with file:// and no server. | Not run. |
| T11 | Open Console on each page, reload, and exercise controls. | No browser console errors. | Not run. |
| T12 | Toggle theme on each page; reload; check contrast and focus. | Accessible theme state persists as designed. | Not run; theme feature absent. |
| T13 | Inspect GitHub Settings > Pages. | Public repo, main branch, root folder, HTTPS URL. | Pass: browser settings confirmed main and / (root), public repository, on October 29, 2026. |
| T14 | After push, open live Home and load CSS/JS. | Current Home renders with its stylesheet and navigation script. | Not run. |
| T15 | Parse scripts/auto-push.ps1, parse tasks.json, run git diff --check. | No syntax or whitespace errors. | Pass on October 29, 2026 before removal; watcher and task subsequently removed at student's request. |
| T16 | Review AGENTS.md automatic push rule. | Codex is instructed to test, commit, and push without repeated approval. | Pass: rule reviewed October 29, 2026; no background watcher retained. |
| T17 | Review site in VS Code Live Preview at phone width and with keyboard. | Layout and controls function. | Not run. |

Retain any original failures and append retest results when these tests run.
