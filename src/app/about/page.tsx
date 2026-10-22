import { PageHero, Section, cardCls } from "@/components/ui";
import { site, team } from "@/data/company";

const features = [
  { t: "Practical, Industry-Relevant Learning", d: "Programs are built around employer-sought skills, with projects and hands-on practice." },
  { t: "Expert Trainers & Mentors", d: "Experienced professionals guide students step by step." },
  { t: "Future-Ready, Career-Focused Skills", d: "Curriculum covers Generative AI, design, and data tools." },
];

const why = [
  "Industry-aligned curriculum", "Hands-on projects", "Experienced trainers", "Real-world learning",
  "Career guidance", "Certification", "Placement-oriented training", "Institutional partnerships",
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" title="Learning That Moves You Forward">{site.description}</PageHero>

      <Section title="Mission & vision">
        <div className="grid gap-6 md:grid-cols-2">
          <div className={cardCls}>
            <h3 className="font-display text-xl font-bold">Our mission</h3>
            <p className="mt-2 text-navy-700">To deliver hands-on, industry-relevant training with Generative AI at its core, so students learn by doing.</p>
          </div>
          <div className={cardCls}>
            <h3 className="font-display text-xl font-bold">Our vision</h3>
            <p className="mt-2 text-navy-700">To help students across Tamil Nadu build the practical, future-ready skills that technology-driven careers require.</p>
          </div>
        </div>
      </Section>

      <Section tone="white" title="What sets us apart">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.t} className={cardCls}>
              <h3 className="font-display text-lg font-bold">{f.t}</h3>
              <p className="mt-2 text-sm text-navy-700">{f.d}</p>
            </div>
          ))}
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {why.map((w) => (
            <li key={w} className="rounded-xl bg-navy-950 px-4 py-3 text-sm font-semibold text-white">
              <span className="mr-2 text-royal-500" aria-hidden>✓</span>{w}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Meet the team" eyebrow="The people behind NextGen Learners">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className={`${cardCls} flex-row items-start gap-4`}>
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-navy-950 font-display font-extrabold text-royal-500" aria-hidden>
                {m.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
              </span>
              <div>
                <h3 className="font-display font-bold">{m.name}</h3>
                <p className="text-sm font-semibold text-royal-700">{m.role}</p>
                <p className="mt-1 text-sm text-navy-700">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

