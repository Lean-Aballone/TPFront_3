const Actions = ({ links }) => {
  if (!links.length) return null;

  return (
    <nav className="erika-actions" id="accion" aria-label="Accesos rápidos de Erika">
      {links.map(({ href, label }) => (
        <a className="erika-button erika-button--ghost" href={href} key={href}>
          {label}
        </a>
      ))}
    </nav>
  );
};

export default Actions;
