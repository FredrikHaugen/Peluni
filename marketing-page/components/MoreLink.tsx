// A section's way to the page that covers it in depth.
export function MoreLink({ text, href }: { text: string; href: string }) {
  return (
    <p className="mt-6 font-sans text-[1.05rem]">
      <a href={href} className="link inline-flex min-h-11 items-center">
        {text}
      </a>
    </p>
  );
}
