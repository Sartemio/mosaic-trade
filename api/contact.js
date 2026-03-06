/**
 * Vercel serverless function: contact form → Mailgun (internal + thank-you emails).
 * Set MAILGUN_API_KEY, MAILGUN_DOMAIN (and optionally MAILGUN_FROM_EMAIL, MAILGUN_HOST) in Vercel.
 */

function escapeHtml(s) {
  if (typeof s !== "string") return "";
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendMailgunMessage({ from, to, subject, html, replyTo }, { apiKey, domain, host }) {
  const form = new URLSearchParams({ from, to, subject, html });
  if (replyTo) form.set("h:Reply-To", replyTo);
  const response = await fetch(`https://${host}/v3/${domain}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`api:${apiKey}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: form.toString(),
  });
  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Mailgun ${response.status}: ${errText}`);
  }
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(204).end();

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, company, phone, subject, message, serviceOfInterest } = req.body || {};
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "Missing required fields: name, email, subject, message" });
    }

    const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
    const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
    const MAILGUN_FROM =
      process.env.MAILGUN_FROM_EMAIL || `Bique Global Enterprise <noreply@${MAILGUN_DOMAIN}>`;
    const MAILGUN_HOST = process.env.MAILGUN_HOST || "api.mailgun.net";

    if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
      console.error("MAILGUN_API_KEY or MAILGUN_DOMAIN not set");
      return res.status(500).json({ error: "Email service not configured" });
    }

    const mailgun = { apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN, host: MAILGUN_HOST };

    const internalHtml = [
      "<h2>New Contact Form Submission</h2>",
      `<p><strong>From:</strong> ${escapeHtml(name)}</p>`,
      `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
      company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : "",
      phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : "",
      serviceOfInterest ? `<p><strong>Service of interest:</strong> ${escapeHtml(serviceOfInterest)}</p>` : "",
      `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>`,
      "<hr />",
      "<h3>Message:</h3>",
      `<p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    ].join("");

    await sendMailgunMessage(
      {
        from: MAILGUN_FROM,
        to: "info@biqueglobal.com",
        subject: `Contact Form: ${subject}`,
        html: internalHtml,
        replyTo: email,
      },
      mailgun
    );

    const thankYouHtml = [
      `<p>Dear ${escapeHtml(name)},</p>`,
      "<p>Thank you for getting in touch with Bique Global Enterprise.</p>",
      "<p>We have received your message and will get back to you within <strong>24 hours</strong> during business days.</p>",
      "<p>Best regards,<br />The Bique Global Enterprise Team</p>",
    ].join("");

    await sendMailgunMessage(
      {
        from: MAILGUN_FROM,
        to: email,
        subject: "We received your message – Bique Global Enterprise",
        html: thankYouHtml,
      },
      mailgun
    );

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return res.status(500).json({ error: err.message || "Failed to send email" });
  }
}
