# Aurensys Brand Guide

## Identity

| | |
| --- | --- |
| **Name** | Aurensys |
| **Industry** | Software Development & IT Solutions |
| **Tagline** | Engineering the Future. |
| **Brand meaning** | Innovation Through Engineering |
| **Core values** | Innovation · Quality · Reliability · Scalability |
| **Brand promise** | Turning complex business challenges into effective software solutions. |

> Aurensys represents innovation, engineering excellence, and intelligent technology. Our name reflects our
> vision of transforming ideas into powerful software solutions. We combine creativity, engineering expertise,
> and modern technologies to build reliable, scalable, and future-ready digital products that help businesses grow.

## Logo

The mark is a rising **“A”** — two strokes climbing to a single peak (progress, engineering precision) with a
**core node** at its centre (the intelligent system at the heart of every product). It uses the brand gradient.

| File | Use |
| --- | --- |
| `public/logo-mark.svg` | Symbol only — avatars, app icons, small spaces |
| `public/logo-dark.svg` | Symbol + wordmark on dark backgrounds |
| `public/logo-light.svg` | Symbol + wordmark on light backgrounds |
| `public/favicon.svg` / `src/app/icon.svg` | Browser tab icon (mark on a dark rounded square) |

- Wordmark is set in **Sora SemiBold**, lowercase, tight tracking (`-0.03em`).
- Keep clear space around the logo equal to the height of the node (circle).
- Don't stretch, recolour outside the palette, add shadows, or place the gradient mark on busy photos.
- The full-logo SVGs use live text; for print or design tools, open them in Figma/Illustrator with Sora
  installed and convert text to outlines.

## Colour palette

| Token | Hex | Use |
| --- | --- | --- |
| `--bg` | `#07080C` | Page background |
| `--bg-elev` | `#0B0D12` | Elevated sections, cards |
| `--surface` | `#10131A` | Panels, form container |
| `--text` | `#EEF0F4` | Primary text |
| `--text-muted` | `#9AA1B0` | Body / secondary text |
| `--text-dim` | `#646B7A` | Labels, captions |
| `--gold-light` | `#FFD98A` | Gradient start, highlights |
| `--gold` | `#F5B544` | **Primary accent** — links, icons, eyebrows |
| `--amber` | `#FF8A4C` | Gradient end, warm emphasis |
| `--indigo` | `#7C83FF` | Supporting glow / illustration only |
| `--teal` | `#4FD1C5` | Success states, “live” indicators |

**Brand gradient:** `linear-gradient(120deg, #FFD98A 0%, #F5B544 45%, #FF8A4C 100%)` — use for primary buttons,
the logo and one highlighted word per headline. Don't overuse it.

Borders are white at 8% (`--border`) or 14% (`--border-strong`) opacity.

## Typography

| Role | Font | Weight | Notes |
| --- | --- | --- | --- |
| Display / headings | Sora | 600 | Tight tracking (-0.025em to -0.045em) |
| Body / UI | Inter | 400–500 | 16px base, line-height 1.6 |
| Code / technical | System mono | 400 | Hero panel only |

## Voice

Confident, clear and practical. Short sentences. Talk about outcomes for the client rather than buzzwords.
Prefer “we build reliable software” over “we leverage cutting-edge synergies”.

## Motion

Subtle and purposeful: fade-up reveals, soft glows, smooth layout transitions. Easing
`cubic-bezier(0.22, 1, 0.36, 1)`, durations 0.3–0.8s. Never block content behind animation, and always respect
reduced-motion settings.
