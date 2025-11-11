const Interests = ({ categories, highlighted = [] }) => {
  return (
    <article className="mariano-card" id="intereses" aria-labelledby="intereses-title">
      <header className="mariano-card__header">
        <h2 className="mariano-card__title" id="intereses-title">
          Intereses y Aficiones
        </h2>
        <p className="mariano-card__lead">
          Inspiración constante entre historias, música y desafíos intelectuales.
        </p>
      </header>
      <div className="mariano-interest-grid">
        {categories.map(({ title, items }, idx) => (
          <section
            className={`mariano-interest${highlighted.includes(idx) ? " is-highlighted" : ""}`}
            key={title}
          >
            <h3 className="mariano-interest__title">{title}</h3>
            <ul className="mariano-simple-list">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
};

export default Interests;
