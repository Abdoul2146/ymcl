import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center px-5 py-20 md:px-16">
      <p className="mb-3 font-semibold uppercase tracking-widest text-secondary dark:text-secondary-fixed">404</p>
      <h1 className="text-[32px] font-extrabold leading-10 text-primary dark:text-on-surface md:text-[48px] md:leading-[56px]">
        Page not found
      </h1>
      <div className="my-6 h-1 w-10 rounded-full bg-gold" aria-hidden="true" />
      <p className="max-w-xl text-[18px] leading-7 text-on-surface dark:text-neutral-300">
        The page may have moved or the address may be incorrect. You can return home or contact YMCL for assistance.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="rounded bg-primary px-6 py-3 font-semibold text-on-primary">Return Home</Link>
        <Link href="/contact" className="rounded border border-primary px-6 py-3 font-semibold text-primary dark:border-primary-fixed dark:text-primary-fixed">Contact YMCL</Link>
      </div>
    </section>
  );
}
