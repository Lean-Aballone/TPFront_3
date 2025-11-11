const Favorites = ({ items }) => {
  return (
    <section className="erika-section" id="favoritos" aria-labelledby="favoritos-title">
      <header className="erika-section__header">
        <h2 className="erika-section__title" id="favoritos-title">
          Películas favoritas
        </h2>
      </header>
      <div className="erika-grid erika-grid--cards">
        {items.map(({ title, detail }) => (
          <article className="erika-card erika-card--compact" key={title}>
            <h3 className="erika-card__title">{title}</h3>
            <p className="erika-card__text">
              <strong>Qué significa para mí:</strong> {detail}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Favorites;
