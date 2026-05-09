import { Routes, Route } from "react-router";
import LanguageToggle from "./components/common/LanguageToggle";
import ScrollProgressBar from "./components/common/ScrollProgressBar";
import Hero from "./components/sections/shared/Hero";
import Skills from "./components/sections/shared/Skills";
import Footer from "./components/sections/shared/Footer";

import EnAbout from "./components/sections/en/About";
import EnExperience from "./components/sections/en/Experience";
import EnWork from "./components/sections/en/Work";
import EnContact from "./components/sections/en/Contact";

import KoAbout from "./components/sections/ko/About";
import KoExperience from "./components/sections/ko/Experience";
import KoContact from "./components/sections/ko/Contact";

function EnLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgressBar />
      <LanguageToggle />
      <Hero />
      <EnAbout />
      <EnExperience />
      <EnWork />
      <Skills />
      <EnContact />
      <Footer />
    </div>
  );
}

function KoLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgressBar />
      <LanguageToggle />
      <Hero />
      <KoAbout />
      <KoExperience />
      <EnWork />
      <Skills />
      <KoContact />
      <Footer />
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
