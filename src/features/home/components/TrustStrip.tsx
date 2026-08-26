export function TrustStrip() {
  return (
    <section className="bg-primary text-on-primary border-y border-primary-fixed-dim/20 py-6">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 flex flex-wrap justify-between items-center gap-6 text-[12px] font-medium uppercase tracking-widest opacity-80">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px]" aria-hidden="true">verified</span>
          RC Number 8805696
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">location_on</span> Kaduna
          </span>
          <span style={{ color: "#ffe088" }}>•</span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">location_on</span> Abuja
          </span>
          <span style={{ color: "#ffe088" }}>•</span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">location_on</span> Port Harcourt
          </span>
        </div>
        <div className="hidden md:flex items-center gap-4" style={{ color: "#ffe088" }}>
          <span>Agriculture</span>
          <span>•</span>
          <span>Construction</span>
          <span>•</span>
          <span>Trade</span>
        </div>
      </div>
    </section>
  );
}
