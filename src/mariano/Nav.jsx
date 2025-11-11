const MarianoNav = ({ sections }) => {
  return (
    <nav className="mariano-nav" aria-label="Secciones personales de Mariano">
      <ul className="mariano-nav__links">
        {sections.map(({ href, label }) => (
          <li key={href}>
            <a className="mariano-nav__link" href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MarianoNav;
