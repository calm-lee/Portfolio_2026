import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div aria-hidden="true" className="fixed top-0 right-0 w-[6px] h-full z-50">
      <div
        className="w-full bg-foreground/80 opacity-70 rounded-b-xl"
        style={{ height: `${progress * 100}%` }}
      />
    </div>
  );
}
