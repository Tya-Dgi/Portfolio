# Portfolio test record

Run browser tests against https://tya-dgi.github.io/Portfolio/ unless local is specified.
Not run means no result is claimed. Missing pages remain assignment work.

## About, Skills, Contact addition — October 29, 2026

| ID | Test and steps | Expected result | Actual result |
| --- | --- | --- | --- |
| P01 | Inspect navigation markup on all five pages; check each local destination and asset exists. | All 25 navigation destinations present; no missing referenced files. | Pass by filesystem/markup check. Browser clicks not run. |
| P02 | Count h1 elements in all five pages. | Exactly one per page. | Pass by markup check. |
| P03 | Check Contact mail link against approved email. | mailto:nk788@njit.edu, no claim of message delivery. | Pass by code review. External email app launch not tested. |
| P04 | Test each new page at 390 × 844 and 1366 × 768, using Tab and Enter. | Responsive layout, visible focus, working menu and links, no overflow. | Not run. |
| P05 | Run Lighthouse Accessibility and inspect console on each new live page. | Accessibility at least 90; no console errors. | Not run; no scores claimed. |
| P06 | Fetch all five live pages after deployment. | HTTP 200; new pages and all navigation links present. | Not run. |

Live Preview and phone/keyboard browser checks for these pages remain outstanding.
Earlier notes about missing About, Skills, and Contact pages describe prior state;
these three pages now exist. Site-wide browser tests still need to be executed.

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

### Arcade visual update — October 29, 2026

| ID | Test and steps | Expected result | Actual result |
| --- | --- | --- | --- |
| A01 | Simulate all nine matchups in updated game.js; inspect outcome and image URLs; reset each. | Correct outcome, player/computer illustrations, and cleared state. | Pass: 9/9 in JavaScript VM with simulated DOM. |
| A02 | Parse four game SVGs; inspect sizes; run git diff --check. | Valid XML, images below 500 KB, no whitespace errors. | Pass: all SVGs below 1 KB. |
| A03 | Open local projects.html in Chrome; Tab to Rock and press Enter; inspect screenshot. | Styled artwork loads, result and arena update, visible keyboard focus. | Pass: Rock versus Scissors displayed a win, updated art, and visible focus. Local file browser check, not VS Code Live Preview. |
| A04 | Review phone-sized game and reduced-motion behavior on live site. | No overflow; readable controls; hover movement disabled for reduced motion. | Not run. |
| A05 | Fetch deployed Projects, updated game.js, CSS, and four SVGs. | Current markup/assets served with HTTP 200. | Not run. |

VS Code Live Preview, phone viewport, live keyboard checks, console inspection,
and Lighthouse for this visual update remain outstanding.

## Research card checks — October 29, 2026

| ID | Test and steps | Expected result | Actual result |
| --- | --- | --- | --- |
| R01 | Parse both SVG assets as XML; check sizes and details/summary counts. | Valid SVGs under 500 KB each; two native disclosure controls. | Pass: XML parsed, both under 2 KB; two details and summary elements; git diff --check passed. |
| R02 | On live Projects click each research card twice. | Overview opens and closes; label changes; cards work independently. | Not run. |
| R03 | Tab to each card; use Enter and Space; disable JS and repeat. | Visible focus and native keyboard operation with or without JS. | Not run. |
| R04 | Inspect open/closed cards at phone and laptop widths in Live Preview and live site. | Graphics scale; text stays readable; no horizontal overflow. | Not run. |
| R05 | Fetch deployed Projects and both SVG images. | HTTP 200 and current expandable-card markup. | Not run. |

Browser checks, console inspection, and Lighthouse remain unperformed for this
change. Expanded text describes supplied project facts, not invented findings.

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
