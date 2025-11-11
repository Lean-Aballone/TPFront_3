const Music = ({ items }) => {
  return (
    <article className="gonza-card" id="musica" aria-labelledby="musica-title">
      <header className="gonza-card__header">
        <h2 className="gonza-card__title" id="musica-title">
          Música favorita
        </h2>
        <p className="gonza-card__lead">
          Playlists para entrar en modo construcción y sostener la energía creativa.
        </p>
      </header>
      <ul className="gonza-list gonza-list--dense">
        {items.map(({ title, description }) => (
          <li className="gonza-list__item" key={title}>
            <strong>{title}</strong>
            <span>{description}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Music;
