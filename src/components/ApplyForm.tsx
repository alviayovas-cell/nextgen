"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/company";

type Status = "idle" | "submitting" | "success" | "error";

const field =
  "mt-1.5 w-full rounded-xl border border-navy-900/20 bg-white px-4 py-3 text-sm focus:border-royal-600 aria-[invalid=true]:border-red-600";

type FieldProps = { id: string; label: string; type?: string; required?: boolean; children?: React.ReactNode };

function FieldBase({ id, label, type = "text", required = true, children, errors }: FieldProps & { errors: Record<string, string> }) {
  const error = errors[id];
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold">
        {label}{required && <span className="text-red-700"> *</span>}
      </label>
      {children ?? (
        <input id={id} name={id} type={type} required={required} className={field}
          aria-invalid={!!error} aria-describedby={error ? `${id}-err` : undefined} />
      )}
      {error && <p id={`${id}-err`} className="mt-1 text-xs text-red-700">{error}</p>}
    </div>
  );
}

export default function ApplyForm({ slug, title }: { slug: string; title: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    setStatus("submitting");
    setMessage("");
    setFieldErrors({});
    try {
      const res = await fetch("/api/apply", { method: "POST", body: new FormData(formEl) });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus("success");
        formEl.reset();
        return;
      }
      setFieldErrors(data.fields ?? {});
      setMessage(data.error ?? "Something went wrong. Your application was not submitted.");
      setStatus("error");
    } catch {
      setMessage("Network error. Your application was not submitted.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-emerald-700/30 bg-emerald-50 p-6 text-emerald-900">
        <h3 className="font-display text-lg font-bold">Application received</h3>
        <p className="mt-1 text-sm">Thank you. Your application for {title} was submitted successfully.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate={false} className="grid gap-5 sm:grid-cols-2">
      <input type="hidden" name="internship" value={slug} />
      <input type="hidden" name="internshipTitle" value={title} />
      <FieldBase errors={fieldErrors} id="name" label="Full name" />
      <FieldBase errors={fieldErrors} id="email" label="Email" type="email" />
      <FieldBase errors={fieldErrors} id="college" label="College" />
      <FieldBase errors={fieldErrors} id="department" label="Department" />
      <FieldBase errors={fieldErrors} id="year" label="Year of study">
        <select id="year" name="year" required className={field} defaultValue="">
          <option value="" disabled>Select year</option>
          {["1st year", "2nd year", "3rd year", "4th year", "Postgraduate", "Graduated"].map((y) => (
            <option key={y}>{y}</option>
          ))}
        </select>
      </FieldBase>
      <FieldBase errors={fieldErrors} id="skills" label="Skills (comma separated)" />
      <div className="sm:col-span-2">
        <FieldBase errors={fieldErrors} id="links" label="Relevant profile links (LinkedIn, GitHub, portfolio)" required={false} type="text" />
      </div>
      <div className="sm:col-span-2">
        <FieldBase errors={fieldErrors} id="motivation" label="Why do you want this internship?">
          <textarea id="motivation" name="motivation" required rows={5} className={field}
            aria-invalid={!!fieldErrors.motivation} />
        </FieldBase>
      </div>
      <div className="sm:col-span-2">
        <FieldBase errors={fieldErrors} id="resume" label="Resume (PDF or Word, max 4 MB)" required={false}>
          <input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" className={`${field} file:mr-4 file:rounded-full file:border-0 file:bg-royal-500 file:px-4 file:py-2 file:font-bold`} />
        </FieldBase>
      </div>
      <div className="sm:col-span-2">
        {status === "error" && (
          <p role="alert" className="mb-4 rounded-xl border border-red-700/30 bg-red-50 p-4 text-sm text-red-800">
            {message} You can also email{" "}
            <a className="font-semibold underline" href={`mailto:${site.email}?subject=${encodeURIComponent(`Internship application: ${title}`)}`}>
              {site.email}
            </a>.
          </p>
        )}
        <button type="submit" disabled={status === "submitting"}
          className="rounded-full bg-navy-950 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-navy-700 disabled:opacity-60">
          {status === "submitting" ? "Submitting…" : "Submit application"}
        </button>
      </div>
    </form>
  );
}


