export default function Card ({title, info, className}){
    return (
        <article className={className}>
            <h4>{title}</h4>
            <p>{info}</p>
        </article>
    );
}