import { Link, useLocation } from "react-router";

export default function LanguageToggle() {
  const { pathname } = useLocation();
  const lang = pathname.startsWith("/ko") ? "ko" : "en";

  return (
    <div className="fixed top-6 right-8 z-50 text-base font-medium tracking-widest text-foreground/50">
      <Link
        to="/ko"
        className={`hover:text-foreground transition-colors ${lang === "ko" ? "text-gray-800" : ""}`}
      >
        KO
      </Link>
      {" | "}
      <Link
        to="/"
        className={`hover:text-foreground transition-colors ${lang === "en" ? "text-gray-800" : ""}`}
      >
        EN
      </Link>
    </div>
  );
}
