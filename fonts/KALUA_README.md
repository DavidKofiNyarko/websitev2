# Kalua Font Setup

## Download Kalua Font

1. Visit [FontSpace - Kalua Font](https://www.fontspace.com/kalua-font-f154157)
2. Click "Free Download" to download the font files
3. Extract the ZIP file

## Add Font Files

Place the Kalua font files in this directory (`/fonts` at the project root):

- `Kalua-Regular.woff2` (preferred format)
- OR `Kalua-Regular.woff`
- OR `Kalua-Regular.ttf`

The font loader will try to load them in this order: `.woff2` → `.woff` → `.ttf`

## Supported Formats

The font loader supports multiple formats and will use the first available one:
1. `.woff2` (best compression, preferred)
2. `.woff` (good compression)
3. `.ttf` (fallback)

If you only have one format, that's fine - just place it in the `/fonts` directory with the name `Kalua-Regular.[extension]`.

## Note

The font is configured to use the CSS variable `--font-kalua` and is already applied to the hero section text in `app/sections/HeroSection.tsx`.

