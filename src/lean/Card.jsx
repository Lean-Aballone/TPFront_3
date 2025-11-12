export default function Card ({title, info, className, nivel}){
    return (
        <article className={className}>
            <h4>{title}</h4>
            <p>{info}</p>
            <div className="progress" role="progressbar" aria-valuenow={nivel} aria-valuemin="0" aria-valuemax="100">
                <div className="progress-fill" style={{ width: `${nivel}%` }} />
                <span className="progress-value">{nivel}%</span>
            </div>
        </article>
    );
}