import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import type { Service } from "@/data/services";
import type { Internship } from "@/data/internships";
import { Tag, cardCls } from "./ui";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-lift">
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={500}
          className="aspect-[16/10] w-full object-cover"
        />
      ) : (
        <div className="flex aspect-[16/10] items-center justify-center bg-navy-950 font-display text-2xl font-extrabold text-royal-500" aria-hidden>
          {project.title.split(" ").map((w) => w[0]).slice(0, 2).join("")}
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        {project.placeholder && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-royal-700">Sample entry · owner to confirm</p>
        )}
        <h3 className="font-display text-xl font-bold">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-700">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
        {(project.demoUrl || project.repositoryUrl) && (
          <div className="mt-5 flex gap-4 text-sm font-bold">
            {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-royal-700 hover:underline">Live demo</a>}
            {project.repositoryUrl && <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className="text-royal-700 hover:underline">Repository</a>}
          </div>
        )}
      </div>
    </article>
  );
}

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <article className={cardCls}>
      <span className="flex size-11 items-center justify-center rounded-xl bg-navy-950 font-display text-lg font-extrabold text-royal-500" aria-hidden>
        {index + 1}
      </span>
      <h3 className="mt-5 font-display text-xl font-bold">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-700">{service.summary}</p>
      <ul className="mt-4 space-y-1.5 text-sm font-medium">
        {service.points.map((p) => (
          <li key={p} className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-royal-500" aria-hidden />
            {p}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function InternshipCard({ internship }: { internship: Internship }) {
  return (
    <article className={cardCls}>
      <p className="text-xs font-bold uppercase tracking-wider text-royal-700">{internship.department}</p>
      <h3 className="mt-1 font-display text-xl font-bold">{internship.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-700">{internship.summary}</p>
      <dl className="mt-4 grid grid-cols-2 gap-2 text-sm">
        <div><dt className="text-xs text-navy-600">Duration</dt><dd className="font-semibold">{internship.duration}</dd></div>
        <div><dt className="text-xs text-navy-600">Mode</dt><dd className="font-semibold">{internship.workMode}</dd></div>
      </dl>
      <div className="mt-4 flex flex-wrap gap-2">
        {internship.skills.map((s) => <Tag key={s}>{s}</Tag>)}
      </div>
      <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold">
        <Link href={`/internships/${internship.slug}`} className="rounded-full border border-navy-900/20 px-5 py-2.5 hover:border-royal-600">
          View details
        </Link>
        <Link href={`/internships/${internship.slug}#apply`} className="rounded-full bg-royal-500 px-5 py-2.5 text-navy-950 hover:bg-royal-400">
          Apply
        </Link>
      </div>
    </article>
  );
}
