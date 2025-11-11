import { useState } from "react";
import Footer from "../components/Footer";
import ErikaNav from "../erika/Nav";
import About from "../erika/About";
import Skills from "../erika/Skills";
import Favorites from "../erika/Favorites";
import Music from "../erika/Music";
import Contact from "../erika/Contact";
import Actions from "../erika/Actions";
import {
  aboutData,
  actionLinks,
  contactData,
  favoritesData,
  musicData,
  sectionLinks,
  skillsData,
} from "../erika/data";
import "../erika/erika.css";

const Erika = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  return (
    <main id="top" className={`erika-page${isNightMode ? " erika-page--night" : ""}`}>
      <div className="erika-page__grid">
        <ErikaNav
          sections={sectionLinks}
          isNightMode={isNightMode}
          onToggleTheme={() => setIsNightMode((prev) => !prev)}
        />
        <div className="erika-content">
          <About data={aboutData} />
          <Skills skills={skillsData} />
          <Favorites items={favoritesData} />
          <Music artists={musicData} />
          <Contact {...contactData} />
          <Actions links={actionLinks} />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Erika;
