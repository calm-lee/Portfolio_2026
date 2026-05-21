import { useEffect } from "react";
import { Routes, Route } from "react-router";
import LanguageToggle from "./components/common/LanguageToggle";
import ScrollProgressBar from "./components/common/ScrollProgressBar";
import ScrollToTopButton from "./components/common/ScrollToTopButton";
import Hero from "./components/sections/shared/Hero";
import Skills from "./components/sections/shared/Skills";
import Footer from "./components/sections/shared/Footer";

import About from "./components/sections/shared/About";
import Experience from "./components/sections/shared/Experience";
import Work from "./components/sections/shared/Work";
import Contact from "./components/sections/shared/Contact";

function EnLayout() {
  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgressBar />
      <LanguageToggle />
      <ScrollToTopButton />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

function KoLayout() {
  useEffect(() => {
    document.documentElement.lang = "ko";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgressBar />
      <LanguageToggle />
      <ScrollToTopButton />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<EnLayout />} />
      <Route path="/ko" element={<KoLayout />} />
    </Routes>
  );
}
