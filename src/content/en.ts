export const work = {
  intro: {
    pre: "Selected projects from a high-traffic online travel platform",
    tourvis: "Tourvis",
    privia: "Privia",
    post: ".",
  },
  projects: [
    {
      no: 5,
      titleLines: ["iOS Safari · In-App WebView PDF handling."],
      about:
        "On iOS Safari and embedded in-app webviews, PDF downloads were forced to launch external viewers, breaking users out of the booking context. Re-routed the download path so receipts and itineraries render predictably on every mobile entry point.",
    },
    {
      no: 4,
      titleLines: ["Google Maps · Native Calendar integration."],
      about:
        "Reservation details now deep-link directly into the user's native maps and calendar apps with all metadata pre-filled — replacing the multi-step copy/paste workflow that previously fragmented the post-booking experience.",
    },
    {
      no: 3,
      titleLines: ["Adopting TanStack Query."],
      about:
        "Replaced ad-hoc fetch hooks with TanStack Query across search, detail, and reservation flows — unifying caching, request deduplication, and invalidation. Loading states became consistent and the entire data layer turned predictable.",
    },
    {
      no: 2,
      titleLines: ["Redux-driven restock alerts."],
      about:
        "Designed and built the subscription, polling, and notification layers for a returning-user feature on Redux. Users opt into restock alerts on any listing and are notified the moment availability returns.",
    },
    {
      no: 1,
      titleLines: ["Vue.js → Next.js migration."],
      about:
        "Re-platformed the legacy Vue.js frontend to Next.js (App Router) without service interruption — preserving every existing route, layout, and SEO surface while modernizing the rendering pipeline.",
    },
  ],
};

export const experience = {
  tourvisLabel: "Tourvis",
  priviaLabel: "Privia",
  company: "TIDESQUARE · Online Travel Platform · Seoul, South Korea",
  presentLabel: "Present",
  bullets: [
    "Took ownership of the Tour & Ticket category frontend for travel platforms {tourvis} and {privia}, serving 450K monthly users.",
    "Developed and maintained web services using React, Next.js, and Vue.js, focusing on user experience and performance.",
    "Improved performance and SEO by migrating a legacy Vue.js codebase to Next.js with SSR.",
    "Enhanced cross-browser user experience by resolving PDF viewing and download issues across mobile environments.",
    "Reduced redundant API calls and improved responsiveness using TanStack Query.",
    "Optimised frontend performance by reducing bundle size and improving load time through framework migration (React → Svelte).",
    "Improved UX by implementing features such as restock notifications, recent search, and reservation management flows.",
    "Leveraged user behaviour tracking (Google Analytics) to support data-driven product improvements.",
  ],
};

export const contact = {
  heading: "Get in touch",
  bodyPrefix: "I'm always happy to connect and explore new opportunities —",
  bodyHighlight: "feel free to reach out!",
};

export const about = {
  leftParagraphs: [
    "With over 4 years of experience in frontend engineering,",
    "I specialize in delivering seamless UI/UX regardless of environment.",
  ],
  rightParagraphs: [
    "I approach problems with a user-focused mindset and pay close attention to detail, ensuring even the smallest aspects are carefully considered.",
  ],
};
