import { PageHero, Section } from "@/components/ui";
import { InternshipCard } from "@/components/Cards";
import { internships } from "@/data/internships";
import { site } from "@/data/company";

export default function InternshipsPage() {
  const open = internships.filter((i) => i.published);
  return (
    <>
      <PageHero eyebrow="Internships" title="Learn on real teams">
        Choose a role, read the details, and apply online. Questions? Email{" "}
        <a className="text-royal-400 underline" href={`mailto:${site.email}`}>{site.email}</a>.
      </PageHero>
      <Section title="Open roles">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {open.map((i) => <InternshipCard key={i.slug} internship={i} />)}
        </div>
        <h2 className="mt-14 font-display text-2xl font-extrabold">How to apply</h2>
        <ol className="mt-4 max-w-2xl list-decimal space-y-2 pl-5 text-navy-700">
          <li>Open a role and review the requirements.</li>
          <li>Fill in the application form with your details, skills and profile links.</li>
          <li>Attach your resume (optional) and submit. You will see a confirmation only when it has been delivered.</li>
        </ol>
      </Section>
    </>
  );
}

