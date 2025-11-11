import { useState } from "react";

const getNextIndex = (length, exclude) => {
  if (length === 0) return -1;
  if (length === 1) return 0;
  let nextIndex = exclude;
  while (nextIndex === exclude) {
    nextIndex = Math.floor(Math.random() * length);
  }
  return nextIndex;
};

const Curiosity = ({ items, onReveal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = items[currentIndex] ?? items[0];

  const handleReveal = () => {
    const nextIndex = getNextIndex(items.length, currentIndex);
    if (nextIndex === -1) {
      return;
    }

    setCurrentIndex(nextIndex);
    if (typeof onReveal === "function") {
      onReveal(nextIndex);
    }
  };

  if (!current) {
    return null;
  }

  return (
    <article className="mariano-card mariano-curiosity" id="curiosidades" aria-labelledby="curiosidades-title">
      <header className="mariano-card__header mariano-curiosity__header">
        <h2 className="mariano-card__title" id="curiosidades-title">
          Curiosidades de Mariano
        </h2>
        <p className="mariano-card__lead">
          Un vistazo a lo que nutre su curiosidad y mantiene viva la motivación diaria.
        </p>
      </header>
      <div className="mariano-curiosity__body">
        <span className="mariano-curiosity__label">{current.title}</span>
        <p className="mariano-curiosity__text">{current.description}</p>
      </div>
      <button type="button" className="mariano-button mariano-button--ghost" onClick={handleReveal}>
        Descubrir otra
      </button>
    </article>
  );
};

export default Curiosity;
