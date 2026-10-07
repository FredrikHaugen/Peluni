import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { NOT_FOUND } from "@/lib/content";
import { SITE } from "@/lib/site";

// A 404 inside the site's frame: the header and footer lead back in, and the appearance switch still
// works. One short section, so the static 404.html stays small. Not indexed.
export const metadata: Metadata = {
  title: `${NOT_FOUND.title}: ${SITE.name}`,
  robots: { index: false },
};

export default function NotFound() {
  return (
    <PageShell path="">
      <section className="px-4 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-[clamp(2.4rem,1.6rem+3vw,3.6rem)] leading-[1.05] tracking-[-0.02em]">{NOT_FOUND.title}</h1>
          <p className="mt-5 max-w-2xl">{NOT_FOUND.body}</p>
          {/* Plain link: each page is a static file. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/" className="link mt-8 inline-flex min-h-11 items-center font-sans text-[1.05rem] font-semibold">
            {NOT_FOUND.home}
          </a>
        </div>
      </section>
    </PageShell>
  );
}
