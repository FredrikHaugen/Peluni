import { OverlayPill } from "@/components/OverlayPill";
import { GlassControls, Toolbar, ToolbarIcon } from "@/components/WindowChrome";
import { USING } from "@/lib/content";

function Check() {
  return <span aria-hidden="true" className="mt-[0.3em] h-[1.1em] w-[1.1em] shrink-0 rounded-full border-[1.5px] border-foreground/35" />;
}

// The hero scene: Reminders, mid-session. The last thing you said has landed as a reminder, cleaned up
// and still marked as just arrived, with what whisper heard set right under it, fillers struck through.
// You're already saying the next one: a new row waits with the cursor, the overlay listening beside it.
export function Take() {
  const { window: w } = USING;
  const raw = w.raw.split(" ");
  return (
    <figure aria-label={USING.sceneLabel} className="window-shadow mt-12 overflow-hidden rounded-[1.5rem] bg-card font-sans">
      <Toolbar
        title={w.app}
        className="px-5 pt-1"
        trailing={
          <GlassControls>
            {/* Show completed, then add a reminder. */}
            <ToolbarIcon>
              <circle cx="10" cy="10" r="6.5" />
              <path d="M7.2 10.2l1.9 1.9 3.8-4" />
            </ToolbarIcon>
            <ToolbarIcon>
              <path d="M10 4.5v11M4.5 10h11" />
            </ToolbarIcon>
          </GlassControls>
        }
      />
      <div className="px-6 pb-7 pt-2 sm:px-12 sm:pt-3">
        <p className="text-[clamp(1.6rem,1.3rem+1.2vw,2.3rem)] font-bold tracking-[-0.01em]">{w.list}</p>
        <ul className="mt-3 text-[clamp(1.1rem,0.95rem+0.6vw,1.45rem)]">
          {w.earlier.map((item) => (
            <li key={item} className="flex gap-3 border-b border-border py-3">
              <Check />
              {item}
            </li>
          ))}
          {/* The one that just landed, and what whisper heard for it. */}
          <li className="flex gap-3 border-b border-border py-3">
            <Check />
            <span>
              <span className="selected">{w.text}</span>
              <span data-scene="raw" className="mt-1.5 block font-mono text-[0.72em] text-muted">
                {w.heardLabel}:{" "}
                {raw.map((word, i) => (
                  <span key={i}>
                    {i > 0 && " "}
                    {(w.dropped as readonly number[]).includes(i) ? <s className="decoration-foreground">{word}</s> : word}
                  </span>
                ))}
              </span>
            </span>
          </li>
          {/* The next one, while you say it. */}
          <li className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-3">
            <span aria-hidden="true" className="h-[1.1em] w-[1.1em] shrink-0 rounded-full border-[1.5px] border-foreground/35" />
            <span aria-hidden="true" className="caret inline-block h-[1.1em] w-[2px] bg-foreground" />
            <span className="ml-3 max-w-full">
              <OverlayPill />
            </span>
          </li>
        </ul>
      </div>
    </figure>
  );
}
