---
version: alpha
name: Travel-App-design-analysis
description: A warm, nature-inspired travel booking app with an earthy olive-green palette, cream backgrounds, and organic rounded forms. The design feels like a boutique travel journal — soft, approachable, and premium. Features pill-shaped buttons, rounded cards with generous border radius, and a distinctive yellow-green accent for CTAs and interactive elements.

colors:
  primary: "#B5C96B"
  primary-dark: "#9BAF5C"
  primary-light: "#D4E09B"
  primary-pale: "#E8EDC7"
  ink: "#2D2D2D"
  ink-light: "#4A4A4A"
  body: "#5A5A5A"
  muted: "#8A8A8A"
  muted-soft: "#B0B0B0"
  hairline: "#E5E5E5"
  hairline-soft: "#F0F0F0"
  canvas: "#FAF7F2"
  canvas-soft: "#F5F0E8"
  canvas-cream: "#F0EBE0"
  surface-card: "#FFFFFF"
  surface-elevated: "#FFFFFF"
  on-primary: "#FFFFFF"
  on-dark: "#FFFFFF"
  accent-yellow: "#F5D76E"
  accent-yellow-light: "#FFF3D0"
  semantic-success: "#4CAF50"
  semantic-warning: "#FF9800"
  semantic-error: "#E53935"

typography:
  display-xl:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.5px
  display-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.3px
  heading-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: -0.2px
  heading-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: 0
  heading-sm:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  body-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  caption:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  caption-strong:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  micro:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0.3px
    textTransform: uppercase
  button-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0
  button-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0

rounded:
  none: 0px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
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
  section: 40px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: 14px 28px
    height: 48px
  button-primary-hover:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  button-secondary:
    backgroundColor: "{colors.canvas-cream}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: 14px 28px
    height: 48px
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: 14px 28px
  button-icon-circular:
    backgroundColor: "{colors.canvas-cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 40px
  button-icon-circular-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.full}"
    size: 48px
  flight-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 0
    overflow: hidden
  flight-card-route:
    backgroundColor: "{colors.primary-pale}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 16px
  flight-card-details:
    backgroundColor: "{colors.accent-yellow-light}"
    textColor: "{colors.ink}"
    padding: 12px 16px
  hotel-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 0
    overflow: hidden
  hotel-card-image:
    rounded: "{rounded.lg}"
    aspectRatio: "4/5"
  hotel-card-content:
    padding: 20px
  hotel-card-amenity:
    backgroundColor: "{colors.primary-pale}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: 8px 12px
  destination-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    overflow: hidden
  destination-card-image:
    rounded: "{rounded.sm}"
    aspectRatio: "1/1"
  destination-card-overlay:
    backgroundColor: "rgba(0,0,0,0.4)"
    textColor: "{colors.on-dark}"
  tag-pill:
    backgroundColor: "{colors.canvas-cream}"
    textColor: "{colors.ink}"
    typography: "{typography.caption-strong}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  tag-pill-active:
    backgroundColor: "{colors.primary-pale}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  date-selector:
    backgroundColor: "{colors.canvas-cream}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  date-selector-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  search-input:
    backgroundColor: "{colors.canvas-cream}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: 12px 20px
    height: 48px
  bottom-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.micro}"
    height: 80px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: 16px
  price-tag:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-md}"
    rounded: "{rounded.xs}"
    padding: 16px 20px
  rating-badge:
    backgroundColor: "{colors.canvas-cream}"
    textColor: "{colors.ink}"
    typography: "{typography.caption-strong}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  location-badge:
    backgroundColor: "{colors.canvas-cream}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 6px 12px

---

## Overview

This travel app design is a **warm, boutique travel journal** — think of a premium travel magazine that went digital. The palette is dominated by **earthy olive-green** (`{colors.primary}` — #B5C96B) and **warm cream** (`{colors.canvas}` — #FAF7F2) backgrounds, creating a natural, organic feel that evokes mountain landscapes and sustainable travel. The dark text (`{colors.ink}` — #2D2D2D) is soft, never pure black, maintaining the gentle aesthetic.

The design uses **generous rounded corners everywhere** — buttons are pill-shaped (`{rounded.pill}`), cards have 24px radius (`{rounded.lg}`), and even small elements like tags use 12-16px radius. There are no sharp edges in the entire system, reinforcing the approachable, friendly vibe.

Typography is **Inter** with modest weights — 400 for body, 600 for buttons and medium headings, 700 only for large display sizes. The hierarchy is clear but never aggressive, matching the calm brand personality.

**Key Characteristics:**
- **Olive-green primary** (`{colors.primary}` — #B5C96B): Used for primary CTAs, selected dates, and interactive elements. Pairs with dark text for contrast.
- **Cream canvas** (`{colors.canvas}` — #FAF7F2): The dominant background — warm, not white. Creates a paper-like, journal aesthetic.
- **Generous rounding**: Everything is rounded. Buttons are pills, cards are 24px radius, tags are 12-16px. Zero sharp corners.
- **Soft shadows**: Cards use subtle elevation, never harsh shadows. The feel is floating, not lifted.
- **Nature photography**: Images feature mountains, hotels, natural landscapes — the content reinforces the brand's outdoor/adventure positioning.
- **Yellow accent** (`{colors.accent-yellow}` — #F5D76E): Used sparingly for flight card details and special highlights.
- **Pill-shaped filters**: Category filters (Hiking, Kayaking, Biking) are horizontal pills with cream background, active state in light green.
- **Circular icon buttons**: Back buttons and action buttons are perfect circles with cream background.

## Colors

> Source: Travel booking app design with flight search, hotel details, and destination selection screens.

### Brand & Accent
- **Olive Green** (`{colors.primary}` — #B5C96B): The brand's signature color. Primary CTA, selected states, interactive elements.
- **Olive Dark** (`{colors.primary-dark}` — #9BAF5C): Hover and active states.
- **Olive Light** (`{colors.primary-light}` — #D4E09B): Lighter tint for subtle backgrounds.
- **Olive Pale** (`{colors.primary-pale}` — #E8EDC7): Very light green for card backgrounds and selected pills.

### Surface
- **Canvas** ({colors.canvas}): #FAF7F2 — Warm cream page background.
- **Canvas Soft** ({colors.canvas-soft}): #F5F0E8 — Slightly deeper cream for subtle sections.
- **Canvas Cream** ({colors.canvas-cream}): #F0EBE0 — Used for input backgrounds and inactive elements.

### Text
- **Ink** ({colors.ink}): #2D2D2D — Primary text, headings. Soft black, never pure #000.
- **Ink Light** ({colors.ink-light}): #4A4A4A — Secondary emphasis.
- **Body** ({colors.body}): #5A5A5A — Default body text.
- **Muted** ({colors.muted}): #8A8A8A — Metadata, captions.
- **Muted Soft** ({colors.muted-soft}): #B0B0B0 — Placeholders, disabled.

### Semantic
- **Yellow** ({colors.accent-yellow}): #F5D76E — Special highlights, flight details.
- **Success** ({colors.semantic-success}): #4CAF50 — Positive indicators.
- **Warning** ({colors.semantic-warning}): #FF9800 — Caution states.
- **Error** ({colors.semantic-error}): #E53935 — Destructive actions.

## Typography

### Font Family
**Inter** with system fallbacks: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`. A modern geometric sans optimized for UI.

### Principles
- **Weight restraint**: 400 for body, 600 for buttons and medium headings, 700 only for large display.
- **No negative tracking**: Unlike editorial designs, this app uses neutral letter-spacing for clarity.
- **Uppercase for labels**: Micro text uses uppercase with 0.3px tracking for category labels.
- **Comfortable line-height**: 1.4-1.5 for body text, 1.2-1.3 for headings.

### Note on Font Substitutes
If Inter is unavailable, use **SF Pro Display** (Apple) or **Roboto** (Android). Match weights 400/600/700. The design relies more on size and weight hierarchy than typographic flair.

## Layout

### Spacing System
- **Base unit**: 4px.
- **Card internal padding**: 16-24px for most cards.
- **Section spacing**: 40px between major sections.
- **Element gaps**: 8-12px for tight groups, 16-24px for card spacing.

### Grid & Container
- **Mobile-first**: Designed for 375-414px width.
- **Card-based layout**: Content is organized in rounded cards with generous spacing.
- **Horizontal scrolling**: Filter tags and destination cards scroll horizontally.
- **Full-bleed images**: Hotel and destination images fill card width.

### Whitespace Philosophy
The cream canvas + generous card spacing creates a **breathing, uncluttered** feel. Elements are never cramped. The whitespace reinforces the premium, boutique brand positioning.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — flat | No shadow | Default for most surfaces |
| 1 — subtle | `box-shadow: 0 2px 8px rgba(0,0,0,0.06)` | Cards, interactive elements |
| 2 — elevated | `box-shadow: 0 4px 16px rgba(0,0,0,0.08)` | Modals, floating actions |
| 3 — overlay | `box-shadow: 0 8px 24px rgba(0,0,0,0.12)` | Bottom sheets, dialogs |

The depth philosophy is **soft and gentle** — shadows are barely perceptible, creating a floating effect without drama.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 8px | Small elements, price tags |
| `{rounded.sm}` | 12px | Tags, compact cards |
| `{rounded.md}` | 16px | Medium cards, amenity pills |
| `{rounded.lg}` | 24px | Main cards (flights, hotels) |
| `{rounded.xl}` | 32px | Large containers |
| `{rounded.pill}` | 9999px | All buttons, filters, search |
| `{rounded.full}` | 9999px | Circular icon buttons, avatars |

**Key rule**: The system uses generous rounding everywhere. Minimum radius is 8px. Default interactive elements use 16-24px. Buttons are always pills.

## Components

### Buttons
- **Primary**: Olive green fill (#B5C96B), dark text, pill shape, 48px height. The main CTA.
- **Secondary**: Cream fill, dark text, pill shape. Used for less prominent actions.
- **Ghost**: Transparent background, dark text. For navigation-adjacent actions.
- **Circular Icon**: Cream or dark background, perfect circle, 40-48px. For back buttons and floating actions.

### Flight Cards
Distinctive two-part structure:
- **Route section**: Light green background (#E8EDC7) with departure/arrival info
- **Details section**: Yellow background (#FFF3D0) with flight time, seats, gate
- Vertical "AIRLINES" text on the left side in green
- Plane icon connecting route info
- Rounded corners (24px) with no border

### Hotel Cards
- **Image**: Full-bleed 4:5 aspect ratio photo with rounded top corners
- **Content**: White background below image
- **Title**: Bold heading with hotel name
- **Location badge**: Cream pill with location icon
- **Amenities**: Row of light green pills (1 king bed, Free wi-fi, TV)
- **Price**: Large "From $80/night" with "Book Now" pill button

### Destination Cards
- **Image**: Square or 4:3 photo with rounded corners
- **Overlay**: Dark gradient at bottom with location name
- **Star icon**: Circular button in top-right for favorites
- **Grid layout**: 2 columns with 12px gap

### Filter Tags
- Horizontal scrolling row
- Default: Cream background, dark text, pill shape
- Active: Light green background (#E8EDC7)
- Icon + text combination ( Hiking, 🛶 Kayaking,  Biking)

### Date Selector
- Horizontal row of circular dates
- Default: Cream background
- Active: Olive green background (#B5C96B)
- Day of week label above date number
- 40px diameter circles

### Search Input
- Pill-shaped with cream background
- 48px height, comfortable padding
- Search icon on left
- Full-width in most contexts

## Do's and Don'ts

### Do
- Use cream canvas (#FAF7F2) as the primary background — never pure white
- Reserve olive green (#B5C96B) for primary CTAs and selected states
- Round everything — minimum 8px, default 16-24px for cards
- Use pill-shaped buttons for all primary actions
- Keep shadows subtle — maximum rgba(0,0,0,0.12) for overlays
- Use Inter font with weights 400/600/700 only
- Let nature photography dominate — the images tell the story

### Don't
- Don't use pure black (#000000) — use soft black (#2D2D2D) maximum
- Don't use sharp corners — the system is 100% rounded
- Don't use heavy shadows — keep elevation gentle
- Don't use more than 2-3 colors per screen — olive, cream, and dark text
- Don't use thin borders — cards separate via background color and shadow
- Don't use aggressive typography — keep weights modest
- Don't clutter — generous whitespace is essential

## Responsive Behavior

### Breakpoints
| Name | Width | Layout |
|------|-------|--------|
| Small Mobile | 375px | Single column, compact cards |
| Mobile | 390-414px | Single column, standard cards |
| Tablet | 768px | 2-column grid for destinations |
| Desktop | 1024px+ | 3-column grid, expanded cards |

### Collapsing Strategy
- Destination grid: 1 → 2 → 3 columns
- Filter tags: Always horizontal scroll on mobile
- Hotel amenities: Horizontal scroll if more than 3 items
- Flight details: Stack vertically on small screens
