import { Link } from "react-router-dom"
export default function Card({img,nombre,frase}) {
    return (
        <div className="cardContainer" tabIndex={0}>
            <Link to={nombre}>
                <img src={img} alt={nombre} style={{width: "200px", height: "300px", display:"block",objectFit:"cover"}}/>
                <article>
                    <hr />
                    <h3>{nombre}</h3>
                    <p className="showOnHover">{frase}</p>
                </article>
            </Link>
            <style>
                {`
                    .cardContainer{
                        min-width: 0;
                        overflow: hidden;
                        width: min-content;
                        background-color: #fff;
                        border: 1px solid #e5e7eb;
                        border-radius: 14px;
                        box-shadow: 5px 5px 3px 3px #56036bc0;
                        transition: transform .12s ease, box-shadow .12s ease, border-color .12s ease;
                    }
                `}
            </style>
        </div>
        
    );              
}