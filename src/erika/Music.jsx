const Music = ({ artists }) => {
  return (
    <section className="erika-section" id="musica" aria-labelledby="musica-title">
      <header className="erika-section__header">
        <h2 className="erika-section__title" id="musica-title">
          Canciones favoritas
        </h2>
      </header>
      <div className="erika-grid erika-grid--cards">
        {artists.map(({ artist, songs }) => (
          <article className="erika-card erika-card--list" key={artist}>
            <h3 className="erika-card__title">{artist}</h3>
            <ul className="erika-list">
              {songs.map((song) => (
                <li key={song}>{song}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Music;
