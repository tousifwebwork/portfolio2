import { NextResponse } from "next/server";

// Simple in-memory limiter: 5 messages per IP per 10 minutes.
// On serverless hosts memory isn't shared between instances, so use Upstash/Redis for strict limits.
const hits = new Map();
const WINDOW = 10 * 60 * 1000;
const LIMIT = 5;

function limited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > LIMIT;
}

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const fail = (error, status) => NextResponse.json({ error }, { status });

export async function POST(req) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (limited(ip)) return fail("Too many messages. Please try again in a few minutes.", 429);

  let body;
  try {
    body = await req.json();
  } catch {
    return fail("Invalid request.", 400);
  }

  const { name = "", email = "", subject = "", message = "", company = "" } = body ?? {};

  // Honeypot filled in = bot. Pretend success.
  if (company) return NextResponse.json({ ok: true });

  if (name.trim().length < 2 || name.length > 100) return fail("Please enter your name.", 400);
  if (!EMAIL.test(email.trim()) || email.length > 200) return fail("Please enter a valid email address.", 400);
  if (message.trim().length < 10 || message.length > 5000) return fail("Please write a message between 10 and 5000 characters.", 400);
  if (subject.length > 150) return fail("Subject is too long.", 400);

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    console.error("Contact form: missing RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL");
    return fail("Messaging is temporarily unavailable. Please email me directly.", 500);
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: email.trim(),
        subject: `[Portfolio] ${subject.trim() || `Message from ${name.trim()}`}`,
        html: `<h2>New message</h2>
          <p><strong>Name:</strong> ${esc(name)}</p>
          <p><strong>Email:</strong> ${esc(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${esc(message).replace(/\n/g, "<br>")}</p>`,
      }),
    });
    if (!res.ok) {
      console.error("Resend error:", res.status, await res.text());
      return fail("Could not send your message. Please try again later.", 502);
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return fail("Could not send your message. Please try again later.", 502);
  }
}