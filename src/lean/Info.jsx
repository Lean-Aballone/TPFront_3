export default function Info({ nombre, ubicacion, formacion, edad, mascota }){

    return (
        <article className="dark-bg">
            <h2>{ nombre }</h2>
            <p><b>Ubicación actual: </b>{ ubicacion }</p>
            <p><b>Formación: </b>{ formacion }</p>
            <p><b>Edad: </b>{ edad }</p>
            <p><b>Mascota: </b> { mascota } </p>
        </article>
    );
}