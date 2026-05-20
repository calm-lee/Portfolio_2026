import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7);

      const contact = document.getElementById("contact");
      if (contact) {
        setAtContact(
          contact.getBoundingClientRect().top <= window.innerHeight * 0.5,
        );
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (atContact) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const sections = Array.from(document.querySelectorAll("section[id]"));
    let currentIdx = -1;
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top <= window.innerHeight * 0.5) {
        currentIdx = i;
      }
    }
    sections[currentIdx + 1]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label={atContact ? "Scroll to top" : "Next section"}
      className={`fixed bottom-3 md:bottom-14 right-6 md:right-12 z-50 flex items-center justify-center w-10 h-20 rounded-2xl bg-black/4 md:bg-[#f7f7f7] backdrop-blur-sm md:hover:bg-[#e3e3e3] border border-black/20 ${atContact ? "md:hover:-translate-y-3" : "md:hover:translate-y-3"} transition-all duration-200 ease-out ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 20"
        fill="none"
        aria-hidden="true"
        className="transition-transform duration-300"
        style={{ transform: atContact ? "rotate(180deg)" : "none" }}
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
