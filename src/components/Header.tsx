"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/company";

export function Logo() {
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
        <span className="block font-display text-[15px] font-extrabold tracking-[0.18em] text-white">NEXTGEN</span>
        <span className="mt-1 block font-display text-[11px] font-bold tracking-[0.42em] text-royal-400">LEARNERS</span>
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-950/95 backdrop-blur">
      <div className="container-x flex h-[72px] items-center justify-between">
        <Link href="/" aria-label={`${site.name} home`} onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className="relative text-[13.5px] font-semibold text-slate-200 transition-colors hover:text-white"
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-royal-500" />
              )}
            </Link>
          ))}
          <Link
            href="/internships"
            className="rounded-full bg-royal-500 px-5 py-2.5 text-[13.5px] font-bold text-navy-950 transition-colors hover:bg-royal-400"
          >
            Apply for Internship
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-lg text-white lg:hidden"
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

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-white/10 bg-navy-950 lg:hidden">
          <ul className="container-x flex flex-col py-3">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block rounded-lg px-2 py-3 text-base font-semibold ${
                    isActive(item.href) ? "text-royal-400" : "text-slate-200"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

