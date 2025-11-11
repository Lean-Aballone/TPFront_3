import Footer from "../components/Footer";
import ClimaPreview from "../components/ClimaPreview";
import NoticiasPreview from "../components/NoticiasPreview";
import Welcome from "../portada/Welcome";
import Integrantes from "../portada/Integrantes";
import "../portada/portada.css";

const Home = () => {
  return (
    <div className="flex home-wrapper">
      <Welcome
        titulo={"Desarrollo de sistemas web (front End)"}
        subtitulo={"Instituto de Formación Técnica Superior N° 29"}
        grupo={"Grupo 14"}
        bienvenida={
          "Bienvenidos a nuestra tercera y última entrega para Desarrollo Web. En esta ocasión, presentamos el cierre del trabajo práctico, incorporando las mejoras finales sobre la plataforma que migramos a React + Vite. Nos hemos enfocado en refinar la funcionalidad y la usabilidad. Los invitamos a ver cómo hemos implementado estas mejoras finales."
        }
      />
      <Integrantes />
      <section className="home-updates">
        <div className="home-updates__header">
          <h2>Panel en vivo</h2>
          <p>Un resumen rápido del clima actual y titulares en español.</p>
        </div>
        <div className="home-updates__grid">
          <ClimaPreview />
          <NoticiasPreview />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
