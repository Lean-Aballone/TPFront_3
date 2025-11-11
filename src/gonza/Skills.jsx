const Skills = ({ skills, highlighted = [] }) => {
  return (
    <article className="gonza-card" id="habilidades" aria-labelledby="habilidades-title">
      <header className="gonza-card__header">
        <h2 className="gonza-card__title" id="habilidades-title">
          Habilidades
        </h2>
        <p className="gonza-card__lead">
          Stack orientado a la construcción de design systems robustos y productos escalables.
        </p>
      </header>
      <div className="gonza-skill-matrix">
        {skills.map(({ label, level, progress }, idx) => (
          <div
            key={label}
            className={`gonza-skill${highlighted.includes(idx) ? " is-highlighted" : ""}`}
            style={{ "--skill-level": progress }}
          >
            <span className="gonza-skill__label">{label}</span>
            <span className="gonza-skill__level">{level}</span>
            <span className="gonza-skill__bar" aria-hidden="true" />
          </div>
        ))}
      </div>
    </article>
  );
};

export default Skills;
