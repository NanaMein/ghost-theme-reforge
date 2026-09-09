# Graph Report - Solo_theme_codebase  (2026-09-10)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 242 nodes · 313 edges · 12 communities (11 shown, 1 thin omitted)
- Extraction: 90% EXTRACTED · 10% INFERRED · 0% AMBIGUOUS · INFERRED: 30 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- devDependencies
- main.min.js
- gulpfile.js
- custom
- package.json
- compilerOptions
- c
- p
- image_sizes
- header_section_layout
- post_feed_layout

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
10. `n()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `l()` --indirect_call--> `a()`  [INFERRED]
  assets/js/lib/jarallax.min.js → assets/built/main.min.js
- `n()` --indirect_call--> `m()`  [INFERRED]
  assets/built/main.min.js → assets/js/lib/jarallax.min.js
- `r()` --indirect_call--> `m()`  [INFERRED]
  assets/built/main.min.js → assets/js/lib/jarallax.min.js
- `s()` --indirect_call--> `m()`  [INFERRED]
  assets/built/main.min.js → assets/js/lib/jarallax.min.js

## Import Cycles
- None detected.

## Communities (12 total, 1 thin omitted)

### Community 0 - "devDependencies"
Cohesion: 0.06
Nodes (35): autoprefixer, beeper, cssnano, gscan, gulp, gulp-concat, gulp-livereload, gulp-postcss (+27 more)

### Community 1 - "main.min.js"
Cohesion: 0.11
Nodes (14): a(), dropdown(), e(), i(), n(), o(), pagination(), r() (+6 more)

### Community 2 - "gulpfile.js"
Cohesion: 0.10
Nodes (26): autoprefixer, beeper, build, concat, css(), cssnano, cssWatcher(), easyimport (+18 more)

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
Nodes (3): c(), lightbox(), U()

### Community 8 - "image_sizes"
Cohesion: 0.12
Nodes (16): config, card_assets, image_sizes, posts_per_page, l, m, s, xl (+8 more)

### Community 9 - "header_section_layout"
Cohesion: 0.25
Nodes (8): header_section_layout, default, group, options, type, Large background, Side by side, Typographic profile

### Community 10 - "post_feed_layout"
Cohesion: 0.25
Nodes (8): post_feed_layout, default, group, options, type, Classic, Parallax, Typographic

## Knowledge Gaps
- **105 isolated node(s):** `autoprefixer`, `beeper`, `cssnano`, `gscan`, `gulp` (+100 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `config` connect `image_sizes` to `custom`, `package.json`?**
  _High betweenness centrality (0.146) - this node is a cross-community bridge._
- **Why does `custom` connect `custom` to `image_sizes`, `header_section_layout`, `post_feed_layout`?**
  _High betweenness centrality (0.140) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.119) - this node is a cross-community bridge._
- **Are the 8 inferred relationships involving `s()` (e.g. with `.addToParallaxList()` and `i()`) actually correct?**
  _`s()` has 8 INFERRED edges - model-reasoned connections that need verification._
- **What connects `autoprefixer`, `beeper`, `cssnano` to the rest of the system?**
  _105 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.05714285714285714 - nodes in this community are weakly interconnected._
- **Should `main.min.js` be split into smaller, more focused modules?**
  _Cohesion score 0.1053763440860215 - nodes in this community are weakly interconnected._