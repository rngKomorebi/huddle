# Huddle 🤝

A lightweight availability poll app — like Doodle or Timeful, but yours to own and host.

**[Live demo →](https://rngKomorebi.github.io/huddle)**

## Features

- **Multiple polls** — home dashboard to create, open, and delete polls
- **Timeful-style grid** — rows are hours, columns are dates; drag to paint your availability
- **Three states** — available (green), maybe (yellow), unavailable (red)
- **Overlap view** — heatmap background shows where everyone overlaps; colored dots per respondent
- **Best slots** — footer row highlights green/yellow consensus slots per day
- **One shared poll** — a short link (`…/huddle/?p=k3x9q2mf`) points to a single poll that every voter updates; responses appear live for everyone
- **No duplicates** — each browser is a voter; reopening the link edits your existing answer
- **Time zones** — slots are stored in the organizer's time zone and shown to each voter in their own (with a switch to the organizer's)
- **Flexible slots** — any time range, in 1-hour, 30-minute or 15-minute slots
- **Final time** — the organizer picks the meeting time; everyone gets **Add to calendar** (.ics) and Google Calendar buttons
- **Voting deadline** — optional; the organizer can also close voting early or reopen it
- **Edit on another device** — a private edit link lets you change your answer from your phone
- **Easy sharing** — native share sheet on phones, QR code for showing on a screen
- **Owner controls** — the poll creator can rename the poll, remove respondents, and delete it
- **Static hosting** — a single `index.html` plus a prebuilt `styles.css`; polls are stored in a free Firebase Realtime Database

## Usage

1. Click **+ New Poll**, give it a name
2. Pick dates on the calendar, a time range and slot length (and optionally a voting deadline), then click **Create Poll**
3. Enter your name, click **Join poll**, and drag across cells to mark your availability
4. Click **Share link** (or **QR**) and send it to others — they vote into the same poll
5. The **Best slots** row appears once 2+ people have responded
6. As the organizer, click **Pick final time** (or a best-slot chip) to set the meeting

## Setup (one time, ~5 minutes)

Huddle needs a shared database so everyone's votes land in the same poll. It uses Firebase's free Spark plan.

1. Go to [console.firebase.google.com](https://console.firebase.google.com) → **Add project** (Google Analytics not needed).
2. **Build → Realtime Database → Create database** → pick a location → start in **locked mode**.
   Open the **Rules** tab, replace the contents with [`database.rules.json`](database.rules.json), and click **Publish**.
   Re-publish whenever `database.rules.json` changes.
3. **Build → Authentication → Get started → Sign-in method → Anonymous → Enable.**
   Under **Authentication → Settings → Authorized domains**, add the domain you host on (e.g. `rngkomorebi.github.io`).
4. **Project settings (gear) → Your apps → Web (`</>`)** → register an app (no hosting needed) and copy `apiKey`, `authDomain`, `databaseURL`, `projectId` and `appId` from `firebaseConfig` into `FIREBASE_CONFIG` near the top of the script in `index.html`. The other fields (Analytics etc.) aren't used.

The Firebase web config is not a secret — it's safe to commit. Access is controlled by the rules: anyone with a poll link can read it and add *their own* response (until the deadline or final time); only the creator can rename or delete the poll, set the deadline or final time, or remove other respondents. Edit links are checked against a token only their owner can read. Polls can't be listed, so a poll is only reachable through its link.

Polls created with earlier versions (stored only in your browser) are uploaded automatically the first time you open the new version, and old `#share/…` links still open.

## Styles

Tailwind is prebuilt into `styles.css` (no CDN compiler at runtime). After changing Tailwind classes in `index.html`:

```
npm install
npm run build:css      # or: npm run watch:css
```

Commit the regenerated `styles.css`.

## Deploying

### GitHub Pages
Push to a repo, then enable **Settings → Pages → Source: main branch**. Done.

### Netlify Drop
Drag the folder containing `index.html` and `styles.css` onto [netlify.com/drop](https://app.netlify.com/drop).

## License

MIT — see [LICENSE](LICENSE).
