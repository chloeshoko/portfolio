# Portfolio

A simple portfolio for print journalism, documentary and design work.

## Editing

- **Add a piece of work:** in `index.html`, copy one `<li>` inside the `<ol class="index">` list. Set `data-kind` to `print`, `documentary` or `design`, then update the link, title, outlet and year.
- **Resume:** upload your resume to this repository as `resume.pdf` (same name, top level). The Resume links point to it.
- **About and contact:** edit the text and links in the About section of `index.html`.
- **Colors and fonts:** the variables at the top of `style.css`.

## Publishing with GitHub Pages

The site deploys automatically with GitHub Actions (`.github/workflows/pages.yml`) every time you push to `main`.

One-time setup: Settings → Pages → under "Build and deployment", set **Source** to **GitHub Actions**. The site appears at `https://chloeshoko.github.io/portfolio/`. Check deploy progress in the repository's **Actions** tab.
