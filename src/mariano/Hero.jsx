const Hero = ({ data }) => {
  const { image, alt, name, residence, age, education, summary } = data;

  return (
    <article className="mariano-card mariano-hero" id="inicio">
      <figure className="mariano-hero__avatar">
        <img src={image} width="240" height="240" loading="lazy" alt={alt} />
      </figure>
      <div className="mariano-hero__content">
        <span className="mariano-chip">{residence}</span>
        <h1 className="mariano-hero__title">{name}</h1>
        <p className="mariano-hero__meta">
          <span>{age}</span>
          <span>·</span>
          <span>{education}</span>
        </p>
        <p className="mariano-hero__summary">{summary}</p>
      </div>
    </article>
  );
};

export default Hero;
