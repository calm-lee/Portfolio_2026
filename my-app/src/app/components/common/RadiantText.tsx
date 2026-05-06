import { useRef, useCallback } from "react";

const LIT = { r: 255, g: 251, b: 242 }; // warm beige-gray #fffbf2
const DARK = { r: 52, g: 51, b: 63 }; // foreground/70 on white
const MAX_DIST = 100;
const MAX_INTENSITY = 0.8;

function lerp(a: number, b: number, t: number) {
  return Math.round(a + (b - a) * t);
}

interface Props {
  children: string;
  className?: string;
  as?: "p" | "span" | "div" | "h2";
}

export default function RadiantText({
  children,
  className,
  as: Tag = "p",
}: Props) {
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    spansRef.current.forEach((span) => {
      if (!span) return;
      const r = span.getBoundingClientRect();
      const dist = Math.hypot(
        clientX - (r.left + r.width / 2),
        clientY - (r.top + r.height / 2),
      );
      const t = Math.max(0, 1 - dist / MAX_DIST) * MAX_INTENSITY;
      span.style.color = `rgb(${lerp(DARK.r, LIT.r, t)}, ${lerp(DARK.g, LIT.g, t)}, ${lerp(DARK.b, LIT.b, t)})`;
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    spansRef.current.forEach((s) => {
      if (s) s.style.color = "";
    });
  }, []);

  return (
    <Tag
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children.split("").map((char, i) => (
        <span
          key={i}
          ref={(el) => {
            spansRef.current[i] = el;
          }}
        >
          {char}
        </span>
      ))}
    </Tag>
  );
}
