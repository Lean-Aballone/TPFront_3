export default function Info({ nombre, ubicacion, formacion, edad, mascota }){

    return (
        <article className="dark-bg">
            <h2>{ nombre }</h2>
            <p><b>Ubicación actual: </b>{ ubicacion }</p>
            <p><b>Formación: </b>{ formacion }</p>
            <p><b>Edad: </b>{ edad }</p>
            <p><b>Mascota: </b> { mascota } </p>
            <div className="socials">
                <a href="https://www.linkedin.com/" className="social-btn linkedin" aria-label="LinkedIn (placeholder)" target="_blank" rel="noopener noreferrer">
                    <img src="/linkedin.svg" alt="linkedin-logo" aria-hidden="true" />
                    <span>LinkedIn</span>
                </a>
                <a href="https://github.com/Lean-Aballone" className="social-btn github" aria-label="GitHub (profile)" target="_blank" rel="noopener noreferrer">
                    <img src="/github-mark.svg" alt="github-logo" aria-hidden="true" />
                    <span>GitHub</span>
                </a>
            </div>
        </article>
    );
}