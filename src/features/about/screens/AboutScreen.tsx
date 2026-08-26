import Image from "next/image";
import aboutImage from "../../../../assets/about-section.png";
import constructionImage from "../../../../assets/construction-about.png";
import agricultureImage from "../../../../assets/farms-about.png";
import importExportImage from "../../../../assets/import-export-about.png";
import "../styles/about.css";

export function AboutScreen() {
  return (
    <>
      <section className="py-20 px-5 md:px-16 bg-surface-container-low dark:bg-surface-container">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-[32px] md:text-[48px] font-extrabold leading-[40px] md:leading-[56px] tracking-tight text-primary dark:text-on-surface mb-6">
              One Company.
              <br />
              Multiple Capabilities.
            </h1>
            <div className="w-10 h-1 rounded-full mb-6" style={{ backgroundColor: "#d4af37" }} aria-hidden="true" />
            <p className="text-[18px] leading-7 text-on-surface dark:text-neutral-300">
              Yarima Multi Concept Limited is a diversified corporate entity with a rich heritage in construction,
              agriculture, and international export. We bridge local expertise with global standards.
            </p>
          </div>
          <div className="relative rounded-lg overflow-hidden h-[400px] shadow-md border border-outline-variant/50">
            <Image
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover"
              src={aboutImage}
              alt="Professionals reviewing plans beside construction and agricultural operations"
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-5 md:px-16 bg-surface dark:bg-background">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-12">
          {[
            {
              icon: "target",
              title: "Our Mission",
              desc: "To deliver uncompromising quality across diverse sectors by leveraging innovative practices, robust management structures, and a deep commitment to sustainable development in every region we operate.",
            },
            {
              icon: "visibility",
              title: "Our Vision",
              desc: "To be the most trusted multi-sector corporation in the region, recognized for executing complex projects and facilitating international trade with precision, integrity, and absolute reliability.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="bg-surface-container-lowest dark:bg-surface-container-low border border-outline-variant dark:border-outline-variant/30 p-8 rounded-xl about-card-hover relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{ backgroundColor: "#d4af37" }} aria-hidden="true" />
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "#001f3f", color: "#d4e3ff" }}>
                <span className="material-symbols-outlined" aria-hidden="true">{c.icon}</span>
              </div>
              <h2 className="text-[32px] font-bold leading-10 text-primary dark:text-on-surface mb-4">{c.title}</h2>
              <p className="text-[16px] leading-6 text-on-surface dark:text-neutral-300">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-5 md:px-16 bg-surface-container-low dark:bg-surface-container border-t border-outline-variant/30">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-12">
            <h2 className="text-[24px] md:text-[32px] font-bold leading-8 md:leading-10 text-primary dark:text-on-surface mb-4">
              Corporate Structure
            </h2>
            <div className="w-10 h-1 rounded-full" style={{ backgroundColor: "#d4af37" }} aria-hidden="true" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: constructionImage,
                icon: "architecture",
                title: "Construction & Engineering",
                desc: "Delivering commercial, residential, and infrastructure projects with rigorous adherence to global standards and structural integrity.",
                iconColor: "#d4af37",
              },
              {
                img: agricultureImage,
                icon: "agriculture",
                title: "Agricultural Development",
                desc: "Sustainable farming operations, processing, and distribution networks designed to support local economies and secure supply chains.",
                iconColor: "#23501e",
              },
              {
                img: importExportImage,
                icon: "flight_takeoff",
                title: "Import & Export",
                desc: "Facilitating global trade through robust logistics networks, ensuring seamless international transactions for critical commodities.",
                iconColor: "#d4af37",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-surface-container-lowest dark:bg-surface-container-lowest rounded-lg overflow-hidden border border-outline-variant dark:border-outline-variant/30 hover:shadow-md transition-shadow group"
              >
                <div className="h-48 relative">
                  <Image fill sizes="(max-width: 767px) 100vw, 33vw" className="object-cover" src={card.img} alt={card.title} />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-[20px] font-semibold leading-7 text-primary dark:text-on-surface mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined" style={{ color: card.iconColor }} aria-hidden="true">
                      {card.icon}
                    </span>
                    {card.title}
                  </h3>
                  <p className="text-[14px] leading-6 text-on-surface dark:text-neutral-300">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
