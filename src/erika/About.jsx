const About = ({ data }) => {
  const { image, alt, location, summary, paragraphs } = data;

  return (
    <section className="erika-section" id="sobre-mi" aria-labelledby="sobre-mi-title">
      <header className="erika-section__header">
        <h2 className="erika-section__title" id="sobre-mi-title">
          Sobre mí
        </h2>
      </header>
      <article className="erika-card erika-card--about">
        <figure className="erika-card__media">
          <img src={image} alt={alt} width="480" height="480" loading="lazy" />
          <figcaption className="erika-card__caption">{location}</figcaption>
        </figure>
        <div className="erika-card__content">
          <p className="erika-card__lead">{summary}</p>
          {paragraphs.map((text, index) => (
            <p key={index} className="erika-card__text">
              {text}
            </p>
          ))}
        </div>
      </article>
    </section>
  );
};

export default About;
