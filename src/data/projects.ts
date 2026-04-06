export interface ProjectSection {
  heading: string;
  body: string;
  image?: string;
}

export interface ProjectDetail {
  label: string;
  body: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image?: string;
  summary: string;
  sections: ProjectSection[];
  details: ProjectDetail[];
}

export const projects: Project[] = [
  {
    slug: "quickview",
    title: "Quickview",
    category: "Product Design",
    year: "December 2025",
    description:
      "Shipped a faster, clearer way for artists to get to the information that matters most.",
    image: "/images/quickview.png",
    summary:
      "I go to ship a way for artists to get to the info that matters most to them, sooner + cleaner. We got to completely re-do an onboarding flow that used to take ages for new artists find value.",
    sections: [
      {
        heading: "How it is now.",
        body: "I go to ship a way for artists to get to the info that matters most to them, sooner + cleaner. We got to completely re-do an",
      },
      {
        heading: "How it was then.",
        body: "I go to ship a way for artists to get to the info that matters most to them, sooner + cleaner. We got to completely re-do an",
      },
    ],
    details: [
      { label: "The many UI iterations we tested around previewing content", body: "We explored over a dozen layout variations for how artists preview campaign results — from inline expanders to modal overlays to split-pane views. Each was prototyped and tested with real users before settling on the current pattern." },
      { label: "The rounds of user research that we did", body: "Three rounds of moderated research across curators and artists — discovery interviews, concept testing, and usability validation. Key insight: artists needed to triage fast and get to actionable info without extra clicks." },
      { label: "We built an AI prototype with actual data", body: "To validate the recommendation engine UX, we built a working prototype connected to real Groover submission data. This let us test how artists responded to AI-suggested next steps before committing to production." },
    ],
  },
  {
    slug: "onboard-and-send",
    title: "Onboard & Send",
    category: "Product Design",
    year: "October 2025",
    description:
      "Redesigned how artists launch campaigns, and prototyped the first AI-powered flow using real curator, track, and campaign data.",
    image: "/images/onboardandsend.png",
    summary:
      "We got to completely re-do an onboarding flow that used to take ages for new artists find value. What it is, why it mattered. The outcome of it.",
    sections: [
      {
        heading: "How it is now.",
        body: "We got to completely re-do an onboarding flow that used to take ages for new artists find value. What it is, why it mattered. The outcome of it.",
      },
      {
        heading: "How it was then.",
        body: "We got to completely re-do an onboarding flow that used to take ages for new artists find value. What it is, why it mattered. The outcome of it.",
      },
    ],
    details: [
      { label: "The AI-powered campaign flow prototype", body: "We built the first AI-powered campaign creation flow using real curator, track, and campaign data — letting artists launch smarter campaigns with less effort and more relevant targeting." },
      { label: "Reducing time-to-first-campaign", body: "The old onboarding took too long for new artists to find value. We mapped every friction point and redesigned the flow to get artists from sign-up to their first campaign in under 5 minutes." },
    ],
  },
  {
    slug: "curator-experience",
    title: "Curator Experience Redesign",
    category: "Product Design",
    year: "May 2025",
    description:
      "Rebuilt how 3,500+ curators discover music and give feedback—making the other side of the marketplace feel considered.",
    image: "/images/curatorexperience.png",
    summary:
      "We got to completely re-do an onboarding flow that used to take ages for new artists find value. What it is, why it mattered. The outcome of it.",
    sections: [
      {
        heading: "How it is now.",
        body: "We got to completely re-do an onboarding flow that used to take ages for new artists find value. What it is, why it mattered. The outcome of it.",
      },
      {
        heading: "How it was then.",
        body: "We got to completely re-do an onboarding flow that used to take ages for new artists find value. What it is, why it mattered. The outcome of it.",
      },
    ],
    details: [
      { label: "Reframing the curator as a first-class user", body: "Curators had always been secondary to the artist experience. We rebuilt their core flows — discovery, listening, and feedback — to make curators feel like the marketplace values their time and expertise." },
      { label: "The feedback quality framework", body: "We introduced structured feedback templates that help curators give more actionable responses while reducing the effort required. This improved feedback quality scores by 40% across the platform." },
    ],
  },
  {
    slug: "groover-plus",
    title: "Groover+",
    category: "Product Design",
    year: "November 2024",
    description:
      "Designed Groover's subscription offering, giving serious artists a clearer path to investing in their promotion strategy.",
    image: "/images/groover+.png",
    summary:
      "We got to completely re-do an onboarding flow that used to take ages for new artists find value. What it is, why it mattered. The outcome of it.",
    sections: [
      {
        heading: "How it is now.",
        body: "We got to completely re-do an onboarding flow that used to take ages for new artists find value. What it is, why it mattered. The outcome of it.",
      },
      {
        heading: "How it was then.",
        body: "We got to completely re-do an onboarding flow that used to take ages for new artists find value. What it is, why it mattered. The outcome of it.",
      },
    ],
    details: [
      { label: "Pricing and packaging exploration", body: "We tested multiple pricing tiers and feature bundles with real artists before landing on the final Groover+ offering. The key insight: artists wanted predictable costs, not per-campaign pricing." },
      { label: "Subscription conversion flow design", body: "The upgrade flow needed to feel like an investment, not a paywall. We designed a value-first approach that shows artists exactly what they'd unlock before asking for commitment." },
    ],
  },
  {
    slug: "design-system",
    title: "Design System",
    category: "Design System",
    year: "June 2024",
    description:
      "Built a shared language for the product, helping the team ship faster without losing consistency across web and mobile.",
    image: "/images/work/grooverui/grooveruiheader.gif",
    summary:
      "I built and led GrooverUI from audit to adoption — creating a shared system used by designers and engineers to ship faster and more consistently.",
    sections: [
      {
        heading: "How it is now.",
        body: "A shared, token-based design system spanning web and mobile — 20+ components, Storybook documentation, and semantic color tokens powering every surface. The system is the foundation every feature now ships from.",
      },
      {
        heading: "How it was then.",
        body: "Fragmented UI with no shared tokens, inconsistent mobile patterns, and no process for cross-functional adoption. Two previous attempts had stalled — once as an engineering-only effort, once as a Figma library that never made it to production.",
      },
    ],
    details: [
      { label: "The incremental shipping strategy", body: "Rather than building a full component library upfront, we tied every new component to a shipping feature. The Spark sign-up redesign was the first proving ground — every token and component was born from real production needs, not a theoretical backlog." },
      { label: "How we built the token architecture", body: "We started with semantic color tokens and a responsive type scale, then layered in spacing and elevation. Every value maps to a named intent — so switching to dark mode or a new brand palette is a config change, not a redesign." },
      { label: "Storybook documentation and adoption", body: "Every component exists as both a Figma variant and a Storybook story. Designers use the library; engineers reference the stories. Neither source drifts because both are reviewed in the same PR cycle." },
    ],
  },
  {
    slug: "splice-activation-experiments",
    title: "Splice: Activation experiments",
    category: "Product Design",
    year: "March 2023",
    description:
      "Ran experiments across the platform to improve activation, engagement, and discovery for millions of producers.",
    image: "/images/splicegrowth.png",
    summary:
      "We got to completely re-do an onboarding flow that used to take ages for new artists find value. What it is, why it mattered. The outcome of it.",
    sections: [
      {
        heading: "How it is now.",
        body: "We got to completely re-do an onboarding flow that used to take ages for new artists find value. What it is, why it mattered. The outcome of it.",
      },
      {
        heading: "How it was then.",
        body: "We got to completely re-do an onboarding flow that used to take ages for new artists find value. What it is, why it mattered. The outcome of it.",
      },
    ],
    details: [
      { label: "Personalisation at scale", body: "We redesigned the home feed to surface content based on each producer's workflow — genre preferences, recent projects, and collaboration patterns. The result was a home experience that felt curated, not algorithmic." },
      { label: "The discovery framework", body: "We built a discovery system that balances familiar content with new finds, helping producers expand their sound palette without feeling lost. Engagement with new content types increased 35% post-launch." },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
