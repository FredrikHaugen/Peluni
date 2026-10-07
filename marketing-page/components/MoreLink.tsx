// A section's way to the page that covers it in depth.
export function MoreLink({ text, href }: { text: string; href: string }) {
  return (
    <p className="mt-6 font-sans text-[1.05rem]">
      <a href={href} className="inline-flex min-h-11 items-center underline decoration-foreground/40 underline-offset-4 hover:decoration-foreground">
        {text}
      </a>
    </p>
  );
}
