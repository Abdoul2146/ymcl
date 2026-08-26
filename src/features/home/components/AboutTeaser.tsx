import Image from "next/image";
import Link from "next/link";

export function AboutTeaser() {
  return (
    <section className="py-20 md:py-28 bg-surface dark:bg-background">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative h-[420px] rounded-xl overflow-hidden border border-outline-variant p-2 bg-white dark:bg-surface-container">
          <div className="relative h-full overflow-hidden rounded-lg">
            <Image
              fill
              sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1280px) 50vw, 576px"
              className="object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwG1b8yVDlQ8jjJpBFbzHa1Z6XpUd11TS6cZxIIgvhuUQZKxJ8wh-ICG8lyGceFJhlO_GzWhFtcEFyUDy_MdGoy9aFhqkKhEuXkdc17-0wrr8kOhp-_tEhvP6W-HPHK6LpwWBqW9b_PUn8ipnHlwGCYgKsK0__dB__njtV6KvIxd3eE23bvvSTzC2Mw_Lra2uRPvug5AzRpJLm2-jkRGgLHpLu-xb3-nuKXq-uBGDf8xEeWGuAuwyQCQ"
              alt="Executive boardroom"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-[32px] font-bold leading-10 text-primary dark:text-on-surface">
            One Company.
            <br />
            Multiple Capabilities.
          </h2>
          <div className="h-1 w-10 rounded-full" style={{ backgroundColor: "#d4af37" }} aria-hidden="true" />
          <p className="text-[16px] leading-6 text-on-surface dark:text-neutral-300">
            Yarima Multi Concept Limited stands as a pillar of reliability in the Nigerian business landscape. With a
            foundation built on integrity and operational excellence, we have diversified our portfolio to meet the
            complex demands of modern enterprise.
          </p>
          <Link
            href="/about"
            className="flex items-center gap-2 text-primary dark:text-primary-fixed font-semibold text-[14px] uppercase tracking-wider hover:opacity-80 group"
          >
            Learn More About Us
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" aria-hidden="true">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
