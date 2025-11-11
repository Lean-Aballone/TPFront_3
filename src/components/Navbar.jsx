import { NavLink } from "react-router-dom";

export default function Navbar({ isOpen }) {
    return (
        <>
            <nav className={`nav nav-ul ${isOpen ? "nav_open big" : "hidden"}`}>
                <ul>
                    <li><NavLink to="/">Portada</NavLink></li>
                    <li><NavLink to="/bitacora">Bitácora</NavLink></li>
                    <li><NavLink to="/erika">Erika</NavLink></li>
                    <li><NavLink to="/gonza">Gonza</NavLink></li>
                    <li><NavLink to="/mariano">Mariano</NavLink></li>
                    <li><NavLink to="/lean">Lean</NavLink></li>
                    <li><NavLink to="/peliculas">Peliculas</NavLink></li>
                    <li><NavLink to="/diagrama">Diagrama</NavLink></li>
                    <li><NavLink to="/clima">Clima</NavLink></li>
                    <li><NavLink to="/noticias">Noticias</NavLink></li>
                </ul>
            </nav>
            <nav className={`nav nav-ul ${!isOpen ? "nav_open" : "hidden"}`}>
                <ul>
                    <li><NavLink to="/" title="Portada"><span className="card-avatar">P</span></NavLink></li>
                    <li><NavLink to="/bitacora" title="Bitácora"><span className="card-avatar">B</span></NavLink></li>
                    <li><NavLink to="/erika" title="Erika"><span className="card-avatar">E</span></NavLink></li>
                    <li><NavLink to="/gonza" title="Gonza"><span className="card-avatar">G</span></NavLink></li>
                    <li><NavLink to="/mariano" title="Mariano"><span className="card-avatar">M</span></NavLink></li>
                    <li><NavLink to="/lean" title="Lean"><span className="card-avatar">L</span></NavLink></li>
                    <li><NavLink to="/peliculas" title="Peliculas"><span className="card-avatar">P</span></NavLink></li>
                    <li><NavLink to="/diagrama" title="Diagrama"><span className="card-avatar">D</span></NavLink></li>
                    <li><NavLink to="/clima" title="Clima"><span className="card-avatar">C</span></NavLink></li>
                    <li><NavLink to="/noticias" title="Noticias"><span className="card-avatar">N</span></NavLink></li>
                </ul>
            </nav>
            <style>
                {   `
                        .nav_open > ul > li {
                            padding: .55rem 0;
                        }

                        .nav_open {
                            margin: 0 auto;
                        }
                        ul {
                        list-style-type: none;
                        padding: 0;
                        margin: 0;
                        color: #fff;
                        border-radius: 14px;
                        opacity: 1;
                        pointer-events: auto;
                        transition: transform .18s ease, opacity .18s ease;
                        }

                        li {
                            display: block;
                            color: #fff;
                            opacity: .95;
                            padding: .55rem .7rem;
                            border-radius: 8px;
                        }

                        .nav a {
                        text-decoration: none;
                            display: block;
                            color: #fff;
                            opacity: .95;
                            padding: .55rem .7rem;
                            border-radius: 8px;
                        }
                        .nav a[aria-current="page"] { 
                        text-decoration: underline;
                        background: rgba(56, 189, 248, .16);
                        outline: 2px solid rgba(56, 189, 248, .35);
                        }
                        .nav {
                        margin: .5rem;
                            background: var(--header-bg);
                            color: #fff;
                            border: 1px solid rgba(255, 255, 255, .08);
                            border-radius: 14px;
                            box-shadow: 0 12px 40px rgba(0, 0, 0, .28);
                            transition: transform .18s ease, opacity .18s ease;
                        }
                    `
                }
            </style>
        </>
    );
}
