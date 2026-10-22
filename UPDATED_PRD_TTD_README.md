# Company Portfolio Website — Updated PRD & TTD

**Reference website:** https://nextgen-learning-two.vercel.app/  
**Document version:** 2.0  
**Status:** Development specification  
**Scope:** Home, About, Projects, Services, Internship Listings  
**Excluded:** Admin dashboard, admin authentication, SEO work, and unnecessary backend infrastructure

> The user confirms that they own the reference website and authorizes reuse of its company branding and assets. Use the reference as the source of truth for company identity and content, subject to asset accessibility.

---

# Part 1 — Product Requirements Document (PRD)

## 1. Project Overview

Build a professional, responsive company portfolio website using the existing company website as the primary source for brand identity, content, and visual design.

The website must present the company, explain its services, showcase its projects, and list internship opportunities. It should be easy to maintain and work well on desktop, tablet, and mobile devices.

### Goals

- Preserve the company's existing visual identity and messaging.
- Present the company's About, Projects, Services, and Internship information clearly.
- Provide an intuitive navigation and polished responsive user experience.
- Make internship opportunities easy to discover and provide a clear application path.
- Keep the implementation simple and avoid features outside the requested scope.

## 2. Design and Content Source

Reference: `https://nextgen-learning-two.vercel.app/`

The user confirms ownership of this reference website and authorizes reuse of its existing company identity and assets.

Inspect and reuse, where accessible and appropriate:

- Company name and logo
- Brand colors and fonts
- Existing text and company descriptions
- Images, illustrations, icons, and other company assets
- Navigation labels and footer details
- Existing design patterns, spacing, typography, cards, buttons, and animations

Inspect rendered styles and available source files rather than guessing exact font names or color values. Prefer reusing original assets from the repository or accessible website assets. If an asset cannot be accessed, document it and request the original file rather than claiming it has been copied.

## 3. Users

- **Potential clients and visitors:** want to understand the company and its services.
- **Project viewers:** want to explore the company's work and technology.
- **Students and internship applicants:** want to see internship details and understand how to apply.

## 4. Sitemap

Only the following public pages are in scope:

| Route | Purpose |
|---|---|
| `/` | Home page and overview |
| `/about` | Company story, mission, vision, and capabilities |
| `/projects` | Project portfolio |
| `/services` | Services offered by the company |
| `/internships` | Internship listings |
| `/internships/[slug]` | Optional internship detail page if useful |

Navigation may use separate routes or clearly structured sections if that better fits the existing site. Keep the experience simple and consistent.

## 5. Functional Requirements

### 5.1 Home page

- Reuse the company's existing logo, name, brand colors, fonts, and approved content.
- Include a clear hero heading, supporting description, and relevant calls to action.
- Provide short previews of About, Projects, Services, and Internships.
- Include links that navigate to the relevant page or section.
- Reuse existing company imagery where available.
- Include a consistent footer with verified contact and social details from the reference site.

### 5.2 About page

- Present the existing company overview and background.
- Reuse existing mission, vision, values, and capability descriptions when available.
- Reuse approved team information and imagery only if it is already part of the company's content and relevant to the page.
- Do not invent facts to fill missing content.

### 5.3 Projects page

- Display projects using responsive cards.
- Show project title, short description, relevant technologies, and available images.
- Add live demo or repository links only when verified and provided.
- Use optional category filters only if they improve navigation.
- If the source site has no project details, use clearly marked editable content placeholders until the owner supplies accurate information.

### 5.4 Services page

- Present the company's real services with descriptions and appropriate visual treatments.
- Reuse service wording from the reference when relevant.
- Use consistent cards, icons, and spacing.
- Link service calls to action to the Contact section/page only if a real contact destination exists.
- Do not add services that the company does not actually offer.

### 5.5 Internship listings

- Show available internship roles and the information provided for each role.
- Where known, include role, department/track, location, work mode, duration, eligibility, required skills, responsibilities, and deadline.
- Provide an Apply button for each opening.
- If detailed listings are not supplied, use maintainable local data with clearly identified placeholders.
- Make it clear when a listing is informational and when an application route is active.

#### Application behavior

The implementation must not pretend to submit an application if no submission destination exists.

Choose the simplest feasible approach:
1. Use an existing company application link or email destination if one is provided; or
2. Add a simple application form connected to a configured form service or small server endpoint, only if the project owner wants submissions handled on the website.

If a form is implemented:
- Include only the fields needed by the recruitment process.
- Validate required fields and email format.
- Provide loading, success, and error states.
- Validate on the server when a backend is used.
- Handle resume uploads only when a real, secure storage destination is configured.
- Do not expose applicant data publicly.
- Do not add student accounts or an admin dashboard.

## 6. Navigation and Interactions

- All navigation links lead to the correct route or section.
- The mobile menu opens and closes correctly and supports keyboard interaction.
- Buttons and cards that appear clickable have a real action.
- Project links open the intended destination.
- Internship Apply buttons lead to the correct application route or configured destination.
- Form validation messages are visible and understandable.
- Use consistent hover, focus, active, loading, and error states.

## 7. Responsive and Accessibility Requirements

- Support mobile, tablet, laptop, and wide desktop layouts.
- Prevent horizontal overflow.
- Use readable typography and appropriate content widths.
- Use semantic HTML and keyboard-accessible controls.
- Provide visible focus states and accessible form labels.
- Ensure adequate color contrast.
- Respect the user's `prefers-reduced-motion` setting.
- Use responsive images and avoid layout shifts where practical.

## 8. Explicit Non-Goals

Do not implement:

- Admin dashboard or content management system
- Admin login or authentication
- Student login, user profiles, or accounts
- Admin application review tools
- SEO optimization or SEO-specific work
- Sitemap, `robots.txt`, structured SEO data, or SEO campaigns
- Unnecessary database infrastructure
- Unrequested analytics, payments, or complex APIs

Do not add features beyond the five-page scope without asking first.

## 9. Acceptance Criteria

The project is acceptable when:

- [ ] The company logo, identity, and accessible original assets are reused correctly.
- [ ] The site visually follows the reference's design language.
- [ ] Home, About, Projects, Services, and Internship Listings are implemented.
- [ ] The site works on mobile, tablet, and desktop.
- [ ] Navigation, links, buttons, and any filters work.
- [ ] Project and service content is accurate or clearly marked as editable placeholder content.
- [ ] Internship Apply actions lead to a real destination or are clearly marked as not yet configured.
- [ ] Forms, if present, validate input and report actual submission outcomes.
- [ ] No admin dashboard, authentication, or SEO-specific features have been added.
- [ ] No broken images, dead buttons, or unnecessary placeholder links remain.
- [ ] Linting, type checks, and the production build pass, or any remaining failures are documented.

---

# Part 2 — Technical Design Document (TTD)

## 10. Recommended Stack

Use the existing project's stack if it is already configured and working. Otherwise, use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- React components
- CSS transitions or Framer Motion for restrained animations

Avoid introducing a database or backend framework unless a real application-submission workflow requires one.

## 11. Architecture

```text
Browser
  |
  v
Next.js application
  |
  |-- Home
  |-- About
  |-- Projects
  |-- Services
  |-- Internship Listings
  |
  |-- Shared layout and components
  |-- Local data/content files
  |
  `-- Optional application submission integration
        |-- Existing company application link/email
        |-- Or configured form provider/server endpoint
```

### Principles

- Prefer static or server-rendered public content where suitable.
- Store editable project, service, and internship content in typed local data files unless a real integration is required.
- Keep components reusable and avoid duplicating page layout.
- Do not introduce authentication, database infrastructure, or admin functionality.
- If an application backend is required, keep it limited to that workflow and secure applicant data.

## 12. Suggested Folder Structure

```text
company-portfolio/
├── public/
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   └── logo/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── services/page.tsx
│   │   ├── internships/page.tsx
│   │   ├── internships/[slug]/page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   ├── home/
│   │   ├── about/
│   │   ├── projects/
│   │   ├── services/
│   │   ├── internships/
│   │   └── ui/
│   ├── data/
│   │   ├── projects.ts
│   │   ├── services.ts
│   │   └── internships.ts
│   ├── lib/
│   │   └── utils.ts
│   └── types/
├── .gitignore
├── README.md
├── package.json
└── tsconfig.json
```

Adjust the structure to the repository and installed Next.js version. Do not create empty files or duplicate an existing architecture merely to match this example.

## 13. Content Types

### Project

```ts
export type Project = {
  title: string;
  slug: string;
  summary: string;
  description?: string;
  technologies: string[];
  image?: string;
  demoUrl?: string;
  repositoryUrl?: string;
  category?: string;
};
```

### Service

```ts
export type Service = {
  title: string;
  slug: string;
  summary: string;
  description?: string;
  iconKey?: string;
};
```

### Internship

```ts
export type Internship = {
  title: string;
  slug: string;
  department?: string;
  workMode?: string;
  location?: string;
  duration?: string;
  eligibility?: string[];
  skills?: string[];
  responsibilities?: string[];
  deadline?: string;
  applicationUrl?: string;
  applicationEmail?: string;
  published: boolean;
};
```

Keep content accurate and use optional fields when the company has not provided the information. Do not invent live URLs, email addresses, deadlines, or eligibility requirements.

## 14. Design System

Inspect the reference website and centralize verified design decisions in CSS variables and/or Tailwind theme tokens.

Include tokens for:

- Brand colors, backgrounds, surfaces, text, muted text, and borders
- Heading and body fonts
- Font sizes, weights, and line heights
- Page gutters, content width, section spacing, and grid gaps
- Border radii, shadows, buttons, and input states
- Responsive breakpoints
- Motion duration and easing

Reuse the original fonts and assets where accessible and permitted. If a font file is unavailable, use an appropriate fallback and document it. Do not claim exact color or font matching unless it has been verified.

## 15. Asset Handling

- Check the current repository before downloading or recreating assets.
- Reuse the company's original logo and images from the source website where accessible.
- Preserve asset aspect ratios and use appropriate responsive sizing.
- Use meaningful filenames and descriptive alt text for informative images.
- Avoid remote image configuration changes unless necessary.
- If a source asset cannot be retrieved, document its URL or identify the missing file for the owner.
- Do not use random replacement imagery when a company-specific asset is expected.

## 16. Application Form Integration (Optional)

This is only required if the owner wants applicants to submit forms directly through the site.

Preferred implementation order:
1. Reuse an existing application URL or official recruitment email.
2. Use a configured third-party form service.
3. Implement a small server endpoint only when necessary.

If implementing a form:
- Validate input and show meaningful errors.
- Configure the real submission destination using environment variables where appropriate.
- Keep credentials server-side.
- Restrict file uploads and use private storage if resumes are accepted.
- Avoid logging personal information.
- Do not claim success until the destination confirms submission.
- Document required setup and any provider limitations.

No admin dashboard or application management interface should be created.

## 17. Testing

### Functional
- Check all five pages and navigation links.
- Verify project cards, service cards, internship cards, and detail links.
- Check filters if implemented.
- Check application destination and form behavior if present.

### Responsive
- Test small mobile, large mobile, tablet, laptop, and desktop viewports.
- Check navigation, text wrapping, images, cards, and horizontal overflow.

### Accessibility
- Test keyboard navigation and focus visibility.
- Check labels, headings, semantic elements, and contrast.
- Verify reduced-motion behavior.

### Engineering
- Run the repository's lint command.
- Run TypeScript checks.
- Run available tests.
- Run a production build.
- Fix errors where possible and report any unresolved issue accurately.

## 18. Setup and Delivery

Update the project README with:

- Project overview
- Required runtime/version
- Installation commands
- Local development command
- Build and test commands
- How to edit project/service/internship data
- How to replace or update brand assets
- Application destination configuration, if implemented
- Deployment instructions

Do not include real credentials or secrets in the README.

## 19. Implementation Plan

1. Inspect repository and read existing documentation.
2. Inspect reference website and inventory available brand assets.
3. Record design tokens and page content.
4. Build shared layout, navigation, footer, and responsive components.
5. Implement Home, About, Projects, Services, and Internship Listings.
6. Add only the required application behavior.
7. Test interactions, accessibility, and responsive layouts.
8. Run lint, type checks, tests, and production build.
9. Update README and summarize completed work and remaining dependencies.

## 20. Final Scope Reminder

**Build:** Home, About, Projects, Services, Internship Listings.

**Reuse:** Existing company identity, logo, text, images, icons, and design assets from the reference website where accessible.

**Do not build:** Admin dashboard, admin login, CMS, student login, SEO features, or unnecessary backend infrastructure.
