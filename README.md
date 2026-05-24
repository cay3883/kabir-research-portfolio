# Muhammad Kabir Aliyu - Research Portfolio

Live portfolio URL: https://aliyu-portfolio.netlify.app/

This is a Vite + React + Tailwind portfolio for Muhammad Kabir Aliyu. It includes:

- Featured UX research case studies
- Full project archive
- Research process section
- Research ethics section
- Experience and skills section
- Contact section

## View locally

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal, usually:

```bash
http://localhost:5173
```

## Edit content

Most portfolio text is inside:

```bash
src/App.jsx
```

Use `Ctrl + F` in VS Code to search for the text you want to change.

To replace the profile image, replace:

```bash
public/muhammad-kabir.png
```

To change the browser tab title, edit:

```bash
index.html
```

## Push updates to GitHub

```bash
git add .
git commit -m "Update portfolio projects"
git push
```

## Netlify settings

Use these settings on Netlify:

```bash
Build command: npm run build
Publish directory: dist
```

Recommended environment variable:

```bash
NODE_VERSION=20
```

If deployment fails after a major update, use:

```text
Deploys > Trigger deploy > Clear cache and deploy site
```
