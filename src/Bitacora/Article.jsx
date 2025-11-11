export default function Article({ titulo, fecha, info }){
    return (
        <article>
            <h3>{titulo}</h3>
            <h4>{fecha}</h4>
            <p>{info}</p>            
        </article>
    );
}