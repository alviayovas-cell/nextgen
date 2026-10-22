import Image from "next/image";
import { Button, Section } from "@/components/ui";
import { InternshipCard, ProjectCard, ServiceCard } from "@/components/Cards";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { internships } from "@/data/internships";
import { site } from "@/data/company";

export default function HomePage() {
  const openings = internships.filter((i) => i.published).slice(0, 3);
  return (
    <>
      <section className="bg-navy-950 pb-20 pt-36 text-white">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-royal-500/40 bg-royal-500/10 px-4 py-1.5 font-display text-[11px] font-bold uppercase tracking-[0.22em] text-royal-400 sm:text-xs sm:tracking-[0.28em]">
              <span className="size-1.5 rounded-full bg-royal-500" aria-hidden />
              Official Company Portfolio
            </p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Empowering Students With <span className="text-royal-500">Future-Ready</span> Skills.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Explore NEXTGENLEARNERS’ company profile, services, projects, and Web Development and App Development
              internship opportunities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/services">Explore Services</Button>
              <Button href="/internships" variant="outline">Apply for Internship</Button>
            </div>
            <dl className="mt-10 flex gap-10">
              <div><dt className="text-sm text-slate-400">Students</dt><dd className="font-display text-3xl font-extrabold text-royal-400">1,000+</dd></div>
              <div><dt className="text-sm text-slate-400">Learning</dt><dd className="font-display text-3xl font-extrabold text-royal-400">100% hands-on</dd></div>
            </dl>
          </div>
          <Image src="/brand/learn1.jpeg" alt="Students learning Generative AI" width={900} height={600} priority
            className="aspect-[3/2] w-full rounded-3xl object-cover" />
        </div>
      </section>

      <Section eyebrow="About us" title="Learning That Moves You Forward"
        action={<Button href="/about" variant="dark">Learn more about us</Button>}>
        <p className="max-w-3xl text-lg leading-relaxed text-navy-700">{site.description} Programs are built around
          employer-sought skills, with projects and hands-on practice, guided by experienced professionals.</p>
      </Section>

      <Section tone="white" eyebrow="Services" title="How we help"
        action={<Button href="/services" variant="dark">All services</Button>}>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
        </div>
      </Section>

      <Section eyebrow="Featured projects" title="Learning by building"
        action={<Button href="/projects" variant="dark">All projects</Button>}>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.slice(0, 3).map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </Section>

      <Section tone="white" eyebrow="Internships" title="Start your career with us"
        action={<Button href="/internships">View all internships</Button>}>
        <div className="grid gap-6 md:grid-cols-3">
          {openings.map((i) => <InternshipCard key={i.slug} internship={i} />)}
        </div>
      </Section>

      <section className="bg-navy-950 py-16 text-center text-white">
        <div className="container-x">
          <h2 className="font-display text-3xl font-extrabold">Your Future Starts With One Skill.</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/internships">Apply for an internship</Button>
            <Button href={`mailto:${site.email}`} variant="outline" external>Talk to us</Button>
          </div>
        </div>
      </section>
    </>
  );
}

