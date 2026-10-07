import { APPEARANCE } from "@/lib/site";

// Drawn after the SF Symbols macOS uses for these choices: circle.lefthalf.filled, sun.max, moon.
// The parts carry the classes their pick animation moves (app/globals.css).
const ICONS: Record<(typeof APPEARANCE.options)[number]["value"], React.ReactNode> = {
  auto: (
    <>
      <circle cx="10" cy="10" r="6.75" />
      <path className="sym-half" d="M10 3.25a6.75 6.75 0 0 0 0 13.5z" fill="currentColor" stroke="none" />
    </>
  ),
  light: (
    <>
      <circle className="sym-core" cx="10" cy="10" r="3.4" />
      <g className="sym-rays">
        <path d="M10 2.2v1.9M10 15.9v1.9M2.2 10h1.9M15.9 10h1.9M4.5 4.5l1.35 1.35M14.15 14.15l1.35 1.35M4.5 15.5l1.35-1.35M14.15 5.85l1.35-1.35" />
      </g>
    </>
  ),
  dark: <path className="sym-moon" d="M15.9 12.6A6.6 6.6 0 0 1 7.4 4.1a6.6 6.6 0 1 0 8.5 8.5z" />,
};

// macOS's Appearance choice as a segmented control: plain radios, so it works by click, tap and arrow
// keys before any JavaScript bundle loads. lib/appearance-script.ts checks the current pick and applies
// a change; the thumb's position comes from <html data-appearance>, so CSS draws it from the first paint.
export function AppearanceSwitch({ className = "" }: { className?: string }) {
  return (
    <fieldset className={`appearance relative m-0 flex h-11 min-w-0 shrink-0 rounded-full border-0 bg-foreground/[0.06] p-0 ${className}`}>
      <legend className="sr-only">{APPEARANCE.legend}</legend>
      <span aria-hidden="true" className="appearance-thumb" />
      {APPEARANCE.options.map((option) => (
        <label
          key={option.value}
          title={option.label}
          className="appearance-option relative flex w-11 cursor-pointer items-center justify-center rounded-full text-foreground/60 transition-colors hover:text-foreground/85"
        >
          <input type="radio" name="appearance" value={option.value} className="sr-only" />
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="h-[18px] w-[18px] overflow-visible"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {ICONS[option.value]}
          </svg>
          <span className="sr-only">{option.label}</span>
        </label>
      ))}
    </fieldset>
  );
}
