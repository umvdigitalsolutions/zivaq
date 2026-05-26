const RESEND_API_URL = "https://api.resend.com/emails";
const PLACEHOLDER_FROM = "ZivaQ Website <contact@your-verified-domain.com>";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function clean(value) {
  return String(value ?? "").trim();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const firstName = clean(body.firstName);
  const lastName = clean(body.lastName);
  const email = clean(body.email);
  const phone = clean(body.phone);
  const company = clean(body.company);
  const message = clean(body.message);
  const website = clean(body.website);

  if (website) {
    return Response.json({ ok: true });
  }

  if (!firstName || !lastName || !email || !message) {
    return Response.json(
      { error: "Please provide your name, email, and message." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return Response.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY || process.env.MAILSEND_API_KEY;
  const to =
    process.env.CONTACT_EMAIL_TO ||
    process.env.MAILSEND_TO_EMAIL ||
    "umvdigitalsolutions@gmail.com";
  const bcc = clean(process.env.CONTACT_EMAIL_BCC || process.env.MAILSEND_BCC);
  const from =
    process.env.CONTACT_EMAIL_FROM ||
    process.env.MAILSEND_FROM_EMAIL ||
    "ZivaQ Website <onboarding@resend.dev>";

  if (!apiKey) {
    return Response.json(
      { error: "Email delivery is not configured." },
      { status: 500 },
    );
  }

  if (from === PLACEHOLDER_FROM || from.includes("your-verified-domain.com")) {
    return Response.json(
      {
        error:
          "CONTACT_EMAIL_FROM must use a real sender address from a domain verified in Resend.",
      },
      { status: 500 },
    );
  }

  const fullName = `${firstName} ${lastName}`;
  const subject = `New website inquiry from ${fullName}`;
  const text = [
    subject,
    "",
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Company: ${company || "Not provided"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <h2>New website inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
    <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
  `;

  const emailPayload = {
    from,
    to: [to],
    reply_to: email,
    subject,
    html,
    text,
    ...(bcc ? { bcc: [bcc] } : {}),
  };

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailPayload),
  });

  if (!response.ok) {
    const resendError = await response.json().catch(() => null);
    console.error("Resend contact email failed", resendError);

    return Response.json(
      {
        error:
          resendError?.message ||
          "We could not send your message. Please try again later.",
      },
      { status: 502 },
    );
  }

  const resendEmail = await response.json().catch(() => null);
  console.log("Resend contact email accepted", {
    id: resendEmail?.id,
    to,
    bcc: bcc || undefined,
    from,
  });

  return Response.json({ ok: true, id: resendEmail?.id });
}
