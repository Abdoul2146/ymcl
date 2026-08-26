import Link from "next/link";
import "../styles/home.css";

const divisions = [
  {
    icon: "local_shipping",
    title: "Export & Import",
    href: "/services#trade",
    desc: "Facilitating seamless international trade with rigorous compliance and efficient logistics management.",
    bg: "bg-primary-fixed",
    iconColor: "text-on-primary-fixed",
    accent: "home-card-underline",
  },
  {
    icon: "agriculture",
    title: "Agriculture",
    href: "/services#agriculture",
    desc: "Sustainable farming and distribution solutions designed to bolster local economies and ensure food security.",
    bg: "bg-tertiary-fixed",
    iconColor: "text-on-tertiary-fixed",
    accent: "home-card-underline home-card-underline--green",
    topBar: true,
  },
  {
    icon: "architecture",
    title: "Construction",
    href: "/services#construction",
    desc: "Delivering robust infrastructure and commercial developments with unyielding structural integrity.",
    bg: "bg-surface-container-high",
    iconColor: "text-primary dark:text-on-surface",
    accent: "home-card-underline",
  },
  {
    icon: "handshake",
    title: "General Contracting",
    href: "/services#construction",
    desc: "Comprehensive project management and execution for diverse corporate and government initiatives.",
    bg: "bg-surface-container-high",
    iconColor: "text-primary dark:text-on-surface",
    accent: "home-card-underline",
  },
  {
    icon: "inventory_2",
    title: "General Merchandise",
    href: "/services#construction",
    desc: "Sourcing and supply of high-grade materials and products to meet specialized industrial needs.",
    bg: "bg-surface-container-high",
    iconColor: "text-primary dark:text-on-surface",
    accent: "home-card-underline",
  },
];

export function DivisionGrid() {
  return (
    <section className="py-20 md:py-28 bg-surface-container-low dark:bg-surface-container">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <h2 className="text-[32px] font-bold leading-10 text-primary dark:text-on-surface">Core Divisions</h2>
          <div className="h-1 w-10 rounded-full" style={{ backgroundColor: "#d4af37" }} aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {divisions.slice(0, 3).map((d) => (
            <div
              key={d.title}
              className="bg-white dark:bg-surface-container-lowest border border-surface-variant dark:border-outline-variant/30 rounded-xl p-8 flex flex-col gap-6 hover:shadow-md transition-shadow group relative overflow-hidden"
            >
              {d.topBar && <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: "#23501e" }} />}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${d.bg}`}>
                <span className={`material-symbols-outlined ${d.iconColor}`} aria-hidden="true">{d.icon}</span>
              </div>
              <h3 className="text-[20px] font-semibold leading-7 text-primary dark:text-on-surface">{d.title}</h3>
              <p className="text-[16px] leading-6 text-on-surface dark:text-neutral-300 flex-grow">{d.desc}</p>
              <Link href={d.href} className="text-[14px] font-semibold uppercase tracking-wider flex items-center gap-1 text-primary dark:text-primary-fixed">
                Learn More <span className="material-symbols-outlined text-[16px]" aria-hidden="true">chevron_right</span>
              </Link>
              <div className={d.accent} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-[850px] mx-auto">
          {divisions.slice(3).map((d) => (
            <div
              key={d.title}
              className="bg-white dark:bg-surface-container-lowest border border-surface-variant dark:border-outline-variant/30 rounded-xl p-8 flex flex-col gap-6 hover:shadow-md transition-shadow group"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${d.bg}`}>
                <span className={`material-symbols-outlined ${d.iconColor}`} aria-hidden="true">{d.icon}</span>
              </div>
              <h3 className="text-[20px] font-semibold leading-7 text-primary dark:text-on-surface">{d.title}</h3>
              <p className="text-[16px] leading-6 text-on-surface dark:text-neutral-300 flex-grow">{d.desc}</p>
              <Link href={d.href} className="text-[14px] font-semibold uppercase tracking-wider flex items-center gap-1 text-primary dark:text-primary-fixed">
                Learn More <span className="material-symbols-outlined text-[16px]" aria-hidden="true">chevron_right</span>
              </Link>
              <div className={d.accent} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
