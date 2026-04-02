export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  overview: string;
  challenge: string;
  solution: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    slug: "grooverui",
    title: "GrooverUI",
    category: "Design System",
    year: "2023–Present",
    description:
      "Groover's first production-ready design system — powering a multilingual, mobile-first marketplace for 50K+ artists and 3,500+ curators.",
    overview:
      "Initiated and led GrooverUI from zero to a shared token-based system used across web and mobile, with 20+ components and Storybook documentation.",
    challenge:
      "Fragmented UI with no shared tokens, inconsistent mobile patterns, and no process for cross-functional adoption.",
    solution:
      "Incremental shipping strategy tied to feature work — components shipped when needed, not all at once. Established semantic color tokens, a responsive type scale, and mobile-native patterns like bottom sheets.",
    outcome:
      "48% improvement in Spark sign-up conversion. Design system adopted as a formal OKR metric. Full FigmaMake + AI integration in 2025.",
  },
  {
    slug: "wellpath",
    title: "App Design — Wellpath",
    category: "Product Design",
    year: "2025",
    description:
      "End-to-end product design for a wellness & habit-tracking mobile app — research, wireframes, UI, and prototyping.",
    overview:
      "Wellpath is a wellness startup building a habit-tracking app that goes beyond streaks and gamification. They wanted an experience that feels calm, personal, and genuinely helpful. I owned the product design end-to-end, from research through to a production-ready design system.",
    challenge:
      "The wellness app space is crowded and most competitors rely on aggressive notification patterns and streak anxiety to drive engagement. Wellpath's founders wanted to break that cycle — but the question was how to keep users engaged without dark patterns, while still delivering a product that felt polished enough to compete with well-funded incumbents.",
    solution:
      "I conducted user interviews with 20 participants across different wellness journeys to understand motivation patterns. The key insight: people wanted reflection, not pressure. I designed a journal-first interface where habit tracking is woven into a daily reflection flow. The visual language uses soft gradients, generous whitespace, and subtle micro-interactions to create a sense of calm. I built a component library in Figma with 120+ components and delivered interactive prototypes for usability testing.",
    outcome:
      "The app launched on iOS to a beta group of 2,000 users. Retention at 30 days was 62% — well above the industry average of 25% for health & wellness apps. The design system enabled the engineering team to ship the full V1 in just eight weeks.",
  },
  {
    slug: "forma-studio",
    title: "Web Experience — Forma Studio",
    category: "Web Design",
    year: "2024",
    description:
      "An immersive portfolio site for an architectural visualization studio with scroll-driven transitions.",
    overview:
      "Forma Studio creates photorealistic architectural visualisations for top-tier firms. Their previous website was a basic grid of thumbnails that did nothing to convey the cinematic quality of their renders. I designed and art-directed an immersive web experience that lets the work speak for itself.",
    challenge:
      "Architectural visualisation is inherently visual, yet most studio websites default to generic portfolio grids. Forma needed a site that felt as considered and high-end as the renders themselves, while remaining fast, accessible, and easy to update. The client also needed the site to work as a sales tool — guiding prospective clients from inspiration to enquiry.",
    solution:
      "I designed a scroll-driven narrative where each project unfolds as a full-bleed cinematic sequence. Large-scale imagery is paired with restrained typography and generous pacing. I created a modular page-builder system so the team can assemble new case studies without a designer. Performance was a priority — I worked closely with the developer to implement lazy loading, responsive image sets, and optimised animations that respect reduced-motion preferences.",
    outcome:
      "The new site reduced bounce rate by 40% and average session duration increased to 3 minutes 20 seconds. Forma reported a 35% increase in inbound enquiries within the first quarter, and the site was featured in several design award galleries.",
  },
  {
    slug: "bloom-festival",
    title: "Campaign — Bloom Festival",
    category: "Art Direction",
    year: "2024",
    description:
      "Visual campaign for an annual arts & culture festival — posters, social assets, and environmental graphics.",
    overview:
      "Bloom is an annual arts and culture festival celebrating emerging creatives. Each year the campaign is built from scratch around a new theme. For 2024's edition — 'Roots & Frequencies' — I art-directed the entire visual campaign from concept through to environmental installation.",
    challenge:
      "The festival needed a campaign identity that felt fresh and exciting to a young creative audience, while remaining flexible enough to work across posters, social media, merchandise, wayfinding, and large-scale environmental installations. The budget was modest, so the system had to generate maximum impact from minimal production.",
    solution:
      "I developed a generative visual system inspired by root networks and sound waves — organic forms that could be algorithmically varied to create unique outputs for every poster and social tile. The colour palette shifted across a gradient spectrum, giving each event its own identity while maintaining cohesion. I designed a modular type system that let the production team rapidly generate assets, and I directed the environmental graphics that transformed the festival grounds.",
    outcome:
      "The campaign reached over 1.2 million impressions across social channels. Festival attendance grew 18% year-over-year, and the campaign was shortlisted for a regional design award. Attendees frequently shared photos of the environmental graphics, generating significant organic reach.",
  },
  {
    slug: "meraki-ceramics",
    title: "E-Commerce — Meraki Ceramics",
    category: "Web Design",
    year: "2024",
    description:
      "Shopify storefront for a handmade ceramics studio — warm, tactile, and conversion-focused.",
    overview:
      "Meraki Ceramics is a small-batch ceramics studio selling handmade pieces directly to customers. Their existing Shopify theme felt generic and failed to convey the craft and care behind each piece. I designed a custom storefront that bridges the gap between artisan warmth and e-commerce performance.",
    challenge:
      "Handmade ceramics are inherently tactile — customers need to feel texture, weight, and scale through a screen. The existing theme had poor mobile performance, a confusing navigation structure, and product pages that undersold the craftsmanship. Conversion rate had plateaued at 1.2%, well below the Shopify average.",
    solution:
      "I redesigned the entire storefront with a 'studio-first' approach: full-bleed lifestyle photography, a warm neutral palette inspired by raw clay, and product pages that tell the story of each piece — from sketch to kiln. I simplified the navigation to three core paths (Shop, Studio, Story) and introduced a 'Made to Order' flow for custom commissions. Every template was optimised for mobile-first, with attention to tap targets and scroll depth.",
    outcome:
      "Conversion rate increased to 2.8% within two months — more than doubling the previous figure. Average order value rose 22% thanks to improved cross-selling and the custom commission flow. The founder reported that customers now frequently reference the website's feeling as a reason they chose Meraki over competitors.",
  },
  {
    slug: "noctis",
    title: "Identity System — Noctis",
    category: "Branding",
    year: "2023",
    description:
      "Brand identity for a nightlife events company — logo, motion graphics, and merch design.",
    overview:
      "Noctis is a nightlife and events company producing immersive club nights and music experiences. They needed a brand identity that could flex across digital promotion, physical merch, and venue environments — all while capturing the energy and mystique of their events.",
    challenge:
      "Nightlife branding often defaults to dark backgrounds and neon — Noctis wanted to stand out from that cliché while still feeling unmistakably 'night'. The identity also needed to work at extremes: tiny social avatars, large-format posters, embroidered merch, and animated projections in dark venues. Durability and flexibility were paramount.",
    solution:
      "I built the identity around a custom logotype with sharp, angular letterforms that reference brutalist architecture. The visual system uses a restrained palette — deep charcoal, off-white, and a single electric violet accent — with a library of geometric patterns that can be combined and animated. I delivered a motion toolkit with animated logo variants, looping patterns for venue projections, and templates for social and print. The merch line was designed to feel like streetwear, not promotional material.",
    outcome:
      "Noctis launched the new identity at a sold-out 800-person event. Merch sell-through rate hit 70% on opening night. The animated projections became a signature element that attendees actively photograph and share, turning every event into organic marketing.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
