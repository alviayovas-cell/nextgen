import { NextResponse } from "next/server";
import { internships } from "@/data/internships";

const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const REQUIRED = ["name", "email", "college", "department", "year", "skills", "motivation"] as const;

export async function POST(request: Request) {
  const endpoint = process.env.APPLICATION_FORM_ENDPOINT;
  if (!endpoint) {
    return NextResponse.json(
      { error: "Applications are not being accepted through the website yet (no submission destination is configured)." },
      { status: 503 },
    );
  }

  const form = await request.formData().catch(() => null);
  if (!form) return NextResponse.json({ error: "Invalid form data." }, { status: 400 });

  const errors: Record<string, string> = {};
  for (const key of REQUIRED) {
    if (!String(form.get(key) ?? "").trim()) errors[key] = "This field is required.";
  }
  const email = String(form.get("email") ?? "").trim();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email address.";
  const slug = String(form.get("internship") ?? "");
  if (!internships.some((i) => i.slug === slug && i.published)) errors.internship = "Unknown internship.";

  const resume = form.get("resume");
  const outgoing = new FormData();
  for (const [key, value] of form.entries()) {
    if (key !== "resume" && typeof value === "string") outgoing.append(key, value.trim());
  }
  if (resume instanceof File && resume.size > 0) {
    if (resume.size > MAX_RESUME_BYTES) errors.resume = "Resume must be 5 MB or smaller.";
    else if (!RESUME_TYPES.includes(resume.type)) errors.resume = "Resume must be a PDF or Word document.";
    else outgoing.append("resume", resume, resume.name);
  }

  if (Object.keys(errors).length) {
    return NextResponse.json({ error: "Please fix the highlighted fields.", fields: errors }, { status: 422 });
  }

  try {
    const res = await fetch(endpoint, { method: "POST", body: outgoing, headers: { Accept: "application/json" } });
    if (!res.ok) {
      return NextResponse.json({ error: "The application service rejected the submission. Please try again later." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Could not reach the application service. Please try again later." }, { status: 502 });
  }
}
