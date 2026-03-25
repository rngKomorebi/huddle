# Huddle 🤝

A lightweight, zero-dependency availability poll app — like Doodle or Timeful, but yours to own and host.

**[Live demo →](https://rngKomorebi.github.io/huddle)**

## Features

- **Multiple polls** — home dashboard to create, open, and delete polls
- **Timeful-style grid** — rows are hours, columns are dates; drag to paint your availability
- **Three states** — available (green), maybe (yellow), unavailable (red)
- **Overlap view** — heatmap background shows where everyone overlaps; colored dots per respondent
- **Best slots** — footer row highlights green/yellow consensus slots per day
- **Share link** — copy a URL that imports the poll on any device
- **No server** — everything lives in `localStorage`; works fully offline

## Usage

Open `index.html` in any modern browser. No build step, no install, no server required.

1. Click **+ New Poll**, give it a name
2. Pick dates on the calendar and select time slots, then click **Add to poll**
3. Enter your name and drag across cells to mark your availability
4. Share the link with others so they can add their availability
5. The **Best slots** row appears once 2+ people have responded

## Deploying

### GitHub Pages
Push to a repo, then enable **Settings → Pages → Source: main branch**. Done.

### Netlify Drop
Drag `index.html` onto [netlify.com/drop](https://app.netlify.com/drop).

## License

MIT — see [LICENSE](LICENSE).
