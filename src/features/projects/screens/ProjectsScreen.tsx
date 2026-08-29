"use client";

import Image from "next/image";
import { useState } from "react";
import { PROJECTS, ProjectCategory } from "../services/projects.service";
import "../styles/projects.css";

const FILTERS: ProjectCategory[] = ["All", "Import / Export", "Logistics", "Recognition", "Field Operations"];

export function ProjectsScreen() {
  const [active, setActive] = useState<ProjectCategory>("All");

  const filtered = active === "All" ? PROJECTS : PROJECTS.filter((project) => project.category === active);

  return (
    <>
      <header className="pt-10 pb-8 px-5 md:px-16 max-w-[1280px] mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-[32px] md:text-[48px] font-extrabold leading-[40px] md:leading-[56px] tracking-tight text-primary dark:text-on-surface mb-6">
            Field Operations
          </h1>
          <div className="h-1 w-10 rounded-full mb-6" style={{ backgroundColor: "#d4af37" }} aria-hidden="true" />
          <p className="text-[18px] leading-7 text-on-surface dark:text-neutral-300">
            Real field activity from YMCL&apos;s trade, logistics, export documentation, and operational coordination work.
            These entries highlight verified presence and recognition rather than illustrative project claims.
          </p>
        </div>
      </header>

      <section className="py-8 px-5 md:px-16 max-w-[1280px] mx-auto">
        <div className="flex flex-wrap gap-3 mb-10 border-b border-outline-variant/30 pb-4" role="group" aria-label="Filter projects by category">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={`px-6 py-2 rounded-full text-[14px] font-semibold uppercase tracking-wider transition-colors border ${
                active === f
                  ? "bg-primary text-on-primary border-primary"
                  : "bg-surface-container text-on-surface border-outline-variant/50 hover:bg-surface-variant"
              }`}
            >
              {f === "All" ? "All Entries" : f}
            </button>
          ))}
        </div>

        <p className="sr-only" aria-live="polite">Showing {filtered.length} {filtered.length === 1 ? "entry" : "entries"}.</p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          <h2 className="sr-only">Field operations portfolio</h2>
          {filtered.map((p) => (
            <div
              key={p.id}
              className={`${p.span} group relative overflow-hidden rounded-lg bg-surface dark:bg-surface-container border border-outline-variant/30 projects-card`}
            >
              <Image
                fill
                sizes="(max-width: 767px) 100vw, 66vw"
                alt={p.alt}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                src={p.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <span
                  className="inline-block px-3 py-1 text-[12px] font-medium uppercase tracking-wider rounded-sm mb-3"
                  style={{
                    backgroundColor: p.badgeColor ?? "rgba(255,255,255,0.2)",
                    color: p.badgeColor ? "#241a00" : "#fff",
                    backdropFilter: p.badgeColor ? undefined : "blur(4px)",
                  }}
                >
                  {p.category}
                </span>
                <h3 className="text-[20px] md:text-[24px] font-bold leading-7 md:leading-8 text-white mb-1">{p.title}</h3>
                {p.desc && <p className="text-[14px] leading-6 text-white/80 line-clamp-2">{p.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
