import { afterEach, describe, expect, it } from "vitest";
import { NextRequest } from "next/server";
import { POST } from "./route";

const validSubmission = {
  name: "Test User",
  email: "test@example.com",
  phone: "",
  organization: "",
  service: "General Inquiry",
  message: "This is a valid enquiry message.",
  consent: true,
  website: "",
  startedAt: Date.now() - 2_000,
};

let requestNumber = 0;

function request(body: object, origin = "https://ymcl.test") {
  requestNumber += 1;
  return new NextRequest("https://ymcl.test/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: origin,
      "X-Forwarded-For": `192.0.2.${requestNumber}`,
    },
    body: JSON.stringify(body),
  });
}

afterEach(() => {
  delete process.env.CONTACT_EMAIL_USER;
  delete process.env.CONTACT_EMAIL_PASS;
});

describe("POST /api/contact", () => {
  it("rejects malformed submissions", async () => {
    const response = await POST(request({ name: "Test" }));
    expect(response.status).toBe(400);
  });

  it("rejects cross-site submissions", async () => {
    const response = await POST(request(validSubmission, "https://attacker.example"));
    expect(response.status).toBe(403);
  });

  it("silently accepts honeypot submissions without sending mail", async () => {
    const response = await POST(request({ website: "spam.example" }));
    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ ok: true });
  });

  it("offers direct contact when valid submissions cannot be delivered", async () => {
    const response = await POST(request(validSubmission));
    expect(response.status).toBe(503);
    await expect(response.json()).resolves.toEqual({
      ok: false,
      error: "We could not send your enquiry. Please use a direct contact option.",
    });
  });
});
