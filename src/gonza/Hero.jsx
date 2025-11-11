const Hero = ({ data }) => {
  const { image, alt, location, title, subtitle, description, meta } = data;

  return (
    <article className="gonza-card gonza-hero" id="inicio">
      <figure className="gonza-hero__avatar">
        <img src={image} width="240" height="240" loading="lazy" alt={alt} />
      </figure>
      <div className="gonza-hero__content">
        <span className="gonza-chip">{location}</span>
        <h1 className="gonza-hero__title">{title}</h1>
        <p className="gonza-hero__subtitle">{subtitle}</p>
        <p className="gonza-hero__text">{description}</p>
        <dl className="gonza-hero__meta">
          {meta.map(({ label, value }) => (
            <div className="gonza-hero__meta-item" key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
};

export default Hero;
