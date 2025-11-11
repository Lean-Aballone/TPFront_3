const About = ({ lead, body, timeline }) => {
  return (
    <article className="gonza-card" id="sobre-mi" aria-labelledby="sobre-mi-title">
      <header className="gonza-card__header">
        <h2 className="gonza-card__title" id="sobre-mi-title">
          Sobre mí
        </h2>
        <p className="gonza-card__lead">{lead}</p>
      </header>
      <p className="gonza-card__body">{body}</p>
      <ul className="gonza-timeline" aria-label="Hitos profesionales de Gonzalo">
        {timeline.map(({ datetime, date, title, description }) => (
          <li className="gonza-timeline__item" key={title}>
            <span className="gonza-timeline__marker" aria-hidden="true" />
            <div className="gonza-timeline__body">
              <time className="gonza-timeline__date" dateTime={datetime}>
                {date}
              </time>
              <p className="gonza-timeline__title">{title}</p>
              <p className="gonza-timeline__description">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default About;
