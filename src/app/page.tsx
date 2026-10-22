import Image from "next/image";
import { Button, Section } from "@/components/ui";
import { InternshipCard, ProjectCard, ServiceCard } from "@/components/Cards";
import { ImageReveal, Parallax, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { internships } from "@/data/internships";
import { site } from "@/data/company";

export default function HomePage() {
  const openings = internships.filter((i) => i.published).slice(0, 3);
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 pb-20 pt-36 text-white">
        <Parallax offset={50} className="pointer-events-none absolute inset-0" >
          <div aria-hidden className="ambient-blob absolute -left-24 top-10 size-[28rem] rounded-full bg-royal-500/15 blur-3xl" />
          <div aria-hidden className="ambient-blob ambient-blob-slow absolute -right-20 bottom-0 size-[24rem] rounded-full bg-royal-400/10 blur-3xl" />
        </Parallax>
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal y={14}>
              <p className="inline-flex items-center gap-2 rounded-full border border-royal-500/40 bg-royal-500/10 px-4 py-1.5 font-display text-[11px] font-bold uppercase tracking-[0.22em] text-royal-400 sm:text-xs sm:tracking-[0.28em]">
                <span className="size-1.5 rounded-full bg-royal-500" aria-hidden />
                Official Company Portfolio
              </p>
            </Reveal>
            <Reveal delay={0.12} y={30}>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                Empowering Students With <span className="text-royal-500">Future-Ready</span> Skills.
              </h1>
            </Reveal>
            <Reveal delay={0.28}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                Explore NEXTGENLEARNERS’ company profile, services, projects, and Web Development and App Development
                internship opportunities.
              </p>
            </Reveal>
            <Reveal delay={0.42}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/services">Explore Services</Button>
                <Button href="/internships" variant="outline">Apply for Internship</Button>
              </div>
            </Reveal>
            <Reveal delay={0.56}>
              <dl className="mt-10 flex gap-10">
                <div><dt className="text-sm text-slate-400">Students</dt><dd className="font-display text-3xl font-extrabold text-royal-400">1,000+</dd></div>
                <div><dt className="text-sm text-slate-400">Learning</dt><dd className="font-display text-3xl font-extrabold text-royal-400">100% hands-on</dd></div>
              </dl>
            </Reveal>
          </div>
          <Reveal delay={0.3} y={40}>
            <Parallax offset={14}>
              <ImageReveal className="rounded-3xl">
                <Image src="/brand/learn1.jpeg" alt="Students learning Generative AI" width={900} height={600} priority
                  className="aspect-[3/2] w-full object-cover" />
              </ImageReveal>
            </Parallax>
          </Reveal>
        </div>
      </section>

      <Section eyebrow="About us" title="Learning That Moves You Forward"
        action={<Button href="/about" variant="dark">Learn more about us</Button>}>
        <Reveal delay={0.1}>
          <p className="max-w-3xl text-lg leading-relaxed text-navy-700">{site.description} Programs are built around
            employer-sought skills, with projects and hands-on practice, guided by experienced professionals.</p>
        </Reveal>
      </Section>

      <Section tone="white" eyebrow="Services" title="How we help"
        action={<Button href="/services" variant="dark">All services</Button>}>
        <Stagger className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => <StaggerItem key={s.slug}><ServiceCard service={s} index={i} /></StaggerItem>)}
        </Stagger>
      </Section>

      <Section eyebrow="Featured projects" title="Learning by building"
        action={<Button href="/projects" variant="dark">All projects</Button>}>
        <Stagger className="grid gap-6 md:grid-cols-3">
          {projects.slice(0, 3).map((p) => <StaggerItem key={p.slug}><ProjectCard project={p} /></StaggerItem>)}
        </Stagger>
      </Section>

      <Section tone="white" eyebrow="Internships" title="Start your career with us"
        action={<Button href="/internships">View all internships</Button>}>
        <Stagger className="grid gap-6 md:grid-cols-3">
          {openings.map((i) => <StaggerItem key={i.slug}><InternshipCard internship={i} /></StaggerItem>)}
        </Stagger>
      </Section>

      <section className="bg-navy-950 py-16 text-center text-white">
        <Reveal className="container-x">
          <h2 className="font-display text-3xl font-extrabold">Your Future Starts With One Skill.</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/internships">Apply for an internship</Button>
            <Button href={`mailto:${site.email}`} variant="outline" external>Talk to us</Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
