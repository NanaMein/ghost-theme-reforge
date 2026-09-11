# Graph Report - Solo_theme_codebase  (2026-09-11)

## Corpus Check
- 28 files · ~12,516 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 275 nodes · 342 edges · 17 communities (15 shown, 2 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 29 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ad2152b8`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- devDependencies
- gulpfile.js
- main.min.js
- custom
- package.json
- compilerOptions
- c
- p
- image_sizes
- Reforge
- post_feed_layout
- main.js
- dependencies
- opencode.json
- graphify.js
- Solo theme (Ghost) — OpenCode agent notes
- navigation_layout

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 20 edges
2. `c()` - 17 edges
3. `p` - 16 edges
4. `s()` - 14 edges
5. `custom` - 9 edges
6. `css()` - 8 edges
7. `i()` - 7 edges
8. `m()` - 7 edges
9. `image_sizes` - 7 edges
10. `Solo theme (Ghost) — OpenCode agent notes` - 6 edges

## Surprising Connections (you probably didn't know these)
- `s()` --indirect_call--> `m()`  [INFERRED]
  assets/built/main.min.js → assets/js/lib/jarallax.min.js
- `n()` --indirect_call--> `m()`  [INFERRED]
  assets/built/main.min.js → assets/js/lib/jarallax.min.js
- `l()` --indirect_call--> `a()`  [INFERRED]
  assets/js/lib/jarallax.min.js → assets/built/main.min.js
- `r()` --indirect_call--> `m()`  [INFERRED]
  assets/built/main.min.js → assets/js/lib/jarallax.min.js

## Import Cycles
- None detected.

## Communities (17 total, 2 thin omitted)

### Community 0 - "devDependencies"
Cohesion: 0.06
Nodes (35): autoprefixer, beeper, cssnano, gscan, gulp, gulp-concat, gulp-livereload, gulp-postcss (+27 more)

### Community 1 - "gulpfile.js"
Cohesion: 0.10
Nodes (26): autoprefixer, beeper, build, concat, css(), cssnano, cssWatcher(), easyimport (+18 more)

### Community 2 - "main.min.js"
Cohesion: 0.10
Nodes (14): a(), dropdown(), e(), i(), n(), o(), pagination(), r() (+6 more)

### Community 3 - "custom"
Cohesion: 0.07
Nodes (29): default, type, custom, background_color, footer_text, header_section_layout, primary_header, secondary_header (+21 more)

### Community 4 - "package.json"
Cohesion: 0.08
Nodes (24): author, email, name, url, description, docs, engines, ghost (+16 more)

### Community 5 - "compilerOptions"
Cohesion: 0.09
Nodes (22): bun, ESNext, compilerOptions, allowImportingTsExtensions, allowJs, jsx, lib, module (+14 more)

### Community 6 - "c"
Cohesion: 0.20
Nodes (3): c(), lightbox(), s()

### Community 8 - "image_sizes"
Cohesion: 0.12
Nodes (16): config, card_assets, image_sizes, posts_per_page, l, m, s, xl (+8 more)

### Community 9 - "Reforge"
Cohesion: 0.17
Nodes (10): Modifications / extensions, Original work, Reforge - Modifications / Attribution, Copyright & License, Credits, Development, Instructions, Live Demo (+2 more)

### Community 10 - "post_feed_layout"
Cohesion: 0.25
Nodes (8): post_feed_layout, default, group, options, type, Classic, Parallax, Typographic

### Community 11 - "main.js"
Cohesion: 0.60
Nodes (3): applyMode(), normalizeHex(), updateTextContrast()

### Community 12 - "dependencies"
Cohesion: 0.50
Nodes (3): @opencode-ai/plugin, dependencies, @opencode-ai/plugin

### Community 13 - "opencode.json"
Cohesion: 0.50
Nodes (3): plugin, $schema, .opencode/plugins/graphify.js

### Community 15 - "Solo theme (Ghost) — OpenCode agent notes"
Cohesion: 0.29
Nodes (6): Build inputs/outputs (don’t edit generated files), Commands (bun only), graphify, Packaging, Solo theme (Ghost) — OpenCode agent notes, Templates/locales quirks

### Community 16 - "navigation_layout"
Cohesion: 0.29
Nodes (7): navigation_layout, default, options, type, Logo in the middle, Logo on the left, Stacked

## Knowledge Gaps
- **120 isolated node(s):** `$schema`, `.opencode/plugins/graphify.js`, `@opencode-ai/plugin`, `{series, parallel, watch, src, dest}`, `fs` (+115 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `config` connect `image_sizes` to `custom`, `package.json`?**
  _High betweenness centrality (0.113) - this node is a cross-community bridge._
- **Why does `custom` connect `custom` to `image_sizes`, `navigation_layout`, `post_feed_layout`?**
  _High betweenness centrality (0.108) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.092) - this node is a cross-community bridge._
- **Are the 8 inferred relationships involving `s()` (e.g. with `.addToParallaxList()` and `i()`) actually correct?**
  _`s()` has 8 INFERRED edges - model-reasoned connections that need verification._
- **What connects `$schema`, `.opencode/plugins/graphify.js`, `@opencode-ai/plugin` to the rest of the system?**
  _120 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.05714285714285714 - nodes in this community are weakly interconnected._
- **Should `gulpfile.js` be split into smaller, more focused modules?**
  _Cohesion score 0.10344827586206896 - nodes in this community are weakly interconnected._