
# TODO LIST
- [x] About Me --> image, description, more detail
- [x] Experience --> Information Security Specialist role + refreshed résumé PDF
- [ ] Projects --> convert to cards with images and a description
- [ ] Blog --> no blogs right now, check back later!

---

## Development

### Testing

Tests run on [Vitest](https://vitest.dev) with jsdom and React Testing Library:

```sh
bun run test        # single run
bun run test:watch  # watch mode
```

Use `bun run test` rather than `bun test` — the latter would invoke Bun's own
test runner instead of Vitest.

Page content lives in `src/data/`, and `src/data/content.test.js` asserts the
invariants that matter for a portfolio: the résumé asset exists at the path the
site links to, exactly one role is marked current, every project points at a
repository, and every music file referenced by the player is present.

### Continuous integration

`.github/workflows/ci.yml` runs lint, tests and a production build on every pull
request and on every push to `main`.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
