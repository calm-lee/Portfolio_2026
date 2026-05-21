import { useLocation } from "react-router";

export type Lang = "en" | "ko";

export function useLanguage(): Lang {
  const { pathname } = useLocation();
  return pathname.startsWith("/ko") ? "ko" : "en";
}
