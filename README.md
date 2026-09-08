# Digital Signage

Replaces Chrome Sign Builder, which Google removed from ChromeOS kiosk mode in
July 2026. Serves the same Google Slides decks on the same 31-day monthly
rotation, driven by a static page instead of a Chrome App.

## How it works

Every kiosk points at the same page, with its own display ID:

```
https://YOURORG.github.io/signage/?id=bldg-a-dining
```

The page reads today's day of month, looks up that display's schedule in
`config.js`, and embeds the matching published deck. It rolls over to the next
day on its own at midnight — the kiosk does not need a reboot for that.

Source decks in Google Drive are never modified. They stay shared with any
other display that uses them.

## Files

| File | Purpose |
|---|---|
| `index.html` | The page every kiosk loads. Rarely needs editing. |
| `config.js` | Schedules and displays. **This is the file you edit.** |

## Common tasks

**Change a day's content** — edit that day's deck in Drive, exactly as before.
Nothing in this repo changes. The screen picks it up on its next reload.

**Point a day at a different deck** — in `config.js`, replace that day's ID in
the schedule's `decks` array. The ID is the `2PACX-...` portion of the deck's
*File > Share > Publish to web* link.

**Add a new display** — add one entry to `DISPLAYS` in `config.js`, then set
that kiosk's URL to `?id=your-new-key`.

**Add a new schedule** — copy an existing block in `SCHEDULES`, give it a new
key, and fill in its deck IDs. Skeletons are in the comments.

## Testing before deploying

Open the URL in a normal browser tab with the display ID on the end. Resize
the window tall and narrow to approximate a portrait screen. If a display ID
is wrong or a schedule is missing, the page says so on a black background
rather than failing silently.

## ChromeOS kiosk setup

In the Google Admin console, per organizational unit:

1. **Devices > Chrome > Apps & extensions > Kiosks** — add the page by URL,
   then set it as the auto-launch app.
2. **Devices > Chrome > Settings > Device > Kiosk settings** — set screen
   rotation (90 Degrees for portrait screens).
3. Same page — set the display to never sleep, and set a scheduled daily
   restart.

Displays with different rotations need separate OUs, since rotation is a
device-level setting rather than a per-app one.

## Notes

- Published Slides links cache. The page force-reloads at 3:05am, and the
  nightly device restart is a second safety net.
- Months shorter than 31 days simply never reach the higher-numbered decks.
  That matches the original Sign Builder behavior.
- If a day has no deck configured, the schedule falls back to day 1.
