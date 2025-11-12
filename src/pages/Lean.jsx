import Footer from "../components/Footer";
import Img from "../components/Img";
import Info from "../lean/Info"
import About from "../lean/About";
import Card from "../lean/Card";
import habilidadesData from "../lean/habilidades.json"
import Musica from "../lean/Musica";
import Peliculas from "../lean/Peliculas";
import Profile from "../assets/img/carlina.png";
import "../lean/lean.css"
import lp from "../lean/resources/songs/linkinpark.webm";
import ghost from "../lean/resources/songs/ghost.webm";
import coldplay from "../lean/resources/songs/coldplay.webm";


const Lean = () => {
    return (
        <main className="bg-img bg-img-lean">
            <div className="blur">
                <div className="lean-container">
                    <section className="flex" style={{gap:"1rem"}}>
                        <Img src={Profile} alt={"Lean"}/>
                        <Info
                            nombre={"Leandro Ezequiel Aballone"}
                            ubicacion={"Ciudad Autónoma de Buenos Aires (CABA)"}
                            formacion={"Tecnicatura en Desarrollo de Software (2° año)"}
                            edad={26}
                            mascota={"Carlina"}
                        />
                    </section>
                    <section>
                        <About className="sectionAbout" title={"Habilidades:"}>
                            {habilidadesData.map(habilidad => (
                                <Card className="dark-bg"
                                    key={habilidad.id} 
                                    title={habilidad.titulo} 
                                    info={habilidad.info}
                                    nivel={habilidad.nivel}
                                />
                            ))}
                        </About>    
                        <About className="sectionAbout musicaContainer" title={"Música favorita:"} msg={" Podés escuchar haciendo click sobre el nombre de la banda "}>
                            <Musica className="dark-bg" id="linkin-park" name="Linkin Park" src={lp} />
                            <Musica className="dark-bg" id="ghost-bc" name="Ghost B.C." src={ghost} />
                            <Musica className="dark-bg" id="coldplay" name="Coldplay" src={coldplay} />
                        </About> 
                        <About className="sectionAbout" title={"Películas favoritas:"}>
                            <div className="peliculasContainer">
                                <Peliculas 
                                    name={"Matrix"}
                                    bg={'url("//upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Digital_rain_animation_medium_letters_shine.gif/250px-Digital_rain_animation_medium_letters_shine.gif")'}
                                    img={"https://pics.filmaffinity.com/the_matrix-155050517-mmed.jpg"}
                                    link1={"https://www.filmaffinity.com/es/film932476.html"}
                                    link2={"https://es.wikipedia.org/wiki/Matrix"}
                                    info={"La película plantea que en el futuro, tras una dura guerra, casi todos los seres humanos han sido esclavizados por las máquinas y las inteligencias artificiales creadas. Estas los tienen en suspensión y con sus mentes conectadas a una realidad virtual llamada \"Matrix\" que representa el final del siglo XX. Los seres humanos son usados por las máquinas para obtener energía y los pocos que no están suspendidos, o que han sido liberados, viven en la ciudad Zion y tienen naves que se mueven por el subsuelo, entrando de forma clandestina a la Matrix para liberar otros conectados. "}
                                />
                                <Peliculas
                                    name={"Rocky"}
                                    bg={'url("https://upload.wikimedia.org/wikipedia/en/5/53/Rocky_balboa.jpeg")'}
                                    img={"https://pics.filmaffinity.com/rocky-253483905-mmed.jpg"}
                                    link1={"https://www.filmaffinity.com/es/film192554.html"}
                                    link2={"https://es.wikipedia.org/wiki/Rocky_(pel%C3%ADcula)"}
                                    info={"En 1975, Rocky Balboa es un boxeador amateur de treinta años de cuarta categoría que vive en un pequeño apartamento al sureste de Filadelfia, Pensilvania . Su carrera en el ring no parece que vaya a durar mucho tiempo. Se gana la vida como cobrador recaudando deudas para un usurero llamado Tony Gazzo, pero este no cree que Rocky tenga la suficiente malicia para dar una paliza a un moroso cuando sea necesario. Rocky aún se entrena de vez en cuando para no perder la forma, y el que fuera su entrenador, un excampeón de los pesos gallos en la década de los años 1920, Mickey Goldmill, cree que Rocky podría llegar a lo más alto, pero solo si tuviera la voluntad suficiente y se dedicara en cuerpo y alma al boxeo. "}
                                />
                                <Peliculas
                                    name={"Volver al futuro"}
                                    bg={'url("https://hips.hearstapps.com/hmg-prod/images/delorean-dmc-12-replica-de-regreso-al-futuro-1648985337.jpg")'}
                                    img={"https://pics.filmaffinity.com/back_to_the_future-100822308-mmed.jpg"}
                                    link1={"https://www.filmaffinity.com/es/film309023.html"}
                                    link2={"https://es.wikipedia.org/wiki/Back_to_the_Future"}
                                    info={"El adolescente Marty McFly es amigo de Doc, un científico al que todos toman por loco. Cuando Doc crea una máquina para viajar en el tiempo, un error fortuito hace que Marty llegue a 1955, año en el que sus futuros padres aún no se habían conocido. Después de impedir su primer encuentro, deberá conseguir que se conozcan y se casen; de lo contrario, su existencia no sería posible."}
                                />
                            </div>
                        </About>     
                    </section>
                </div>
            </div>
            <Footer/>
        </main>
    );
}

export default Lean;