export const SITE_NAME = "Yarima Multi Concept Limited";
export const SITE_SHORT_NAME = "YMCL";
export const SITE_DESCRIPTION =
  "YMCL delivers institutional-grade services across agriculture, international trade, construction, and general contracting.";

const configuredSiteUrl = process.env.SITE_URL ?? "http://localhost:3000";

export const SITE_URL = new URL(configuredSiteUrl);

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}
