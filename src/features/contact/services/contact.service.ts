export const CONTACT_SERVICES = [
  "Construction",
  "Agriculture",
  "Import/Export",
  "General Contracting",
  "General Merchandise",
  "General Inquiry",
] as const;

export type ContactService = (typeof CONTACT_SERVICES)[number];

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  service: ContactService | "";
  message: string;
};

export type ContactSubmission = ContactPayload & {
  consent: true;
  website: string;
  startedAt: number;
};

export function buildEnquiryText(p: ContactPayload) {
  return `New YMCL Enquiry
Name: ${p.name}
Email: ${p.email}
Phone: ${p.phone ?? "-"}
Organization: ${p.organization ?? "-"}
Service: ${p.service}
Message: ${p.message}`;
}
