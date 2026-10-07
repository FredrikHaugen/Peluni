import { Chapter } from "@/components/Chapter";
import { MoreLink } from "@/components/MoreLink";
import { Toolbar } from "@/components/WindowChrome";
import { WORDS } from "@/lib/content";

// Mark every vocabulary term (and alias) inside a line of text.
function withTerms(text: string, terms: readonly string[], className: string) {
  const pattern = new RegExp(`(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
  return text.split(pattern).map((part, i) =>
    i % 2 ? (
      <mark key={i} className={className}>
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

// The Settings tab icons, drawn after the SF Symbols SettingsView.swift names: gear,
// square.and.arrow.down, character.book.closed, lock.shield, wrench.and.screwdriver.
const TAB_ICONS: Record<string, React.ReactNode> = {
  General: (
    <>
      <circle cx="10" cy="10" r="2.6" />
      <path d="M10 2.8v2M10 15.2v2M2.8 10h2M15.2 10h2M4.9 4.9l1.4 1.4M13.7 13.7l1.4 1.4M4.9 15.1l1.4-1.4M13.7 6.3l1.4-1.4" />
      <circle cx="10" cy="10" r="5.4" />
    </>
  ),
  Models: (
    <>
      <path d="M7 7.5H5.5a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V9a1.5 1.5 0 0 0-1.5-1.5H13" />
      <path d="M10 3v9M7 9.2l3 3 3-3" />
    </>
  ),
  Vocabulary: (
    <>
      <path d="M5 3.5h9.5v13H5a1.5 1.5 0 0 1-1.5-1.5V5A1.5 1.5 0 0 1 5 3.5z" />
      <path d="M3.5 14.5A1.5 1.5 0 0 1 5 13h9.5" />
      <path d="M7 11l2-5 2 5M7.7 9.4h2.6" />
    </>
  ),
  Permissions: (
    <>
      <path d="M10 2.8l6 2.2v4.6c0 3.6-2.6 6.4-6 7.6-3.4-1.2-6-4-6-7.6V5z" />
      <rect x="7.4" y="9" width="5.2" height="4" rx="0.8" />
      <path d="M8.4 9V7.9a1.6 1.6 0 0 1 3.2 0V9" />
    </>
  ),
  Advanced: (
    <>
      <path d="M12.6 3.3a3.4 3.4 0 0 0-3.9 4.6L3.6 13a1.4 1.4 0 0 0 2 2l5.1-5.1a3.4 3.4 0 0 0 4.6-3.9l-2 2-1.9-.4-.4-1.9z" />
      <path d="M14 13.5l2.5 2.5M12.2 15.3l1.8-1.8" />
    </>
  ),
};

// The Settings toolbar: each tab an icon over its name, the open one on a soft highlight.
function SettingsTabs() {
  return (
    <div aria-hidden="true" className="flex justify-center gap-0.5 px-2 pb-3">
      {WORDS.tabs.map((tab) => (
        <span
          key={tab}
          className={`flex min-w-0 flex-col items-center gap-0.5 rounded-[0.6rem] px-1.5 py-1 text-[0.68rem] font-medium ${
            tab === WORDS.vocabTitle ? "bg-foreground/[0.07] text-foreground" : "text-foreground/60"
          }`}
        >
          <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            {TAB_ICONS[tab]}
          </svg>
          {tab}
        </span>
      ))}
    </div>
  );
}

// The vocabulary's one job: your words in Settings, and the sentence that comes out spelled right.
export function Words() {
  return (
    <Chapter id="vocabulary" title={WORDS.title} wide className="pt-20 sm:pt-28">
      <figure aria-label={WORDS.vocabTitle} className="mt-8 grid items-start gap-10 lg:grid-cols-[24rem_minmax(0,1fr)] lg:gap-14">
        {/* The Vocabulary tab in Settings: each word once, with what whisper tends to hear instead. */}
        <div className="window-shadow overflow-hidden rounded-[1.5rem] bg-card font-sans">
          <Toolbar title={WORDS.vocabTitle} center zoomDisabled className="h-11" />
          <SettingsTabs />
          <ul aria-label={WORDS.vocabTitle} className="divide-y divide-border">
            {WORDS.terms.map((entry) => (
              <li key={entry.term} className="flex items-baseline justify-between gap-4 px-5 py-3">
                <span className="font-semibold">{entry.term}</span>
                <span className="truncate text-[0.95rem] text-muted">{entry.soundsLike.length > 0 ? `${WORDS.soundsLikeLabel}: ${entry.soundsLike.join(", ")}` : ""}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="pt-1 font-sans text-[1.05rem] text-muted">
            {WORDS.heardLabel}: <span className="font-mono text-[1.1rem] text-foreground">{WORDS.heard}</span>
          </p>
          <p className="mt-3 text-[clamp(1.8rem,1.2rem+2.2vw,2.75rem)] leading-[1.15] tracking-[-0.02em]">
            {withTerms(WORDS.typed, WORDS.terms.map((t) => t.term), "selected")}
          </p>
          <p className="mt-6 max-w-xl">{WORDS.vocabBody}</p>
        </div>
      </figure>

      <MoreLink {...WORDS.more} />
    </Chapter>
  );
}
