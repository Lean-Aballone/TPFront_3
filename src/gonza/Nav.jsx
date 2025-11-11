const GonzaNav = ({
  sections,
  isDarkMode,
  onToggleTheme,
  onRandomHighlight,
}) => {
  return (
    <nav className="gonza-nav" aria-label="Secciones personales">
      <div className="gonza-nav__actions">
        <button
          type="button"
          className="gonza-button"
          onClick={onToggleTheme}
        >
          <span>{isDarkMode ? "Modo claro" : "Modo oscuro"}</span>
        </button>
        <button
          type="button"
          className="gonza-button gonza-button--accent"
          onClick={onRandomHighlight}
        >
          Random highlight
        </button>
      </div>
      <ul className="gonza-nav__links">
        {sections.map(({ href, label }) => (
          <li key={href}>
            <a className="gonza-nav__link" href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default GonzaNav;
