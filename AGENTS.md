# AGENTS.md

## Repository map

- `backend/` and `frontend/` are independent packages; there is no root build or test runner. Run package commands from their respective directories.
- The backend entrypoint is `backend/main.py`, exposing FastAPI as `main:app`. The frontend starts at `frontend/src/main.tsx`; routes live in `frontend/src/App.tsx`.
- In the frontend, `@/` resolves to `src/` in both TypeScript and Vite. shadcn/ui is configured by `components.json`; add components with `npx shadcn@latest add <component>`.

## Backend

Requires Python 3.10+ and `uv`; CI uses Python 3.12. Run from `backend/`:

```bash
uv sync --frozen
uv run fastapi dev
uv run ruff check .
uv run mypy .
uv run python -m unittest discover -s tests -v
uv build
```

- Tests use stdlib `unittest`, not pytest. Run one test file with `uv run python -m unittest tests/test_smoke.py -v` (substitute the desired file).

## Frontend

Use Node 22 to match CI (local requirements are Node 20.19+ or 22.12+). Run from `frontend/`:

```bash
npm ci
npm run dev
npm run lint
npm run format:check
npm test
npm run build
```

- Tests use Node's built-in `node:test` runner, not Vitest. Run one test file with `npm test -- tests/smoke.test.js` (substitute the desired file).
- `npm run build` performs both typechecking (`tsc -b`) and the Vite production build; there is no separate typecheck script.

## Commits

- All commit messages must follow Conventional Commits: `<type>[optional scope]: <description>` (for example, `feat: add booking form` or `fix: handle empty slots`).

## Automation

- Never edit, delete, or rename `.github/workflows/hexlet-check.yml`; it is generated externally and runs Hexlet's checks.
- Release Please runs on pushes to `main` and manages `backend` and `frontend` as separate packages through `release-please-config.json` and `.release-please-manifest.json`.
