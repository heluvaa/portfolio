---
name: Zicoxbt Portfolio
description: Faceless builder portfolio rendered as an RPG loot sheet, where rarity tiers map one-to-one onto verified truth.
colors:
  ground: "#0a0c10"
  ground-2: "#10131a"
  panel: "#12161e"
  panel-2: "#181d27"
  edge: "#2a3140"
  edge-soft: "#1f2531"
  text: "#e8ebf2"
  text-2: "#aab3c5"
  text-3: "#8a93a6"
  legendary-gold: "#e0b34f"
  legendary-gold-deep: "#8a6a1f"
  live-green: "#57e39a"
  live-green-deep: "#1d5c3c"
  sealed-steel: "#66707f"
  unidentified-violet: "#b48ad6"
typography:
  display:
    fontFamily: "Chakra Petch, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 8.5vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0.02em"
  headline:
    fontFamily: "Chakra Petch, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 4.5vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.15
  title:
    fontFamily: "Chakra Petch, system-ui, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Chakra Petch, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.76rem"
    fontWeight: 700
    letterSpacing: "0.08em"
rounded:
  notch-panel: "14px notch clip"
  notch-chip: "8px notch clip"
  notch-large: "22px notch clip"
spacing:
  panel-pad: "26px"
  panel-pad-mobile: "18px"
  section-gap: "clamp(56px, 9vw, 96px)"
  grid-step: "44px"
components:
  button-primary:
    backgroundColor: "{colors.legendary-gold}"
    textColor: "#14100a"
    rounded: "{rounded.notch-chip}"
    padding: "0.8rem 1.25rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.notch-chip}"
    padding: "0.8rem 1.25rem"
  chip-technique:
    backgroundColor: "{colors.ground-2}"
    textColor: "{colors.text-2}"
    padding: "0.32rem 0.6rem"
  status-live:
    backgroundColor: "rgba(87,227,154,0.08)"
    textColor: "{colors.live-green}"
    padding: "0.36rem 0.7rem"
  status-segera:
    backgroundColor: "rgba(102,112,127,0.08)"
    textColor: "{colors.sealed-steel}"
    padding: "0.36rem 0.7rem"
---

# Design System: Zicoxbt Portfolio

## Overview

**Creative North Star: "The Loot Sheet"**

The portfolio is an inventory screen for a builder-class character. Every shipped project is an item with a rarity tier, and the rarity tier is not decoration: it is the verified status of that item. Gold means audited and live. Green means the link answered 200. Grey means sealed — the work exists but no URL does yet, and the slot says so rather than inventing one. Violet means unidentified: a slot explicitly labelled as a placeholder.

The world is a dark game HUD built with restraint. Obsidian ground, panels cut with notched corners, hairline steel edges, and status capsules that read like game data. Typography splits into two voices: a technical display face for headings and a monospace face for anything that is data (slot codes, attribute numbers, chips, statuses). The interface never imitates a screenshot of a game — it borrows the information architecture of an inventory screen and lets the work fill it.

**Key Characteristics:**
- Rarity is truth: the tier colours are assigned by audit result, never by taste.
- Notched panels everywhere: the corner cut is the system's signature shape.
- Two type voices: Chakra Petch sets the words, JetBrains Mono sets the data.
- Data carries tabular numerals; statuses carry a solid square, never an icon font.
- Flat at rest, neutral elevation on hover; no colored glows anywhere.

## Colors

The palette is a monochrome obsidian field interrupted by four semantically loaded tiers.

### Primary
- **Legendary Gold** (#e0b34f): the tier reserved for the three audited-live Selected Work items. Appears on rarity flags, the primary button, active nav slot codes, section number frames, and the avatar's frame. It is the only saturated colour allowed to be large.
- **Legendary Gold Deep** (#8a6a1f): the hairline border of anything legendary and the left rule of expanded item detail. Never used for text.

### Secondary
- **Live Green** (#57e39a): verified-200 status. Used for the LIVE capsule, links, skill-node codes, and the check marks in About. Signals "this resolves right now".
- **Live Green Deep** (#1d5c3c): the border under a LIVE capsule and the GitHub button's hover ring.

### Tertiary
- **Sealed Steel** (#66707f): the SEGERA tier. Dashed-bordered slots, grayscale thumbnails, and every "not yet" state. The colour's job is to look deliberately closed.
- **Unidentified Violet** (#b48ad6): reserved exclusively for the Content & Appearances placeholders so no visitor can confuse them with real work.

### Neutral
- **Obsidian Ground** (#0a0c10): page field, with a single radial gold tint at the top. Row/detent grid removed to keep the surface calm.
- **Panel** (#12161e) over **Panel Raised** (#181d27): the gradient every container uses, top-lighter.
- **Edge** (#2a3140) and **Edge Soft** (#1f2531): structural hairlines; Edge Soft for container borders, Edge for separators inside panels.
- **Text** (#e8ebf2), **Text Secondary** (#aab3c5), **Text Tertiary** (#8a93a6): the three-step text ramp, all above 4.5:1 on Panel.

### Named Rules
**The Rarity-Is-Evidence Rule.** A tier colour may only be applied to an item whose status was verified by an audit. Gold requires a live URL. Green requires an HTTP 200. Grey is the default for anything unverified, and grey is never upgraded for aesthetics.

**The One Accent Rule.** Gold is the only large saturated colour. Green, steel, and violet appear only in chips, capsules, and rules under 40px tall.

## Typography

**Display Font:** Chakra Petch (with system-ui fallback)
**Body Font:** Chakra Petch (with system-ui fallback)
**Label/Mono Font:** JetBrains Mono (with ui-monospace fallback)

**Character:** A technical sans with cut corners in its letterforms pairs with a coding mono. The display face carries a game-interface bearing without tipping into novelty; the mono makes every number, status, and identifier read as data rather than prose.

### Hierarchy
- **Display** (700, `clamp(2.4rem, 8.5vw, 3.6rem)`, 1.15): the hero name only, followed by a blinking gold block caret.
- **Headline** (700, `clamp(1.6rem, 4.5vw, 2.25rem)`, 1.15): section titles, each preceded by a gold slot-code frame.
- **Title** (700, 1.02–1.7rem, 1.2): project names and skill-node headings.
- **Body** (400, 16px, 1.55, max 72ch): descriptions, capped at 64ch in supporting blocks.
- **Label** (700, 0.74–0.76rem, 0.04–0.08em, uppercase for statuses): chips, statuses, slot codes, attribute notes, nav links.

### Named Rules
**The Two-Voice Rule.** Prose is set in Chakra Petch. Anything that is a value, an identifier, a status, or a measurement is set in JetBrains Mono with tabular numerals. Never set a paragraph in mono.

**The 11px Floor Rule.** No functional text renders below 11px at any breakpoint. Micro-labels keep their tracking but not their tininess.

## Layout

A single column capped at 1180px, padded `clamp(14px, 4vw, 28px)`. The page is a vertical stack of numbered sections; sections use `clamp(56px, 9vw, 96px)` top padding and no bottom padding, so the next section's heading supplies the separation. Panels use a strictly binary padding scale: 26px at desktop, 18px below 640px — deliberately not fluid, so container inset never becomes a percentage of a changing width.

The hero is a two-up grid at ≥780px (a 200px avatar slot beside the copy) and a single stack below. Directly under the hero sits the loadout strip: three legendary items in equal thirds, positioned so their top edge crosses the fold at both 390px and 1440px viewports.

The vault (Projects I Built) is 1 column below 560px, 2 up to 1024px, 3 above. Thumbnails inside vault slots bleed to the panel's left and right edges while the text stays inset, so the slot reads as a framed card rather than a picture with margins.

## Elevation & Depth

The system is flat at rest and layered tonally: depth comes from a three-step ground → panel → panel-raised ramp plus hairline edges, never from drop shadows. Hover is the only state that lifts, and when it lifts, the shadow is neutral black, never a coloured glow.

### Shadow Vocabulary
- **Hover lift** (`box-shadow: 0 16px 34px -22px rgba(0,0,0,.85)`): project cards and buttons on pointer hover, paired with a 2–3px translate.
- **Hover lift small** (`box-shadow: 0 10px 24px -18px rgba(0,0,0,.8)`): skill nodes.

### Named Rules
**The No-Glow Rule.** Shadows are black, offset, and blurred. A zero-offset coloured halo is never a depth signal in this system, even at low opacity. (Adopted after the first build shipped a gold glow and the mechanical detector flagged it.)

## Shapes

The signature form is the **notch**: a corner cut produced by `clip-path: polygon(...)` rather than a border-radius. Panels cut 14px, chips and buttons cut 8px, the avatar slot cuts 22px, and the dice-flag on loot shots cuts a slanted right edge. Everything shares the same language: cut corners, sharp interiors, hairline strokes.

Borders are 1px everywhere. Dashed borders are meaningful, not decorative: they mark a slot whose status is unsettled (SEGERA, CONTOH). The bracket marque (a two-sided corner mark) is available for HUD framing but is used sparingly.

## Components

### Buttons
- **Shape:** 10px notched corners, 1px border, minimum height 48px.
- **Primary:** gold fill with near-black text; used for the single strongest action in context (View Work, Open Live).
- **Ghost:** transparent fill, edge border, text-coloured; used for the secondary action (Contact, Source).
- **GitHub:** panel-raised fill with a 22px inline SVG mark; the only control in Contact.
- **Hover / Focus:** translateY(-2px), neutral black shadow, border shifts to the accent. Focus-visible uses a 2px gold outline with 3px offset.

### Chips
- **Style:** ground-2 fill, 1px edge border, mono 0.74rem, no radius (rectangular), uppercase-free.
- **State:** static; chips are labels, never controls. Interactive chips do not exist in this system.

### Cards / Containers
- **Corner Style:** 14px notched clip on every panel, card, loot item, and vault slot.
- **Background:** panel gradient, always top-lighter.
- **Shadow Strategy:** flat at rest (see Elevation).
- **Border:** 1px edge-soft; legendary items upgrade to 1px gold-deep; unsettled slots go dashed.
- **Internal Padding:** 26px desktop / 18px mobile, never fluid.

### Navigation
- **Style:** sticky rail holding a monospace wordmark and six numbered links (`01 ABOUT` … `06 LINK`).
- **Default:** text-tertiary with a steel slot number.
- **Active:** text-coloured with a gold slot number and a 2px gold inset underline; driven by scroll position, not click state.
- **Mobile:** the rail stays sticky and the link row scrolls horizontally, auto-centering the active link.

### Loot Item (signature)
The unit of Selected Work. A two-column row at ≥780px: screenshot plate on the left (object-fit cover, anchored top), body on the right. A gold `LEGENDARY` flag notches over the plate's top-left. The body holds name, LIVE capsule, description, an INSPECT toggle that reveals an expanded paragraph, technique chips, and the action buttons. Rarity is expressed by border colour and flag, never by resizing the card.

### Status Capsule (signature)
A mono uppercase label with a solid 7px square swatch drawn in `currentColor`. The square is the icon system: no icon fonts, no emoji, no SVG sprite. Four states: LIVE (green), SEGERA (steel), CONTOH (violet).

## Do's and Don'ts

### Do:
- **Do** assign a tier colour only from an audit result (The Rarity-Is-Evidence Rule).
- **Do** cut corners with `clip-path` notches at the three committed sizes (8/14/22px).
- **Do** set every value, identifier, and status in JetBrains Mono with `font-variant-numeric: tabular-nums` where digits stack.
- **Do** keep panel padding binary: 26px desktop, 18px mobile.
- **Do** let the loadout strip cross the fold — the work leads the first viewport.
- **Do** pair every hover lift with a black shadow and a 2–3px translate.

### Don't:
- **Don't** use a saturated colour as a large field. Gold is the single exception and only on legendary surfaces.
- **Don't** fake a live link for a sealed project; a dashed grey slot with "SEGERA" is the correct and final answer.
- **Don't** introduce border-radius — every curve is a notch.
- **Don't** use emoji, Unicode glyphs, or icon fonts as icons; the solid square swatch and inline SVG are the whole icon system.
- **Don't** apply a coloured glow shadow, even as a hover affordance.
- **Don't** dress the placeholder section in real-looking work: violet plus CONTOH plus an explicit "this is an example" line is the only permitted treatment.
- **Don't** set body copy in monospace or below 11px.