import { motion } from "motion/react";
import RadiantText from "../../common/RadiantText";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-[5fr_5fr] gap-16 items-center"
        >
          <div className="group w-fit">
            <div className="flex items-stretch gap-5 transition-transform duration-500 ease-out group-hover:translate-x-3">
              <motion.span
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-[3px] shrink-0 origin-top"
                style={{ backgroundColor: "#d4cfc9" }}
              />
              <h2 className="text-[clamp(3rem,5vw,5rem)] tracking-normal">
                <RadiantText as="span">Focusing on</RadiantText>
                <br />
                <RadiantText as="span">Improving UI/UX</RadiantText>
              </h2>
            </div>
          </div>
          <div className="group text-lg text-foreground/70 max-w-[60ch]">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
