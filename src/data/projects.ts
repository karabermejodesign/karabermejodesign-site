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
  summary: string;
  sections: ProjectSection[];
  details: ProjectDetail[];
}

export const projects: Project[] = [
  {
    slug: "grooverui",
    title: "GrooverUI",
    category: "Design System",
    year: "2023–Present",
    description:
      "Groover's first production-ready design system — powering a multilingual, mobile-first marketplace for 50K+ artists and 3,500+ curators.",
    summary:
      "I built and led GrooverUI from audit to adoption — creating a shared system used by designers and engineers to ship faster and more consistently.",
    sections: [
      {
        heading: "How it is now.",
        body: "Initiated and led GrooverUI from zero to a shared token-based system used across web and mobile, with 20+ components and Storybook documentation. The system is the foundation every feature now ships from.",
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
    slug: "wellpath",
    title: "App Design — Wellpath",
    category: "Product Design",
    year: "2025",
    description:
      "End-to-end product design for a wellness & habit-tracking mobile app — research, wireframes, UI, and prototyping.",
    summary:
      "Wellpath wanted an experience that feels calm, personal, and genuinely helpful. I owned the product design end-to-end, from research through to a production-ready design system.",
    sections: [
      {
        heading: "How it is now.",
        body: "A journal-first interface where habit tracking is woven into a daily reflection flow. The visual language uses soft gradients, generous whitespace, and subtle micro-interactions to create a sense of calm. 120+ components delivered with interactive prototypes for usability testing.",
      },
      {
        heading: "How it was then.",
        body: "The wellness app space is crowded and most competitors rely on aggressive notification patterns and streak anxiety to drive engagement. Wellpath's founders wanted to break that cycle — but the question was how to keep users engaged without dark patterns.",
      },
    ],
    details: [
      { label: "The user research that shaped the journal-first approach", body: "We interviewed 20 participants across different wellness journeys. The key insight: people wanted reflection, not pressure. Streaks and gamification drove short-term engagement but long-term resentment. This shaped the entire product direction." },
      { label: "Building the component library in Figma", body: "120+ components organised into a multi-tier system — primitives, composites, and page-level patterns. Every component was stress-tested against edge cases like long text, RTL layouts, and accessibility requirements before handoff." },
      { label: "Retention results from the beta launch", body: "The app launched to 2,000 beta users on iOS. 30-day retention was 62% — well above the 25% industry average for health & wellness apps. The design system enabled engineering to ship V1 in just eight weeks." },
    ],
  },
  {
    slug: "forma-studio",
    title: "Web Experience — Forma Studio",
    category: "Web Design",
    year: "2024",
    description:
      "An immersive portfolio site for an architectural visualization studio with scroll-driven transitions.",
    summary:
      "Forma Studio creates photorealistic architectural visualisations for top-tier firms. I designed an immersive web experience that lets the work speak for itself.",
    sections: [
      {
        heading: "How it is now.",
        body: "A scroll-driven narrative where each project unfolds as a full-bleed cinematic sequence. Large-scale imagery paired with restrained typography and generous pacing. A modular page-builder system lets the team assemble new case studies without a designer.",
      },
      {
        heading: "How it was then.",
        body: "Their previous website was a basic grid of thumbnails that did nothing to convey the cinematic quality of their renders. Most studio websites default to generic portfolio grids — Forma needed something that felt as considered as the work itself.",
      },
    ],
    details: [
      { label: "The scroll-driven narrative approach", body: "Each project unfolds as a full-bleed cinematic sequence rather than a gallery grid. Scroll position triggers transitions between renders, letting visitors experience the spatial quality of each visualisation as they move through the page." },
      { label: "Performance optimisation and lazy loading", body: "High-resolution architectural renders are heavy. We implemented responsive image sets, intersection-observer-based lazy loading, and optimised animations that respect reduced-motion preferences — keeping Lighthouse scores above 90." },
      { label: "Modular page-builder for the team", body: "The CMS uses a block-based system so the Forma team can assemble new case studies from pre-designed sections without needing a designer for every update. Each block has built-in responsive rules and animation defaults." },
    ],
  },
  {
    slug: "bloom-festival",
    title: "Campaign — Bloom Festival",
    category: "Art Direction",
    year: "2024",
    description:
      "Visual campaign for an annual arts & culture festival — posters, social assets, and environmental graphics.",
    summary:
      "For Bloom 2024's edition — 'Roots & Frequencies' — I art-directed the entire visual campaign from concept through to environmental installation.",
    sections: [
      {
        heading: "How it is now.",
        body: "A generative visual system inspired by root networks and sound waves — organic forms that could be algorithmically varied to create unique outputs for every poster and social tile. The colour palette shifts across a gradient spectrum, giving each event its own identity while maintaining cohesion.",
      },
      {
        heading: "How it was then.",
        body: "The festival needed a campaign identity that felt fresh and exciting to a young creative audience, while remaining flexible enough to work across posters, social media, merchandise, wayfinding, and large-scale environmental installations. The budget was modest.",
      },
    ],
    details: [
      { label: "The generative visual system", body: "We built a parametric tool that varies organic root-and-wave forms algorithmically — producing unique outputs for every poster and social tile while maintaining visual cohesion across the campaign. No two assets were identical." },
      { label: "Environmental graphics direction", body: "Large-scale installations transformed the festival grounds into an immersive extension of the campaign. Wayfinding, stage backdrops, and interactive light installations all drew from the same generative system, creating a unified sensory experience." },
    ],
  },
  {
    slug: "meraki-ceramics",
    title: "E-Commerce — Meraki Ceramics",
    category: "Web Design",
    year: "2024",
    description:
      "Shopify storefront for a handmade ceramics studio — warm, tactile, and conversion-focused.",
    summary:
      "Meraki Ceramics needed a custom storefront that bridges the gap between artisan warmth and e-commerce performance. I redesigned the entire experience.",
    sections: [
      {
        heading: "How it is now.",
        body: "A 'studio-first' storefront: full-bleed lifestyle photography, a warm neutral palette inspired by raw clay, and product pages that tell the story of each piece — from sketch to kiln. Navigation simplified to three core paths with a 'Made to Order' flow for custom commissions.",
      },
      {
        heading: "How it was then.",
        body: "The existing Shopify theme felt generic and failed to convey the craft behind each piece. Poor mobile performance, confusing navigation, and product pages that undersold the craftsmanship. Conversion rate had plateaued at 1.2%.",
      },
    ],
    details: [
      { label: "The studio-first design approach", body: "Instead of leading with product grids, the storefront opens with full-bleed lifestyle photography that conveys the tactile quality of each piece. Product pages tell the story from sketch to kiln — building the emotional connection that drives purchase decisions for handmade goods." },
      { label: "Mobile optimisation and tap targets", body: "Every template was built mobile-first with generous tap targets, optimised scroll depth, and fast image loading. We reduced page weight by 60% compared to the previous theme while adding richer visual content." },
      { label: "Custom commission flow design", body: "The 'Made to Order' flow guides customers through glaze selection, size options, and timeline expectations with a step-by-step interface. This single feature drove a 22% increase in average order value within two months." },
    ],
  },
  {
    slug: "noctis",
    title: "Identity System — Noctis",
    category: "Branding",
    year: "2023",
    description:
      "Brand identity for a nightlife events company — logo, motion graphics, and merch design.",
    summary:
      "Noctis needed a brand identity that could flex across digital promotion, physical merch, and venue environments — all while capturing the energy and mystique of their events.",
    sections: [
      {
        heading: "How it is now.",
        body: "An identity built around a custom logotype with sharp, angular letterforms referencing brutalist architecture. A restrained palette — deep charcoal, off-white, and a single electric violet accent — with a library of geometric patterns that can be combined and animated.",
      },
      {
        heading: "How it was then.",
        body: "Nightlife branding often defaults to dark backgrounds and neon — Noctis wanted to stand out from that cliché while still feeling unmistakably 'night'. The identity needed to work at extremes: tiny social avatars, large-format posters, embroidered merch, and animated projections.",
      },
    ],
    details: [
      { label: "The custom logotype and type system", body: "Sharp, angular letterforms reference brutalist architecture while remaining legible at every scale — from 12px social avatars to 3-metre-wide venue banners. The type system pairs the logotype with a clean sans-serif for body text, maintaining tension between raw and refined." },
      { label: "Motion toolkit for venue projections", body: "We delivered animated logo variants, looping geometric patterns for venue projections, and templates for social and print. The animated projections became a signature element — attendees photograph and share them, turning every event into organic marketing." },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
