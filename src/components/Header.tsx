"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/company";

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className="group flex items-center gap-2.5">
      <Image
        src="/brand/logo.jpeg"
        alt=""
        width={44}
        height={44}
        priority
        className="size-11 shrink-0 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <span className="leading-none">
        <span
          className={`block font-display text-[15px] font-extrabold tracking-[0.18em] ${
            tone === "dark" ? "text-navy-950" : "text-white"
          }`}
        >
          NEXTGEN
        </span>
        <span
          className={`mt-1 block font-display text-[11px] font-bold tracking-[0.42em] ${
            tone === "dark" ? "text-royal-700" : "text-royal-400"
          }`}
        >
          LEARNERS
        </span>
      </span>
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-navy-900/10 bg-white/95 shadow-lift backdrop-blur lg:rounded-full">
        <div className="flex h-[68px] items-center justify-between gap-4 pl-4 pr-3 sm:pl-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:pr-4">
          <div className="flex items-center gap-3">
            <Link href="/" aria-label={`${site.name} home`} onClick={() => setOpen(false)}>
              <Logo tone="dark" />
            </Link>
            <span className="hidden border-l border-navy-900/15 pl-3 font-display text-[10px] font-bold uppercase leading-tight tracking-[0.22em] text-royal-700 md:block">
              Company
              <br />
              Portfolio
            </span>
          </div>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`text-sm font-semibold transition-colors ${
                  isActive(item.href) ? "text-royal-700" : "text-navy-800 hover:text-royal-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2">
            <Link
              href="/internships"
              className="hidden rounded-full bg-royal-500 px-5 py-3 text-sm font-bold text-navy-950 transition-colors hover:bg-royal-400 lg:inline-flex"
            >
              Apply for Internship
            </Link>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full text-navy-950 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <nav id="mobile-menu" aria-label="Mobile" className="border-t border-navy-900/10 px-4 pb-4 pt-2 lg:hidden">
            <ul className="flex flex-col">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`block rounded-xl px-3 py-3 text-base font-semibold ${
                      isActive(item.href) ? "bg-royal-500/15 text-royal-700" : "text-navy-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/internships"
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-full bg-royal-500 px-5 py-3 text-center text-sm font-bold text-navy-950"
            >
              Apply for Internship
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
