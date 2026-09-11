# Graph Report - Solo_theme_codebase  (2026-09-11)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 256 nodes · 322 edges · 15 communities (13 shown, 2 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 26 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0146d192`
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
- header_section_layout
- post_feed_layout
- main.js
- dependencies
- opencode.json
- graphify.js

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 20 edges
2. `c()` - 17 edges
3. `p` - 16 edges
4. `s()` - 13 edges
5. `custom` - 9 edges
6. `css()` - 8 edges
7. `i()` - 7 edges
8. `image_sizes` - 7 edges
9. `handleError()` - 5 edges
10. `hbs()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `l()` --indirect_call--> `a()`  [INFERRED]
  assets/js/lib/jarallax.min.js → assets/built/main.min.js

## Import Cycles
- None detected.

## Communities (15 total, 2 thin omitted)

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
Nodes (28): default, type, custom, background_color, footer_text, navigation_layout, primary_header, secondary_header (+20 more)

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

### Community 9 - "header_section_layout"
Cohesion: 0.25
Nodes (8): header_section_layout, default, group, options, type, Large background, Side by side, Typographic profile

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

## Knowledge Gaps
- **108 isolated node(s):** `autoprefixer`, `beeper`, `cssnano`, `gscan`, `gulp` (+103 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `config` connect `image_sizes` to `custom`, `package.json`?**
  _High betweenness centrality (0.131) - this node is a cross-community bridge._
- **Why does `custom` connect `custom` to `image_sizes`, `header_section_layout`, `post_feed_layout`?**
  _High betweenness centrality (0.125) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.106) - this node is a cross-community bridge._
- **Are the 7 inferred relationships involving `s()` (e.g. with `.addToParallaxList()` and `i()`) actually correct?**
  _`s()` has 7 INFERRED edges - model-reasoned connections that need verification._
- **What connects `autoprefixer`, `beeper`, `cssnano` to the rest of the system?**
  _108 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.05714285714285714 - nodes in this community are weakly interconnected._
- **Should `gulpfile.js` be split into smaller, more focused modules?**
  _Cohesion score 0.10344827586206896 - nodes in this community are weakly interconnected._