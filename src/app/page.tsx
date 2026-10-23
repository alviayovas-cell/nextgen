import Image from "next/image";
import { Button, Section } from "@/components/ui";
import { InternshipCard, ProjectCard, ServiceCard } from "@/components/Cards";
import { ImageReveal, Parallax, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { nexora, pillars } from "@/data/community";
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
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(ellipse_70%_100%_at_50%_100%,rgba(234,88,12,0.45),transparent_70%)]"
        />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal y={30}>
              <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
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
                <Button href="/brochure/NextGen-Learners-Brochure.pdf" variant="outline" download>Download Brochure</Button>
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

      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <div className="container-x">
          <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-royal-400">
                Nexora · {nexora.label}
              </p>
              <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight">Student Community</h2>
              <p className="mt-4 max-w-2xl text-slate-300">{nexora.intro}</p>
            </div>
            <Button href="/community">Explore Student Community</Button>
          </Reveal>
          <Stagger className="grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <StaggerItem key={p.title}>
                <article className="rounded-2xl border border-white/10 bg-navy-850 p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-royal-500/50">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-royal-500 font-display text-lg font-extrabold text-navy-950" aria-hidden>
                    {i + 1}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.text}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1}>
            <p className="mt-8 text-center text-sm font-semibold text-royal-400">{nexora.audience}</p>
          </Reveal>
        </div>
      </section>

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
