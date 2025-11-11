export default function Peliculas({name, bg, img, link1, link2, info}) {
    return (
        <article style={{textAlign:"justify", backgroundImage:bg}}>
            <div className="blur white-bg">
                <a href={link1} target="_blank">
                    <div className="white-bg black-text flex">
                      <h4>{name}</h4>
                      <img itemProp="image" width="160" height="240" src={img} alt={name} />
                    </div>
                </a>
                <a target="_blank" href={link2}>
                    <p className="white-bg black-text argumento"><b>Argumento: </b>{info}</p>
                </a>
            </div>
        </article>
    );
}