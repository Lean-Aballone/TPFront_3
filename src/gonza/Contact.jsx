const Contact = ({ email, linkedin, alias, availability }) => {
  return (
    <article className="gonza-card" id="contacto" aria-labelledby="contacto-title">
      <header className="gonza-card__header">
        <h2 className="gonza-card__title" id="contacto-title">
          Contacto
        </h2>
        <p className="gonza-card__lead">
          Hablemos de ideas que mezclen data, experiencia y propósito.
        </p>
      </header>
      <address className="gonza-contact">
        <a href={`mailto:${email}`}>{email}</a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          {alias}
        </a>
        <p>{availability}</p>
      </address>
    </article>
  );
};

export default Contact;
