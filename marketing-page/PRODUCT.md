# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: Mac users who care where their audio goes and want dictation that never leaves the
machine. Many are technical enough to open the README and check whether a sentence is true. Right
now they read the site, watch the GitHub repo for a release, and install when one ships.

Secondary: developers who build peluni from source today (`make run`) and may contribute.

## Product Purpose

The site explains peluni, a fully local voice dictation app for macOS (hold Right ⌥, speak,
release, and text is pasted where the cursor is), well enough that a skeptical reader trusts it and
acts on it.

Success before 1.0 means all of these:

- visitors watch or star the GitHub repo so they hear about the first release;
- some visitors build it from source today;
- the site ranks in search, and AI answers cite it, for local and private dictation on the Mac;
- a skeptical reader who checks a claim against the code or README finds it true.

## Positioning

Every byte of audio and text is processed on the Mac: whisper.cpp (Metal) for transcription and a
small local LLM on Apple MLX for cleanup. There's no cloud, no account and no telemetry in the app.
The only network use is downloading models from Hugging Face when the user asks. Cloud dictation
tools can't truthfully say that.

Competitors such as Wispr Flow may be named, but only in a factual statement a reader can check
(for example, where audio is processed). Don't disparage them or compare them on taste.

## Operating Context

- peluni is a menu-bar app (no Dock icon). It shows a floating overlay with a live waveform while
  listening and pastes into the focused app with a synthesized ⌘V, then restores the clipboard.
- Readers judge it against the README, `docs/PROJECT.md`, the source on GitHub and, later, the
  GitHub release page (DMG, `.sha256`, notarization).
- The site is static (Next.js 16, `output: "export"`) on Vercel at peluni.app. It makes no
  third-party requests, except Microsoft Clarity and Google Analytics after the visitor opts in.

## Capabilities and Constraints

- Version 0.0.1, in development, not released. There's no DMG and no Download button until the
  first release is on GitHub.
- Runs on macOS 14 or later, Apple Silicon only (M1 or later). Intel Macs aren't supported.
- Building from source needs macOS 15.2 or later and Xcode 16.3 or later.
- Free before 1.0. Some form of payment from 1.0, details undecided. MIT license.
- Autocomplete is experimental and shows no suggestions yet.
- Every product claim needs a source listed in `.claude/rules/FACTS.md`. The page's numbers are
  tested against `../README.md` and `../docs/PROJECT.md`.

## Brand Commitments

- The name is "peluni", always lowercase.
- Voice, rhythm and banned constructions: `.claude/rules/TOV.md`. Visual identity:
  `.claude/rules/BRAND.md` and `app/globals.css`. Review checklist: `.claude/rules/AI-TELLS.md`.
  Those files are binding.
- The logomark (`../brand/logomark.svg`, `components/Logomark.tsx`) and the wordmark
  (`components/Wordmark.tsx`) stay as they are.
- First-person copy only in a note written and signed by Fredrik Haugen, the maker. Claude never
  drafts it.

## Evidence on Hand

- The source code, README, `docs/PROJECT.md`, `CHANGELOG.md` and the MIT `LICENSE` in the parent
  repo.
- Exact sizes and limits: speech models 78 MB to 1.6 GB (Base, 148 MB, is the recommended start),
  cleanup model 0.7 GB or 2.3 GB, cleanup gives up after 10 s, taps under 0.3 s are ignored.
- The share image `app/opengraph-image.png`, the icon `app/icon.svg`, and labeled HTML mockups of
  the app.
- Absent, never to be invented: testimonials, user counts, ratings, logo walls, press, benchmarks
  beyond what the docs state, and real screenshots or recordings (prefer them once they exist).

## Product Principles

1. Every claim can be checked. A wrong claim costs a privacy tool its readers for good.
2. Specifics over adjectives: the number, the limit, the behavior.
3. Limits stay visible (Intel Macs, version 0.0.1, the cleanup timeout).
4. The site respects the reader the way the app does: no third-party requests without consent and
   nothing that tracks before opt-in.
5. Nothing should read as generated. The page shows a person built it.

## Accessibility & Inclusion

Text pairs reach 4.5:1 in light and dark, focus rings stay visible, looping animations stop under
`prefers-reduced-motion`, and every page works at 390 px with no sideways scroll. Tests enforce all
of these.
