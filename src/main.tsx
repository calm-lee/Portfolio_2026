import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./app/App.tsx";
import "./styles/index.css";

console.log(
  "%cHi there 👋",
  "font-size:18px; font-weight:600; color:#8B7355; font-family:Georgia,serif;",
);
console.log(
  "%cThanks for looking under the hood.\n\nThis portfolio was hand-built with React, TypeScript, Tailwind v4, and Framer Motion.\nNo templates - every interaction was written from scratch.\n\nIf you'd like to talk, I'm at chloe.lee.dev@gmail.com",
  "font-size:13px; color:#666; line-height:1.7; font-family:Georgia,serif;",
);

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <App />
  </BrowserRouter>,
);
