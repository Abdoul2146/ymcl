import Image from "next/image";
import Link from "next/link";
import heroImage from "../../../../assets/hero-section-image.png";
import "../styles/home.css";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-primary md:min-h-[640px]">
      <Image
        src={heroImage}
        alt=""
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-[52%_center] md:object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,19,47,0.58)_0%,rgba(0,25,61,0.52)_45%,rgba(0,8,23,0.78)_100%)]" />

      <div className="mx-auto w-full max-w-[1280px] px-5 py-16 md:px-16 md:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center text-white">
          <span className="text-[14px] font-semibold uppercase tracking-wider text-secondary-fixed">
            Yarima Multi Concept Limited
          </span>

          <h1 className="text-[32px] font-extrabold leading-[40px] tracking-tight text-white drop-shadow-sm md:text-[48px] md:leading-[56px]">
            Multiple Solutions.
            <br />
            Endless Possibilities.
          </h1>

          <div className="h-1 w-10 rounded-full bg-[#d4af37]" aria-hidden="true" />

          <p className="max-w-[620px] text-[18px] font-medium leading-7 text-white/90 drop-shadow-sm">
            A diversified holding delivering institutional-grade services across agriculture, international trade,
            construction, and general contracting with absolute reliability.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="rounded bg-secondary-fixed px-8 py-4 text-[14px] font-semibold uppercase tracking-wider text-on-secondary-fixed transition-colors hover:bg-secondary-fixed-dim"
            >
              Request a Quote
            </Link>
            <Link
              href="/services"
              className="rounded border border-white/80 bg-black/10 px-8 py-4 text-[14px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-primary"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
