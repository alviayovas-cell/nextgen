import { Button, PageHero, Section, cardCls } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import NexoraLogo from "@/components/NexoraLogo";
import { hackathon, inside, nexora, pillars } from "@/data/community";
import { site } from "@/data/company";

const num = (i: number) => String(i + 1).padStart(2, "0");

export default function CommunityPage() {
  // Optional real invitation/registration link. Set NEXT_PUBLIC_COMMUNITY_URL in the environment to enable it.
  const joinUrl = process.env.NEXT_PUBLIC_COMMUNITY_URL;

  return (
    <>
      <PageHero
        eyebrow={`Nexora · ${nexora.label}`}
        title="Student Community"
        aside={<NexoraLogo priority className="size-56 sm:size-72 lg:size-80" />}
      >
        {nexora.intro}
      </PageHero>

      <Section eyebrow={nexora.tagline} title="Learn, build, innovate">
        <Stagger className="grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <StaggerItem key={p.title}>
              <div className={cardCls}>
                <span className="flex size-11 items-center justify-center rounded-xl bg-navy-950 font-display text-lg font-extrabold text-royal-500" aria-hidden>
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700">{p.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.1}>
          <p className="mt-10 rounded-2xl bg-navy-950 px-6 py-5 text-center font-display text-base font-bold text-white sm:text-lg">
            <span className="text-royal-400">{nexora.audience}</span>
          </p>
        </Reveal>
      </Section>

      <Section tone="white" eyebrow="Inside Nexora" title="Something is always happening">
        <Reveal>
          <p className="-mt-4 mb-10 max-w-2xl text-navy-700">Here is how members learn, create and connect.</p>
        </Reveal>
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {inside.map((item, i) => (
            <StaggerItem key={item.title}>
              <article className={cardCls}>
                <p className="font-display text-sm font-extrabold tracking-widest text-royal-700">{num(i)}</p>
                <h3 className="mt-2 font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700">{item.text}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <div className="container-x">
          <Reveal>
            <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-royal-400">Nexora</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight">Hackathons</h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">{hackathon.intro}</p>
          </Reveal>

          <Stagger className="mt-10 grid gap-4 sm:grid-cols-5">
            {hackathon.steps.map((step, i) => (
              <StaggerItem key={step}>
                <div className="rounded-2xl border border-royal-500/30 bg-royal-500/10 p-5 text-center">
                  <p className="text-xs font-bold uppercase tracking-widest text-royal-400">Step {i + 1}</p>
                  <p className="mt-1 font-display text-lg font-extrabold">{step}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hackathon.highlights.map((h, i) => (
              <StaggerItem key={h.title}>
                <article className="rounded-2xl border border-white/10 bg-navy-850 p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-royal-500/50">
                  <p className="font-display text-sm font-extrabold tracking-widest text-royal-400">{num(i)}</p>
                  <h3 className="mt-2 font-display text-lg font-bold">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{h.text}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-16 text-center sm:py-20">
        <Reveal className="container-x">
          <NexoraLogo className="mx-auto mb-6 size-24 rounded-2xl" />
          <h2 className="font-display text-3xl font-extrabold">Join Nexora today.</h2>
          <p className="mx-auto mt-3 max-w-xl text-navy-700">
            Ask how to become a member: call{" "}
            <a href={nexora.phoneHref} className="font-bold text-royal-700 underline">{nexora.phone}</a>
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {joinUrl && <Button href={joinUrl} external>Join Community</Button>}
            <Button href={nexora.phoneHref} variant={joinUrl ? "dark" : "primary"} external>Call to join</Button>
            <Button href={site.social.find((s) => s.label === "WhatsApp")!.href} variant="dark" external>
              Ask on WhatsApp
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
