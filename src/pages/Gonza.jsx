import { useState } from "react";
import Footer from "../components/Footer";
import GonzaNav from "../gonza/Nav";
import Hero from "../gonza/Hero";
import About from "../gonza/About";
import Skills from "../gonza/Skills";
import Movies from "../gonza/Movies";
import Music from "../gonza/Music";
import Contact from "../gonza/Contact";
import {
  aboutData,
  contactData,
  heroData,
  moviesData,
  musicData,
  sectionLinks,
  skillsData,
} from "../gonza/data";
import "../gonza/gonza.css";

const sampleIndexes = (length, count) => {
  if (length === 0) return [];
  const shuffled = Array.from({ length }, (_, idx) => idx).sort(
    () => Math.random() - 0.5
  );
  return shuffled.slice(0, Math.min(count, length));
};

const Gonza = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [highlightedSkills, setHighlightedSkills] = useState([]);
  const [highlightedMovies, setHighlightedMovies] = useState([]);

  const handleRandomHighlight = () => {
    setHighlightedSkills(sampleIndexes(skillsData.length, 2));
    setHighlightedMovies(sampleIndexes(moviesData.length, 2));
  };

  return (
    <main className={`gonza-page${isDarkMode ? " gonza-page--dark" : ""}`}>
      <div className="gonza-page__grid">
        <GonzaNav
          sections={sectionLinks}
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode((prev) => !prev)}
          onRandomHighlight={handleRandomHighlight}
        />

        <div className="gonza-content">
          <Hero data={heroData} />
          <About {...aboutData} />
          <Skills skills={skillsData} highlighted={highlightedSkills} />
          <Movies items={moviesData} highlighted={highlightedMovies} />
          <Music items={musicData} />
          <Contact {...contactData} />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Gonza;
