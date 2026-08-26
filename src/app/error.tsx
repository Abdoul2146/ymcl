"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => {
    console.error("[ui] Route rendering failed", error.digest ?? error.name);
  }, [error]);

  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center px-5 py-20 md:px-16">
      <h1 className="text-[32px] font-extrabold leading-10 text-primary dark:text-on-surface md:text-[48px]">Something went wrong</h1>
      <div className="my-6 h-1 w-10 rounded-full bg-gold" aria-hidden="true" />
      <p className="text-[18px] leading-7 text-on-surface dark:text-neutral-300">The page could not be displayed. Please try again.</p>
      <div className="mt-8 flex gap-3">
        <button type="button" onClick={retry} className="rounded bg-primary px-6 py-3 font-semibold text-on-primary">Try Again</button>
        <Link href="/" className="rounded border border-primary px-6 py-3 font-semibold text-primary dark:border-primary-fixed dark:text-primary-fixed">Return Home</Link>
      </div>
    </section>
  );
}
