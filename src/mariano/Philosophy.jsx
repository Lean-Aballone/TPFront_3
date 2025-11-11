const Philosophy = ({ title, paragraphs }) => {
  return (
    <article className="mariano-card" id="filosofia" aria-labelledby="filosofia-title">
      <header className="mariano-card__header">
        <h2 className="mariano-card__title" id="filosofia-title">
          {title}
        </h2>
      </header>
      <div className="mariano-card__body">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
};

export default Philosophy;
