import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "dark";
  external?: boolean;
};

const variants = {
  primary: "bg-royal-500 text-navy-950 hover:bg-royal-400",
  outline: "border border-white/30 text-white hover:border-royal-400 hover:text-royal-400",
  dark: "bg-navy-900 text-white hover:bg-navy-700",
};

export function Button({ href, children, variant = "primary", external }: ButtonProps) {
  const cls = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-colors ${variants[variant]}`;
  return external ? (
    <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>
  ) : (
    <Link href={href} className={cls}>{children}</Link>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="bg-navy-950 pb-16 pt-36 text-white">
      <div className="container-x">
        <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-royal-400">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{title}</h1>
        {children && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{children}</p>}
      </div>
    </section>
  );
}

export function Section({ title, eyebrow, children, action, tone = "light" }: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
  action?: ReactNode;
  tone?: "light" | "white";
}) {
  return (
    <section className={tone === "white" ? "bg-white py-16 sm:py-20" : "py-16 sm:py-20"}>
      <div className="container-x">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            {eyebrow && <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-royal-700">{eyebrow}</p>}
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight">{title}</h2>
          </div>
          {action}
        </div>
        {children}
      </div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className="rounded-full bg-royal-500/15 px-3 py-1 text-xs font-semibold text-navy-800">{children}</span>;
}

export const cardCls =
  "flex flex-col rounded-2xl border border-navy-900/10 bg-white p-6 shadow-lift transition-transform duration-300 hover:-translate-y-1";
