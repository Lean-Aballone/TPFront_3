const Skills = ({ skills }) => {
  return (
    <article className="mariano-card" id="habilidades" aria-labelledby="habilidades-title">
      <header className="mariano-card__header">
        <h2 className="mariano-card__title" id="habilidades-title">
          Habilidades y Tecnologías
        </h2>
        <p className="mariano-card__lead">
          Herramientas y fundamentos que impulsan mi aprendizaje continuo.
        </p>
      </header>
      <ul className="mariano-tag-list">
        {skills.map((skill) => (
          <li className="mariano-tag" key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Skills;
