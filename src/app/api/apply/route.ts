import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { internships } from "@/data/internships";
import { site } from "@/data/company";

export const runtime = "nodejs";

const MAX_RESUME_BYTES = 4 * 1024 * 1024;
const RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const REQUIRED = ["name", "email", "college", "department", "year", "skills", "motivation"] as const;

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

type Mail = {
  to: string;
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
  attachment?: { filename: string; content: Buffer };
};

/** Sends through the configured SMTP server (Brevo, Gmail, ...). Throws on failure. */
async function sendMail(mail: Mail, fromName: string) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  await transporter.sendMail({
    from: `"${fromName}" <${process.env.SMTP_FROM}>`,
    to: mail.to,
    replyTo: mail.replyTo,
    subject: mail.subject,
    text: mail.text,
    html: mail.html,
    attachments: mail.attachment ? [mail.attachment] : [],
  });
}

export async function POST(request: Request) {
  const { SMTP_HOST, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;
  const to = process.env.APPLICATION_TO_EMAIL || SMTP_FROM;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !SMTP_FROM || !to) {
    return NextResponse.json(
      { error: "Applications are not being accepted through the website yet (email delivery is not configured)." },
      { status: 503 },
    );
  }

  const form = await request.formData().catch(() => null);
  if (!form) return NextResponse.json({ error: "Invalid form data." }, { status: 400 });

  const get = (k: string) => String(form.get(k) ?? "").trim();
  const errors: Record<string, string> = {};
  for (const key of REQUIRED) if (!get(key)) errors[key] = "This field is required.";
  const email = get("email");
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email address.";
  const role = internships.find((i) => i.slug === get("internship") && i.published);
  if (!role) errors.internship = "Unknown internship.";

  const resume = form.get("resume");
  let attachment: { filename: string; content: Buffer } | undefined;
  if (resume instanceof File && resume.size > 0) {
    if (resume.size > MAX_RESUME_BYTES) errors.resume = "Resume must be 4 MB or smaller.";
    else if (!RESUME_TYPES.includes(resume.type)) errors.resume = "Resume must be a PDF or Word document.";
    else attachment = { filename: resume.name, content: Buffer.from(await resume.arrayBuffer()) };
  }

  if (Object.keys(errors).length || !role) {
    return NextResponse.json({ error: "Please fix the highlighted fields.", fields: errors }, { status: 422 });
  }

  const rows: [string, string][] = [
    ["Internship", role.title],
    ["Name", get("name")],
    ["Email", email],
    ["College", get("college")],
    ["Department", get("department")],
    ["Year of study", get("year")],
    ["Skills", get("skills")],
    ["Profile links", get("links") || "—"],
    ["Motivation", get("motivation")],
    ["Resume", attachment ? attachment.filename : "Not attached"],
  ];

  try {
    await sendMail(
      {
        to,
        replyTo: email,
        subject: `New internship application: ${role.title} – ${get("name")}`,
        text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
        html: `<table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${rows
          .map(([k, v]) => `<tr><td style="font-weight:bold;vertical-align:top">${esc(k)}</td><td style="white-space:pre-wrap">${esc(v)}</td></tr>`)
          .join("")}</table>`,
        attachment,
      },
      `${site.name} Website`,
    );
  } catch {
    return NextResponse.json(
      { error: "We could not deliver your application right now. Please try again later." },
      { status: 502 },
    );
  }

  // Confirmation to the candidate. The application is already delivered, so a failure here is not fatal.
  try {
    await sendMail(
      {
        to: email,
        replyTo: to,
        subject: `You have successfully applied – ${role.title}`,
        text:
          `Hi ${get("name")},\n\nYou have successfully applied for the ${role.title} internship at ${site.name}. ` +
          `We have received your application and our team will review it and contact you if you are shortlisted.\n\n` +
          `If you have questions, reply to this email or write to ${site.email}.\n\nRegards,\n${site.name}\n${site.address}\n${site.phone}`,
        html:
          `<div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.6;color:#111">` +
          `<p>Hi ${esc(get("name"))},</p>` +
          `<p><strong>You have successfully applied</strong> for the <strong>${esc(role.title)}</strong> internship at ${esc(site.name)}.</p>` +
          `<p>We have received your application and our team will review it and contact you if you are shortlisted.</p>` +
          `<p>If you have questions, reply to this email or write to <a href="mailto:${esc(site.email)}">${esc(site.email)}</a>.</p>` +
          `<p>Regards,<br>${esc(site.name)}<br>${esc(site.address)}<br>${esc(site.phone)}</p></div>`,
      },
      site.name,
    );
  } catch {
    /* intentionally ignored: applicant details are not logged */
  }

  return NextResponse.json({ ok: true });
}
