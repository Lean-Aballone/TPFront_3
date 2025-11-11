const ErikaNav = ({ sections, isNightMode, onToggleTheme }) => {
  return (
    <nav className="erika-nav" aria-label="Secciones de Erika">
      <ul className="erika-nav__links">
        {sections.map(({ href, label }) => (
          <li key={href}>
            <a className="erika-nav__link" href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="erika-button erika-button--toggle"
        aria-pressed={isNightMode}
        title="Cambiar tema"
        onClick={onToggleTheme}
      >
        {isNightMode ? "🌞" : "🌗"}
        <span className="erika-button__label">
          {isNightMode ? "Modo claro" : "Modo oscuro"}
        </span>
      </button>
    </nav>
  );
};

export default ErikaNav;
