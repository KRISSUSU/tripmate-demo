---
version: alpha
name: Dribbble-design-analysis
description: A vibrant, image-first creative showcase platform. Built on a clean white canvas with a signature hot pink/magenta accent, featuring a dense masonry grid of design "shots" as the primary content. The interface recedes to let artwork speak — rounded cards, generous whitespace between items, and a minimal dark-text-on-white chrome. Typography uses a geometric sans at modest weights, buttons are pill-shaped or softly rounded, and the overall feel is editorial magazine meets portfolio gallery.

colors:
  primary: "#ea4c8f"
  primary-hover: "#f082ac"
  primary-active: "#d43775"
  on-primary: "#ffffff"
  ink: "#0d0c22"
  body: "#2e3256"
  muted: "#6e7191"
  muted-soft: "#a5a3b8"
  hairline: "#e7e7e7"
  hairline-soft: "#f0f0f0"
  canvas: "#ffffff"
  canvas-soft: "#f6f6f7"
  canvas-dark: "#0d0c22"
  surface-card: "#ffffff"
  surface-elevated: "#ffffff"
  on-dark: "#ffffff"
  on-dark-muted: "#9492b8"
  link: "#0d0c22"
  link-hover: "#ea4c8f"
  success: "#26cb7c"
  warning: "#f5a623"
  error: "#e6492d"
  info: "#3b49df"
  accent-purple: "#8643e1"
  accent-blue: "#3b49df"
  accent-teal: "#03b5a2"

typography:
  display-xl:
    fontFamily: "dribbble, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.5px
  display-lg:
    fontFamily: "dribbble, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.3px
  display-md:
    fontFamily: "dribbble, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: -0.2px
  heading-lg:
    fontFamily: "dribbble, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: 0
  heading-md:
    fontFamily: "dribbble, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  heading-sm:
    fontFamily: "dribbble, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  body-lg:
    fontFamily: "dribbble, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-md:
    fontFamily: "dribbble, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "dribbble, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  caption:
    fontFamily: "dribbble, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  caption-strong:
    fontFamily: "dribbble, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  micro:
    fontFamily: "dribbble, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0
  button-lg:
    fontFamily: "dribbble, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0
  button-md:
    fontFamily: "dribbble, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0
  nav-link:
    fontFamily: "dribbble, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  none: 0px
  xs: 4px
  sm: 7px
  md: 10px
  lg: 14px
  xl: 20px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 64px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: 10px 20px
    height: 40px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: 10px 20px
    border: "1px solid {colors.hairline}"
    height: 40px
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: 10px 20px
  button-pro:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: 10px 20px
  shot-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    overflow: hidden
  shot-card-image:
    rounded: "{rounded.lg}"
    aspectRatio: "4/3"
  shot-card-hover:
    boxShadow: "0 8px 16px rgba(13,12,34,0.08)"
  shot-card-overlay:
    backgroundColor: "rgba(13,12,34,0.6)"
    textColor: "{colors.on-dark}"
  designer-avatar:
    rounded: "{rounded.full}"
    size: 24px
    border: "2px solid {colors.canvas}"
  designer-name:
    typography: "{typography.caption-strong}"
    textColor: "{colors.ink}"
  shot-stats:
    typography: "{typography.caption}"
    textColor: "{colors.muted}"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 72px
    borderBottom: "1px solid {colors.hairline-soft}"
  search-input:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
    height: 40px
  tag-pill:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.caption-strong}"
    rounded: "{rounded.pill}"
    padding: 6px 12px
  tag-pill-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
  like-heart:
    textColor: "{colors.primary}"
    size: 16px
  comment-icon:
    textColor: "{colors.muted}"
    size: 16px
  card-pricing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
    border: "1px solid {colors.hairline}"
  card-pricing-featured:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.lg}"
    padding: 32px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    padding: 48px 0
---

## Overview

Dribbble's interface is a **design-forward creative gallery** — the website itself is designed beautifully because its audience is designers. The base canvas is **pure white** (`{colors.canvas}` — #ffffff) with near-black ink (`{colors.ink}` — #0d0c22) for text, and the signature **hot pink** (`{colors.primary}` — #ea4c8f) as the sole chromatic brand accent. The entire chrome recedes to let the "shots" (design screenshots at 4:3 aspect ratio) dominate the viewport.

The layout is a **dense masonry-style grid** of rounded cards, each containing a full-bleed image with the designer's avatar + name + engagement stats (likes/views) hovering below. The grid breathes with generous gutters (24px) but the cards themselves have no visible borders — only a subtle shadow on hover provides lift. This creates a clean, editorial feel where the art is the content.

Typography uses a **custom geometric sans** (branded as "dribbble") with system font fallbacks. Weights stay modest — 400 for body, 500 for nav, 700 only for headings and buttons. Display sizes are reserved for section headers and marketing pages; the actual shot grid uses small, quiet typography (13-16px) so it never competes with the artwork.

**Key Characteristics:**
- **Hot pink brand accent** (`{colors.primary}` — #ea4c8f): Used on the logo, "Sign up" CTA, like/heart icons, and link hover states. Never used as a surface color.
- **Image-first grid**: The masonry shot grid is the hero. Every design decision supports letting images speak.
- **Rounded cards** (`{rounded.lg}` 14px): Shot cards have soft corners that echo the rounded image corners inside them. No sharp edges anywhere.
- **Pill-shaped buttons** (`{rounded.pill}` 9999px): All CTAs are pills. Primary is hot pink fill; secondary is outlined or ghost.
- **Minimal chrome**: No gradients, no shadows on rest state, no decorative borders. The interface is invisible until hovered.
- **Hover elevation**: Cards gain a `box-shadow: 0 8px 16px rgba(13,12,34,0.08)` on hover — the only depth cue in the system.
- **Dark canvas-dark** (`{colors.canvas-dark}` — #0d0c22): Used sparingly for Pro/featured tiers and marketing bands, creating high-contrast editorial moments.
- **Engagement stats in muted gray**: Like counts, view counts, and designer names are all in `{colors.muted}` — present but quiet.

## Colors

> Source pages: dribbble.com home, /shots/popular, /pricing, /jobs.

### Brand & Accent
- **Hot Pink** (`{colors.primary}` — #ea4c8f): The brand's signature CTA and accent color. Filled button, heart icon, link hover.
- **Pink Hover** (`{colors.primary-hover}` — #f082ac): Lighter pink for hover states.
- **Pink Active** (`{colors.primary-active}` — #d43775): Darker pink for pressed states.

### Surface
- **Canvas** ({colors.canvas}): Pure white — default page background.
- **Canvas Soft** ({colors.canvas-soft}): #f6f6f7 — subtle section breaks, search input background.
- **Canvas Dark** ({colors.canvas-dark}): #0d0c22 — near-black for marketing bands, Pro cards, footer CTA sections.

### Text
- **Ink** ({colors.ink}): #0d0c22 — primary text, headings, strong labels.
- **Body** ({colors.body}): #2e3256 — secondary body text.
- **Muted** ({colors.muted}): #6e7191 — metadata, stats, designer secondary info.
- **Muted Soft** ({colors.muted-soft}): #a5a3b8 — placeholders, disabled states.

### Semantic
- **Success** ({colors.success}): #26cb7c — positive indicators.
- **Warning** ({colors.warning}): #f5a623 — caution states.
- **Error** ({colors.error}): #e6492d — destructive actions.
- **Info** ({colors.info}): #3b49df — informational links.

## Typography

### Font Family
**dribbble** custom sans with fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`. A geometric sans optimized for screen reading at small sizes.

### Principles
- **Weight restraint**: 400 for body, 500 for nav links, 700 for headings and buttons only. No 800/900 weights.
- **Negative tracking on display sizes** (-0.5px to -0.2px) creates editorial tightness.
- **Body stays neutral** (0 letter-spacing) for comfortable reading.
- **Modest display sizes**: The hero on the home page uses 36px max — Dribbble never shouts typographically; the images do the shouting.

### Note on Font Substitutes
If the custom "dribbble" font is unavailable, **Inter** is the closest open-source substitute. Use weight 500 for nav, 700 for headings, 400 for body. Match the generous line-heights (1.4–1.55 range).

## Layout

### Spacing System
- **Base unit**: 4px.
- **Grid gutters**: 24px between shot cards.
- **Section padding**: 64px between major sections.
- **Card padding**: Internal content below images uses 12px vertical padding.

### Grid & Container
- **Max content width**: ~1440px centered.
- **Shot grid**: Responsive masonry — 4 columns at desktop, 3 at tablet, 2 at mobile, 1 at small mobile.
- **Each shot card**: Fixed 4:3 aspect ratio for the image, with metadata below.

### Whitespace Philosophy
The white canvas + generous 24px gutters + rounded cards create a **gallery breathing room** effect. Each design gets its own visual territory. The interface never crowds the artwork.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — flat | No shadow, no border | Default for all cards, buttons, sections |
| 1 — hover lift | `box-shadow: 0 8px 16px rgba(13,12,34,0.08)` | Shot cards on hover, interactive cards |
| 2 — modal | `box-shadow: 0 16px 32px rgba(13,12,34,0.16)` | Lightboxes, dropdowns |
| 3 — dark band | `{colors.canvas-dark}` background | Marketing hero bands, Pro tier cards |

The depth philosophy is **almost-flat**. Shadows appear only on interaction (hover/click). The brand resists using depth as decoration.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Small tags, status dots |
| `{rounded.sm}` | 7px | Inputs, compact elements |
| `{rounded.md}` | 10px | Medium cards, alerts |
| `{rounded.lg}` | 14px | Shot cards, feature cards |
| `{rounded.xl}` | 20px | Large containers |
| `{rounded.pill}` | 9999px | All buttons, search bars, tag pills |
| `{rounded.full}` | 9999px | Avatars |

## Components

### Buttons
- **Primary**: Hot pink fill, white text, pill shape, 40px height. The dominant CTA.
- **Secondary**: White fill with hairline border, dark text, pill shape. Used for "Log in" / lesser actions.
- **Ghost**: Transparent background, dark text. Used for navigation-adjacent actions.
- **Pro/Dark**: Dark fill (#0d0c22), white text. Used for premium/featured actions.

### Shot Cards
The dominant component system-wide:
- 4:3 image with `{rounded.lg}` 14px corners
- Designer avatar (24px circle) + name below
- Like count (with heart icon) + view count in muted gray
- On hover: subtle shadow lift + optional overlay with "View Shot" action
- No border at rest — the white-on-white creates implicit separation

### Search
- Pill-shaped input (`{rounded.pill}`) with gray background ({colors.canvas-soft})
- Left-aligned search icon
- 40px height, comfortable padding

### Navigation
- Top nav: 72px height, white background, 1px bottom hairline
- Links at 14px weight 500 in dark ink
- Active state: hot pink underline or pink text
- "Sign up" pill in hot pink is the nav's chromatic anchor

### Tag Pills / Filters
- Horizontal row of pill-shaped tags
- Default: soft gray background ({colors.canvas-soft})
- Active: dark ink background ({colors.ink}) with white text
- 6px 12px padding, compact and scannable

## Do's and Don'ts

### Do
- Use pure white canvas — the gallery effect requires clean white space
- Reserve hot pink exclusively for brand moments (CTAs, hearts, logo) — never as a surface
- Keep shot cards at 4:3 aspect ratio with rounded corners
- Use pill-shaped buttons for all interactive CTAs
- Let images dominate — typography and chrome should be quiet
- Apply hover shadow for interactive feedback — no rest-state shadows
- Use 24px gutters between grid items for breathing room

### Don't
- Don't add borders to cards — whitespace + hover shadow is the separation system
- Don't use hot pink as a background color — it's an accent, not a surface
- Don't use gradients — the system is flat and clean
- Don't use heavy shadows — maximum shadow is rgba(13,12,34,0.08)
- Don't use sharp corners — minimum radius is 4px, default is 10-14px
- Don't make typography loud — the images are the headline
- Don't use more than one brand color — hot pink is the only chromatic accent

## Responsive Behavior

### Breakpoints
| Name | Width | Shot Grid |
|------|-------|-----------|
| Small Mobile | <375px | 1 column |
| Mobile | 375–767px | 1–2 columns |
| Tablet | 768–1023px | 2–3 columns |
| Desktop | 1024–1439px | 3–4 columns |
| Large Desktop | ≥1440px | 4 columns |

### Collapsing Strategy
- Shot grid: 4 → 3 → 2 → 1 columns
- Top nav: full → hamburger menu
- Filter tags: scrollable horizontal on mobile
- Sidebar: hidden on mobile, drawer-style
