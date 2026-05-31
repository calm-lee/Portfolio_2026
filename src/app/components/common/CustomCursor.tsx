import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = -200;
    let my = -200;
    let rx = -200;
    let ry = -200;
    let rafId: number;
    let initialized = false;

    const noCursor = document.createElement("style");
    noCursor.textContent = "* { cursor: none !important; }";
    document.head.appendChild(noCursor);

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;
      if (!initialized) {
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        initialized = true;
      }
    };

    const onOver = (e: MouseEvent) => {
      const isInteractive = !!(e.target as Element).closest(
        "a, button, [role='button'], input, textarea, select, label",
      );
      if (isInteractive) {
        dot.style.opacity = "0";
        ring.style.width = "36px";
        ring.style.height = "36px";
      } else {
        dot.style.opacity = initialized ? "1" : "0";
        ring.style.width = "20px";
        ring.style.height = "20px";
      }
    };

    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onEnter = () => {
      if (initialized) {
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    };

    const tick = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafId);
      document.head.removeChild(noCursor);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/40 hidden md:block"
        style={{
          width: 20,
          height: 20,
          opacity: 0,
          transition: "width 0.2s ease, height 0.2s ease",
        }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 w-[4px] h-[4px] rounded-full bg-foreground/60 hidden md:block"
        style={{ opacity: 0 }}
      />
    </>
  );
}
