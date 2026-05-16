import { useState, useRef, useEffect, type ReactNode } from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

type Project = {
  no: number;
  category: string;
  titleLines: ReactNode;
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
    no: 1,
    category: "Cross-Browser & Device UX",
    titleLines: (
      <>
        모바일 예약상세 페이지 개선: <br /> iOS/WebView 핸들링
      </>
    ),
    about:
      "iOS Safari 및 인앱 웹뷰 환경에서 PDF 다운로드가 외부 뷰어를 강제로 실행시켜 흐름이 끊기는 문제가 있었습니다. Blolb API와 미들웨어를 이용하여 pdf 링크를 우회해서 파일 다운로드가 매끄럽게 연결되도록 UX를 개선시켰습니다.",
    skills: ["Next.js Middleware", "Blob API", "AWS S3", "iOS Safari"],
    visualTitle: ["PDF download", "inside iOS Safari & in-app WebView."],
    name: "iOS Safari · In-App WebView PDF handling",
    screenshot: `${import.meta.env.BASE_URL}screenshot_pdf.gif`,
    screenshot_category: "mo",
    mobileLabel: "Mobile · iOS / WebView",
  },
  {
    no: 2,
    category: "Cross-Browser & Device UX",
    titleLines: (
      <>
        모바일 예약상세 페이지 개선: <br /> Google Maps·네이티브 캘린더 연동
      </>
    ),
    about:
      "예약 상세 페이지에서 여행 장소 및 날짜를, 구글맵과 캘린더 앱으로 딥링크시켜 사용자가 등록할 수 있도록 했습니다. 기존에 예약 후 정보를 복사·붙여넣기하던 번거로운 과정을 대체했습니다.",
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
    no: 5,
    category: "State Management & Performance",
    titleLines: <>최근 검색어: TanStack Query 도입</>,
    about:
      "최근 검색어 등록, 삭제, 모두 삭제 기능을 TanStack Query를 도입하여 중복 요청을 줄이고 불필요한 지연 현상을 줄였습니다.",
    skills: ["TanStack Query", "Cache strategy", "REST API"],
    visualTitle: ["Search response", "with cached, deduped queries."],
    name: "Adopting TanStack Query",
    screenshot: `${import.meta.env.BASE_URL}screenshot_search.gif`,
    screenshot_category: "desktop",
  },
  {
    no: 4,
    category: "State Management & Performance",
    titleLines: <>Redux 기반 재입고 알림</>,
    about:
      "캘린더에서 원하는 날자를 선택하면 재고가 돌아오는 즉시 알림을 받을 수 있는 기능입니다. 다중 모달로 되어있는 기능을, Redux 기반 상태 관리를 통해 효율적으로 클라이언트 데이터를 다루도록 처리했습니다.",
    skills: ["Redux", "Responsive Design", "Notifications"],
    visualTitle: ["Restock notification", "subscription & toast surface."],
    name: "Redux-driven restock alerts",
    screenshot: `${import.meta.env.BASE_URL}screenshot_restock.gif`,
    screenshot_category: "desktop",
  },
  {
    no: 3,
    category: "Migration & Optimization",
    titleLines: <>Vue.js → Next.js 마이그레이션</>,
    about:
      "서비스 중단 없이 레거시 Vue.js 프론트엔드를 Next.js(App Router)로 재구축했습니다. 아웃소싱으로 인해 스파게티 소스로 이뤄졌던 코드베이스를 React 기반으로 리팩토링하고, SEO 및 성능을 개선해 LightHouse 지표를 큰 폭으로 향상시켰습니다.",
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

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setIdx((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight") setIdx((i) => Math.min(TOTAL - 1, i + 1));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

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
    <section
      id="work"
      aria-label="Work"
      className="flex flex-col h-[100dvh] md:block md:h-auto md:py-32 md:px-12"
    >
      {/* Mobile header */}
      <header className="flex-none px-5 pt-4 pb-2.5 md:hidden">
        <h2 className="font-serif italic font-normal text-[1.7rem] leading-[1.05] tracking-[-0.04em] mb-1.5">
          Work
        </h2>
        <p className="text-[0.72rem] leading-[1.45] text-muted-foreground">
          여행 플랫폼{" "}
          <a
            href="https://tourvis.com/activity"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-px px-1 rounded-sm text-foreground"
          >
            투어비스<ExternalLink size={9} className="mb-0.5 opacity-70" />
          </a>{" "}
          ·{" "}
          <a
            href="https://activity.priviatravel.com/activity/main"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-px px-1 rounded-sm text-foreground"
          >
            프리비아<ExternalLink size={9} className="mb-0.5 opacity-70" />
          </a>
          에서 작업했던 주요 작업입니다.
        </p>
      </header>

      {/* Desktop header */}
      <div className="hidden md:block max-w-7xl mx-auto">
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
          여행 플랫폼
          <a
            href="https://tourvis.com/activity"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="inline-flex items-center gap-0.5 transition-colors duration-200 px-1 hover:bg-black hover:text-[#f5f1e8] rounded-sm">
              투어비스
              <ExternalLink size={11} className="mb-1" />
            </span>
          </a>
          ·
          <a
            href="https://activity.priviatravel.com/activity/main"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="inline-flex items-center gap-0.5 transition-colors duration-200 px-1 hover:bg-black hover:text-[#f5f1e8] rounded-sm">
              프리비아
              <ExternalLink size={11} className="mb-1" />
            </span>
          </a>
          에서 작업했던 주요 작업입니다.
        </motion.p>
      </div>

      <div aria-live="polite" className="sr-only">
        {[...projects].sort((a, b) => a.no - b.no)[idx]?.name}
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex-1 flex flex-col min-h-0 relative md:flex-none md:block md:max-w-7xl md:mx-auto"
      >
        {/* Track wrapper */}
        <div
          ref={wrapRef}
          className="flex-1 overflow-hidden min-h-0 touch-pan-y md:flex-none"
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
            className="flex h-full md:h-auto will-change-transform"
            style={{ transform: trackTransform, transition: trackTransition }}
          >
            {[...projects].sort((a, b) => a.no - b.no).map((p, i) => (
              <article
                key={i}
                className="flex-[0_0_100%] min-w-0 h-full flex flex-col justify-center gap-4 md:h-auto md:grid md:grid-cols-[1.1fr_1fr] md:gap-12 md:items-center"
              >
                {/* Stage wrapper — position:relative so mobile arrows don't clip */}
                <div className="relative flex-none px-5 md:px-0">
                  <div
                    ref={i === 0 ? visualRef : undefined}
                    className={`group relative border border-border overflow-hidden rounded-[0.625rem] md:rounded-lg ${
                      p.screenshot_category === "mo"
                        ? "aspect-[1/0.96] md:aspect-[1/0.8] flex items-center justify-center py-3 md:py-[2.25rem]"
                        : "aspect-[16/10] md:aspect-video flex items-center justify-center text-center"
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
                    {/* Corner labels */}
                    <span className="absolute top-3 right-3.5 text-[0.6rem] tracking-[0.18em] uppercase text-muted-foreground z-10">
                      {pad(p.no)} / {pad(TOTAL)}
                    </span>
                    {p.mobileLabel && (
                      <span className="absolute bottom-3 left-3.5 text-[0.6rem] tracking-[0.18em] uppercase text-muted-foreground z-10 max-w-[60%]">
                        {p.mobileLabel}
                      </span>
                    )}

                    {p.screenshot_category === "mo" ? (
                      <div className="relative aspect-[9/19.5] h-[94%] flex-none bg-background border border-border rounded-[1.5rem] overflow-hidden shadow-[0_16px_30px_-16px_rgba(0,0,0,0.25)]">
                        <div className="absolute top-[0.45rem] left-1/2 -translate-x-1/2 w-[36%] h-[0.32rem] bg-black/15 rounded-full z-10" />
                        <div className="absolute bottom-[0.45rem] left-1/2 -translate-x-1/2 w-[28%] h-[0.22rem] bg-black/[0.12] rounded-full z-10" />
                        {p.screenshot ? (
                          <img
                            src={p.screenshot}
                            alt={p.name}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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
                          </div>
                        )}
                      </div>
                    ) : (
                      <>
                        {p.screenshot ? (
                          <img
                            src={p.screenshot}
                            alt={p.name}
                            className="absolute w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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

                  {/* Mobile arrows */}
                  <button
                    onClick={() => goTo(idx - 1)}
                    disabled={idx === 0}
                    aria-label="이전 프로젝트"
                    className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 w-8 h-[6.875rem] flex items-center justify-center rounded-[0.625rem] border border-black/20 bg-white/80 backdrop-blur-sm text-foreground transition-all duration-200 disabled:opacity-25 disabled:pointer-events-none z-20"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => goTo(idx + 1)}
                    disabled={idx === TOTAL - 1}
                    aria-label="다음 프로젝트"
                    className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 w-8 h-[6.875rem] flex items-center justify-center rounded-[0.625rem] border border-black/20 bg-white/80 backdrop-blur-sm text-foreground transition-all duration-200 disabled:opacity-25 disabled:pointer-events-none z-20"
                  >
                    →
                  </button>
                </div>

                {/* Mobile body */}
                <div className="flex-none flex flex-col px-5 md:hidden select-none">
                  <div className="text-[0.62rem] tracking-[0.18em] uppercase text-foreground mb-2.5">
                    {p.category}
                  </div>
                  <h3
                    className="font-normal text-[1.25rem] leading-[1.3] tracking-[-0.02em] mb-2.5"
                    style={{ fontFamily: "'Jeju Myeongjo', serif" }}
                  >
                    {p.titleLines}
                  </h3>
                  <p className="text-[0.76rem] leading-[1.5] text-foreground/[0.78] mb-3 line-clamp-3">
                    {p.about}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.skills.map((skill, si) => (
                      <span
                        key={si}
                        className="text-[0.6rem] tracking-[0.04em] text-foreground px-2.5 py-1.5 border border-border rounded-full bg-background"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Desktop body */}
                <div className="hidden md:flex flex-col select-none">
                  <div className="flex items-center gap-3 flex-wrap text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
                    <span className="text-foreground">{p.category}</span>
                    <span className="text-border">·</span>
                  </div>
                  <h3
                    className="font-normal text-[clamp(2rem,3.6vw,2rem)] leading-[1.05] tracking-[-0.05em] mb-6"
                    style={{ fontFamily: "'Jeju Myeongjo', serif" }}
                  >
                    {p.titleLines}
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

        {/* Desktop arrows */}
        <button
          onClick={() => goTo(idx - 1)}
          disabled={idx === 0}
          aria-label="이전 프로젝트"
          className="hidden md:flex absolute left-2 md:left-4 z-10 -translate-y-1/2 w-10 h-40 items-center justify-center rounded-[var(--radius)] border border-black/20 text-foreground bg-white/80 hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-200 disabled:opacity-25 disabled:pointer-events-none"
          style={{ top: arrowTop ?? "50%" }}
        >
          ←
        </button>
        <button
          onClick={() => goTo(idx + 1)}
          disabled={idx === TOTAL - 1}
          aria-label="다음 프로젝트"
          className="hidden md:flex absolute right-2 md:right-4 z-10 -translate-y-1/2 w-10 h-40 items-center justify-center rounded-[var(--radius)] border border-black/20 text-foreground bg-white/80 hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-200 disabled:opacity-25 disabled:pointer-events-none"
          style={{ top: arrowTop ?? "50%" }}
        >
          →
        </button>

        {/* Desktop dots */}
        <div className="hidden md:flex items-center justify-center pt-6 mt-6 gap-5 flex-wrap">
          <div className="flex items-center gap-3">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`${i + 1}번 프로젝트로 이동`}
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

      {/* Mobile dots */}
      <div className="flex-none flex items-center justify-center gap-[0.45rem] py-3 md:hidden">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`${i + 1}번 프로젝트로 이동`}
            className="p-0 border-0 cursor-pointer"
            style={{
              width: 24,
              height: i === idx ? 2 : 1,
              background:
                i === idx ? "var(--foreground)" : "rgba(0,0,0,0.1)",
              borderRadius: 1,
              transition: "background 0.25s ease, height 0.25s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
}
