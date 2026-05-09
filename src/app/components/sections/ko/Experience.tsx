import { motion } from "motion/react";

const experience = [
  {
    year: "2021.12 — 2025.2",
    role: "Frontend Engineer",
    company: "TIDESQUARE · 온라인 여행 플랫폼 · 서울",
    bullets: [
      "월 45만 명이 이용하는 고트래픽 플랫폼에서 투어&티켓 카테고리 프론트엔드를 담당했습니다.",
      "React, Next.js, Vue.js를 활용해 웹 서비스를 개발 및 유지보수했으며, 사용자 경험과 성능에 집중했습니다.",
      "레거시 Vue.js 코드베이스를 Next.js SSR로 마이그레이션하여 성능과 SEO를 개선했습니다.",
      "모바일 환경에서의 PDF 뷰어 및 다운로드 문제를 해결하여 크로스 브라우저 사용자 경험을 향상시켰습니다.",
      "TanStack Query를 도입해 중복 API 호출을 줄이고 응답성을 개선했습니다.",
      "프레임워크 마이그레이션(React → Svelte)을 통해 번들 크기를 줄이고 로딩 속도를 향상시켰습니다.",
      "재입고 알림, 최근 검색어, 예약 관리 플로우 등의 기능을 구현하여 UX를 개선했습니다.",
      "Google Analytics를 활용한 사용자 행동 추적으로 데이터 기반 제품 개선을 지원했습니다.",
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
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(3rem,5vw,5rem)] mb-16 italic"
        >
          Experience
        </motion.h2>

        <div className="space-y-1">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="group py-8 border-t border-border hover:bg-background/50 transition-all duration-300 px-4 -mx-4">
                <div className="grid md:grid-cols-[200px_1fr] gap-8">
                  <div className="text-lg text-muted-foreground transition-transform duration-300 ease-out">
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
