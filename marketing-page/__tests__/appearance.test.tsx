import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { AppearanceSwitch } from "@/components/AppearanceSwitch";
import { APPEARANCE_SCRIPT } from "@/lib/appearance-script";
import { PRIVACY } from "@/lib/pages/privacy";
import { APPEARANCE } from "@/lib/site";

const css = readFileSync(resolve(process.cwd(), "app/globals.css"), "utf8");

// jsdom has no matchMedia; this one reports the system as `systemDark` and never fires.
function stubSystem(systemDark: boolean) {
  vi.stubGlobal("matchMedia", (query: string) => ({
    matches: query.includes("dark") ? systemDark : false,
    addEventListener: () => {},
  }));
}

function runScript() {
  new Function(APPEARANCE_SCRIPT)();
  document.dispatchEvent(new Event("DOMContentLoaded"));
}

const html = document.documentElement;

describe("appearance switch", () => {
  beforeEach(() => {
    localStorage.clear();
    html.removeAttribute("data-theme");
    html.removeAttribute("data-appearance");
  });
  afterEach(() => vi.unstubAllGlobals());

  test("is a labeled group of radios named as in macOS", () => {
    render(<AppearanceSwitch />);
    const group = screen.getByRole("group", { name: APPEARANCE.legend });
    const radios = within(group).getAllByRole("radio");
    expect(radios.map((r) => r.getAttribute("value"))).toEqual(["auto", "light", "dark"]);
    for (const option of APPEARANCE.options) expect(within(group).getByRole("radio", { name: option.label })).toBeDefined();
  });

  test("follows the Mac on Auto and checks Auto", () => {
    stubSystem(true);
    render(<AppearanceSwitch />);
    runScript();
    expect(html.dataset.theme).toBe("dark");
    expect(html.dataset.appearance).toBe("auto");
    expect((screen.getByRole("radio", { name: "Auto" }) as HTMLInputElement).checked).toBe(true);
  });

  test("a stored pick wins over the system, and picking Auto forgets it", () => {
    stubSystem(false);
    localStorage.setItem(APPEARANCE.storageKey, "dark");
    render(<AppearanceSwitch />);
    runScript();
    expect(html.dataset.theme).toBe("dark");
    expect((screen.getByRole("radio", { name: "Dark" }) as HTMLInputElement).checked).toBe(true);

    fireEvent.click(screen.getByRole("radio", { name: "Light" }));
    expect(html.dataset.theme).toBe("light");
    expect(localStorage.getItem(APPEARANCE.storageKey)).toBe("light");

    fireEvent.click(screen.getByRole("radio", { name: "Auto" }));
    expect(html.dataset.theme).toBe("light");
    expect(localStorage.getItem(APPEARANCE.storageKey)).toBeNull();
  });

  test("the script only touches this origin's storage", () => {
    expect(APPEARANCE_SCRIPT).not.toMatch(/fetch|XMLHttpRequest|sendBeacon|https?:/);
  });

  test("the privacy page says what the switch stores", () => {
    const text = JSON.stringify(PRIVACY);
    expect(text).toContain("appearance switch");
    expect(text).toContain("local storage");
  });

  test("its motion stops for reduced-motion users", () => {
    const reduced = css.slice(css.indexOf("@media (prefers-reduced-motion: reduce)"));
    expect(reduced).toContain(".appearance-thumb");
    expect(APPEARANCE_SCRIPT).toContain("prefers-reduced-motion: reduce");
  });
});
