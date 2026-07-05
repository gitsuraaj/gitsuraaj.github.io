# Suraaj Hasija - Portfolio Site

This repository contains a static personal website hosted on GitHub Pages.

## Project structure

- index.html — main HTML page
- styles.css — site styling
- main.js — interactive behavior
- assets/ — images and other static assets
- .github/workflows/deploy-pages.yml — GitHub Actions workflow for automatic deployment to GitHub Pages

## Local preview

Open index.html in a browser, or run a simple local server from the project folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Go to Settings → Pages in your GitHub repository.
3. Select Source: GitHub Actions.
4. The workflow in .github/workflows/deploy-pages.yml will publish the site automatically.

## License

This project is for personal portfolio use.
