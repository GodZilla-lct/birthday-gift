# A Little World Made for You

A soft, mobile-first birthday surprise website built with plain HTML, CSS, and JavaScript. No build step, backend, or personal photos.

## What’s inside

| File | Purpose |
|------|---------|
| `index.html` | Page structure — five scrolling sections |
| `style.css` | Pastel styling, illustrations, responsive layout |
| `script.js` | Interactions + all customizable text in `CONTENT` |
| `README.md` | This guide |

## Customize the text

Open `script.js` and edit the `CONTENT` object at the top. Every visitor-facing string lives there: titles, wishes, mystery gift reveals, and the final letter.

## Run locally

### Option A — open the file

1. Double-click `index.html`, or
2. Right-click → Open with your browser

> Some browsers limit certain features when pages are opened as `file://`. If anything feels odd, use Option B.

### Option B — tiny local server (recommended)

With Python 3:

```bash
cd C:\Users\chahm\birthday
python -m http.server 8080
```

Then visit [http://localhost:8080](http://localhost:8080).

With Node.js (if you have `npx`):

```bash
npx --yes serve .
```

## Deploy with GitHub Pages

1. Create a GitHub repository and push this project:

```bash
git init
git add index.html style.css script.js README.md
git commit -m "Add birthday surprise website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

2. On GitHub: **Settings → Pages**
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**
4. Choose branch `main` and folder `/ (root)`, then save
5. After a minute or two, your site will be at:

`https://YOUR_USERNAME.github.io/YOUR_REPO/`

## Deploy with Netlify

### Drag and drop

1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drop the project folder (the one that contains `index.html`)
3. Netlify gives you a live URL instantly

### CLI

```bash
npm install -g netlify-cli
cd C:\Users\chahm\birthday
netlify deploy --prod --dir .
```

### Git-connected site

1. Push the repo to GitHub (same as above)
2. In Netlify: **Add new site → Import an existing project**
3. Leave build command empty; set publish directory to `.` (or leave default for a static root site)
4. Deploy

## Sections & interactions

1. **Invitation** — brand title, animated gift, “Open your surprise”
2. **Birthday reveal** — cake, balloons, confetti; tap the candle to extinguish it
3. **Birthday wishes** — four flip cards with flower, star, cloud, and gift art
4. **Mystery gifts** — three boxes; open all of them
5. **Final letter** — sealed envelope opens, then the message types in

Motion respects `prefers-reduced-motion`: animations are minimized and the letter appears at once.

## Notes

- Fonts load from Google Fonts (Caveat + Nunito). Everything else is self-contained.
- No music autoplay, analytics, login, or external APIs.
- No sender name or personal identifying details in the default copy.
