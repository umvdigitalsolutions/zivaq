const RESEND_API_URL = "https://api.resend.com/emails";

function clean(value) {
  return String(value ?? "").trim();
}

function escapeHtml(value) {
  return clean(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getEmailConfig() {
  return {
    apiKey: process.env.RESEND_API_KEY || process.env.MAILSEND_API_KEY,
    to:
      process.env.CONTACT_EMAIL_TO ||
      process.env.MAILSEND_TO_EMAIL ||
      "umvdigitalsolutions@gmail.com",
    bcc: clean(process.env.CONTACT_EMAIL_BCC || process.env.MAILSEND_BCC),
    from:
      process.env.CONTACT_EMAIL_FROM ||
      process.env.MAILSEND_FROM_EMAIL ||
      "ZivaQ Website <onboarding@resend.dev>",
  };
}

export async function sendContactInquiry({
  name,
  email,
  phone,
  message,
  type = "General inquiry",
  segment = "Not specified",
}) {
  const { apiKey, to, bcc, from } = getEmailConfig();

  if (!apiKey) {
    throw new Error("Email delivery is not configured.");
  }

  if (from.includes("yourdomain.com") || from.includes("your-verified-domain.com")) {
    throw new Error(
      "Email sender must use a real domain verified in Resend.",
    );
  }

  const subject = `New ${type} from ${name}`;
  const text = [
    subject,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Segment: ${segment}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <h2>${escapeHtml(type)}</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
    <p><strong>Segment:</strong> ${escapeHtml(segment)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
  `;

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject,
      html,
      text,
      ...(bcc ? { bcc: [bcc] } : {}),
    }),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || "Unable to send email right now.");
  }

  return data;
}
