# Gilmer Font Files

Place your Gilmer font files in this directory (`/fonts` at the project root) with the following naming convention:

- `Gilmer-Light.woff2` (weight: 300)
- `Gilmer-Regular.woff2` (weight: 400)
- `Gilmer-Medium.woff2` (weight: 500)
- `Gilmer-Bold.woff2` (weight: 700)
- `Gilmer-Heavy.woff2` (weight: 800)

## Note

Fonts are placed in the root `/fonts` directory (not in `/public`) because Next.js `localFont` loads fonts from the project root, not from the public directory.

## Supported Formats

The font loader is configured for `.woff2` files. If you have other formats (`.woff`, `.ttf`, `.otf`), you can:

1. Convert them to `.woff2` using online tools
2. Update the font paths in `app/fonts/gilmer.ts` to match your file names and extensions

