import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 text-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-[clamp(3rem,5vw,5rem)] mb-8 tracking-normal italic">
            Contact
          </h2>
          <p className="text-xl mb-12 max-w-[60ch] opacity-80 font-light">
            새로운 기회와 아이디어를 나누고 싶으시다면 —{" "}
            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              언제나 환영합니다!
            </motion.span>
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:chloe.lee.dev@gmail.com"
              className="inline-flex items-center justify-center gap-2.5 w-40 py-4 border border-black/25 rounded-lg text-sm font-medium hover:bg-black hover:text-white hover:border-black transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/chloe-lee-21a819229/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-40 py-4 border border-black/25 rounded-lg text-sm font-medium hover:bg-black hover:text-white hover:border-black transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/calm-lee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-40 py-4 border border-black/25 rounded-lg text-sm font-medium hover:bg-black hover:text-white hover:border-black transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-10 right-6 md:right-38 z-10 flex items-center justify-center w-10 h-20 rounded-2xl bg-black/4 backdrop-blur-sm hover:bg-black/15 transition-colors border border-black/20 hover:-translate-y-3 transition-transform duration-500 ease-out"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 20"
          fill="none"
          style={{ transform: "rotate(180deg)" }}
        >
          <path
            d="M4 2l10 8 10-8"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.40"
          />
          <path
            d="M4 11l10 8 10-8"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.20"
          />
        </svg>
      </button>
    </section>
  );
}
