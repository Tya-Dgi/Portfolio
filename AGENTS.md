# Portfolio project instructions

## Purpose and required pages

Build a public personal portfolio for the website development assignment using
plain HTML, CSS, and JavaScript. Work on one small task at a time and keep the
code understandable enough for the student to explain during a demo.

Create five separate pages, with links to all five in the navigation on every page:

- `index.html`: Home, with a brief personal introduction.
- `about.html`: About Me, with background, education, and interests.
- `projects.html`: At least three real projects (class projects count), each with
  a description, image or screenshot, and a link when applicable.
- `skills.html`: Technical skills and proficiencies.
- `contact.html`: Public contact information, such as an approved email address,
  or a contact form with JavaScript validation that directs visitors to email.
  A static form cannot send messages; never imply that it has sent a message.

Use accurate information supplied by the student. Ask for missing personal or
project details rather than inventing them. Do not leave placeholder text or
empty sections in the finished site. Do not publish a phone number or home
address. Never add API keys, passwords, tokens, or private environment files.

## Design direction

Use a light, pastel-purple palette with a fresh springtime feel:

- Style: airy, welcoming, and polished, with generous spacing, soft rounded
  corners, subtle shadows, clear headings, and consistent project cards. Use
  restrained floral or botanical details to suggest spring without clutter.
- Colors: pale lavender background `#FAF7FF`, white surfaces `#FFFFFF`, lilac
  panels `#EDE3FA`, and pastel purple decorative accents `#D8BFF0`. Use blush
  pink `#FBE4EC` and pale sage `#E5F0E4` sparingly as supporting accents.
- Text and controls: deep plum text `#30233D`, muted plum secondary text
  `#62536F`, and rich purple `#7040A0` for links, focus indicators, and primary
  buttons with white text. Reserve pale colors for backgrounds and decoration;
  verify text and control contrast against their actual backgrounds.
- Fonts: a local system sans-serif stack such as `system-ui, -apple-system,
  BlinkMacSystemFont, "Segoe UI", sans-serif`; no font download is required.
- Use the same colors, typography, navigation, and footer across all five pages.
- Design for phones and laptops with no horizontal scrolling. Use CSS media
  queries, flexible layouts, and responsive images.
- Check contrast for actual color combinations, including hover and focus states.
  Keep focus visible and respect reduced-motion preferences.

Update this file when the student changes the design.

Research writing cards use original pastel SVG concept illustrations and native
details/summary controls to reveal project overviews. Illustrations are symbolic,
not screenshots of student work. Keep descriptions grounded in supplied facts.

The game uses a pastel arcade design with original SVG rock, paper, and scissors
art, a dark plum scoreboard, a move arena, and outcome colors. Preserve visible
focus, text result announcements, mobile layouts, and reduced-motion support.

## Technical rules

- Use plain HTML5, CSS, and JavaScript only. No React, Vue, Tailwind, Bootstrap,
  other frameworks, npm, package managers, or build tools.
- No backend, server code, databases, authentication, or API credentials.
- The site must work by double-clicking `index.html`, without a server or build.
  Avoid features that require a server, such as fetching local HTML fragments.
- Use relative paths for internal links, scripts, styles, and images so the site
  works locally and under the GitHub Pages `/portfolio/` project path. External
  project and contact links may use their appropriate URLs.
- Use one shared external stylesheet, such as `css/styles.css`. No inline styles.
  Keep JavaScript in external files, such as `js/script.js`.
- Use semantic elements such as `header`, `nav`, `main`, `section`, and `footer`.
  Include exactly one `h1` per page and keep heading levels in logical order.
- Give every image an appropriate `alt` attribute. Keep each image under 500 KB.
- Make links, buttons, and form controls keyboard accessible with Tab and Enter.
  Use native controls, meaningful link text, and labels for form fields.
- Implement at least two JavaScript interactions. A responsive navigation menu
  that opens and closes is mandatory; the second feature is a playable Rock
  Paper Scissors game on projects.html, with random computer moves, scores,
  result announcements, and a reset button (replaces the proposed theme toggle).
- Keep menu state accessible, including an accurate `aria-expanded` value.
  Ensure any theme meets contrast requirements. Resolve browser console errors.

## Working and Git workflow

- Read the relevant files and follow this guidance before each task. Preserve
  unrelated changes and avoid unnecessary dependencies or broad refactors.
- Work in small, reviewable tasks. Explain changes so the student can review
  every change and understand all code, especially the JavaScript.
- After each change, test in VS Code Live Preview, at a phone-sized viewport,
  and with the keyboard. Report checks that cannot be performed; do not claim
  unperformed checks passed.
- After each completed task and review, make a small commit with a clear message.
  The student authorized automatic pushes on October 29, 2026; push completed
  changes without requesting approval again. After making changes in this
  project, test the affected work, commit it with a clear message, and push to
  origin/main automatically. Report any failed checks or blocked pushes honestly.
- Keep a genuine history of steady work over multiple days. Do not fabricate
  dates or split artificial commits to imitate that history.
- Undo changes with a revert commit; never use reset or force push.
- The target is a public GitHub repository named `portfolio`, with GitHub Pages
  publishing from branch `main`, folder `/` (root). Verify actual repository
  settings and the live URL rather than assuming deployment succeeded.

## Test plan and verification

Create and maintain `TESTING.md` with at least 12 test cases; add as many as
necessary to cover all required combinations. Each case must include a test ID,
what is tested, steps, expected result, and actual Pass or Fail result after
execution. Mark tests not yet run honestly instead of assigning a result.

The plan must cover:

- Every navigation link on every page.
- Every page at both phone and laptop sizes, including horizontal overflow.
- Every JavaScript feature, including menu opening and closing. If a contact form
  is included, test both valid and invalid input.
- Tab and Enter keyboard navigation on every page.
- Chrome DevTools Lighthouse Accessibility on every page, targeting a score of
  at least 90; record the actual scores.
- Working links and images on the deployed GitHub Pages site, and a separate
  local check that opening `index.html` directly works.
- Browser console errors on all pages.

Run the required tests against the live GitHub Pages site, not only Live Preview.
Record failures, fix them, rerun the affected tests, and retain both the original
failure and the retest result. Never invent test results or Lighthouse scores.

## Documentation and completion

Keep `README.md` current with the project description, live site link, local
viewing instructions, and any notes or acknowledgments.

Support the assignment's three-week checkpoints: first establish all five linked
pages with real content and deployment; then complete styling, interactions, and
the initial test plan; finally finish accessibility fixes, live testing, README,
and report. The student supplies the actual due date.

The final submission also requires a 1-2 page report with repository and live
website links at the top, a feature overview, challenges and solutions, one real
example of a Codex mistake and its correction, and phone and laptop screenshots.
Do not fabricate the mistake or screenshots; capture a real example as work
progresses. Prepare for a three-minute demo showing the live site on phone and
laptop, keyboard navigation, and an explanation of any selected JavaScript code.

Before reporting completion, review changes against these requirements and state
what changed, what was verified, and anything still outstanding. The student
must review and edit this `AGENTS.md` as required by the assignment.
