import Link from "next/link";
import { Logo } from "./Header";
import { site } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{site.description}</p>
        </div>
        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-royal-400">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {site.nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-royal-400">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={site.phoneHref} className="hover:text-white">{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="break-all hover:text-white">{site.email}</a></li>
            <li>{site.address}</li>
          </ul>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
            {site.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-royal-400">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400">
        © 2026 {site.name}. All Rights Reserved. · Education &amp; Technology Training · Tamil Nadu, India
      </div>
    </footer>
  );
}

