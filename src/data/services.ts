export type Service = {
  title: string;
  slug: string;
  summary: string;
  points: string[];
};

// Source: https://nextgen-learning-two.vercel.app/training and /courses
export const services: Service[] = [
  {
    title: "Student Training",
    slug: "student-training",
    summary: "College and school programs that build job-ready skills before graduation.",
    points: ["Live weekend batches", "Industry projects", "Certification"],
  },
  {
    title: "Professional Upskill",
    slug: "professional-upskill",
    summary: "Short, focused courses for working professionals who want to advance quickly.",
    points: ["Evening and online batches", "Hands-on workshops", "Career guidance"],
  },
  {
    title: "Corporate Training",
    slug: "corporate-training",
    summary: "Custom training for companies and teams, including AI adoption and marketing transformation.",
    points: ["Tailored curriculum", "On-site or online delivery", "Team workshops"],
  },
  // Added at the owner's request. Descriptions are drafts for the owner to confirm; web development and
  // digital marketing wording follows the course descriptions on https://nextgen-learning-two.vercel.app/courses
  {
    title: "App Development",
    slug: "app-development",
    summary: "Mobile and cross-platform app development, from first idea to a working product.",
    points: ["Mobile app design and build", "Cross-platform apps", "Testing and launch support"],
  },
  {
    title: "Web Development",
    slug: "web-development",
    summary: "Modern, responsive websites and web applications built to work on every device.",
    points: ["Responsive websites", "Modern web technologies", "Hands-on, project-based work"],
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    summary: "SEO, social media marketing and digital advertising to help brands grow online.",
    points: ["SEO", "Social media marketing", "Digital advertising"],
  },
];

export const courses = [
  { title: "AI & Machine Learning", summary: "Build practical AI and machine learning solutions using Python and modern tools.", duration: "5 months", level: "Intermediate" },
  { title: "Data Analytics", summary: "Learn data analysis, visualization and business intelligence.", duration: "4 months", level: "Beginner" },
  { title: "Web Development", summary: "Master modern web development and create responsive websites.", duration: "4 months", level: "Beginner" },
  { title: "Cloud Computing", summary: "Learn cloud fundamentals and modern cloud technologies.", duration: "4 months", level: "Intermediate" },
  { title: "Digital Marketing", summary: "Learn SEO, social media marketing and digital advertising.", duration: "3 months", level: "Beginner" },
  { title: "UI/UX Design", summary: "Learn Figma, design systems, wireframing and user-centred product design through hands-on projects.", duration: "6 weeks", level: "Beginner" },
  { title: "Power BI", summary: "Build interactive dashboards and learn data storytelling with Microsoft Power BI.", duration: "4 weeks", level: "Beginner" },
  { title: "Graphic Design", summary: "Master visual design fundamentals, brand identity and creative tools with real design projects.", duration: "6 weeks", level: "Beginner" },
];
