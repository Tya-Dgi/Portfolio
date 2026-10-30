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
| T12 | Play Rock Paper Scissors on Projects using each move, then reset. | Correct outcomes and scores; reset clears all totals. | Logic Pass: all nine player/computer combinations and reset checked in a JavaScript VM with simulated DOM controls October 29, 2026. Browser test not run. Game replaces proposed theme toggle. |
| T13 | Inspect GitHub Settings > Pages. | Public repo, main branch, root folder, HTTPS URL. | Pass: browser settings confirmed main and / (root), public repository, on October 29, 2026. |
| T14 | After push, open live Home and load CSS/JS. | Current Home renders with its stylesheet and navigation script. | Initial failure October 29, 2026: previous deployment still served; CSS/JS returned 404. Retest: current Home, CSS, and JS return HTTP 200 after deployment #3 succeeded. Visual/interactivity checks not yet run. |
| T15 | Parse scripts/auto-push.ps1, parse tasks.json, run git diff --check. | No syntax or whitespace errors. | Pass on October 29, 2026 before removal; watcher and task subsequently removed at student's request. |
| T16 | Review AGENTS.md automatic push rule. | Codex is instructed to test, commit, and push without repeated approval. | Pass: rule reviewed October 29, 2026; no background watcher retained. |
| T17 | Review site in VS Code Live Preview at phone width and with keyboard. | Layout and controls function. | Not run. |

Retain any original failures and append retest results when these tests run.

## Game test cases

| ID | Test and steps | Expected result | Actual result |
| --- | --- | --- | --- |
| G01 | Simulate every combination of the three player moves and three computer moves. | Three wins, three losses, three ties; correct score increment each time. | Pass in JavaScript VM with simulated DOM, October 29, 2026. |
| G02 | After each simulated round, activate Reset scores. | All totals zero; reset announcement displayed. | Pass in JavaScript VM, October 29, 2026. |
| G03 | On live Projects, use Tab and Enter on each move and reset. | Visible focus; buttons play and reset without moving focus. | Not run. |
| G04 | Open live Projects at phone/laptop sizes; play multiple rounds. | No overflow; controls/results stay readable and scores accumulate. | Not run. |
| G05 | Disable JavaScript and reload Projects. | Explanation appears; inactive game controls stay hidden; navigation remains usable. | Not run. |
| G06 | Reload or leave and return to Projects. | Scores start at zero. | Not run. |
| G07 | Load deployed projects.html and js/game.js. | Both return HTTP 200 with current content. | Pass October 29, 2026: deployment of 78aa195 succeeded; Projects returned HTTP 200 (3891 bytes) and game.js HTTP 200 (1527 bytes). |

VS Code Live Preview, browser keyboard/phone checks, console inspection, and
Lighthouse have not been performed for this change. Writing project images
remain outstanding; no substitute screenshots or original work were fabricated.

## Deployment investigation — October 29, 2026

Run #2 built successfully, but its deploy job was canceled because a higher
priority request for main existed. Its report-build-status job kept run #3
waiting. Requested cancellation of obsolete run #2; it completed as canceled.
Run #3 (ea69ae0) then completed build, deploy, and report-build-status successfully.
Verified the live Home and both linked CSS/JS files return HTTP 200. No website
code change was needed. This does not claim the remaining browser tests passed.
