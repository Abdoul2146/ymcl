import Image from "next/image";
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSvn31e6LzrIImlf3kafJPwnVk1zPHtqCe8lHsE53PT0VVCyxXmIsbT5nUTtDWMCGe_j1OhIM63h1v8VfN_2mJeB9X8Hl07tbBSwK66V74Moo1QYxvYutaXYHl5CE6u0Sf2d4Jfw_pdg4-rI63IFw2AriUJEJ11boKSQ_SUnRrLH_R1kDY-B48s7_uVo_oCxaeHL0Gzo9mi78KHd4gxleJm-nXahMVy1UkbIshKuRe1qEkH3jgiu0Mxw"
              alt="Boardroom"
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
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBq7ve6tIqrf3wuhEUg_Gw3FiMqzs3kRU80KGk1Nl0Ya7AbHnTc8Q9km8-YtYAfZ1LyGBjBhs2YxJ1iNJxy6dPER5SCpX6v_1pky0T2uePSFZP4SkLRfpLJjn-D9u-rIxS9LEx44PsFPJ8Xx15cOAergMMRKgBMTor0p_8fwO0xv6AkhCstlVIYHmWM8wPYvBp0KwWQGK1wpYFhc3NOXs7fC6-mkxobx2keG0dvAx8Ygv0IbXTPZ9rgAw",
                icon: "architecture",
                title: "Construction & Engineering",
                desc: "Delivering commercial, residential, and infrastructure projects with rigorous adherence to global standards and structural integrity.",
                iconColor: "#d4af37",
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqDQ4k5p1HQjEal4vIOaxi-QcGolh2cun-wN6msPPPoFspLHXm7krY2wPEPNhUdpQUKAWzSPHG025cdEoKts_dHiGJRw1z3FA7Sg6kua7RGeRm72Tra1_X3yJGGJr_LqzyZu7ThKfmwRfxIjeVsWy6LBtrLpeUPVIsgMxJi62CJIv0UW6ZAL-NeoVCK2vO-PNq9XtS5kpLz5EG4BAuqvcGDnhoLB39acrzV2hge9O9Ae5GE9TU3-eeFA",
                icon: "agriculture",
                title: "Agricultural Development",
                desc: "Sustainable farming operations, processing, and distribution networks designed to support local economies and secure supply chains.",
                iconColor: "#23501e",
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBlR0f92D17ufhVt_qLt5unoenNMt9kfJdgZ4su2NG9sLydauG18DJUroiEZfXHGvNWFK921KL4aMVPAGC__py-8n_qEB_jxxaDgMCmCp2YcklPa6KP3P2Nf16puaQZKNkKZs814ZmLYBicz2qssHFdzVP2iOP85d4eKjQABdcsVOFhPsPyVOa6X3Z43PcVkz37nvrRbPOCwg0drRNP0J53MRx4ReiBOJo6OtUUObTh_7gXwFSBjKZsw",
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
