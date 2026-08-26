import { NextRequest, NextResponse } from "next/server";
import { CONTACT_SERVICES } from "@/features/contact/services/contact.service";

const MAX_BODY_BYTES = 16_384;
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000;
const attempts = new Map<string, { count: number; resetAt: number }>();

const allowedKeys = new Set([
  "name",
  "email",
  "phone",
  "organization",
  "service",
  "message",
  "consent",
  "website",
  "startedAt",
]);

function json(body: object, status = 200, headers?: HeadersInit) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store", ...headers },
  });
}

function getClientKey(req: NextRequest) {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();

  if (attempts.size > 1_000) {
    for (const [storedKey, attempt] of attempts) {
      if (attempt.resetAt <= now) attempts.delete(storedKey);
    }

    while (attempts.size > 1_000) {
      const oldestKey = attempts.keys().next().value;
      if (typeof oldestKey !== "string") break;
      attempts.delete(oldestKey);
    }
  }

  const current = attempts.get(key);
  if (!current || current.resetAt <= now) {
    attempts.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT;
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function requiredText(value: unknown, min: number, max: number, singleLine = false) {
  if (typeof value !== "string") return null;
  const text = value.trim();
  if (text.length < min || text.length > max || text.includes("\0")) return null;
  if (singleLine && /[\r\n]/.test(text)) return null;
  return text;
}

function optionalText(value: unknown, max: number, pattern?: RegExp) {
  if (value === undefined || value === "") return "";
  const text = requiredText(value, 1, max, true);
  if (!text || (pattern && !pattern.test(text))) return null;
  return text;
}

export async function POST(req: NextRequest) {
  if (!req.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return json({ ok: false, error: "Invalid submission. Check the form and try again." }, 415);
  }

  const contentLength = Number(req.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return json({ ok: false, error: "Invalid submission. Check the form and try again." }, 413);
  }

  const origin = req.headers.get("origin");
  const configuredOrigins = (process.env.CONTACT_ALLOWED_ORIGINS ?? "")
    .split(",")
    .map((value) => {
      try {
        return new URL(value.trim()).origin;
      } catch {
        return "";
      }
    })
    .filter(Boolean);
  const allowedOrigins = new Set([req.nextUrl.origin, ...configuredOrigins]);
  let requestOrigin = "";
  try {
    requestOrigin = origin ? new URL(origin).origin : "";
  } catch {
    requestOrigin = "";
  }
  if (!requestOrigin || !allowedOrigins.has(requestOrigin) || req.headers.get("sec-fetch-site") === "cross-site") {
    return json({ ok: false, error: "This submission was not accepted." }, 403);
  }

  const clientKey = getClientKey(req);
  if (isRateLimited(clientKey)) {
    return json(
      { ok: false, error: "Too many attempts. Please wait before trying again." },
      429,
      { "Retry-After": String(RATE_WINDOW_MS / 1000) },
    );
  }

  const body = await req.json().catch(() => null);
  if (!isPlainObject(body) || Object.keys(body).some((key) => !allowedKeys.has(key))) {
    return json({ ok: false, error: "Invalid submission. Check the form and try again." }, 400);
  }

  if (typeof body.website === "string" && body.website.trim()) return json({ ok: true });

  const name = requiredText(body.name, 2, 100, true);
  const email = requiredText(body.email, 3, 254, true);
  const phone = optionalText(body.phone, 30, /^[+()\d\s.-]+$/);
  const organization = optionalText(body.organization, 120);
  const service = typeof body.service === "string" && CONTACT_SERVICES.includes(body.service as (typeof CONTACT_SERVICES)[number])
    ? body.service
    : null;
  const message = requiredText(body.message, 10, 3_000);
  const validEmail = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const startedAt = typeof body.startedAt === "number" ? body.startedAt : 0;

  if (
    !name ||
    !validEmail ||
    phone === null ||
    organization === null ||
    !service ||
    !message ||
    body.consent !== true ||
    startedAt > Date.now() ||
    Date.now() - startedAt < 800
  ) {
    return json({ ok: false, error: "Invalid submission. Check the form and try again." }, 400);
  }

  const user = process.env.CONTACT_EMAIL_USER;
  const pass = process.env.CONTACT_EMAIL_PASS;
  const to = process.env.CONTACT_EMAIL_TO ?? "Yarima588@gmail.com";

  if (!user || !pass) {
    return json({ ok: false, error: "We could not send your enquiry. Please use a direct contact option." }, 503);
  }

  try {
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });

    const text = `New YMCL Enquiry
Name: ${name}
Email: ${email}
Phone: ${phone || "-"}
Organization: ${organization || "-"}
Service: ${service}
Consent: Yes, submitted ${new Date().toISOString()}
Message: ${message}`;

    await transporter.sendMail({
      from: user,
      to,
      replyTo: email,
      subject: `YMCL Enquiry - ${service} - ${name}`,
      text,
    });

    return json({ ok: true });
  } catch (error) {
    console.error("[contact] Email delivery failed", error instanceof Error ? error.name : "Unknown error");
    return json({ ok: false, error: "We could not send your enquiry. Please use a direct contact option." }, 503);
  }
}
