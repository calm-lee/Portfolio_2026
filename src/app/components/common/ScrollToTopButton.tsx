export default function ScrollToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="flex items-center justify-center w-10 h-20 rounded-2xl bg-black/4 backdrop-blur-sm hover:bg-black/15 border border-black/20 hover:-translate-y-3 transition-all duration-500 ease-out"
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
  );
}
