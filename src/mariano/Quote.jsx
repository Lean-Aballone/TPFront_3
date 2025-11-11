const Quote = ({ text }) => {
  return (
    <article className="mariano-card mariano-quote" id="inspiracion" aria-labelledby="inspiracion-title">
      <header className="mariano-card__header">
        <h2 className="mariano-card__title" id="inspiracion-title">
          Inspiración
        </h2>
      </header>
      <blockquote className="mariano-quote__content">"{text}"</blockquote>
    </article>
  );
};

export default Quote;
