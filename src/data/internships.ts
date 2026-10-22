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
    title: "App Development Intern",
    slug: "app-development-intern",
    department: "Technology",
    workMode: "Hybrid",
    location: "Pallavaram, Chennai",
    duration: "3 months",
    summary: "Build and improve mobile and cross-platform app features with the technology team.",
    eligibility: ["Currently enrolled in a degree or diploma program", "At least one personal or class app project"],
    skills: ["Flutter or React Native", "Mobile UI", "Git basics"],
    responsibilities: [
      "Build and test mobile app screens and features",
      "Fix bugs and improve app performance",
      "Review work with senior developers",
    ],
    published: true,
  },
];
