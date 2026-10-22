import Link from "next/link";
import { notFound } from "next/navigation";
import ApplyForm from "@/components/ApplyForm";
import { PageHero, Section, Tag } from "@/components/ui";
import { internships } from "@/data/internships";

export function generateStaticParams() {
  return internships.filter((i) => i.published).map((i) => ({ slug: i.slug }));
}

export default async function InternshipPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = internships.find((i) => i.slug === slug && i.published);
  if (!item) notFound();

  const list = (title: string, items: string[]) => (
    <div>
      <h3 className="font-display text-lg font-bold">{title}</h3>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-navy-700">{items.map((x) => <li key={x}>{x}</li>)}</ul>
    </div>
  );

  return (
    <>
      <PageHero eyebrow={item.department} title={item.title}>{item.summary}</PageHero>
      <Section title="Role details" action={
        <Link href="/internships" className="text-sm font-bold text-royal-700 hover:underline">← All internships</Link>
      }>
        <dl className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[["Duration", item.duration], ["Work mode", item.workMode], ["Location", item.location], ["Department", item.department]].map(([k, v]) => (
            <div key={k} className="rounded-xl bg-white p-4 shadow-lift"><dt className="text-xs text-navy-600">{k}</dt><dd className="font-semibold">{v}</dd></div>
          ))}
        </dl>
        <div className="grid gap-8 md:grid-cols-2">
          {list("Requirements", item.eligibility)}
          {list("Responsibilities", item.responsibilities)}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">{item.skills.map((s) => <Tag key={s}>{s}</Tag>)}</div>
      </Section>
      <section id="apply" className="scroll-mt-24 bg-white py-16">
        <div className="container-x max-w-3xl">
          <h2 className="font-display text-3xl font-extrabold">Apply for this internship</h2>
          <p className="mb-8 mt-2 text-navy-700">Fields marked * are required.</p>
          <ApplyForm slug={item.slug} title={item.title} />
        </div>
      </section>
    </>
  );
}
