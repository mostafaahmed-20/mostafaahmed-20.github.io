# Mustafa Ahmed — Portfolio

Single-page portfolio for a Data Engineer & BI Developer. Plain HTML, CSS and vanilla JavaScript; no build step.

## Structure
`index.html` (all content) · `css/style.css` (design tokens, layout) · `css/responsive.css` (breakpoints) · `js/main.js` (nav, reveals) · `js/animations.js` (particles, cursor, parallax) · `assets/` (images, CV) · `.github/workflows/deploy.yml`

## Run locally
```
python3 -m http.server 8000
```
Open http://localhost:8000

## Customize
- Brand colors live in `:root` at the top of `css/style.css`.
- Search `index.html` for `YOUR_`, `[ADD` and `example.com`: these are the placeholders for email, GitHub, project links and journey entries.
- Add your CV as `assets/Mustafa-Ahmed-CV.pdf` (the Download CV button points there).
- Screenshots: put images in `assets/images/`, then replace each `<div class="ph" ...>` with `<img src="assets/images/NAME.png" alt="Describe the screenshot" loading="lazy">`.
- Social links: edit the footer and Contact section.

## Deploy (GitHub Pages)
```
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```
Then on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**. Each push to `main` redeploys. The site appears at `https://YOUR_USERNAME.github.io/mustafa-ahmed-portfolio/`.
