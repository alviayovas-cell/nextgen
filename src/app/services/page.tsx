import { PageHero, Section, Tag, cardCls } from "@/components/ui";
import { ServiceCard } from "@/components/Cards";
import { courses, services } from "@/data/services";

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Training for students, professionals and teams">
        Hands-on, industry-focused programs taught by experienced trainers.
      </PageHero>
      <Section title="Training programs">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
        </div>
      </Section>
      <Section tone="white" title="Courses we teach">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((c) => (
            <article key={c.title} className={cardCls}>
              <h3 className="font-display text-lg font-bold">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm text-navy-700">{c.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2"><Tag>{c.duration}</Tag><Tag>{c.level}</Tag></div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
