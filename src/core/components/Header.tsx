"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/core/providers/theme-provider";
import { cn } from "@/core/lib/cn";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    firstMobileLinkRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      menuButtonRef.current?.focus();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-surface/90 dark:bg-background/90 backdrop-blur-md border-b border-outline-variant/30 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="flex justify-between items-center px-5 md:px-16 h-20 max-w-[1280px] mx-auto">
        <Link href="/" className="flex items-center shrink-0" aria-label="YMCL home">
          <span className="flex items-center justify-center rounded-sm transition-all dark:bg-white dark:p-1.5 dark:shadow-sm">
            <Image
              src="/logo-nobg.png"
              alt="YMCL Logo"
              width={64}
              height={64}
              className="h-12 lg:h-14 w-auto object-contain"
              loading="eager"
            />
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className={cn(
            "hidden lg:flex items-center gap-6 transition-colors",
            scrolled || open ? "" : ""
          )}
        >
          {NAV.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-[14px] font-medium uppercase tracking-wider px-2 py-1 rounded transition-colors",
                  active
                    ? "text-primary dark:text-primary-fixed border-b-2 border-secondary font-bold"
                    : "text-black hover:text-primary dark:text-neutral-200 dark:hover:text-primary-fixed"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={theme === "dark"}
            className="w-10 h-10 rounded-full border border-outline flex items-center justify-center text-on-surface dark:text-neutral-200 hover:bg-surface-container hover:border-outline transition-colors focus-visible:ring-2 ring-secondary"
          >
            <span className="material-symbols-outlined text-[20px] dark:hidden" aria-hidden="true">dark_mode</span>
            <span className="material-symbols-outlined hidden text-[20px] dark:inline" aria-hidden="true">light_mode</span>
          </button>
          <Link
            href="/contact"
            className="font-semibold text-[14px] uppercase tracking-wider px-6 py-3 rounded hover:opacity-90 transition-opacity bg-[#ffe088] text-[#241a00]"
          >
            Request a Quote
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={theme === "dark"}
            className="w-9 h-9 rounded-full border border-outline flex items-center justify-center text-on-surface dark:text-neutral-200 hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-[18px] dark:hidden" aria-hidden="true">dark_mode</span>
            <span className="material-symbols-outlined hidden text-[18px] dark:inline" aria-hidden="true">light_mode</span>
          </button>
          <button
            ref={menuButtonRef}
            onClick={() => setOpen((v) => !v)}
            className="text-primary dark:text-on-surface p-2"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="lg:hidden max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-outline-variant/30 bg-surface dark:bg-surface-container-low px-5 py-4 flex flex-col gap-2 shadow-md"
        >
          {NAV.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                ref={item.href === "/" ? firstMobileLinkRef : undefined}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  "py-2 px-3 rounded text-[14px] uppercase tracking-wider font-semibold",
                  active
                    ? "bg-primary text-on-primary"
                    : "text-black dark:text-neutral-200"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-center font-semibold text-[14px] uppercase tracking-wider px-6 py-3 rounded bg-[#ffe088] text-[#241a00]"
          >
            Request a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
