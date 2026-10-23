import { PageHero, Section, Tag, cardCls } from "@/components/ui";
import { ServiceCard } from "@/components/Cards";
import { Stagger, StaggerItem } from "@/components/motion";
import { courses, services } from "@/data/services";

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="IT, software, AI and training services">
        From IT support, data and cloud to software, AI, digital marketing and skill development.
      </PageHero>
      <Section title="Training programs">
        <Stagger className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => <StaggerItem key={s.slug}><ServiceCard service={s} index={i} /></StaggerItem>)}
        </Stagger>
      </Section>
      <Section tone="white" title="Courses we teach">
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((c) => (
            <StaggerItem key={c.title}>
              <article className={cardCls}>
                <h3 className="font-display text-lg font-bold">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm text-navy-700">{c.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2"><Tag>{c.duration}</Tag><Tag>{c.level}</Tag></div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
    </>
  );
}
