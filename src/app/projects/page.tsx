import { PageHero, Section } from "@/components/ui";
import { ProjectCard } from "@/components/Cards";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Projects" title="Real work, built hands-on">
        Our programs are project-based, so learners build real work and portfolios.
      </PageHero>
      <Section title="Featured work">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </Section>
    </>
  );
}
