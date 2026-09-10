# Reforge

> [!IMPORTANT]
> Reforge is a fork/derivative of the official [TryGhost/Solo](https://github.com/TryGhost/Solo) theme for Ghost.
> 
> This fork is maintained in this repository—please open issues and pull requests here.

Reforge is an extendable Ghost theme for portfolio creators, technical writers, and developers.
It’s designed to work for posts/pages (and future modules like news/update or podcast layouts) and includes theme settings + a built-in light/night mode toggle (dark mode).

## Live Demo
https://alfycodes.me

## Instructions

1. Download the theme zip:
   - from the **Releases** section, or
   - build it locally: `bun install && bun run zip`
2. In Ghost Admin → **Design**, upload the zip file.

## Development

Styles are compiled using Gulp/PostCSS to polyfill future CSS spec.
You’ll need [Bun](https://bun.sh/) installed.

From the theme's root directory:

```bash
# Run build & watch for changes
bun install
bun run dev
```

Now you can edit `/assets/css/` files (and other source files like `/assets/js/` and `*.hbs`); the build will regenerate outputs under `/assets/built/`.

The `zip` Gulp task packages the theme files into `dist/<package-name>.zip` (based on `package.json#name`).

```bash
bun run zip
```

### Theme translations

Please see the @Tryghost/Themes/theme-translations/README.md for how to edit or contribute translations.

## Credits

- Based on [TryGhost/Solo](https://github.com/TryGhost/Solo) by Ghost Foundation.
- Built for [Ghost](https://github.com/TryGhost/Ghost).

## Copyright & License

Copyright (c) 2013-2026 Ghost Foundation — Released under the [MIT license](LICENSE).

Modifications by Nanamein (https://alfycodes.me) — see [MODIFICATIONS.md](MODIFICATIONS.md) — Released under the MIT license (see LICENSE).
