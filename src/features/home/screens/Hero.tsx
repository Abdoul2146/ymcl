import Image from "next/image";
import Link from "next/link";
import "../styles/home.css";

export function Hero() {
  return (
    <section className="min-h-[560px] md:min-h-[640px] flex items-center bg-surface-container-low dark:bg-surface-container overflow-hidden home-hero-gradient">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 w-full py-16 md:py-24">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <div className="rounded-2xl p-6 md:p-8 dark:bg-white/95 shadow-sm">
            <Image
              src="/logo-nobg.png"
              alt="Yarima Multi Concept Limited"
              width={320}
              height={320}
              preload
              sizes="(max-width: 767px) 220px, 300px"
              className="w-[220px] md:w-[300px] h-auto object-contain"
            />
          </div>

          <span className="text-[14px] font-semibold uppercase tracking-wider text-secondary dark:text-secondary-fixed">
            Yarima Multi Concept Limited
          </span>

          <h1 className="text-[32px] md:text-[48px] font-extrabold leading-[40px] md:leading-[56px] tracking-tight text-primary dark:text-on-surface">
            Multiple Solutions.
            <br />
            Endless Possibilities.
          </h1>

          <div className="h-1 w-10 rounded-full bg-[#d4af37]" />

          <p className="text-[18px] leading-7 font-medium text-on-surface dark:text-neutral-300 max-w-[560px]">
            A diversified holding delivering institutional-grade services across agriculture, international trade,
            construction, and general contracting with absolute reliability.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="bg-primary text-on-primary dark:bg-primary-fixed dark:text-on-primary-fixed font-semibold text-[14px] uppercase tracking-wider px-8 py-4 rounded hover:opacity-90 transition-opacity"
            >
              Request a Quote
            </Link>
            <Link
              href="/services"
              className="bg-transparent text-primary dark:text-primary-fixed border border-primary dark:border-primary-fixed font-semibold text-[14px] uppercase tracking-wider px-8 py-4 rounded hover:bg-surface-variant dark:hover:bg-primary-container/30 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
