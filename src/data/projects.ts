export type Project = {
  title: string;
  slug: string;
  summary: string;
  technologies: string[];
  image?: string;
  demoUrl?: string;
  repositoryUrl?: string;
  /** True until the owner replaces the entry with a real, verified project. */
  placeholder?: boolean;
};

// The reference site lists no client projects. These entries are built from the
// hands-on programs it describes and flagged as editable where unverified.
// Replace them with real projects (and add demoUrl / repositoryUrl) when available.
export const projects: Project[] = [
  {
    title: "Generative AI Foundations",
    slug: "generative-ai-foundations",
    summary:
      "Hands-on program covering LLMs, prompt engineering, modern AI tools and real-world applications, currently training around 1,000 students.",
    technologies: ["LLMs", "Prompting", "AI Tools"],
    image: "/brand/learn1.jpeg",
  },
  {
    title: "Hands-on Training Labs",
    slug: "hands-on-training-labs",
    summary: "Project-based sessions where learners build real work instead of only watching lectures.",
    technologies: ["Project-based learning", "Mentoring"],
    image: "/brand/learn2.jpeg",
  },
  {
    title: "AI Skills for Students",
    slug: "ai-skills-for-students",
    summary: "Student-focused programs that connect AI skills to career outcomes and portfolio-ready work.",
    technologies: ["Generative AI", "Career guidance"],
    image: "/brand/learn3.jpeg",
  },
  {
    title: "Learner Dashboard Design",
    slug: "learner-dashboard-design",
    summary: "Learning dashboard concept showing progress, streaks and certificates, from the UI/UX program.",
    technologies: ["Figma", "Design Systems"],
    placeholder: true,
  },
  {
    title: "Business Intelligence Dashboards",
    slug: "business-intelligence-dashboards",
    summary: "Interactive dashboards and data storytelling built in the Power BI program.",
    technologies: ["Microsoft Power BI"],
    placeholder: true,
  },
];
