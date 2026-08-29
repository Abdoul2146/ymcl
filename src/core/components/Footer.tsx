import Link from "next/link";
import { LOCATIONS } from "@/core/lib/locations";

export function Footer() {
  return (
    <footer className="bg-primary dark:bg-[#0b0f1a] text-on-primary w-full pt-16 pb-8 border-t border-secondary/20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-5 md:px-16 max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-3">
          <span className="text-[24px] font-extrabold tracking-tight" style={{ color: "#ffe088" }}>
            YMCL
          </span>
          <p className="text-sm leading-6" style={{ color: "#afc8f0", opacity: 0.9 }}>
            Building infrastructure, powering agriculture, and connecting markets globally.
          </p>
          <p className="text-xs mt-2" style={{ color: "#afc8f0", opacity: 0.7 }}>
            RC Number: 8805696
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-[14px] font-semibold uppercase tracking-wider" style={{ color: "#ffe088" }}>
            Company
          </h2>
          <Link href="/" className="text-sm hover:opacity-80" style={{ color: "#afc8f0" }}>
            Home
          </Link>
          <Link href="/about" className="text-sm hover:opacity-80" style={{ color: "#afc8f0" }}>
            About
          </Link>
          <Link href="/services" className="text-sm hover:opacity-80" style={{ color: "#afc8f0" }}>
            Services
          </Link>
          <Link href="/projects" className="text-sm hover:opacity-80" style={{ color: "#afc8f0" }}>
            Field Work
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-[14px] font-semibold uppercase tracking-wider" style={{ color: "#ffe088" }}>
            Locations
          </h2>
          {LOCATIONS.map((loc) => (
            <div key={loc.city} className="text-sm leading-5" style={{ color: "#afc8f0" }}>
              <span className={loc.headOffice ? "font-semibold text-white" : undefined}>{loc.city}</span>
              {loc.address && (
                <span className="block text-xs opacity-80">{loc.address}</span>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-[14px] font-semibold uppercase tracking-wider" style={{ color: "#ffe088" }}>
            Support
          </h2>
          <Link href="/contact" className="text-sm hover:opacity-80" style={{ color: "#afc8f0" }}>
            Contact
          </Link>
          <Link href="/privacy" className="text-sm hover:opacity-80" style={{ color: "#afc8f0" }}>
            Privacy Policy
          </Link>
        </div>
      </div>

      <div className="px-5 md:px-16 max-w-[1280px] mx-auto mt-10 pt-6 border-t border-white/10">
        <p className="text-xs" style={{ color: "#afc8f0", opacity: 0.6 }}>
          © {new Date().getFullYear()} Yarima Multi Concept Limited. RC Number: 8805696. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
