export default function Welcome({titulo,subtitulo, grupo, bienvenida}) {
    return (
        <section className="welcome info">
            <article>
                <h1>{titulo}</h1>
                <h3>{subtitulo}</h3>
                <p>{grupo}</p>
                <p className="fraseBienvenida">{bienvenida}</p>
            </article>
        </section>
    );
}
