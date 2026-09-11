# alforpolio theme (Ghost) — OpenCode agent notes

## Commands (bun only)
- Use bun for all package/script operations: `bun install`, `bun run dev`, `bun run test`, `bun run zip` (ignore README’s pnpm wording and `package.json#packageManager`; this repo is already using `bun.lock`).
- `bun run dev` runs Gulp’s default task: builds CSS/JS/locales, starts livereload, and watches `*.hbs`, `partials/**/*.hbs`, `assets/css/**/*.css`, `assets/js/**/*.js`, and `locales-local/**/*.json`.
- `bun run zip` runs the full build and then creates `dist/alforpolio.zip` (zip filename is `package.json#name + ".zip"`).
- `bun run test` runs `gscan .`; run it after changing theme files to catch structural/packaging issues.

## Build inputs/outputs (don’t edit generated files)
- CSS compilation starts from `assets/css/screen.css` (PostCSS: easy-import + autoprefixer + cssnano) and writes to `assets/built/screen.css` (plus sourcemaps). Edit `assets/css/**`, not `assets/built/**`.
- JS compilation concatenates vendored/shared code from `@tryghost/shared-theme-assets` plus this repo’s `assets/js` (`assets/js/lib/*.js` when present, then `assets/js/main.js`), uglifies, and writes `assets/built/main.min.js` (plus sourcemaps). Edit `assets/js/**`, not `assets/built/main.min.js`.

## Templates/locales quirks
- HBS files aren’t compiled: the gulp HBS watcher just triggers livereload for `*.hbs` and `partials/**/*.hbs`; those files are the source of truth.
- Translations: Gulp’s `locales` task merges shared locales with optional overrides in `./locales-local` and overwrites `./locales` each build. If you need custom strings, add/edit JSON in `locales-local` (don’t hand-edit `./locales`).

## Packaging
- The zip task excludes `node_modules`, `dist/**`, and also excludes `AGENTS.md` and `CLAUDE.md` from the shipped zip.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, use the installed graphify skill or instructions before doing anything else.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
