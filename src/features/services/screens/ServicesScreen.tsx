import "../styles/services.css";
import Image from "next/image";
import Link from "next/link";
import agricultureImage from "../../../../assets/agric-service.png";
import constructionImage from "../../../../assets/construction-service.png";
import importExportImage from "../../../../assets/import-export-service.png";

export function ServicesScreen() {
  return (
    <>
      <section className="pt-16 pb-12 px-5 md:px-16 max-w-[1280px] mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-[32px] md:text-[48px] font-extrabold leading-[40px] md:leading-[56px] tracking-tight text-primary dark:text-on-surface mb-6">
            Our Services
          </h1>
          <div className="w-10 h-1 rounded-full mb-6" style={{ backgroundColor: "#d4af37" }} aria-hidden="true" />
          <p className="text-[18px] leading-7 text-on-surface dark:text-neutral-300">
            Yarima Multi Concept Limited delivers institutional excellence across its core service areas. We provide reliable,
            scalable solutions for export, agriculture, construction, and general contracting needs.
          </p>
        </div>
      </section>

      <section id="trade" className="scroll-mt-20 py-16 md:py-24 px-5 md:px-16 bg-white dark:bg-surface-container-lowest services-section">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center px-3 py-1 bg-primary text-on-primary text-[12px] font-medium uppercase rounded-full mb-6">
              Global Trade
            </div>
            <h2 className="text-[32px] font-bold leading-10 text-primary dark:text-on-surface mb-4">Export & Import</h2>
            <p className="text-[16px] leading-6 text-on-surface dark:text-neutral-300 mb-8">
              Facilitating seamless international trade. We specialize in the sourcing, handling, and logistics of premium
              Nigerian commodities for global markets, while importing high-grade materials for local industrial needs.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="material-symbols-outlined mr-3 mt-1" style={{ color: "#d4af37" }} aria-hidden="true">
                  check_circle
                </span>
                <span className="text-[16px] text-on-surface dark:text-on-surface">Agricultural Commodity Export (Sesame, Cashew, Cocoa)</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined mr-3 mt-1" style={{ color: "#d4af37" }} aria-hidden="true">
                  check_circle
                </span>
                <span className="text-[16px] text-on-surface dark:text-on-surface">Industrial Equipment Import</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined mr-3 mt-1" style={{ color: "#d4af37" }} aria-hidden="true">
                  check_circle
                </span>
                <span className="text-[16px] text-on-surface dark:text-on-surface">Customs Clearance & Logistics Management</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary dark:border-primary-fixed text-primary dark:text-primary-fixed font-semibold text-[14px] uppercase tracking-wider hover:bg-primary hover:text-white dark:hover:bg-primary-fixed dark:hover:text-primary transition-colors rounded"
            >
              Contact for Export
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
              <Image
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                alt="Export Logistics"
                className="object-cover"
                src={importExportImage}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="agriculture" className="scroll-mt-20 py-16 md:py-24 px-5 md:px-16 bg-surface-container-low dark:bg-surface-container services-section relative">
        <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: "rgba(35,80,30,0.5)" }} />
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="order-1">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md" style={{ borderBottom: "2px solid #23501e" }}>
              <Image
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                alt="Agricultural Fields"
                className="object-cover object-[58%_center]"
                src={agricultureImage}
              />
            </div>
          </div>
          <div className="order-2 pl-0 md:pl-8">
            <div className="inline-flex items-center px-3 py-1 text-white text-[12px] font-medium uppercase rounded-full mb-6" style={{ backgroundColor: "#23501e" }}>
              Agro-Allied
            </div>
            <h2 className="text-[32px] font-bold leading-10 text-primary dark:text-on-surface mb-4">Agriculture</h2>
            <p className="text-[16px] leading-6 text-on-surface dark:text-neutral-300 mb-8">
              Driving food security and agricultural excellence. Our agriculture division integrates modern farming techniques
              with large-scale distribution, focusing on cash crops, mechanization, and sustainable practices.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="material-symbols-outlined mr-3 mt-1 text-[#23501e] dark:text-tertiary-fixed" aria-hidden="true">
                  agriculture
                </span>
                <span className="text-[16px] text-on-surface dark:text-on-surface">Large-scale Crop Cultivation</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined mr-3 mt-1 text-[#23501e] dark:text-tertiary-fixed" aria-hidden="true">
                  forest
                </span>
                <span className="text-[16px] text-on-surface dark:text-on-surface">Agro-processing & Storage</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined mr-3 mt-1 text-[#23501e] dark:text-tertiary-fixed" aria-hidden="true">
                  local_shipping
                </span>
                <span className="text-[16px] text-on-surface dark:text-on-surface">Fertilizer & Input Distribution</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="construction" className="scroll-mt-20 py-16 md:py-24 px-5 md:px-16 bg-white dark:bg-surface-container-lowest services-section">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 bg-primary text-on-primary text-[12px] font-medium uppercase rounded-full mb-6">
              Built to Last
            </div>
            <h2 className="text-[32px] font-bold leading-10 text-primary dark:text-on-surface mb-4">Construction & General Contracting</h2>
            <p className="text-[16px] leading-6 text-on-surface dark:text-neutral-300 mb-6">
              From commercial complexes to infrastructure, we deliver projects on time with structural integrity and global
              standards compliance.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-[16px] text-on-surface dark:text-on-surface">
                <span className="material-symbols-outlined" style={{ color: "#d4af37" }} aria-hidden="true">
                  check_circle
                </span>{" "}
                Commercial & Residential Builds
              </li>
              <li className="flex items-center gap-2 text-[16px] text-on-surface dark:text-on-surface">
                <span className="material-symbols-outlined" style={{ color: "#d4af37" }} aria-hidden="true">
                  check_circle
                </span>{" "}
                Infrastructure & Civil Works
              </li>
              <li className="flex items-center gap-2 text-[16px] text-on-surface dark:text-on-surface">
                <span className="material-symbols-outlined" style={{ color: "#d4af37" }} aria-hidden="true">
                  check_circle
                </span>{" "}
                Project Management & General Merchandise Supply
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-on-primary font-semibold text-[14px] uppercase tracking-wider rounded hover:opacity-90 transition-opacity"
            >
              Discuss a Project
            </Link>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
            <Image
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover"
              src={constructionImage}
              alt="Construction"
            />
          </div>
        </div>
      </section>
    </>
  );
}
