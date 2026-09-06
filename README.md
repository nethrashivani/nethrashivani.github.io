# Nethra Shivani — Portfolio

A static personal portfolio site. Plain HTML/CSS/JS, no build step, ready for GitHub Pages.

## Files
- `index.html` — all content lives here
- `style.css` — design tokens (colors, type, layout) at the top of the file
- `script.js` — copy-email button + LeetCode link
- `resume.pdf` — linked from the hero section, swap this file to update your resume

## Deploy on GitHub Pages
1. Create a new repo on GitHub, e.g. `nethrashivani.github.io` (using this exact name makes your site live at `https://nethrashivani.github.io`) — or any repo name if you're fine with a `/reponame` path.
2. Push these files to the repo root:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/nethrashivani/nethrashivani.github.io.git
   git push -u origin main
   ```
3. On GitHub: repo **Settings → Pages → Source → Deploy from branch → main → / (root)** → Save.
4. Your site goes live in a minute or two at the URL GitHub shows you.
