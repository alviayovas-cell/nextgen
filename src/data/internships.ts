export type Internship = {
  title: string;
  slug: string;
  department: string;
  workMode: string;
  location: string;
  duration: string;
  summary: string;
  eligibility: string[];
  skills: string[];
  responsibilities: string[];
  published: boolean;
};

// The reference site does not list internships. Titles follow the company's real
// course tracks; workMode, duration and eligibility are EDITABLE PLACEHOLDERS the
// owner must confirm before launch. Set `published: false` to hide a listing.
export const internships: Internship[] = [
  {
    title: "Generative AI Intern",
    slug: "generative-ai-intern",
    department: "AI & Data",
    workMode: "Hybrid",
    location: "Pallavaram, Chennai",
    duration: "3 months",
    summary: "Work on prompt engineering and AI-tool workflows alongside the Generative AI curriculum team.",
    eligibility: ["Currently enrolled in a degree or diploma program", "Comfortable writing clearly in English"],
    skills: ["Prompt engineering", "LLM basics", "Python (basic)"],
    responsibilities: [
      "Test and document prompts and AI tools",
      "Help prepare hands-on lab material",
      "Support learners during practice sessions",
    ],
    published: true,
  },
  {
    title: "UI/UX Design Intern",
    slug: "ui-ux-design-intern",
    department: "Design & Creative",
    workMode: "Hybrid",
    location: "Pallavaram, Chennai",
    duration: "3 months",
    summary: "Design learner-facing screens and design-system components with the creative team.",
    eligibility: ["Currently enrolled in a degree or diploma program", "A portfolio or sample designs"],
    skills: ["Figma", "Wireframing", "Design systems"],
    responsibilities: [
      "Create wireframes and UI mockups",
      "Maintain design-system components",
      "Collaborate with developers on handoff",
    ],
    published: true,
  },
  {
    title: "Web Development Intern",
    slug: "web-development-intern",
    department: "Technology",
    workMode: "Hybrid",
    location: "Pallavaram, Chennai",
    duration: "3 months",
    summary: "Build and improve responsive web experiences for learners with the technology team.",
    eligibility: ["Currently enrolled in a degree or diploma program", "At least one personal or class project"],
    skills: ["HTML/CSS", "JavaScript or TypeScript", "React"],
    responsibilities: [
      "Build responsive UI features",
      "Fix bugs and improve accessibility",
      "Review work with senior developers",
    ],
    published: true,
  },
  {
    title: "Marketing & Growth Intern",
    slug: "marketing-growth-intern",
    department: "Marketing & Growth",
    workMode: "Hybrid",
    location: "Pallavaram, Chennai",
    duration: "3 months",
    summary: "Support social media, campaigns and student outreach for NextGen Learners programs.",
    eligibility: ["Currently enrolled in a degree or diploma program", "Strong written communication"],
    skills: ["Social media", "Content writing", "Basic analytics"],
    responsibilities: [
      "Draft posts and campaign content",
      "Assist with student outreach",
      "Track campaign results",
    ],
    published: true,
  },
];
