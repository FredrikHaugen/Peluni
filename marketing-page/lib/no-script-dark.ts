import { readFileSync } from "node:fs";
import { resolve } from "node:path";

// With JavaScript off, lib/appearance-script.ts never sets data-theme, so nothing would turn the page
// dark. This builds a <noscript> style from the one dark token block in app/globals.css (read at build
// time, so the tokens stay defined once) that follows the Mac's setting instead.
function block(css: string, selector: string) {
  const start = css.indexOf(`${selector} {`);
  if (start < 0) throw new Error(`no-script-dark: "${selector}" not found in app/globals.css`);
  const open = css.indexOf("{", start) + 1;
  return css.slice(open, css.indexOf("}", open)).trim();
}

export function noScriptDarkCss() {
  const css = readFileSync(resolve(process.cwd(), "app/globals.css"), "utf8");
  const root = block(css, ':root[data-theme="dark"]');
  const band = block(css, ':root[data-theme="dark"] .band-dark');
  return (
    `@media (prefers-color-scheme: dark){` +
    `:root:not([data-theme]){${root} color-scheme: dark;}` +
    `:root:not([data-theme]) .band-dark{${band}}}`
  );
}
