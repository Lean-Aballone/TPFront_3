const Skills = ({ skills }) => {
  return (
    <section className="erika-section" id="habilidades" aria-labelledby="habilidades-title">
      <header className="erika-section__header">
        <h2 className="erika-section__title" id="habilidades-title">
          Habilidades
        </h2>
        <p className="erika-section__lead">
          Busco equilibrio entre estrategia, estética y viabilidad técnica. Estas son las tecnologías que lideran mis entregas.
        </p>
      </header>
      <article className="erika-card">
        <ul className="erika-badges">
          {skills.map((skill) => (
            <li className="erika-badge" key={skill}>
              {skill}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Skills;
