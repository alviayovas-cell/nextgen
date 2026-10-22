import { PageHero, Section } from "@/components/ui";
import { ProjectCard } from "@/components/Cards";
import { Stagger, StaggerItem } from "@/components/motion";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Projects" title="Real work, built hands-on">
        Our programs are project-based, so learners build real work and portfolios.
      </PageHero>
      <Section title="Featured work">
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => <StaggerItem key={p.slug}><ProjectCard project={p} /></StaggerItem>)}
        </Stagger>
      </Section>
    </>
  );
}
