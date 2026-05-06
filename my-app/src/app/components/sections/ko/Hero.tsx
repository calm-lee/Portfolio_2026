import { motion } from "motion/react";

function scrollToAbout() {
  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center bg-[var(--bg-color)]">
      <video
        src="/portfolio_video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 7, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.8, ease: "easeOut" },
          y: {
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.8,
            repeatType: "loop",
          },
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-16 h-10 rounded-2xl bg-white/15 backdrop-blur-sm hover:bg-white/25 transition-colors border border-white/80"
      >
        <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
          <path
            d="M4 2l10 8 10-8"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.7"
          />
          <path
            d="M4 11l10 8 10-8"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.4"
          />
        </svg>
      </motion.button>
    </div>
  );
}
