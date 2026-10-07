import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PAGE_NAV } from "@/lib/content";

// The frame every page shares: the header (with the current page marked), the page, the footer.
export function PageShell({ path, children }: { path: string; children: React.ReactNode }) {
  return (
    <>
      {/* Hidden until a keyboard user tabs to it. */}
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-foreground px-4 py-2.5 font-sans text-sm font-semibold text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-3"
      >
        {PAGE_NAV.skip}
      </a>
      <Header current={path} />
      <main id="main" tabIndex={-1} className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
