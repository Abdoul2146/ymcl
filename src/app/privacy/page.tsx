import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/core/lib/email";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Yarima Multi Concept Limited handles information submitted through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto w-full max-w-4xl px-5 py-16 md:px-16 md:py-24">
      <h1 className="text-[32px] font-extrabold leading-10 text-primary dark:text-on-surface md:text-[48px] md:leading-[56px]">
        Privacy Policy
      </h1>
      <div className="my-6 h-1 w-10 rounded-full bg-gold" aria-hidden="true" />
      <p className="mb-10 text-sm text-on-surface-variant dark:text-neutral-300">Effective 26 August 2026</p>

      <div className="space-y-10 text-[16px] leading-7 text-on-surface dark:text-neutral-300">
        <section>
          <h2 className="mb-3 text-[24px] font-bold text-primary dark:text-on-surface">Information we collect</h2>
          <p>
            When you submit an enquiry, YMCL receives the information you provide, such as your name, email address,
            telephone number, organization, service of interest, and message. We do not use advertising trackers or
            collect payment information through this website.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-[24px] font-bold text-primary dark:text-on-surface">How we use it</h2>
          <p>
            We use enquiry information to respond to you, understand your request, prepare a quotation, and maintain
            necessary business correspondence. We do not sell personal information.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-[24px] font-bold text-primary dark:text-on-surface">Delivery and retention</h2>
          <p>
            Website enquiries may be delivered through our email provider. If you choose an email or WhatsApp fallback,
            that provider processes the information under its own privacy terms. We retain correspondence only for as
            long as reasonably necessary to handle the enquiry and meet applicable business or legal obligations.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-[24px] font-bold text-primary dark:text-on-surface">Your choices</h2>
          <p>
            You may ask us to access, correct, or delete information submitted through this website, subject to any
            information we must retain by law. Contact us at{" "}
            <a className="font-semibold text-primary underline underline-offset-2 dark:text-primary-fixed" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-[24px] font-bold text-primary dark:text-on-surface">Policy updates</h2>
          <p>We may update this notice when our website or information-handling practices change.</p>
        </section>
      </div>
    </article>
  );
}
