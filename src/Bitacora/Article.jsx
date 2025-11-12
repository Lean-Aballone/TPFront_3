export default function Article({ titulo, fecha, info, open = false }){
    return (
        <article>
            <details open={open}>
                <summary><h3>{titulo}</h3></summary>
                <h4>{fecha}</h4>
                <p>{info}</p>    
            </details>
        </article>
    );
}