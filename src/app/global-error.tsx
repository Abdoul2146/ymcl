"use client";

import { useEffect } from "react";
import "./globals.css";

export default function GlobalError({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => {
    const stored = localStorage.getItem("ymcl-theme");
    const dark = stored === "dark" || (stored !== "light" && matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", dark);
    console.error("[ui] Application rendering failed", error.digest ?? error.name);
  }, [error]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-on-background">
        <title>Application Error | YMCL</title>
        <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-start justify-center px-5 py-20 md:px-16">
          <h1 className="text-[32px] font-extrabold leading-10 text-primary dark:text-on-surface md:text-[48px]">YMCL is temporarily unavailable</h1>
          <p className="mt-5 text-[18px] leading-7 text-on-surface dark:text-neutral-300">Please try loading the website again.</p>
          <button type="button" onClick={retry} className="mt-8 rounded bg-primary px-6 py-3 font-semibold text-on-primary">Try Again</button>
        </main>
      </body>
    </html>
  );
}
