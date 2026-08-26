export const CONTACT_EMAIL = "Yarima588@gmail.com";

export function getMailtoLink(params: {
  subject?: string;
  body?: string;
}) {
  const search = new URLSearchParams();
  if (params.subject) search.set("subject", params.subject);
  if (params.body) search.set("body", params.body);
  const qs = search.toString();
  return `mailto:${CONTACT_EMAIL}${qs ? `?${qs}` : ""}`;
}

export function getGmailComposeLink(params: {
  subject?: string;
  body?: string;
}) {
  const search = new URLSearchParams();
  search.set("to", CONTACT_EMAIL);
  if (params.subject) search.set("su", params.subject);
  if (params.body) search.set("body", params.body);
  return `https://mail.google.com/mail/?view=cm&fs=1&${search.toString()}`;
}
