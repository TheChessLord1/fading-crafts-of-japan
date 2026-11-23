# Fading Crafts of Japan

A Grade 9 Digital Design website about disappearing Japanese crafts.
Plain HTML, CSS and JavaScript. There is nothing to install or build.

## Where things are

| I want to change... | Open this file |
|---|---|
| The website title | `js/site.js` (first line of code) |
| Colours and fonts | `css/style.css` (colours are under `:root`) |
| The 10 craft rows | `index.html` (look for `THE CRAFT LIST`) |
| One craft page | the matching file in `crafts/` |
| My About Me text | `about-me.html` |
| Sources and image credits | `sources.html` |

`js/search.js` is the homepage search.

## Good to know

- Craft names go in italic: `<i>Urushi lacquerware</i>`
- External links need `target="_blank" rel="noopener noreferrer"`
- The menu and footer are repeated in every page. If you change them, change every page.
- To see a page on your computer, double-click its `.html` file.

## Adding one of the missing photos

Only use photos with a free licence (for example from Wikimedia Commons).

1. Make a big copy (under 200 KB, up to 960px wide) in `images/`
   and a small copy (400px wide) in `images/small/`.
2. In `index.html`, replace the `placeholder` box in that craft's row with an `<img>`,
   copying the way another row does it. Remember the alt text.
3. In the craft's page, replace the `<figure>` with one copied from another craft page.
   Change the picture, caption, author, licence and link.
4. Add the credit to the list in `sources.html`.

## Updating the live site

**If the site is connected to GitHub:** save your edits, then

```
git add .
git commit -m "Describe what changed"
git push
```

Vercel updates the site by itself in about a minute.

**If it was deployed with the Vercel command line:** save and commit, then run
`npx vercel --prod`.

Never put passwords or personal details in these files.
