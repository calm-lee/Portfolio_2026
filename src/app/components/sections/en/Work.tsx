import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

type Project = {
  no: string;
  category: string;
  titleLines: string[];
  about: string;
  skills: string[];
  visualTitle: string[];
  name: string;
  screenshot?: string;
  screenshot_category?: string;
  mobileLabel?: string;
};

const projects: Project[] = [
  {
    no: "01",
    category: "Cross-Browser & Device UX",
    titleLines: ["iOS Safari · In-App WebView", "PDF handling."],
    about:
      "On iOS Safari and embedded in-app webviews, PDF downloads were forced to launch external viewers, breaking users out of the booking context. Re-routed the download path so receipts and itineraries render predictably on every mobile entry point.",
    skills: ["Next.js Middleware", "Blob API", "AWS S3", "iOS Safari"],
    visualTitle: ["PDF download", "inside iOS Safari & in-app WebView."],
    name: "iOS Safari · In-App WebView PDF handling",
    screenshot: `${import.meta.env.BASE_URL}screenshot_pdf.gif`,
    screenshot_category: "mo",
    mobileLabel: "Mobile · iOS / WebView",
  },
  {
    no: "02",
    category: "Cross-Browser & Device UX",
    titleLines: ["Google Maps · Native Calendar", "integration."],
    about:
      "Reservation details now deep-link directly into the user's native maps and calendar apps with all metadata pre-filled — replacing the multi-step copy/paste workflow that previously fragmented the post-booking experience.",
    skills: [
      "Deep linking",
      "iOS / Android",
      "Calendar API",
      "Google Maps API",
    ],
    visualTitle: ["Reservation detail", "with map & calendar deep links."],
    name: "Google Maps · Native Calendar integration",
    screenshot: `${import.meta.env.BASE_URL}screenshot_deeplink.gif`,
    screenshot_category: "mo",
    mobileLabel: "Mobile · iOS / Android",
  },
  {
    no: "03",
    category: "State Management & Performance",
    titleLines: ["Adopting", "TanStack Query."],
    about:
      "Replaced ad-hoc fetch hooks with TanStack Query across search, detail, and reservation flows — unifying caching, request deduplication, and invalidation. Loading states became consistent and the entire data layer turned predictable.",
    skills: ["TanStack Query", "Cache strategy", "REST API"],
    visualTitle: ["Search response", "with cached, deduped queries."],
    name: "Adopting TanStack Query",
    screenshot: `${import.meta.env.BASE_URL}screenshot_search.gif`,
    screenshot_category: "desktop",
  },
  {
    no: "04",
    category: "State Management & Performance",
    titleLines: ["Redux-driven", "restock alerts."],
    about:
      "Designed and built the subscription, polling, and notification layers for a returning-user feature on Redux. Users opt into restock alerts on any listing and are notified the moment availability returns.",
    skills: ["Redux", "Responsive Design", "Notifications"],
    visualTitle: ["Restock notification", "subscription & toast surface."],
    name: "Redux-driven restock alerts",
    screenshot: `${import.meta.env.BASE_URL}screenshot_restock.gif`,
    screenshot_category: "desktop",
  },
  {
    no: "05",
    category: "Migration & Optimization",
    titleLines: ["Vue.js → Next.js", "migration."],
    about:
      "Re-platformed the legacy Vue.js frontend to Next.js (App Router) without service interruption — preserving every existing route, layout, and SEO surface while modernizing the rendering pipeline.",
    skills: ["Next.js App Router", "Vue.js", "SSR", "Lighthouse"],
    visualTitle: ["Re-platformed surface", "on Next.js App Router."],
    name: "Vue.js → Next.js migration",
    screenshot: `${import.meta.env.BASE_URL}screenshot_lighthouse.png`,
    screenshot_category: "desktop",
  },
];

const TOTAL = projects.length;
const pad = (n: number) => String(n).padStart(2, "0");

export default function Work() {
  const [idx, setIdx] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragPct, setDragPct] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const [arrowTop, setArrowTop] = useState<number | null>(null);

  useEffect(() => {
    const measure = () => {
      if (!sliderRef.current || !visualRef.current) return;
      const sr = sliderRef.current.getBoundingClientRect();
      const vr = visualRef.current.getBoundingClientRect();
      setArrowTop(vr.top - sr.top + vr.height / 2);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const goTo = (i: number) => {
    setIdx(Math.max(0, Math.min(TOTAL - 1, i)));
    setDragPct(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setIdx((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight") setIdx((i) => Math.min(TOTAL - 1, i + 1));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Mouse drag — global move/up so dragging outside the element still works
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (dragStartX.current == null || !wrapRef.current) return;
      const dx = e.clientX - dragStartX.current;
      const wrapW = wrapRef.current.getBoundingClientRect().width || 1;
      setDragPct((dx / wrapW) * 100);
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (dragStartX.current == null) return;
      const dx = e.clientX - dragStartX.current;
      dragStartX.current = null;
      setIsDragging(false);
      setDragPct(0);
      if (Math.abs(dx) > 50) {
        setIdx((i) => Math.max(0, Math.min(TOTAL - 1, i + (dx < 0 ? 1 : -1))));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const trackTransform = isDragging
    ? `translateX(calc(-${idx * 100}% + ${dragPct}%))`
    : `translateX(-${idx * 100}%)`;

  const trackTransition = isDragging
    ? "none"
    : "transform 700ms cubic-bezier(.6,.0,.2,1)";

  return (
    <section id="work" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.5rem,5vw,4rem)] italic mb-4"
        >
          Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted-foreground text-base leading-relaxed mb-4 max-w-[60ch]"
        >
          Selected projects from a high-traffic online travel platform{" "}
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
          .
        </motion.p>

        {/* Slider */}
        <div ref={sliderRef} className="relative">
          {/* Track wrapper — grab cursor, touch + mouse drag */}
          <div
            ref={wrapRef}
            className="overflow-hidden touch-pan-y"
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
            onMouseDown={(e) => {
              e.preventDefault();
              dragStartX.current = e.clientX;
              setIsDragging(true);
            }}
            onTouchStart={(e) => {
              dragStartX.current = e.touches[0].clientX;
            }}
            onTouchMove={(e) => {
              if (dragStartX.current == null || !wrapRef.current) return;
              const dx = e.touches[0].clientX - dragStartX.current;
              const wrapW = wrapRef.current.getBoundingClientRect().width || 1;
              setDragPct((dx / wrapW) * 100);
            }}
            onTouchEnd={(e) => {
              if (dragStartX.current == null) return;
              const dx = e.changedTouches[0].clientX - dragStartX.current;
              dragStartX.current = null;
              setDragPct(0);
              if (Math.abs(dx) > 50) goTo(idx + (dx < 0 ? 1 : -1));
            }}
            onTouchCancel={() => {
              dragStartX.current = null;
              setDragPct(0);
            }}
          >
            <div
              className="flex will-change-transform"
              style={{
                transform: trackTransform,
                transition: trackTransition,
              }}
            >
              {projects.map((p, i) => (
                <article
                  key={i}
                  className="flex-[0_0_100%] min-w-0 grid grid-cols-1 gap-8 items-start md:grid-cols-[1.1fr_1fr] md:gap-12 md:items-center"
                >
                  {/* Visual */}
                  <div
                    ref={i === 0 ? visualRef : undefined}
                    className={`relative border border-border rounded-lg overflow-hidden ${
                      p.screenshot_category === "mo"
                        ? "aspect-[1/0.8] py-[1.75rem] md:py-[2.25rem] flex items-center justify-center"
                        : "aspect-video bg-[var(--bg-color)] flex items-center justify-center text-center"
                    }`}
                    style={{
                      background:
                        p.screenshot_category === "mo"
                          ? "repeating-linear-gradient(135deg, transparent 0 16px, rgba(0,0,0,0.03) 16px 17px), var(--muted, #ececf0)"
                          : !p.screenshot
                            ? undefined
                            : "var(--bg-color)",
                      backgroundImage:
                        p.screenshot_category !== "mo" && !p.screenshot
                          ? "repeating-linear-gradient(135deg, transparent 0 16px, rgba(0,0,0,0.03) 16px 17px)"
                          : undefined,
                    }}
                  >
                    {p.screenshot_category === "mo" ? (
                      <>
                        <div className="relative aspect-[9/19.5] h-[96%] flex-none bg-background border border-border rounded-[1.6rem] overflow-hidden shadow-[0_22px_44px_-22px_rgba(0,0,0,0.25)]">
                          <div className="absolute top-[0.55rem] left-1/2 -translate-x-1/2 w-[36%] h-[0.4rem] bg-black/15 rounded-full z-10" />
                          <div className="absolute bottom-[0.55rem] left-1/2 -translate-x-1/2 w-[28%] h-[0.25rem] bg-black/[0.12] rounded-full z-10" />
                          {p.screenshot ? (
                            <img
                              src={p.screenshot}
                              alt={p.name}
                              className="absolute inset-0 w-full h-full object-cover"
                              draggable={false}
                            />
                          ) : (
                            <div
                              className="absolute inset-[1.75rem_1.1rem] flex flex-col items-center justify-center text-center rounded-lg p-4"
                              style={{
                                background:
                                  "repeating-linear-gradient(135deg, transparent 0 12px, rgba(0,0,0,0.03) 12px 13px)",
                              }}
                            >
                              <div className="text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground mb-[0.85rem]">
                                Screen — Project {pad(i + 1)}
                              </div>
                              <div className="font-serif text-base leading-[1.22] tracking-[-0.02em] text-foreground/[0.78] max-w-[16ch] opacity-90">
                                {p.visualTitle.join(" ")}
                              </div>
                              <div className="text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground mt-4 opacity-75">
                                [ drop screenshot ]
                              </div>
                            </div>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        {p.screenshot ? (
                          <img
                            src={p.screenshot}
                            alt={p.name}
                            className="absolute w-full h-full object-cover"
                            draggable={false}
                          />
                        ) : (
                          <div className="relative select-none">
                            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">
                              Screen — Project {pad(i + 1)}
                            </div>
                            <div className="font-serif text-[clamp(1.25rem,2.2vw,1.875rem)] text-foreground/80 leading-[1.18] tracking-[-0.03em] max-w-[32rem] mx-auto">
                              {p.visualTitle.map((line, li) => (
                                <div key={li}>{line}</div>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {/* Body */}
                  <div className="flex flex-col select-none">
                    <div className="flex items-center gap-3 flex-wrap text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
                      <span className="text-foreground">{p.category}</span>
                      <span className="text-border">·</span>
                    </div>

                    {/* Title — regular serif, not italic (per design) */}
                    <h3 className="font-serif font-normal text-[clamp(2rem,3.6vw,3rem)] leading-[1.05] tracking-[-0.05em] mb-6">
                      {p.titleLines.map((line, li) => (
                        <span key={li} className="block">
                          {line}
                        </span>
                      ))}
                    </h3>

                    <div className="border-t border-border pt-5 mb-5">
                      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                        About
                      </div>
                      <p className="text-base leading-[1.7] text-foreground/75 max-w-[56ch]">
                        {p.about}
                      </p>
                    </div>

                    <div className="border-t border-border pt-5">
                      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                        Skills
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {p.skills.map((skill, si) => (
                          <span
                            key={si}
                            className="text-xs tracking-[0.05em] text-foreground px-3 py-1.5 border border-border rounded-full bg-background"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Edge arrows — horizontal position original, vertical center follows the visual */}
          <button
            onClick={() => goTo(idx - 1)}
            disabled={idx === 0}
            aria-label="Previous project"
            className="absolute left-2 md:left-4 z-10 -translate-y-1/2 w-10 h-40 flex items-center justify-center rounded-[var(--radius)] border border-black/20 text-foreground bg-white/80 hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-200 disabled:opacity-25 disabled:pointer-events-none bg-opacity-50"
            style={{ top: arrowTop ?? "50%" }}
          >
            ←
          </button>
          <button
            onClick={() => goTo(idx + 1)}
            disabled={idx === TOTAL - 1}
            aria-label="Next project"
            className="absolute right-2 md:right-4 z-10 -translate-y-1/2 w-10 h-40 flex items-center justify-center rounded-[var(--radius)] border border-black/20 text-foreground bg-white/80 hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-200 disabled:opacity-25 disabled:pointer-events-none"
            style={{ top: arrowTop ?? "50%" }}
          >
            →
          </button>

          {/* Controls — centered: counter + dots only */}
          <div className="flex items-center justify-center pt-6 mt-6 gap-5 flex-wrap">
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.1em] text-muted-foreground">
              <div className="flex items-center gap-3">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to project ${i + 1}`}
                    className="p-0 border-0 cursor-pointer"
                    style={{
                      width: 32,
                      height: i === idx ? 2 : 1,
                      background:
                        i === idx ? "var(--foreground)" : "var(--border)",
                      transition: "background 0.25s ease, height 0.25s ease",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
