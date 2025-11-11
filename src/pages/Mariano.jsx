import { useState } from "react";
import Footer from "../components/Footer";
import MarianoNav from "../mariano/Nav";
import Hero from "../mariano/Hero";
import Philosophy from "../mariano/Philosophy";
import Skills from "../mariano/Skills";
import Interests from "../mariano/Interests";
import Quote from "../mariano/Quote";
import Curiosity from "../mariano/Curiosity";
import {
  curiositiesData,
  heroData,
  interestsData,
  philosophyData,
  quoteData,
  sectionLinks,
  skillsData,
} from "../mariano/data";
import "../mariano/mariano.css";

const getRandomIndex = (length) => {
  if (length === 0) return -1;
  return Math.floor(Math.random() * length);
};

const Mariano = () => {
  const [highlightedCategories, setHighlightedCategories] = useState(
    interestsData.length > 0 ? [0] : []
  );

  const handleCuriosityReveal = () => {
    const randomCategory = getRandomIndex(interestsData.length);
    if (randomCategory !== -1) {
      setHighlightedCategories([randomCategory]);
    }
  };

  return (
    <main className="mariano-page mariano-page--midnight">
      <div className="mariano-page__grid">
        <MarianoNav sections={sectionLinks} />
        <div className="mariano-content">
          <Hero data={heroData} />
          <Philosophy {...philosophyData} />
          <Skills skills={skillsData} />
          <Interests categories={interestsData} highlighted={highlightedCategories} />
          <Quote {...quoteData} />
          <Curiosity items={curiositiesData} onReveal={handleCuriosityReveal} />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Mariano;
