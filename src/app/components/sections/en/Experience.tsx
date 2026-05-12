import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const tourvisLink = (
  <a
    href="https://tourvis.com/activity"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="inline-flex items-center gap-0.5 transition-colors duration-200 px-1 hover:bg-black hover:text-[#f5f1e8] rounded-sm">
      Tourvis
      <ExternalLink size={11} className="mb-1" />
    </span>
  </a>
);

const priviaLink = (
  <a
    href="https://activity.priviatravel.com/activity/main"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="inline-flex items-center gap-0.5 transition-colors duration-200 px-1 hover:bg-black hover:text-[#f5f1e8] rounded-sm">
      Privia
      <ExternalLink size={11} className="mb-1" />
    </span>
  </a>
);

const experience = [
  {
    year: "2021.12 — 2025.2",
    role: "Frontend Engineer",
    company: "TIDESQUARE · Online Travel Platform · Seoul, South Korea",
    bullets: [
      <>Took ownership of the Tour & Ticket category frontend for travel platforms {tourvisLink} and {priviaLink}, serving 450K monthly users.</>,
      "Developed and maintained web services using React, Next.js, and Vue.js, focusing on user experience and performance.",
      "Improved performance and SEO by migrating a legacy Vue.js codebase to Next.js with SSR.",
      "Enhanced cross-browser user experience by resolving PDF viewing and download issues across mobile environments.",
      "Reduced redundant API calls and improved responsiveness using TanStack Query.",
      "Optimised frontend performance by reducing bundle size and improving load time through framework migration (React → Svelte).",
      "Improved UX by implementing features such as restock notifications, recent search, and reservation management flows.",
      "Leveraged user behaviour tracking (Google Analytics) to support data-driven product improvements.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[var(--bg-color)]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(3rem,5vw,5rem)] mb-8 italic"
        >
          Experience
        </motion.h2>

        <div className="space-y-1">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="group py-8 border-t border-border hover:bg-background/50 transition-all duration-300 px-4 -mx-4">
                <div className="grid md:grid-cols-[200px_1fr] gap-8">
                  <div className="text-muted-foreground transition-transform duration-300 ease-out">
                    {item.year}
                  </div>
                  <div>
                    <h3 className="text-2xl mb-1">{item.role}</h3>
                    <div className="text-lg mb-3 text-foreground/60">
                      {item.company}
                    </div>
                    <ul className="space-y-2 max-w-2xl">
                      {item.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="text-foreground/70 text-sm leading-relaxed"
                        >
                          · {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
