// The top of a macOS 27 window: no title-bar divider, the traffic lights inset from the larger corner,
// the title beside them, and toolbar controls floating at the right on Liquid Glass. Content scrolls
// under it, so it sits on the window's own surface rather than a strip of its own.

// A Settings window can't zoom, so macOS draws its green light disabled.
export function TrafficLights({ zoomDisabled = false }: { zoomDisabled?: boolean }) {
  return (
    <span aria-hidden="true" className="flex shrink-0 gap-2">
      <span className="h-3 w-3 rounded-full bg-[#ff5f57] shadow-[inset_0_0_0_0.5px_rgb(0_0_0/0.18)]" />
      <span className="h-3 w-3 rounded-full bg-[#febc2e] shadow-[inset_0_0_0_0.5px_rgb(0_0_0/0.18)]" />
      <span
        className={`h-3 w-3 rounded-full shadow-[inset_0_0_0_0.5px_rgb(0_0_0/0.18)] ${zoomDisabled ? "bg-foreground/20" : "bg-[#28c840]"}`}
      />
    </span>
  );
}

export function Toolbar({
  title,
  center = false,
  zoomDisabled = false,
  trailing,
  className = "",
}: {
  title: string;
  /** Settings windows center their title; app windows set it beside the traffic lights. */
  center?: boolean;
  zoomDisabled?: boolean;
  trailing?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative flex h-13 items-center gap-4 px-4 ${className}`}>
      <TrafficLights zoomDisabled={zoomDisabled} />
      <p
        className={
          center
            ? "absolute inset-x-24 text-center text-[0.8rem] font-semibold text-foreground/80"
            : "min-w-0 truncate text-[0.85rem] font-semibold text-foreground/85"
        }
      >
        {title}
      </p>
      {trailing && <div className="ml-auto shrink-0">{trailing}</div>}
    </div>
  );
}

// A group of toolbar buttons on one capsule of glass, the way macOS 27 clusters them.
export function GlassControls({ children }: { children: React.ReactNode }) {
  return (
    <span aria-hidden="true" className="glass flex h-8 items-center rounded-full px-1 text-foreground/80">
      {children}
    </span>
  );
}

export function ToolbarIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 20 20" className="mx-1.5 h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}
