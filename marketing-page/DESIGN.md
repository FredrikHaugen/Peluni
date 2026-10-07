---
name: peluni
description: Grey-green paper and green-black ink, where the only things that lift off the page are macOS windows showing peluni at work.
colors:
  paper: "#f1f2ee"
  ink: "#171a18"
  muted-ink: "#4d524e"
  window-white: "#ffffff"
  hairline: "#cfd3cc"
  desk: "#dde1da"
  selection-blue: "#b4d5fe"
  marker-teal: "#9ddeb9"
  overlay-black: "#1d1d1f"
  overlay-white: "#f5f5f7"
  charcoal: "#1c1e1b"
  charcoal-ink: "#eceee9"
  glass: "rgb(255 255 255 / 0.56)"
  glass-strong: "rgb(246 247 243 / 0.78)"
  glass-panel: "rgb(246 247 243 / 0.93)"
typography:
  display:
    fontFamily: "Source Serif 4, Times New Roman, Georgia, serif"
    fontSize: "clamp(2.5rem, 1.4rem + 4.4vw, 5.2rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(2rem, 1.5rem + 2vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(1.6rem, 1.35rem + 1vw, 2.1rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(1.1875rem, 1rem + 0.35vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.5
  mono:
    fontFamily: "Atkinson Hyperlegible Mono, ui-monospace, Menlo, monospace"
    fontSize: "0.9em"
    fontWeight: 400
rounded:
  focus: "4px"
  md: "6px"
  window: "24px"
  panel: "28px"
  module: "38px"
  full: "9999px"
spacing:
  gutter: "16px"
  gutter-wide: "24px"
  reading: "42rem"
  column: "64rem"
  section: "96px"
  section-wide: "128px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.full}"
    height: "44px"
    padding: "0 16px"
  button-secondary:
    backgroundColor: "rgb(23 26 24 / 0.08)"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    height: "44px"
    padding: "0 16px"
  chip-default:
    backgroundColor: "{colors.marker-teal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "2px 6px"
  keycap:
    backgroundColor: "{colors.window-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "2px 6px"
  window:
    backgroundColor: "{colors.window-white}"
    rounded: "{rounded.window}"
  glass-controls:
    backgroundColor: "{colors.glass}"
    rounded: "{rounded.full}"
    height: "32px"
  consent-panel:
    backgroundColor: "{colors.glass-panel}"
    rounded: "{rounded.panel}"
    padding: "20px"
  overlay-pill:
    backgroundColor: "{colors.overlay-black}"
    textColor: "{colors.overlay-white}"
    rounded: "{rounded.full}"
    height: "40px"
    padding: "0 16px"
---

# Design System: peluni

## Overview

**Creative North Star: "The Desk and the Window"**

The page is a desk: grey-green paper, green-black ink, text set in a serif at reading size, sections
divided by a rule or by space and never by a box. On that desk sit a few macOS windows, and they are
the only things that lift off it. Each window shows peluni doing its one job (Reminders mid-dictation,
the Vocabulary tab, a Messages reply with Wi-Fi off). The contrast between flat paper and real window
is the whole idea: the page is the explanation, the windows are the evidence.

Density is low and the reading column is narrow (42rem). Sections take the form their content needs:
a ruled table for cleanup levels, a window beside a sentence for vocabulary, one dark band for the
privacy claim, a numbered list for building it. The interface parts (buttons, chips, the header) are
plain and native: macOS 27 capsule buttons and real window chrome, nothing styled beyond what the
platform does.

The windows follow macOS 27: 24px corners, no title-bar divider, traffic lights inset, and subtle
Liquid Glass on what macOS puts it on (toolbar controls, floating panels and modules, the navigation
layer). Glass belongs to the windows and the layer above the page, never to the paper.

**Key Characteristics:**

- Flat paper, lifted windows. Only windows and what floats above the page cast a shadow.
- One accent, Marker Teal, used as a fill or a stroke, never as text.
- Three typefaces with fixed jobs: serif to read, sans for the interface, mono for transcripts.
- Light and dark are equal citizens. Dark is charcoal, not black.
- Motion only where the product is working: the waveform, the caret, the record light, the demo loop.

## Colors

A near-monochrome paper and ink palette with a faint green cast, one teal accent and the macOS
selection blue held back for text selection alone.

### Primary

- **Marker Teal** (#9ddeb9): the logo's teal. It marks what peluni did: the underline under words
  peluni put there (`.selected`), the record light, and the "default" chip on the cleanup table. Same
  value in both themes. It is a fill or a mark; it never colors text.

### Neutral

- **Paper** (#f1f2ee): the page background in light mode.
- **Ink** (#171a18): all body text and headings, at full strength. Also the primary button fill and the
  focus ring.
- **Muted Ink** (#4d524e): short secondary labels only (a cleanup level's detail line, the footer note,
  the raw transcript). Never a paragraph.
- **Window White** (#ffffff): the inside of a macOS window mockup. Dark: #262924.
- **Hairline** (#cfd3cc): rules between rows, the header and footer borders, link underlines at rest,
  the keycap's bottom edge. Dark: #3a3e38.
- **Glass** (light 56% white, dark 50% charcoal), **Glass Strong** (78%, for glass that carries text)
  and **Glass Panel** (93%, for the consent panel, which can sit over the dark band): the tints under
  the blur. Each has a dark value; the Wi-Fi module uses a fixed light glass in both themes.
- **Desk** (#dde1da): the surface behind a product scene. Dark: #2c302a.
- **Charcoal** (#1c1e1b) and **Charcoal Ink** (#eceee9): the dark-mode page and text. The privacy band
  (`.band-dark`) uses this palette in light mode and steps down to #121311 in dark mode.
- **Overlay Black** (#1d1d1f) and **Overlay White** (#f5f5f7): peluni's real recording overlay, dark in
  both themes because the app's overlay is.
- **Selection Blue** (#b4d5fe; dark #3a6ea8): `::selection` only.

macOS window controls use Apple's own red, yellow and green (#ff5f57, #febc2e, #28c840) inside mockups.
They are part of the window, not the palette.

### Named Rules

**The One Accent Rule.** Marker Teal is the only color with a meaning. A new colored element needs a
reason the existing ones don't cover.

**The Ink Never Fades Rule.** Paragraphs are full Ink. Muted Ink is for labels of a few words.

**The Equal Themes Rule.** Every token has a dark value, and every text pair reaches 4.5:1 in both
themes (tested).

## Typography

**Display Font:** Source Serif 4 (with Times New Roman for a metric-matched swap, then Georgia)
**Body Font:** Source Serif 4
**Label Font:** Atkinson Hyperlegible Next (with system-ui)
**Mono Font:** Atkinson Hyperlegible Mono (with ui-monospace, Menlo)

**Character:** a book serif for everything a visitor reads, set against a legibility-first sans for
everything they operate. The mono belongs to transcripts and commands, so raw speech looks raw.

All three are self-hosted and subset to the characters the site uses (`app/fonts/`).

### Hierarchy

- **Display** (600, clamp 2.5rem to 5.2rem, 1.02): the home page h1 only. Sub-page h1s run smaller
  (clamp 2.4rem to 3.6rem, 1.05). The privacy band's display line sits between them (to 4.75rem).
- **Headline** (600, clamp 2rem to 3rem, 1.1): home page section headings (`Chapter`).
- **Title** (600, clamp 1.6rem to 2.1rem, 1.15): sub-page section headings. The FAQ uses a compact step
  (clamp 1.3rem to 1.55rem).
- **Body** (400, clamp 1.1875rem to 1.3125rem, 1.6): reading text, in a column of at most 42rem. Lead
  paragraphs step up to clamp 1.15rem to 1.5rem at 1.4 to 1.45.
- **Label** (400 or 600, 0.95rem): navigation, footer, buttons, table cells, "more" links.
- **Mono** (0.9em of its context): code, commands, and what whisper heard.

Inside a window mockup, sizes follow macOS rather than this scale (an 0.8rem title, 0.68rem tab
labels, 1.05rem secondary text), so the windows read at the platform's own proportions.

### Named Rules

**The Sentence Case Rule.** Headings are sentence case at weight 600, balanced with `text-wrap:
balance`. No italic accent word, no eyebrow above, no all-caps label.

**The Lowercase Name Rule.** "peluni" is lowercase everywhere, including at the start of a heading.

## Layout

One column of 64rem (`max-w-5xl`) centered with a 16px gutter (24px from 640px). Text inside it stays
at 42rem unless a section is wide (the cleanup table, the vocabulary window beside its sentence, the
build steps in two columns). Every section shares the column's left edge.

Sections are separated by space, not boxes: 96px above a home section, 128px from 640px. The privacy
band is the one full-bleed block. Sub-pages are a 42rem reading column with an "On this page" list
beside it from 1024px, sticky, set off by a hairline on its left. On a phone that list sits above the
text between two rules, or is hidden.

Everything works at 390px with no sideways scroll (`overflow-x: clip` on the body). Because that
clip hides overflow instead of scrolling it, components must reflow at large text sizes: inline
code breaks anywhere when it has to, toolbar titles truncate before their controls do, and the
listening row wraps the overlay under the cursor. Wide tables scroll inside their own container and set figures tabular, so sizes line up. Paragraphs
and list items use `text-wrap: pretty` and `overflow-wrap: break-word`, and list columns can shrink
(`minmax(0, 1fr)`), so a long ID or path breaks instead of pushing past the edge.
Standalone links and buttons are at least 44px tall (the desktop "On this page" list is the one
exception, at 28px).

## Elevation & Depth

The paper is flat. Depth exists only where something is a window or floats above the page: windows
get one shadow stack, glass gets a rim and a soft drop. Everything else is separated by hairlines or
space.

### Shadow Vocabulary

- **Window** (`inset 0 1px 0 window-rim, 0 0 0 1px rgb(0 0 0 / 0.08), 0 34px 70px -30px rgb(0 0 0 / 0.5), 0 12px 24px -14px rgb(0 0 0 / 0.28)`):
  macOS window mockups. Plain black, so it reads in both themes. The inner top rim is invisible on
  paper and a faint 8% white on charcoal, so a dark window's edge doesn't sink into the page.
- **Glass** (`inset 0 1px 0 glass-rim, inset 0 0 0 1px glass-edge, 0 6px 16px -8px rgb(0 0 0 / 0.3)`):
  the material's specular top rim and hairline edge, plus a small drop. Toolbar control capsules.
- **Floating glass** (glass rim and edge with `0 28px 56px -24px rgb(0 0 0 / 0.5)`): the consent panel
  and the Wi-Fi module, which hover higher.
- **Overlay** (`0 14px 30px -12px rgb(0 0 0 / 0.5)` plus a 1px inset white/25 ring): the recording
  overlay pill.
- **Keycap** (`inset 0 -2px 0 hairline, 0 1px 0 hairline`): a flat key with a deeper bottom edge.

### Liquid Glass

Glass is `backdrop-filter: blur(16px) saturate(1.8)` over a thin tint, with a bright 1px top rim and a
dark 1px edge instead of a border. It is used on:

- **Toolbar controls:** a 32px capsule grouping icon buttons at the right of an app window (Reminders).
- **The header**, from 640px, where it is sticky and the page scrolls under it. On a phone it is flat
  paper, because it scrolls away and there is nothing to blur.
- **The consent panel**, a floating corner panel from 640px and a bottom bar on a phone, at a 93% tint
  so it stays one even surface over the dark band.
- **Control Center's Wi-Fi module**, floating over the Messages window's corner and the dark band.

The dark tints are defined once (`--glass-dark`, `--glass-strong-dark`, `--glass-panel-dark` and their
rim and edge) and used by both the dark theme and the dark band. In forced-colors mode, where
backgrounds and shadows are dropped, windows and glass get a 1px `CanvasText` outline, and the
recording overlay opts out (`forced-color-adjust: none`) to stay a dark capsule.

Under `prefers-reduced-transparency: reduce` or `prefers-contrast: more`, and where `backdrop-filter`
isn't supported, every glass surface becomes solid Window White (or charcoal), as macOS does. No
gradients, colored glows or noise.

### Named Rules

**The Only Windows Lift Rule.** A shadow means "this is a macOS window, or it floats above the page".
If it isn't one, it is flat.

**The Glass Is Platform Rule.** Glass appears only where macOS puts it, and only as much as macOS
shows. If it draws attention to itself, there is too much. The recording overlay stays solid, because
the real one is.

## Shapes

Small radii on the page, platform radii on what belongs to macOS. Keycaps and the default chip use
6px; the focus ring uses 4px on links and follows a component's own radius elsewhere. Windows are
24px, as macOS 27 draws them. Floating glass is concentric with what it holds: the consent panel is
28px, and the Wi-Fi module (12px padding around a 64px round toggle) is 38px. Capsules are for macOS
parts only: the recording overlay, toolbar control groups and the consent panel's buttons. Lists and
tables are ruled: a 70%-ink rule at top and bottom, hairlines between rows.

## Components

### Buttons

macOS 27 alert buttons. There is one button group on the site, in the consent panel.

- **Shape:** capsule (full radius), 44px tall, 16px side padding, sans 600 at 0.875rem.
- **Primary:** Ink fill, Paper text. Hover drops to 85% opacity.
- **Secondary:** an 8% Ink tint with no border (13% on hover), Ink text.
- **Focus:** a 2px Ink outline, 3px offset, following the capsule. Always visible.
- **Edges:** both carry a transparent 1px border, which forced-colors mode turns into a visible edge.
- **Wrapping:** equal widths when they fit side by side; they stack when the text is too large.
- **No hover lift.**

### Consent panel

A floating glass panel from 640px, a bottom bar on a phone. It is capped at 45% of the viewport
height; past that, its sentence scrolls inside it and the buttons stay in view.

### Appearance switch (signature)

macOS's Appearance choice (Auto, Light, Dark) as a segmented control at the right of the header (on
a phone, beside the wordmark). Three 44px segments on an 6% Ink track; icons drawn after
`circle.lefthalf.filled`, `sun.max` and `moon` at 18px, 60% Ink at rest, full Ink when chosen. A round
thumb (white on paper, 17% white on charcoal, with the glass rim) marks the pick.

- **Motion:** the thumb's two edges slide on a damped spring (damping ratio 0.8, about 1.5% overshoot,
  sampled into `linear()`; `cubic-bezier(0.3, 1.15, 0.5, 1)` where `linear()` isn't supported), the
  leading edge in 0.36s and the trailing edge in 0.46s after 0.02s. It stretches toward the new segment
  (to about 49px for one step, 62px for two) and settles at 36px. The chosen icon then moves like its SF Symbol: the sun's rays turn in, the moon
  rocks into place, the half circle turns over. The page crossfades in 0.32s through a View
  Transition, with the switch excluded so its slide stays visible. No motion on page load, and none
  under reduced motion.
- **Mechanics:** plain radios, so click, tap and arrow keys work before any bundle loads. An inline
  script in `<head>` (`lib/appearance-script.ts`) sets `data-appearance` and `data-theme` on `<html>`
  before the first paint; dark tokens apply under `:root[data-theme="dark"]`. Auto follows the Mac live.
  Without JavaScript the switch is hidden and a `<noscript>` style, generated at build time from the
  same dark token block (`lib/no-script-dark.ts`), follows the Mac's setting.
- **Forced colors:** the track gets a `CanvasText` outline, the thumb is drawn in `Highlight` and the
  chosen icon in `HighlightText`, so the pick stays visible.

### Skip link

"Skip to content", hidden until focused, then an Ink capsule at the top left that moves focus to
`<main>`.

### Links

Underlined text, never a button, styled once by `.link` in `globals.css`: the underline sits 4px below
the baseline at 40% of the text's own color (so it works on muted text and in the dark band) and goes
to full strength on hover, and on the header link for the current page, which is also semibold.

### Chips

- **Default chip:** Marker Teal fill, `--rec-foreground` text (Ink in both themes), 6px radius, sans 600 at
  0.875rem. Used once, on the cleanup table's default level.

### Keycap

A `<kbd>` on Window White with a Hairline border, 6px radius and the keycap shadow. Mono at 0.85em; in
the h1 it switches to sans at 0.4em so Right ⌥ reads as a key inside the headline.

### Windows

- **Corner style:** 24px, content clipped.
- **Background:** Window White (dark #262924). The Messages window stays light in both themes.
- **Shadow:** the Window stack.
- **Toolbar** (`components/WindowChrome.tsx`): 52px tall with no divider below it. Traffic lights
  (12px, 8px apart) sit inset from the corner, with the title beside them in sans 600 at 0.85rem. A
  Settings window centers its title instead and draws the zoom light disabled. Controls float at the
  right on a glass capsule.
- **Settings tabs:** the app's five tabs (General, Models, Vocabulary, Permissions, Advanced), each an
  icon drawn after its SF Symbol over a 0.68rem label; the open tab gets a 7% Ink highlight.
- **Content:** 24px padding (48px from 640px), rows divided by Hairlines.
- Every window carries a label saying what it shows (`aria-label` from the copy).

### Control Center module

The Wi-Fi module floats over the Messages window's top-right corner on light glass: a round toggle
(grey because Wi-Fi is off, plain Wi-Fi glyph) beside "Wi-Fi" in sans 600 and "Off" in secondary
grey. It overlaps the window by 12px on a phone and 44px from 640px, so the glass has the window
edge and the dark band to blur.

### Navigation

The wordmark at the left, sans links at 0.95rem at the right, wrapping onto a second row on a phone.
From 640px the header is sticky on glass and section anchors leave 80px for it. A Hairline under the
header and over the footer. The footer repeats every page as a link list and ends
with two Muted Ink lines.

### Recording Overlay (signature)

peluni's real overlay, drawn to match `OverlayView.swift`: a 40px Overlay Black capsule with a faint
white inner ring, 24 level bars (14 on a phone) breathing on overlapping 2/3/5/7 delays, and the label
"Listening…  (esc to cancel)". Dark in both themes. It is the one component that must stay true to the
app over any page style.

### The Marker (signature)

Words peluni put there get a Marker Teal underline 0.18em thick, offset upward so it sits through the
lower part of the letters like a highlighter stroke, with the text keeping its own Ink. Used on the
reminder that just landed and on vocabulary terms in the corrected sentence.

## Do's and Don'ts

### Do:

- **Do** keep body text full Ink at 1.1875rem or more, in a column of 42rem at most.
- **Do** use Marker Teal as a fill or stroke for something peluni did, and nowhere else.
- **Do** build window chrome from `WindowChrome.tsx`: 24px corners, no divider, inset traffic lights,
  the Window shadow and a label.
- **Do** check mockups against the app's source (tab names, labels like `sounds like: pell oony`).
- **Do** stop every looping animation under `prefers-reduced-motion: reduce`.
- **Do** check light, dark, 390px and reduced motion before calling a visual change done.
- **Do** keep Liquid Glass to toolbar controls, floating panels and modules, and the sticky header,
  with the solid fallback for reduced transparency and increased contrast.

### Don't:

- **Don't** use gradients, gradient text, glow blobs, mesh or noise backgrounds, or colored shadows.
- **Don't** add eyebrow labels, hero pill badges, trust-chip rows, icon-card grids, bento grids,
  section numbers, a final CTA band or a giant footer wordmark.
- **Don't** put a card or shadow on anything that isn't a window or a floating panel.
- **Don't** use capsules outside macOS parts; no pill labels or badges.
- **Don't** put glass on paper, a section, or the phone header where nothing scrolls under it.
- **Don't** fade sections up on scroll, add marquees or lift things on hover.
- **Don't** put glass on the recording overlay; the real one is solid.
- **Don't** redraw, recolor or relock the logomark and wordmark.
