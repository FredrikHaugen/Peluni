import { AppearanceSwitch } from "@/components/AppearanceSwitch";
import { Wordmark } from "@/components/Wordmark";
import { PAGES } from "@/lib/pages";

// min-h-11: a 44 px tap target on a phone, where these wrap onto their own rows.
const LINK = "link inline-flex min-h-11 items-center";

// The wordmark home, the main pages and the appearance switch. On a phone the switch shares the
// wordmark's row and the pages wrap onto a second one. From 640 px it stays at the
// top on glass, the navigation layer above the page, and the page scrolls under it.
export function Header({ current }: { current?: string }) {
  return (
    <header className="glass-header z-40 border-b border-border px-4 sm:sticky sm:top-0 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-0 py-2 sm:gap-x-5">
        {/* Plain links between pages: each page is a static file, and hydration waits for load anyway. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className="flex min-h-11 items-center rounded-sm">
          <Wordmark />
        </a>
        <nav aria-label="Main" className="order-3 flex basis-full flex-wrap items-center gap-x-5 gap-y-0 font-sans text-[0.95rem] sm:order-none sm:ml-auto sm:basis-auto">
          {PAGES.filter((p) => p.header).map((p) => (
            <a
              key={p.path}
              href={p.path}
              aria-current={p.path === current ? "page" : undefined}
              className={p.path === current ? `${LINK} font-semibold` : LINK}
            >
              {p.nav}
            </a>
          ))}
        </nav>
        <AppearanceSwitch className="order-2 sm:order-none" />
      </div>
    </header>
  );
}
