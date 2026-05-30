import { motion } from "motion/react";

const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Vue",
      "Svelte",
      "Tailwind CSS",
      "Styled Components",
      "SCSS",
    ],
  },
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "MySQL", "PostgreSQL"],
  },
  {
    category: "DevOps & Others",
    items: ["AWS", "Docker", "Jenkins", "Git", "Sentry", "Storybook"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills"
      className="py-24 pb-32 px-6 md:px-12 bg-[var(--bg-color)]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
          }}
          viewport={{ once: false }}
          transition={{ duration: 0.3 }}
          className="text-[clamp(3rem,5vw,5rem)] mb-16 italic tracking-normal hover:tracking-widest transition-[letter-spacing] duration-400 cursor-default"
        >
          Skills
        </motion.h2>

        <div>
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              viewport={{ once: false }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-8 border-t border-border last:border-b"
            >
              <div className="text-muted-foreground text-sm uppercase tracking-widest pt-1">
                {skillGroup.category}
              </div>
              <div className="group/marquee overflow-hidden relative">
                <div className="flex w-max gap-x-10 [animation:marquee_7s_linear_infinite] group-hover/marquee:[animation-play-state:paused]">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="text-sm font-light whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={`dup-${i}`}
                      aria-hidden="true"
                      className="text-sm font-light whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
