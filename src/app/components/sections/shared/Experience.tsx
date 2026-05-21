import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { formatDuration } from "../../common/formatDuration";
import { useLanguage } from "@/app/context/LanguageContext";
import { experience as enExperience } from "@/content/en";
import { experience as koExperience } from "@/content/ko";

const YEAR = "2021.12 — 2025.2";
const START_DATE = new Date(2021, 11);
const END_DATE: Date | null = new Date(2025, 1);

function makePlatformLink(href: string, label: string) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <span className="inline-flex items-center gap-0.5 transition-colors duration-200 px-1 hover:bg-black hover:text-[#f5f1e8] rounded-sm">
        {label}
        <ExternalLink size={11} className="mb-1" />
      </span>
    </a>
  );
}

function renderBullet(
  text: string,
  tourvisNode: React.ReactNode,
  priviaNode: React.ReactNode,
): React.ReactNode {
  if (!text.includes("{tourvis}") && !text.includes("{privia}")) return text;
  return text.split(/(\{tourvis\}|\{privia\})/).map((part, i) => {
    if (part === "{tourvis}") return <span key={i}>{tourvisNode}</span>;
    if (part === "{privia}") return <span key={i}>{priviaNode}</span>;
    return part;
  });
}

export default function Experience() {
  const lang = useLanguage();
  const content = lang === "ko" ? koExperience : enExperience;

  const tourvisLink = makePlatformLink(
    "https://tourvis.com/activity",
    content.tourvisLabel,
  );
  const priviaLink = makePlatformLink(
    "https://activity.priviatravel.com/activity/main",
    content.priviaLabel,
  );

  return (
    <section
      id="experience"
      aria-label="Experience"
      className="py-32 px-6 md:px-12 bg-[var(--bg-color)]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
          }}
          viewport={{ once: false }}
          transition={{ duration: 0.3 }}
          className="text-[clamp(3rem,5vw,5rem)] mb-8 italic"
        >
          Experience
        </motion.h2>

        <div className="space-y-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0, ease: [0.16, 1, 0.3, 1] },
            }}
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
          >
            <div className="group pt-0 pb-8 md:py-8 md:border-t md:border-border hover:bg-background/50 transition-all duration-300 px-4 -mx-4">
              <div className="grid md:grid-cols-[200px_1fr] gap-8">
                <div className="hidden md:flex flex-col items-center h-full gap-4">
                  <span className="tracking-[0.2em] mt-10 text-xs text-muted-foreground leading-none">
                    {YEAR.split(" — ")[0]}
                  </span>
                  <div className="flex-1 relative flex justify-center my-3 h-full">
                    <motion.span
                      initial={{ scaleY: 0 }}
                      whileInView={{
                        scaleY: 1,
                        transition: {
                          duration: 3,
                          delay: 0.2,
                        },
                      }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.3 }}
                      className="block w-[1px] h-full origin-top bg-border-rail"
                    />
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full bg-border-rail" />
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--bg-color)] group-hover:bg-background/50 transition-colors py-1.5 font-mono text-[0.6rem] tracking-[0.1em] uppercase text-muted-foreground whitespace-nowrap">
                      {formatDuration(START_DATE, END_DATE ?? new Date())}
                    </span>
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[5px] h-[5px] rounded-full border border-border ${END_DATE ? "bg-foreground" : "bg-border-rail"}`}
                    />
                  </div>
                  <span className="tracking-[0.2em] mb-4 text-xs text-muted-foreground leading-none">
                    {YEAR.split(" — ")[1]}
                  </span>
                </div>
                <div>
                  <div className="md:hidden grid grid-cols-[auto_1fr_auto] items-center gap-3 border-t border-border pt-2.5 pb-[18px] mb-3.5">
                    <span className="font-mono text-[0.72rem] tracking-[0.1em] text-foreground/70">
                      {YEAR.split(" — ")[0]}
                    </span>
                    <div className="relative h-px bg-border-rail">
                      <span className="absolute top-1/2 -translate-y-1/2 -left-0.5 w-[5px] h-[5px] rounded-full bg-border-rail" />
                      <span
                        className={`absolute top-1/2 -translate-y-1/2 -right-0.5 w-[5px] h-[5px] rounded-full border border-border ${END_DATE ? "bg-foreground" : "bg-border-rail"}`}
                      />
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--bg-color)] px-2 font-mono text-[0.6rem] tracking-[0.1em] uppercase text-muted-foreground">
                        {formatDuration(START_DATE, END_DATE ?? new Date())}
                      </span>
                    </div>
                    <span className="font-mono text-[0.72rem] tracking-[0.1em] text-foreground/70">
                      {END_DATE ? YEAR.split(" — ")[1] : content.presentLabel}
                    </span>
                  </div>
                  <h3 className="text-2xl mb-3">Frontend Engineer</h3>
                  <div className="text-sm mb-3 text-foreground/60">
                    {content.company}
                  </div>
                  <ul className="space-y-2 max-w-2xl">
                    {content.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-foreground/70 text-sm leading-relaxed"
                      >
                        · {renderBullet(bullet, tourvisLink, priviaLink)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
