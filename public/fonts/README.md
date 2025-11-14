# Gilmer Font Files

Place your Gilmer font files in this directory with the following naming convention:

- `Gilmer-Light.woff2` (weight: 300)
- `Gilmer-Regular.woff2` (weight: 400)
- `Gilmer-Medium.woff2` (weight: 500)
- `Gilmer-Bold.woff2` (weight: 700)
- `Gilmer-Heavy.woff2` (weight: 800)

## Supported Formats

The font loader is configured for `.woff2` files. If you have other formats (`.woff`, `.ttf`, `.otf`), you can:

1. Convert them to `.woff2` using online tools
2. Update the font paths in `app/fonts/gilmer.ts` to match your file names

## Alternative: Using Different Font Files

If your Gilmer font files have different names or you only have certain weights, update the `src` array in `app/fonts/gilmer.ts` accordingly.

