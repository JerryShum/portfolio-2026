# Jerry Shum — Portfolio

My personal portfolio site. The home page is an interactive 3D scene: click
objects in it to open the About, Projects, Experience and Blog pages.

Built with React, React Three Fiber (Three.js), GSAP, Tailwind CSS and Vite.

## Running it locally

Requires [Bun](https://bun.sh).

```sh
bun install
bun run dev       # local dev server with hot reload
bun run build     # production build into dist/
bun run preview   # serve the production build
bun run lint
```

## Updating content

Page content lives in `src/data/`:

| File             | What it controls                                        |
| ---------------- | ------------------------------------------------------- |
| `about.js`       | Tagline, bio, links, skills, achievements, fun facts    |
| `experiences.js` | Work history (the entry with `active: true` is current) |
| `projects.js`    | Project cards and their status badges                   |
| `music.js`       | Music player tracks                                     |
| `site.js`        | Résumé file path                                        |

The résumé PDF is `public/jerry_shum_resume.pdf`. Replace that file to update
it; the filename is set in `src/data/site.js`.

## Testing

Tests run on [Vitest](https://vitest.dev) with jsdom and React Testing Library:

```sh
bun run test        # single run
bun run test:watch  # watch mode
```

Use `bun run test` rather than `bun test`: the latter runs Bun's own test
runner instead of Vitest.

`src/data/content.test.js` checks the things that matter for a portfolio: the
résumé file exists at the path the site links to, exactly one role is marked
current, every project points at a repository, and every music file the player
references is present.

## Continuous integration

`.github/workflows/ci.yml` runs lint, tests and a production build on every pull
request and on every push to `main`.

## To do

- [x] About Me --> image, description, more detail
- [x] Experience --> Information Security Specialist role + refreshed résumé PDF
- [ ] Projects --> convert to cards with images and a description
- [ ] Blog --> no blogs right now, check back later!
