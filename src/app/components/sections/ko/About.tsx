import { motion } from "motion/react";
import RadiantText from "../../common/RadiantText";

export default function About() {
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
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                  }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3 }}
                  className="block"
                >
                  <RadiantText as="span">Focusing on</RadiantText>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.5,
                      duration: 1.2,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3 }}
                  className="block"
                >
                  <RadiantText as="span">Improving</RadiantText>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 1,
                      duration: 1.2,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3 }}
                  className="block"
                >
                  <RadiantText as="span">UI/UX</RadiantText>
                </motion.span>
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
            <RadiantText
              as="p"
              className="transition-transform duration-500 ease-out group-hover:-translate-x-5"
            >
              4년 이상의 프론트엔드 엔지니어링 경험을 바탕으로,
            </RadiantText>
            <RadiantText
              as="p"
              className="transition-transform duration-500 ease-out group-hover:-translate-x-5"
            >
              환경에 상관없이 매끄러운 UI/UX를 제공하는 데 집중합니다.
            </RadiantText>
            <div className="py-3" />
            <RadiantText
              as="p"
              className="transition-transform duration-500 ease-out group-hover:translate-x-5"
            >
              사용자 중심적인 사고방식으로 문제에 접근하며,
            </RadiantText>
            <RadiantText
              as="p"
              className="transition-transform duration-500 ease-out group-hover:translate-x-5"
            >
              기기와 브라우저에 상관없이 원활한 서비스를 제공하고자 노력합니다.
            </RadiantText>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
