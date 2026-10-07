import { Chapter } from "@/components/Chapter";
import { MoreLink } from "@/components/MoreLink";
import { OverlayPill } from "@/components/OverlayPill";
import { Toolbar } from "@/components/WindowChrome";
import { AUDIO } from "@/lib/content";
import { SITE } from "@/lib/site";

// The privacy claim as one picture, the page's only dark band. Control Center's Wi-Fi module, off, floats
// on glass over the corner of a Messages window, where a reply to Sam lands anyway while the overlay listens.
function WifiGlyph({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.5 16a5 5 0 0 1 7 0" />
      <circle cx="12" cy="19.5" r="1" fill="currentColor" />
    </svg>
  );
}

// Control Center's module: the round toggle, grey because Wi-Fi is off, and its label, concentric with the tile.
function WifiModule() {
  const { scene } = AUDIO;
  return (
    <div className="glass glass-light relative z-10 -mb-3 mr-3 ml-auto flex w-fit items-center gap-3 rounded-[2.1rem] p-2.5 pr-6 sm:gap-3.5 sm:rounded-[2.4rem] sm:p-3 sm:pr-7 font-sans text-(--mac-label) shadow-[inset_0_1px_0_var(--glass-rim),inset_0_0_0_1px_var(--glass-edge),0_24px_40px_-18px_rgb(0_0_0/0.55)] sm:mr-10 sm:-mb-11">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black/[0.09] sm:h-16 sm:w-16">
        <WifiGlyph className="h-6 w-6 sm:h-8 sm:w-8" />
      </span>
      <p>
        <span className="block text-[1.2rem] font-semibold leading-tight sm:text-[1.6rem]">{scene.wifi}</span>
        <span className="text-[1rem] text-(--mac-secondary) sm:text-[1.05rem]">{scene.wifiState}</span>
      </p>
    </div>
  );
}

function OfflineScene() {
  const { scene } = AUDIO;
  return (
    <figure aria-label={scene.label} className="mt-10">
      <WifiModule />
      {/* The reply landing in Messages anyway, while the overlay listens. Light appearance in both themes. */}
      <div className="window-shadow overflow-hidden rounded-[1.5rem] bg-overlay-foreground font-sans text-overlay [--foreground:var(--mac-label)]">
        <Toolbar title={`${scene.app} · ${scene.contact}`} className="px-5 pt-1" />
        <div className="px-8 pb-8 pt-6 sm:px-14 sm:pb-10 sm:pt-8">
          <p className="w-fit rounded-[1.1rem] bg-(--mac-bubble) px-4 py-2 text-[1.1rem]">{scene.incoming}</p>
          <p className="mt-6 max-w-4xl font-serif text-[clamp(1.5rem,1.2rem+1.4vw,2.4rem)] leading-[1.18] tracking-[-0.015em]">
            {scene.text}
            <span aria-hidden="true" className="caret ml-1 inline-block h-[1em] w-[2px] translate-y-[0.14em] bg-current" />
          </p>
          <div className="mt-6">
            <OverlayPill />
          </div>
        </div>
      </div>
    </figure>
  );
}

// The dark band: the claim at display size, then the scene that shows it.
export function Audio() {
  return (
    <Chapter id="privacy" title={AUDIO.title} wide hiddenTitle className="band-dark mt-24 pb-24 pt-20 sm:mt-32 sm:pb-32 sm:pt-28">
      <p className="max-w-4xl text-balance text-[clamp(2.4rem,1.5rem+3.8vw,4.75rem)] leading-[1.04] tracking-[-0.02em]">{AUDIO.display}</p>
      <OfflineScene />
      <p className="mt-10 max-w-3xl text-[clamp(1.2rem,1.05rem+0.6vw,1.5rem)] leading-[1.4]">
        {AUDIO.paragraphs[0]} {AUDIO.sourceBefore}{" "}
        <a href={SITE.repoUrl} className="underline decoration-foreground/40 underline-offset-4 hover:decoration-foreground">
          {AUDIO.sourceLink}
        </a>
        {AUDIO.sourceAfter}
      </p>
      <MoreLink {...AUDIO.more} />
    </Chapter>
  );
}
