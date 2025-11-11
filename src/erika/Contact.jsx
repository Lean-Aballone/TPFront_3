const Contact = ({ intro, email, linkedin }) => {
  return (
    <section className="erika-section" id="contacto" aria-labelledby="contacto-title">
      <header className="erika-section__header">
        <h2 className="erika-section__title" id="contacto-title">
          Contacto
        </h2>
      </header>
      <article className="erika-card erika-card--contact">
        <p className="erika-card__text">{intro}</p>
        <ul className="erika-contact">
          <li>
            <a className="erika-link" href={`mailto:${email}`}>
              {email}
            </a>
          </li>
          <li>
            <a className="erika-link" href={linkedin.href} target="_blank" rel="noopener noreferrer">
              {linkedin.label}
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Contact;
