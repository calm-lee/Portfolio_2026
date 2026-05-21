import { motion } from "motion/react";
import RadiantText from "../../common/RadiantText";
import { useLanguage } from "@/app/context/LanguageContext";
import { about as enAbout } from "@/content/en";
import { about as koAbout } from "@/content/ko";

const headingLines = ["Focusing on", "Improving", "UI/UX"];
const headingDelays = [0, 0.5, 1.0];
const headingDurations = [0.9, 1.2, 1.2];

export default function About() {
  const lang = useLanguage();
  const content = lang === "ko" ? koAbout : enAbout;

  return (
    <section id="about" aria-label="About" className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[5fr_5fr] gap-10 md:gap-16 items-center">
          <div className="group w-fit">
            <div className="flex items-stretch gap-5 transition-transform duration-500 ease-out group-hover:-translate-x-2 group-hover:-translate-y-3">
              <motion.span
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
                className="w-[3px] shrink-0 origin-top"
                style={{ backgroundColor: "#d4cfc9" }}
              />
              <h2 className="text-[clamp(3rem,5vw,5rem)] tracking-normal">
                {headingLines.map((line, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: headingDelays[i],
                        duration: headingDurations[i],
                        ease: [0.16, 1, 0.3, 1],
                      },
                    }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3 }}
                    className="block"
                  >
                    <RadiantText as="span">{line}</RadiantText>
                  </motion.span>
                ))}
              </h2>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="group text-base md:text-lg text-foreground/70 max-w-[60ch]"
          >
            {content.leftParagraphs.map((p, i) => (
              <RadiantText
                key={i}
                as="p"
                className="transition-transform duration-500 ease-out group-hover:-translate-x-5"
              >
                {p}
              </RadiantText>
            ))}
            <div className="py-3" />
            {content.rightParagraphs.map((p, i) => (
              <RadiantText
                key={i}
                as="p"
                className="transition-transform duration-500 ease-out group-hover:translate-x-5"
              >
                {p}
              </RadiantText>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
