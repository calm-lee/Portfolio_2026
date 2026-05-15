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
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-[5fr_5fr] gap-10 md:gap-16 items-center"
        >
          <div className="group w-fit">
            <div className="flex items-stretch gap-5 transition-transform duration-500 ease-out group-hover:translate-x-3">
              <motion.span
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
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
          <div className="group text-base md:text-lg text-foreground/70 max-w-[60ch]">
            <RadiantText
              as="p"
              className="transition-transform duration-500 ease-out group-hover:-translate-x-5"
            >
              With over 4 years of experience in frontend engineering, 
            </RadiantText>
            <RadiantText
              as="p"
              className="transition-transform duration-500 ease-out group-hover:-translate-x-5"
            >
              I specialize in delivering seamless UI/UX regardless of
              environment.
            </RadiantText>
            <div className="py-3" />
            <RadiantText
              as="p"
              className="transition-transform duration-500 ease-out group-hover:translate-x-5"
            >
              I approach problems with a user-focused mindset and pay close
              attention to detail, ensuring even the smallest aspects are
              carefully considered.
            </RadiantText>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
