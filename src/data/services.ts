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
  // The services below were added at the owner's request (titles are the owner's). Descriptions and bullet points
  // are drafts for the owner to confirm. Corporate Training and Digital Marketing wording follows
  // https://nextgen-learning-two.vercel.app/training and /courses.
  {
    title: "IT Support / Managed Services",
    slug: "it-support-managed-services",
    summary: "Reliable day-to-day IT support and managed services that keep your systems running smoothly.",
    points: ["Helpdesk and technical support", "System monitoring and maintenance", "Ongoing managed IT"],
  },
  {
    title: "Data & Business Intelligence",
    slug: "data-business-intelligence",
    summary: "Turn business data into clear dashboards and insights that support better decisions.",
    points: ["Data analysis and reporting", "Interactive dashboards", "Business intelligence solutions"],
  },
  {
    title: "Cloud & IT Infrastructure",
    slug: "cloud-it-infrastructure",
    summary: "Cloud and infrastructure solutions that are secure, scalable and built for your business.",
    points: ["Cloud setup and migration", "Infrastructure planning", "Ongoing support"],
  },
  {
    title: "Corporate Training & Skill Development",
    slug: "corporate-training",
    summary: "Custom training for companies and teams, including AI adoption and marketing transformation.",
    points: ["Tailored curriculum", "On-site or online delivery", "Team workshops"],
  },
  {
    title: "Digital Marketing & Growth",
    slug: "digital-marketing",
    summary: "SEO, social media marketing and digital advertising to help brands grow online.",
    points: ["SEO", "Social media marketing", "Digital advertising"],
  },
  {
    title: "AI & Automation Services",
    slug: "ai-automation-services",
    summary: "Practical AI and automation that save time and help teams work more efficiently.",
    points: ["AI adoption support", "Workflow automation", "Generative AI solutions"],
  },
  {
    title: "IT Software Development",
    slug: "it-software-development",
    summary: "Custom software built around your business needs, from planning to delivery.",
    points: ["Custom software solutions", "Web and mobile applications", "Testing and support"],
  },
  // Added earlier at the owner's request.
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
