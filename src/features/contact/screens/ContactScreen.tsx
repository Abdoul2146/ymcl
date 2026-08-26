"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getWhatsAppLink } from "@/core/lib/whatsapp";
import { LOCATIONS } from "@/core/lib/locations";
import { buildEnquiryText, CONTACT_SERVICES, ContactPayload, ContactSubmission } from "../services/contact.service";
import { CONTACT_EMAIL, getMailtoLink, getGmailComposeLink } from "@/core/lib/email";
import "../styles/contact.css";

type FormStatus = { type: "success" | "error"; message: string };

export function ContactScreen() {
  const [form, setForm] = useState<ContactPayload>({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: "",
    message: "",
  });
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<FormStatus | null>(null);
  const [showFallback, setShowFallback] = useState(false);
  const [sending, setSending] = useState(false);
  const startedAt = useRef(0);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const update = (k: keyof ContactPayload, v: string) => setForm((prev) => ({ ...prev, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim() || !form.service) {
      setStatus({ type: "error", message: "Please fill all required fields." });
      requestAnimationFrame(() => statusRef.current?.focus());
      return;
    }
    if (!consent) {
      setStatus({ type: "error", message: "Please consent to data processing." });
      requestAnimationFrame(() => statusRef.current?.focus());
      return;
    }
    setSending(true);
    setStatus(null);
    setShowFallback(false);

    try {
      const submission: ContactSubmission = {
        ...form,
        consent: true,
        website,
        startedAt: startedAt.current,
      };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });
      if (res.ok) {
        setStatus({ type: "success", message: "Enquiry sent successfully. We will contact you shortly." });
        setForm({ name: "", email: "", phone: "", organization: "", service: "", message: "" });
        setConsent(false);
        setWebsite("");
        startedAt.current = Date.now();
        return;
      }
      const data = await res.json().catch(() => null);
      setStatus({ type: "error", message: data?.error ?? "We could not send your enquiry. Please try again." });
      setShowFallback(res.status >= 500);
    } catch {
      setStatus({
        type: "error",
        message: "We could not connect to the enquiry service. Your details have not been submitted.",
      });
      setShowFallback(true);
    } finally {
      setSending(false);
    }
  };

  const enquiryText = buildEnquiryText(form);
  const enquirySubject = `YMCL Enquiry - ${form.service || "General"} - ${form.name || "Website"}`;

  return (
    <div className="pt-10 pb-20 px-5 md:px-16 max-w-[1280px] mx-auto w-full">
      <div className="mb-8 max-w-2xl">
        <h1 className="text-[32px] md:text-[48px] font-extrabold leading-[40px] md:leading-[56px] tracking-tight text-primary dark:text-on-surface mb-4">
          Contact & Request a Quote
        </h1>
        <div className="w-10 h-1 rounded-full mb-6 bg-[#d4af37]" />
        <p className="text-[18px] leading-7 text-on-surface dark:text-neutral-300">
          We are ready to assist you with your construction, agriculture, or export needs. Fill out the form below or
          reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="col-span-12 lg:col-span-8 bg-white dark:bg-surface-container border border-outline-variant/50 dark:border-outline-variant/30 rounded-xl shadow-md w-full min-w-0 p-5 sm:p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6" aria-busy={sending}>
            <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(event) => setWebsite(event.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="min-w-0">
                <label htmlFor="name" className="block text-[14px] font-semibold text-on-surface dark:text-neutral-300 uppercase tracking-wider mb-2">
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={100}
                  className="contact-input w-full min-w-0 bg-white dark:bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 text-on-surface dark:text-on-surface text-[16px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                />
              </div>
              <div className="min-w-0">
                <label htmlFor="email" className="block text-[14px] font-semibold text-on-surface dark:text-neutral-300 uppercase tracking-wider mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  className="contact-input w-full min-w-0 bg-white dark:bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 text-on-surface dark:text-on-surface text-[16px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="min-w-0">
                <label htmlFor="phone" className="block text-[14px] font-semibold text-on-surface dark:text-neutral-300 uppercase tracking-wider mb-2">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  maxLength={30}
                  className="contact-input w-full min-w-0 bg-white dark:bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 text-on-surface dark:text-on-surface text-[16px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  placeholder="+234 ..."
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
              </div>
              <div className="min-w-0">
                <label htmlFor="organization" className="block text-[14px] font-semibold text-on-surface dark:text-neutral-300 uppercase tracking-wider mb-2">
                  Organization
                </label>
                <input
                  id="organization"
                  name="organization"
                  autoComplete="organization"
                  maxLength={120}
                  className="contact-input w-full min-w-0 bg-white dark:bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 text-on-surface dark:text-on-surface text-[16px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  placeholder="Company Name"
                  value={form.organization}
                  onChange={(e) => update("organization", e.target.value)}
                />
              </div>
            </div>

            <div className="min-w-0">
              <label htmlFor="service" className="block text-[14px] font-semibold text-on-surface dark:text-neutral-300 uppercase tracking-wider mb-2">
                Service of Interest *
              </label>
              <select
                id="service"
                name="service"
                required
                className="contact-input w-full min-w-0 bg-white dark:bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 text-on-surface dark:text-on-surface text-[16px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                value={form.service}
                onChange={(e) => update("service", e.target.value)}
              >
                <option value="" disabled>Select a service...</option>
                {CONTACT_SERVICES.map((service) => <option key={service}>{service}</option>)}
              </select>
            </div>

            <div className="min-w-0">
              <label htmlFor="message" className="block text-[14px] font-semibold text-on-surface dark:text-neutral-300 uppercase tracking-wider mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                maxLength={3000}
                className="contact-input w-full min-w-0 bg-white dark:bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 text-on-surface dark:text-on-surface text-[16px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                placeholder="Tell us about your project..."
                rows={5}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 border-outline-variant text-primary focus:ring-primary rounded"
              />
              <label htmlFor="consent" className="text-[14px] leading-6 text-on-surface dark:text-neutral-300">
                I consent to YMCL processing my data to respond to my enquiry, as described in the{" "}
                <Link href="/privacy" className="font-semibold text-primary dark:text-primary-fixed underline underline-offset-2">
                  Privacy Policy
                </Link>.
              </label>
            </div>

            {status && (
              <div
                ref={statusRef}
                tabIndex={-1}
                role={status.type === "error" ? "alert" : "status"}
                aria-live={status.type === "error" ? "assertive" : "polite"}
                className={`text-sm p-3 rounded break-words ${
                  status.type === "error"
                    ? "bg-error-container text-on-error-container"
                    : "bg-tertiary-fixed text-on-tertiary-fixed"
                }`}
              >
                {status.message}
              </div>
            )}

            {showFallback && (
              <div className="flex flex-col sm:flex-row gap-3" aria-label="Direct contact options">
                <a
                  href={getMailtoLink({ subject: enquirySubject, body: enquiryText })}
                  className="border border-primary px-5 py-3 rounded text-sm font-semibold text-primary dark:border-primary-fixed dark:text-primary-fixed text-center"
                >
                  Send by Email
                </a>
                <a
                  href={getWhatsAppLink(enquiryText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-5 py-3 rounded text-sm font-semibold text-center"
                >
                  Send via WhatsApp
                </a>
              </div>
            )}

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <button
                type="submit"
                disabled={sending}
                className="bg-primary text-on-primary font-semibold text-[14px] uppercase tracking-wider px-8 py-4 rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {sending ? "Sending..." : "Submit Enquiry"}
                <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
              </button>
              <a
                href={getGmailComposeLink({
                  subject: `YMCL Enquiry - ${form.service}`,
                  body: form.message ? buildEnquiryText(form) : "",
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-outline-variant px-6 py-4 rounded text-[14px] font-semibold uppercase tracking-wider text-on-surface dark:text-neutral-300 hover:bg-surface-container transition-colors text-center"
              >
                Open Gmail
              </a>
            </div>
          </form>
        </div>

        <div className="col-span-12 lg:col-span-4 w-full min-w-0 space-y-6">
          <div className="bg-surface-container-lowest dark:bg-surface-container-low border border-outline-variant dark:border-outline-variant/30 rounded-xl p-6 shadow-sm">
            <h2 className="text-[24px] font-bold leading-8 text-primary dark:text-on-surface mb-6">Direct Contact</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined" style={{ color: "#d4af37" }} aria-hidden="true">
                  call
                </span>
                <div className="flex flex-col gap-1">
                  <a href="tel:+2348165037338" className="text-[16px] text-on-surface dark:text-on-surface hover:underline">
                    +234 816 503 7338
                  </a>
                  <a href="tel:+2347044774751" className="text-[16px] text-on-surface dark:text-on-surface hover:underline">
                    +234 704 477 4751
                  </a>
                  <a href="tel:+2347036658818" className="text-[16px] text-on-surface dark:text-on-surface hover:underline">
                    +234 703 665 8818
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined" style={{ color: "#d4af37" }} aria-hidden="true">
                  mail
                </span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-[16px] text-on-surface dark:text-on-surface break-all hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
            <a
              href={getWhatsAppLink("Hello YMCL, I would like to make an enquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white font-semibold text-[14px] uppercase tracking-wider px-6 py-4 rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              Contact on WhatsApp
            </a>
          </div>

          <div className="bg-surface-container-lowest dark:bg-surface-container-low border border-outline-variant dark:border-outline-variant/30 rounded-xl p-6 shadow-sm">
            <h2 className="text-[24px] font-bold leading-8 text-primary dark:text-on-surface mb-6">Our Offices</h2>
            <div className="space-y-5">
              {LOCATIONS.map((loc) => (
                <div key={loc.city} className="flex items-start gap-4">
                  <span className="material-symbols-outlined mt-0.5" style={{ color: "#d4af37" }} aria-hidden="true">
                    location_on
                  </span>
                  <div>
                    <p className="text-[16px] font-semibold text-on-surface dark:text-on-surface flex items-center gap-2">
                      {loc.city}
                      {loc.headOffice && (
                        <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#ffe088] text-[#241a00]">
                          Head Office
                        </span>
                      )}
                    </p>
                    <p className="text-[14px] leading-5 text-on-surface dark:text-neutral-300">{loc.label}</p>
                    {loc.address && (
                      <p className="text-[14px] leading-5 text-on-surface dark:text-neutral-300 mt-0.5">
                        {loc.address}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
