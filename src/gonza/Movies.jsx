const Movies = ({ items, highlighted = [] }) => {
  return (
    <article className="gonza-card" id="peliculas" aria-labelledby="peliculas-title">
      <header className="gonza-card__header">
        <h2 className="gonza-card__title" id="peliculas-title">
          Películas favoritas
        </h2>
        <p className="gonza-card__lead">
          Historias que inspiran mi manera de narrar interfaces y atmósferas visuales.
        </p>
      </header>
      <ul className="gonza-list">
        {items.map(({ title, info }, idx) => (
          <li
            key={title}
            className={`gonza-list__item${highlighted.includes(idx) ? " is-highlighted" : ""}`}
          >
            <strong>{title}</strong>
            <span>{info}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Movies;
