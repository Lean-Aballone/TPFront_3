import Card from "./Card";
import ErikaImg from "../assets/img/chikis.jpg"
import GonzaImg from "../assets/img/gonzalo-profile.jpg"
import MarianoImg from "../assets/img/kity.jpeg"
import LeanImg from "../assets/img/carlina.png"

const Integrantes = () => {
    return (
        <section className="container section flex">
            <h2>Integrantes grupo 14</h2>
            <p>Conocé al equipo del grupo 14. Cada tarjeta redirige a su página con más detalles.</p>
            <div className="cardSection">
                <p>Elegí un perfil para ver su tarjeta.</p>
                <div className="flexContainer">
                    <Card img={ErikaImg} nombre={"Erika"} frase={"Me gusta programar, aprender en equipo y disfrutar de mis cuatro perros."}/>
                    <Card img={GonzaImg} nombre={"Gonza"} frase={"Curioso por la tecnología, creativo y con ganas de seguir evolucionando como profesional."}/>
                    <Card img={MarianoImg} nombre={"Mariano"} frase={"Apasionado por la tecnología y la innovación, con interés en proyectos de impacto real"}/>
                    <Card img={LeanImg} nombre={"Lean"} frase={"Desarrollador en crecimiento, siempre aprendiendo y compartiendo experiencias."}/>
                </div>
            </div>
        </section>
    );
}

export default Integrantes;